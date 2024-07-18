from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import *
from .models import *
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


# Create your views here.


class ContactFormApiView(generics.GenericAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = ContactFormSubmission.objects.all()
    serializer_class = ContactFormSerializer

    def get(self, request, slug=None, *args, **kwargs):
        if slug:
            # Retrieve a single client profile by slug
            contact_profile = generics.get_object_or_404(ContactFormSubmission, slug=slug)
            serializer = self.get_serializer(contact_profile)
            return Response(serializer.data)
        else:
            # Retrieve all client profiles
            contact_profiles = self.get_queryset()
            serializer = self.get_serializer(contact_profiles, many=True)
            return Response(serializer.data)

    def perform_create(self, serializer):
        # Customize saving behavior if needed
        serializer.save()

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
    ordering_fields = ('start_datetime',)

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