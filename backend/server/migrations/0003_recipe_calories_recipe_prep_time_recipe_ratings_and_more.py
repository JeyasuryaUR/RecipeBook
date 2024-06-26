# Generated by Django 5.0.6 on 2024-06-21 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0002_recipe_imageurl'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='calories',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='recipe',
            name='prep_time',
            field=models.DurationField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='recipe',
            name='ratings',
            field=models.FloatField(blank=True, default=0.0, null=True),
        ),
        migrations.AddField(
            model_name='recipe',
            name='servings',
            field=models.IntegerField(blank=True, default=1, null=True),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='imageUrl',
            field=models.URLField(blank=True, default='', max_length=500, null=True),
        ),
    ]
