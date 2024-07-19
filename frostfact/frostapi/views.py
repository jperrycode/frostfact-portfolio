from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .serializers import *
from .models import *

class BaseAuthenticatedView(generics.GenericAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, slug=None, *args, **kwargs):
        if slug:
            instance = get_object_or_404(self.get_queryset(), slug=slug)
            serializer = self.get_serializer(instance)
        else:
            instances = self.get_queryset()
            serializer = self.get_serializer(instances, many=True)
        return Response(serializer.data)

    def perform_create(self, serializer):
        serializer.save()

class ContactFormApiView(BaseAuthenticatedView):
    queryset = ContactFormSubmission.objects.all()
    serializer_class = ContactFormSerializer

class EventApiView(BaseAuthenticatedView):
    queryset = EventData.objects.all()
    serializer_class = EventDataSerializer

class ClientApiView(BaseAuthenticatedView):
    queryset = ClientProfile.objects.all()
    serializer_class = ClientProfileSerializer
    ordering_fields = ('start_datetime',)