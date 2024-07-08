from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import *
from .models import *
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics


# Create your views here.
class ContactFormApiView(APIView):
    pass

class EventApiView(generics.GenericAPIView):
    queryset = EventData.objects.all()
    serializer_class = EventDataSerializer

    def get(self, request, slug=None, *args, **kwargs):
        if slug:
            # Retrieve a single client profile by slug
            event_profile = generics.get_object_or_404(EventData, slug=slug)
            serializer = self.get_serializer(event_profile)
            return Response(serializer.data)
        else:
            # Retrieve all client profiles
            event_profiles = self.get_queryset()
            serializer = self.get_serializer(event_profiles, many=True)
            return Response(serializer.data)


class ClientApiView(generics.GenericAPIView):
    queryset = ClientProfile.objects.all()
    serializer_class = ClientProfileSerializer

    def get(self, request, slug=None, *args, **kwargs):
        if slug:
            # Retrieve a single client profile by slug
            client_profile = generics.get_object_or_404(ClientProfile, slug=slug)
            serializer = self.get_serializer(client_profile)
            return Response(serializer.data)
        else:
            # Retrieve all client profiles
            client_profiles = self.get_queryset()
            serializer = self.get_serializer(client_profiles, many=True)
            return Response(serializer.data)