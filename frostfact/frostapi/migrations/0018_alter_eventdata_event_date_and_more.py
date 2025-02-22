# Generated by Django 5.0.7 on 2024-07-27 13:23

import datetime
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frostapi', '0017_remove_faqdata_faq_answer_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eventdata',
            name='event_date',
            field=models.DateTimeField(default=datetime.datetime(2024, 7, 27, 7, 23, 0, 522831), verbose_name='Event Date'),
        ),
        migrations.AlterField(
            model_name='eventdata',
            name='event_time',
            field=models.TimeField(default=datetime.datetime(2024, 7, 27, 7, 23, 0, 522831), verbose_name='Event Time'),
        ),
        migrations.AlterField(
            model_name='gallerydata',
            name='gallery_media_video',
            field=models.URLField(blank=True, null=True, validators=[django.core.validators.URLValidator()], verbose_name='Video Link'),
        ),
    ]
