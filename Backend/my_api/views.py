from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
import json
from .models import SavingsGoal, Transaction, Budget, UserFinancials
from .ai_service import process_query
from django.db.models import Sum
from datetime import datetime, timedelta

@csrf_exempt
def register(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        if User.objects.filter(username=username).exists():
            return JsonResponse({'error': 'Username already exists'}, status=400)
        user = User.objects.create_user(username=username, password=password)
        UserFinancials.objects.create(user=user)
        return JsonResponse({'message': 'User registered successfully'})
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

@csrf_exempt
def user_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful'})
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=401)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

@csrf_exempt
def user_logout(request):
    if request.method == 'POST':
        logout(request)
        return JsonResponse({'message': 'Logout successful'})
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

@csrf_exempt
def search(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        query = data.get('query', '')
        user_id = data.get('user_id')
        try:
            user = User.objects.get(id=user_id)
            financials = UserFinancials.objects.get(user=user)
            user_data = {
                'balance': financials.balance,
                'savings': financials.savings,
                'income': financials.income,
                'expenses': financials.expenses,
                'savings_goals': list(SavingsGoal.objects.filter(user=user).values()),
                'transactions': list(Transaction.objects.filter(user=user).order_by('-date')[:10].values()),
                'budget': Budget.objects.filter(user=user).first()
            }
            result = process_query(query, user_data)
            return JsonResponse({
                'summarized_response': result['response'],
                'full_response': result['full_response']
            })
        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

@csrf_exempt
def add_transaction(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user_id = data.get('user_id')
        try:
            user = User.objects.get(id=user_id)
            transaction = Transaction.objects.create(
                user=user,
                ref_id=data['ref_id'],
                date=data['date'],
                description=data['description'],
                category=data['category'],
                amount=data['amount'],
                status=data['status']
            )
            return JsonResponse({'message': 'Transaction added successfully', 'id': transaction.id})
        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

@csrf_exempt
def update_savings_goal(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        goal_id = data.get('goal_id')
        try:
            goal = SavingsGoal.objects.get(id=goal_id)
            goal.current = data['current']
            goal.progress = int((goal.current / goal.target) * 100)
            goal.save()
            return JsonResponse({'message': 'Savings goal updated successfully'})
        except SavingsGoal.DoesNotExist:
            return JsonResponse({'error': 'Savings goal not found'}, status=404)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

@csrf_exempt
def update_budget(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user_id = data.get('user_id')
        try:
            user = User.objects.get(id=user_id)
            budget, created = Budget.objects.get_or_create(user=user)
            budget.name = data['name']
            budget.details = data['details']
            budget.spending_limit = data['spending_limit']
            budget.save()
            return JsonResponse({'message': 'Budget updated successfully'})
        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

@csrf_exempt
def get_line_chart_data(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user_id = data.get('user_id')
        try:
            user = User.objects.get(id=user_id)
            end_date = datetime.now()
            start_date = end_date - timedelta(days=180)  # Last 6 months
            transactions = Transaction.objects.filter(
                user=user,
                date__range=[start_date, end_date]
            ).order_by('date')
            monthly_data = {}
            for transaction in transactions:
                month = transaction.date.strftime('%B')
                if month not in monthly_data:
                    monthly_data[month] = {'actual': 0, 'planned': 0}
                monthly_data[month]['actual'] += transaction.amount
            for month in monthly_data:
                monthly_data[month]['planned'] = monthly_data[month]['actual'] * 1.1
            chart_data = {
                "data": {
                    "name": "Track your spending",
                    "series": [
                        {
                            "name": "Planned",
                            "data": [monthly_data[month]['planned'] for month in monthly_data],
                            "type": "line",
                            "smooth": True,
                        },
                        {
                            "name": "Actual",
                            "data": [monthly_data[month]['actual'] for month in monthly_data],
                            "type": "line",
                            "smooth": True,
                        }
                    ],
                    "xAxis": {
                        "type": "category",
                        "data": list(monthly_data.keys()),
                    },
                    "yAxis": {
                        "type": "value",
                    },
                }
            }
            return JsonResponse(chart_data)
        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

@csrf_exempt
def get_gauge_chart_data(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user_id = data.get('user_id')
        goal_name = data.get('goal_name', 'New computer')
        try:
            user = User.objects.get(id=user_id)
            goal = SavingsGoal.objects.get(user=user, name=goal_name)
            gauge_data = {
                "data": {
                    "title": "Monitor your budget",
                    "name": goal.name,
                    "value": goal.progress
                }
            }
            return JsonResponse(gauge_data)
        except (User.DoesNotExist, SavingsGoal.DoesNotExist):
            return JsonResponse({'error': 'User or goal not found'}, status=404)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
