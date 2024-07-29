from rest_framework import serializers
from .models import *

class ContactFormSerializer(serializers.ModelSerializer):

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

class FaqDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQData
        fields = '__all__'


class PolicyDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = PolicyData
        fields = '__all__'


class GalleryDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryData
        fields = '__all__'