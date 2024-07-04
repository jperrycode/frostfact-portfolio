from django.db import models
from django.contrib.auth.models import User

class ClientProfile(models.Model):
    client_f_name = models.CharField(max_length=255, blank=True, null=True)
    client_l_name = models.CharField(max_length=255, blank=True, null=True)
    client_business = models.CharField(max_length=255)
    client_phone = models.CharField(max_length=15, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    client_email = models.EmailField(unique=True)
    client_event_space = models.CharField(max_length=255)
    client_special_needs = models.TextField(max_length=255)

    def __str__(self):
        return self.client_name

class ContactFormSubmission(models.Model):
    client_profile = models.ForeignKey(ClientProfile, on_delete=models.CASCADE, related_name='contact_submissions')
    customer_email = models.EmailField()
    subject = models.CharField(max_length=255,blank=True, null=True)
    f_name = models.CharField(max_length=255, blank=True, null=True)
    l_name = models.CharField(max_length=255, blank=True, null=True)
    message = models.TextField()
    time_stamp = models.DateTimeField(auto_now_add=True)
    condition = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"Submission by {self.customer_email} on {self.submission_date}"

class EventData(models.Model):
    event_name = models.CharField(max_length=255)
    event_date = models.DateTimeField(auto_now_add=False)
    event_host = models.CharField(max_length=255,blank=True, null=True)
    client_profile = models.ForeignKey(ClientProfile, on_delete=models.CASCADE, related_name='events')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='events')
    event_image = models.ImageField(upload_to='images', blank=True, null=False, verbose_name='Image upload')

    def __str__(self):
        return self.event_name
