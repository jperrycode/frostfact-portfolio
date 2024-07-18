# yourapp/authentication.py
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.conf import settings

class APIKeyAuthentication(BaseAuthentication):
    def authenticate(self, request):
        api_key = request.query_params.get('api_key')
        if api_key == settings.API_KEY:
            return (None, None)
        raise AuthenticationFailed('Invalid API key')