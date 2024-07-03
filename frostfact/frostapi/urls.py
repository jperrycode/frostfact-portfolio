# todo/todo_api/urls.py : API urls.py
from django.urls import path, include
from .views import (
    ContactFormApiView
)
from . import views

urlpatterns = [
    path('contact-data/', ContactFormApiView.as_view(), name='cont_form_data'),
    # path('hello-world/', HelloWorld.as_view(), name='hello_world'),
]