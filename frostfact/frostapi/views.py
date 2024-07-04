from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import *
from .models import *


# Create your views here.
class ContactFormApiView(APIView):
    pass

class EventApiView(APIView):
    pass

class ClientApiView(APIView):
    pass