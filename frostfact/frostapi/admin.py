from django.contrib import admin
from .models import ClientProfile, ContactFormSubmission, EventData

@admin.register(ClientProfile)
class ClientProfileAdmin(admin.ModelAdmin):
    list_display = ('client_last_name', 'client_first_name', 'client_business', 'client_phone', 'client_email', 'client_event_space', 'client_special_needs')
    search_fields = ["client_first_name", "client_email"]

@admin.register(ContactFormSubmission)
class ContactFormSubmissionAdmin(admin.ModelAdmin):
    list_display = ('customer_email', 'subject', 'first_name', 'last_name', 'message', 'condition')
    readonly_fields = ["time_stamp"]
    search_fields = ["time_stamp", "customer_email"]

@admin.register(EventData)
class EventDataAdmin(admin.ModelAdmin):
    list_display = ('event_name', 'event_date', 'event_host', 'event_image', 'client_profile')
    search_fields = ['event_name', 'client_profile__client_business', 'event_host']
