# Generated by Django 5.2.1 on 2025-06-11 07:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_project_featured_image_alter_review_value'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='value',
            field=models.CharField(choices=[('down', 'Down Vote'), ('up', 'Up Vote')], max_length=200),
        ),
    ]
