# Generated by Django 5.0.6 on 2024-07-10 21:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frostapi', '0009_delete_userprofile'),
    ]

    operations = [
        migrations.AddField(
            model_name='contactformsubmission',
            name='phone',
            field=models.CharField(blank=True, max_length=12, null=True, verbose_name='Phone Number'),
        ),
    ]
