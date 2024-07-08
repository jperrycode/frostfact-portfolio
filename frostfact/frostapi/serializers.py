from rest_framework import serializers
from .models import *

class ContactFormSerializer(serializers.ModelSerializer):
    time_stamp = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S')
    class Meta:
        model = ContactFormSubmission
        fields = '__all__'

class EventDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventData
        fields = '__all__'
class ClientProfileSerializer(serializers.ModelSerializer):
    contact_submissions = ContactFormSerializer(many=True, read_only=True)
    events = EventDataSerializer(many=True, read_only=True)
    class Meta:
        model = ClientProfile
        fields = '__all__'




