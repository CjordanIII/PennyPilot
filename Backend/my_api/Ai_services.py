import google.generativeai as genai
from django.conf import settings

genai.configure(api_key=settings.GEMINI_API_KEY)

def process_query(query, user_data):
    model = genai.GenerativeModel('gemini-pro')
    context = f"""
    User's financial data:
    Balance: ${user_data['balance']}
    Savings: ${user_data['savings']}
    Income: ${user_data['income']}
    Expenses: ${user_data['expenses']}
    Savings Goals: {', '.join([f"{goal['name']} (Progress: {goal['progress']}%)" for goal in user_data['savings_goals']])}
    Recent Transactions: {', '.join([f"{t['description']} (${t['amount']})" for t in user_data['transactions'][:3]])}
    Respond to the following query based on this financial information:
    {query}
    """
    response = model.generate_content(context)
    return {
        'response': response.text[:100],  # Summarized response
        'full_response': response.text
    }
