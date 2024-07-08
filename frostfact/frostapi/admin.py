from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from django.urls import reverse
from django.http import HttpResponseRedirect
from rest_framework_simplejwt.tokens import RefreshToken
from .models import UserProfile, ClientProfile, ContactFormSubmission, EventData

class UserProfileInline(admin.StackedInline):
    model = UserProfile
    can_delete = False
    fields = ('jwt_token',)  # Specify fields to display

class CustomUserAdmin(BaseUserAdmin):
    inlines = [UserProfileInline]
    actions = ['generate_jwt_token']

    def generate_jwt_token(self, request, queryset):
        if queryset.count() == 1:
            user = queryset.first()
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)

            # Save the token to the user's profile
            user_profile, created = UserProfile.objects.get_or_create(user=user)
            user_profile.jwt_token = access_token
            user_profile.save()

            self.message_user(request, f"Access Token: {access_token} (saved to user profile)")
            return HttpResponseRedirect(reverse('admin:auth_user_changelist'))

        self.message_user(request, "Please select exactly one user.", level='error')

        return None

    generate_jwt_token.short_description = "Generate JWT Token"

# Unregister the default User admin
admin.site.unregister(User)
# Register the custom User admin
admin.site.register(User, CustomUserAdmin)





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
