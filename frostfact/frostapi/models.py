from django.db import models
from django.contrib.auth.models import User

class ClientProfile(models.Model):
    client_first_name = models.CharField(max_length=255, blank=True, null=True)
    client_last_name = models.CharField(max_length=255, blank=True, null=True)
    client_business = models.CharField(max_length=255)
    client_phone = models.CharField(max_length=15, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    client_email = models.EmailField(unique=True)
    client_event_space = models.CharField(max_length=255)
    client_special_needs = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.client_first_name} {self.client_last_name} - {self.client_business}"

class ContactFormSubmission(models.Model):
    client_profile = models.ForeignKey(ClientProfile, on_delete=models.CASCADE, related_name='contact_submissions')
    customer_email = models.EmailField()
    subject = models.CharField(max_length=255, blank=True, null=True)
    first_name = models.CharField(max_length=255, blank=True, null=True)
    last_name = models.CharField(max_length=255, blank=True, null=True)
    message = models.TextField()
    time_stamp = models.DateTimeField(auto_now_add=True)
    condition = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"Submission by {self.customer_email} on {self.time_stamp}"

class EventData(models.Model):
    event_name = models.CharField(max_length=255)
    event_date = models.DateTimeField()
    event_host = models.CharField(max_length=255, blank=True, null=True)
    client_profile = models.ForeignKey(ClientProfile, on_delete=models.CASCADE, related_name='events')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='events')
    event_image = models.ImageField(upload_to='images', blank=True, verbose_name='Image upload')

    def __str__(self):
        return self.event_name
