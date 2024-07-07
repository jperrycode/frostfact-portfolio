from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    jwt_token = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.user.username

@receiver(post_save, sender=User)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
    instance.userprofile.save()

class ClientProfile(models.Model):
    client_first_name = models.CharField(
        max_length=255,
        blank=True,
        null=True,
        verbose_name="Client's First Name"
    )
    client_last_name = models.CharField(
        max_length=255,
        blank=True,
        null=True,
        verbose_name="Client's Last Name"
    )
    client_business = models.CharField(
        max_length=255,
        verbose_name="Client's Business"
    )
    client_phone = models.CharField(
        max_length=15,
        blank=True,
        null=True,
        verbose_name="Client's Phone"
    )
    address = models.CharField(
        max_length=255,
        blank=True,
        null=True,
        verbose_name="Address"
    )
    client_email = models.EmailField(
        unique=True,
        verbose_name="Client's Email"
    )
    client_event_space = models.CharField(
        max_length=255,
        verbose_name="Client's Event Space"
    )
    client_special_needs = models.TextField(
        blank=True,
        null=True,
        verbose_name="Client's Special Needs"
    )
    slug = models.SlugField(unique=True, blank=True, null=True, verbose_name="Slug")


    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.client_business)
        super(ClientProfile, self).save(*args, **kwargs)
    def __str__(self):
        return f"{self.client_first_name} {self.client_last_name} - {self.client_business}"

class ContactFormSubmission(models.Model):
    client_profile = models.ForeignKey(
        ClientProfile,
        on_delete=models.CASCADE,
        related_name='contact_submissions',
        verbose_name="Client Profile"
    )
    customer_email = models.EmailField(
        verbose_name="Customer's Email"
    )
    subject = models.CharField(
        max_length=255,
        blank=True,
        null=True,
        verbose_name="Subject"
    )
    first_name = models.CharField(
        max_length=255,
        blank=True,
        null=True,
        verbose_name="First Name"
    )
    last_name = models.CharField(
        max_length=255,
        blank=True,
        null=True,
        verbose_name="Last Name"
    )
    message = models.TextField(
        verbose_name="Message"
    )
    time_stamp = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Timestamp"
    )
    condition = models.CharField(
        max_length=255,
        blank=True,
        null=True,
        verbose_name="Condition"
    )
    slug = models.SlugField(unique=True, blank=True, null=True, verbose_name="Slug")

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.client_business)
        super(ClientProfile, self).save(*args, **kwargs)

    def __str__(self):
        return f"Submission by {self.customer_email} on {self.time_stamp}"

class EventData(models.Model):
    event_name = models.CharField(
        max_length=255,
        verbose_name="Event Name"
    )
    event_date = models.DateTimeField(
        verbose_name="Event Date"
    )
    event_host = models.CharField(
        max_length=255,
        blank=True,
        null=True,
        verbose_name="Event Host"
    )
    client_profile = models.ForeignKey(
        ClientProfile,
        on_delete=models.CASCADE,
        related_name='events',
        verbose_name="Client Profile"
    )
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='events',
        verbose_name="User"
    )
    event_image = models.ImageField(
        upload_to='frost',
        blank=True,
        verbose_name='Image Upload'
    )

    def __str__(self):
        return self.event_name
