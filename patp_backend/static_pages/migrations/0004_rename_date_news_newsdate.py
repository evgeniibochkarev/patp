# Generated by Django 3.2.5 on 2021-07-07 07:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('static_pages', '0003_news_date'),
    ]

    operations = [
        migrations.RenameField(
            model_name='news',
            old_name='date',
            new_name='newsDate',
        ),
    ]
