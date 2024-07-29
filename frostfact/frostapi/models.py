
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils.text import slugify
import uuid
from rest_framework.authtoken.models import Token
from datetime import datetime
from django.core.validators import URLValidator
from django.core.exceptions import ValidationError


def generate_unique_slug(model_class, field_value):
    """
    Generates a unique slug for a given model and field value.
    """
    base_slug = slugify(field_value)
    unique_slug = base_slug
    num = 1
    while model_class.objects.filter(slug=unique_slug).exists():
        unique_slug = f"{base_slug}-{num}"
        num += 1
    return unique_slug



class ClientProfile(models.Model):
    client_first_name = models.CharField(max_length=255, blank=True, null=True, verbose_name="Client's First Name")
    client_last_name = models.CharField(max_length=255, blank=True, null=True, verbose_name="Client's Last Name")
    client_business = models.CharField(max_length=255, verbose_name="Client's Business")
    client_phone = models.CharField(max_length=15, blank=True, null=True, verbose_name="Client's Phone")
    address = models.CharField(max_length=255, blank=True, null=True, verbose_name="Address")
    client_email = models.EmailField(unique=True, verbose_name="Client's Email")
    client_event_space = models.CharField(max_length=255, verbose_name="Client's Event Space")
    client_special_needs = models.TextField(blank=True, null=True, verbose_name="Client's Special Needs")
    slug = models.SlugField(unique=True, blank=True, null=True, verbose_name="Client Slug", editable=False)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = generate_unique_slug(ClientProfile, f'{self.client_first_name}-{self.client_last_name}')
        super(ClientProfile, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.client_first_name} {self.client_last_name} - {self.client_business}"

class ContactFormSubmission(models.Model):
    customer_email = models.EmailField(verbose_name="Customer's Email")
    subject = models.CharField(max_length=255, blank=True, null=True, verbose_name="Subject")
    client_profile = models.ForeignKey(ClientProfile, on_delete=models.CASCADE, related_name='contact_forms', verbose_name="Client Profile", null=True)
    phone = models.CharField(max_length=12, blank=True, null=True, verbose_name="Phone Number")
    first_name = models.CharField(max_length=255, blank=True, null=True, verbose_name="First Name")
    last_name = models.CharField(max_length=255, blank=True, null=True, verbose_name="Last Name")
    message = models.TextField(verbose_name="Message")
    time_stamp = models.DateTimeField(auto_now_add=True, verbose_name="Timestamp", blank=True, null=True, editable=False)
    condition = models.CharField(max_length=255, blank=True, null=True, verbose_name="Condition")
    slug = models.SlugField(unique=True, blank=True, null=True, verbose_name="Contact Slug", editable=False)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = generate_unique_slug(ContactFormSubmission, f'{self.last_name}-{self.first_name}')
        super(ContactFormSubmission, self).save(*args, **kwargs)

    def __str__(self):
        return f"Submission by {self.customer_email} on {self.time_stamp}"

    def run_after_save(self):
        if not ClientProfile.objects.filter(client_email=self.customer_email).exists():
            ClientProfile.objects.create(
                client_first_name=self.first_name,
                client_last_name=self.last_name,
                client_email=self.customer_email,
                client_phone=self.phone,
            )

@receiver(post_save, sender=ContactFormSubmission)
def execute_after_save(sender, instance, created, **kwargs):
    if created:
        instance.run_after_save()

class EventData(models.Model):
    event_name = models.CharField(max_length=255, blank=True, null=True, verbose_name="Event Name")
    event_venue = models.CharField(max_length=30, blank=True, null=True, verbose_name="Event Venue")
    event_date = models.DateTimeField(default=datetime.now(), verbose_name="Event Date")
    event_time = models.TimeField(default=datetime.now(), verbose_name="Event Time")
    event_host = models.CharField(max_length=255, blank=True, null=True, verbose_name="Event Host")
    client_profile = models.ForeignKey(ClientProfile, on_delete=models.CASCADE, related_name='events', verbose_name="Client Profile")
    event_image = models.ImageField(upload_to='frost', blank=True, verbose_name='Image Upload')
    event_description = models.TextField(blank=True, null=True, verbose_name="Event Description")
    slug = models.SlugField(unique=True, blank=True, null=True, verbose_name="Event Slug", editable=False)
    time_stamp = models.DateTimeField(auto_now_add=True, verbose_name="Timestamp", blank=True, null=True, editable=False)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = generate_unique_slug(EventData, self.event_name)
        super(EventData, self).save(*args, **kwargs)

    def __str__(self):
        return self.event_name


class FAQData(models.Model):
    faq_title = models.CharField(max_length=100, blank=False, null=True, verbose_name='FAQ Title')
    faq_descrip = models.TextField(blank=False, null=True, verbose_name='FAQ Description')

    class Meta:
        verbose_name_plural = 'FAQ Data'


class PolicyData(models.Model):
    Policy_title = models.CharField(max_length=100, blank=False, null=True, verbose_name='Policy Title')
    Policy_descrip = models.TextField(blank=False, null=True, verbose_name='Policy Description')

    class Meta:
        verbose_name_plural = 'Policy Data'

class GalleryData(models.Model):

    class MediaChoices(models.TextChoices):
        IMAGE = 'Image', 'Image'
        VIDEO = 'Video', 'Video'

    gallery_media_title = models.CharField(max_length=100, blank=False, null=True, verbose_name='Image/Video Title')
    gallery_media_description = models.TextField(blank=False, null=True, verbose_name='Image/Video Description')
    gallery_media_image = models.ImageField(upload_to='gallery', blank=True, null=True, verbose_name='Image Upload')
    gallery_media_video = models.URLField(validators=[URLValidator()], blank=True, null=True, verbose_name='Video Link')
    gallery_media_choices = models.TextField(max_length=10, choices=MediaChoices, default=MediaChoices.IMAGE)
    slug = models.SlugField(unique=True, blank=True, null=True, verbose_name="gallery Slug", editable=False)
    class Meta:
        verbose_name_plural = 'Gallery Data'

    def clean(self):
        if self.gallery_media_choices == self.MediaChoices.IMAGE and not self.gallery_media_image:
            raise ValidationError("Image is required when 'Image' is selected.")
        if self.gallery_media_choices == self.MediaChoices.VIDEO and not self.gallery_media_video:
            raise ValidationError("Video URL is required when 'Video' is selected.")

    def save(self, *args, **kwargs):
        self.full_clean()
        if not self.slug:
            self.slug = generate_unique_slug(GalleryData, self.gallery_media_title)
        super(GalleryData, self).save(*args, **kwargs)



