# Generated by Django 4.2.13 on 2024-05-16 06:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exchanges', '0002_rename_bkpr_exchangerate_bkpr_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exchangerate',
            name='bkpr',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='exchangerate',
            name='cur_unit',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='exchangerate',
            name='deal_bas_r',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='exchangerate',
            name='ttb',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='exchangerate',
            name='tts',
            field=models.FloatField(blank=True, null=True),
        ),
    ]