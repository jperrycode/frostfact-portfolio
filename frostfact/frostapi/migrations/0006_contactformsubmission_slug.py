# Generated by Django 5.0.6 on 2024-07-07 00:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frostapi', '0005_alter_eventdata_event_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='contactformsubmission',
            name='slug',
            field=models.SlugField(blank=True, null=True, unique=True, verbose_name='Slug'),
        ),
    ]
