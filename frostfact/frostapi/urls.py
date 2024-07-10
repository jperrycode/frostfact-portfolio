
from django.urls import path, include

from .views import *
from . import views


urlpatterns = [
    path('contact-fsf/', ContactFormApiView.as_view(), name='cont_form_list'),
    path('contact-fsf/<slug:slug>/', ContactFormApiView.as_view(), name='cont_form_data'),
    path('event-fst/<slug:slug>/', EventApiView.as_view(), name='event_data_detail'),
    path('event-fst/', EventApiView.as_view(), name='event_data_list'),
    path('client-data/', ClientApiView.as_view(), name='client_data_list'),
    path('client-data/<slug:slug>/', ClientApiView.as_view(), name='client_data_detail'),

]