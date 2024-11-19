from django.http import JsonResponse

def auth_middleware(get_response):
    def middleware(request):
        # Check for authentication token
        if not request.headers.get('Authorization'):
            return JsonResponse({"error": "Unauthorized"}, status=401)
        
        response = get_response(request)
        return response
    return middleware


