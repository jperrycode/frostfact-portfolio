from rest_framework import serializers
from .models import *

class ContactFormSerializer(serializers.ModelSerializer):
    time_stamp = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S')
    class Meta:
        model = ContactFormSubmission
        fields = '__all__'


class ClientProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientProfile
        fields = '__all__'

class EventDataSerializer(serializers.ModelSerializer):
    time_stamp = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S')
    class Meta:
        model = EventData
        fields = '__all__'


