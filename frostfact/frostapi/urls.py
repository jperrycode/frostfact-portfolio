# todo/todo_api/urls.py : API urls.py
from django.urls import path, include
from .views import *
from . import views

urlpatterns = [
    path('contact-fsf/', ContactFormApiView.as_view(), name='cont_form_data'),
    path('event-fst/', EventApiView.as_view(), name='cont_form_data'),
    path('client-data/', ClientApiView.as_view(), name='cont_form_data'),
    # path('hello-world/', HelloWorld.as_view(), name='hello_world'),
]