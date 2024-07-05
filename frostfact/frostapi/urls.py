# todo/todo_api/urls.py : API urls.py
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import *
from . import views


urlpatterns = [
    path('contact-fsf/', ContactFormApiView.as_view(), name='cont_form_data'),
    path('event-fst/', EventApiView.as_view(), name='cont_form_data'),
    path('client-data/', ClientApiView.as_view(), name='cont_form_data'),
    ath('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]