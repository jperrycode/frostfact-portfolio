from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import *
from .models import *
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status


# Create your views here.
class ContactFormApiView(APIView):
    pass

class EventApiView(APIView):
    pass


class ClientApiView(APIView):

    def get(self, request, slug, *args, **kwargs):
        # Retrieve the client profile by slug
        client_profile = get_object_or_404(ClientProfile, slug=slug)

        # Serialize the data
        serializer = ClientProfileSerializer(client_profile)

        # Return the serialized data
        return Response(serializer.data, status=status.HTTP_200_OK)