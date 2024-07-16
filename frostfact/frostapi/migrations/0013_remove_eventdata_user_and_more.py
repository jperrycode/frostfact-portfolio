# Generated by Django 5.0.6 on 2024-07-12 08:30

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frostapi', '0012_remove_contactformsubmission_client_profile'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='eventdata',
            name='user',
        ),
        migrations.AddField(
            model_name='contactformsubmission',
            name='client_profile',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='contact_forms', to='frostapi.clientprofile', verbose_name='Client Profile'),
        ),
    ]