# Generated by Django 4.2.13 on 2024-05-21 13:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0010_alter_user_birthday'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='birthday',
            field=models.CharField(blank=True, max_length=8, null=True),
        ),
    ]