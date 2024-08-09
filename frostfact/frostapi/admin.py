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
    list_filter = ['client_profile']

@admin.register(ClientProfile)
class ClientProfileAdmin(admin.ModelAdmin):
    list_display = ('client_last_name', 'client_first_name', 'client_business', 'client_phone', 'client_email', 'client_event_space', 'client_special_needs')
    search_fields = ["client_first_name", "client_email"]
    readonly_fields = ('slug',)
    inlines = [ContactFormSubmissionInline, EventDataInline]


@admin.register(ContactFormSubmission)
class ContactFormSubmissionAdmin(admin.ModelAdmin):
    list_display = ('customer_email', 'subject', 'combined_name', 'time_stamp', 'client_profile')
    search_fields = ('customer_email', 'subject', 'phone', 'first_name', 'last_name')
    autocomplete_fields = ('client_profile',)  # Use autocomplete_fields for ClientProfile lookup
    readonly_fields = ('slug', 'time_stamp')
    ordering = ('-time_stamp',)
    list_filter = ('client_profile',)

    def combined_name(self, obj):
        return f"{obj.first_name} {obj.last_name}"

@admin.register(EventData)
class EventDataAdmin(admin.ModelAdmin):
    list_display = ('event_name', 'event_genre', 'event_date', 'event_type', 'event_host', 'event_image', 'client_profile', 'artist_name', 'artist_instagram', 'artist_spotify', 'artist_youtube', 'artist_facebook')
    search_fields = ['event_name', 'client_profile__client_business', 'event_host', 'event_genre']
    readonly_fields = ('slug',)

    fields = (
        'event_name',
        'event_date',
        'event_time',
        'event_type',
        'event_genre',
        'event_host',
        'event_image',
        'artist_name',
        'artist_instagram',
        'artist_spotify',
        'artist_youtube',
        'artist_facebook'
        'client_profile'
    )

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
    list_display = ('gallery_media_title', 'gallery_media_choices', 'gallery_media_description', 'gallery_media_image')
    list_filter = ('gallery_media_choices',)
    search_fields = ('gallery_media_title', 'gallery_media_description')


    fields = (
        'gallery_media_title',
        'gallery_media_choices',
        'gallery_media_description',
        'gallery_media_image',
        'gallery_media_video'
    )



@admin.register(TextSliderTop)
class SliderTopAdmin(admin.ModelAdmin):
    list_display = ('top_slider_title','top_slider_text')


@admin.register(TextSliderBottom)
class SliderBottomAdmin(admin.ModelAdmin):
    list_display = ('bottom_slider_title','bottom_slider_text')
