# admin.py

from django.contrib import admin
from .models import *

class ContactFormSubmissionInline(admin.StackedInline):
    model = ContactFormSubmission
    extra = 0  # Do not show extra empty forms
    fields = ('customer_email', 'subject', 'message', 'time_stamp')  # Fields to display
    readonly_fields = ('time_stamp',)

class EventDataInline(admin.StackedInline):
    model = EventData
    extra = 0  # Do not show extra empty forms
    fields = ('event_name', 'event_date', 'event_host', 'event_image')  # Fields to display
    readonly_fields = ('event_date',)

@admin.register(ClientProfile)
class ClientProfileAdmin(admin.ModelAdmin):
    list_display = ('client_last_name', 'client_first_name', 'client_business', 'client_phone', 'client_email', 'client_event_space', 'client_special_needs')
    search_fields = ["client_first_name", "client_email"]
    readonly_fields = ('slug',)
    inlines = [ContactFormSubmissionInline, EventDataInline]

@admin.register(ContactFormSubmission)
class ContactFormSubmissionAdmin(admin.ModelAdmin):
    list_display = ('customer_email', 'subject', 'first_name', 'last_name', 'message', 'condition')
    readonly_fields = ["time_stamp", 'slug']
    search_fields = ["time_stamp", "customer_email"]

@admin.register(EventData)
class EventDataAdmin(admin.ModelAdmin):
    list_display = ('event_name', 'event_date', 'event_host', 'event_image', 'client_profile')
    search_fields = ['event_name', 'client_profile__client_business', 'event_host']
    readonly_fields = ('slug',)



@admin.register(FAQData)
class FAQDataAdmin(admin.ModelAdmin):
    list_display = ('faq_title', 'faq_descrip')
    search_fields = ('faq_title', 'faq_descrip')

@admin.register(PolicyData)
class PolicyDataAdmin(admin.ModelAdmin):
    list_display = ('Policy_title', 'Policy_descrip')
    search_fields = ('Policy_title', 'Policy_descrip')

@admin.register(GalleryData)
class GalleryDataAdmin(admin.ModelAdmin):
    list_display = ('gallery_media_title', 'gallery_media_choices', 'gallery_media_description')
    list_filter = ('gallery_media_choices',)
    search_fields = ('gallery_media_title', 'gallery_media_description')

    fields = (
        'gallery_media_title',
        'gallery_media_choices',
        'gallery_media_description',
        'gallery_media_image',
        'gallery_media_video'
    )


