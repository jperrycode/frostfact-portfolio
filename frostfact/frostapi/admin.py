from django.contrib import admin
from .models import *



# # Register your models here.
# admin.site.register(frostfact)


@admin.register(ClientProfile)
class ClientProfileAdmin(admin.ModelAdmin):
    list_display = ('client_l_name', 'client_f_name', 'client_business', 'client_phone', 'client_email', 'client_event_space', 'client_special_needs')
    search_fields = ["client_f_name", "client_email"]

@admin.register(ContactFormSubmission)
class ContactFormSubmissionAdmin(admin.ModelAdmin):
    list_display = ('customer_email', 'subject', 'f_name', 'l_name', 'message', 'condition')
    readonly_fields = ["time_stamp"]
    search_fields = ["time_stamp", "customer_email"]


@admin.register(EventData)
class EventDataAdmin(admin.ModelAdmin):
    list_display = ('__all__')

