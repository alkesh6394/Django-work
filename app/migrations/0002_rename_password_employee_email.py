# Generated by Django 4.2.6 on 2023-10-17 13:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='employee',
            old_name='password',
            new_name='email',
        ),
    ]
