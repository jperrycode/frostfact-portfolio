# Generated by Django 5.0.6 on 2024-07-04 19:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frostapi', '0002_rename_submission_date_contactformsubmission_time_stamp_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='clientprofile',
            name='client_name',
        ),
        migrations.AddField(
            model_name='clientprofile',
            name='client_first_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='clientprofile',
            name='client_last_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='contactformsubmission',
            name='first_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='contactformsubmission',
            name='last_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='clientprofile',
            name='client_special_needs',
            field=models.TextField(blank=True, null=True),
        ),
    ]