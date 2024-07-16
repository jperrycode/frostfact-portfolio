# Generated by Django 5.0.6 on 2024-07-10 22:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frostapi', '0010_contactformsubmission_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clientprofile',
            name='slug',
            field=models.SlugField(blank=True, editable=False, null=True, unique=True, verbose_name='Client Slug'),
        ),
        migrations.AlterField(
            model_name='contactformsubmission',
            name='slug',
            field=models.SlugField(blank=True, editable=False, null=True, unique=True, verbose_name='Contact Slug'),
        ),
        migrations.AlterField(
            model_name='eventdata',
            name='slug',
            field=models.SlugField(blank=True, editable=False, null=True, unique=True, verbose_name='Event Slug'),
        ),
    ]