# Generated by Django 5.0.6 on 2024-06-22 16:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0003_recipe_calories_recipe_prep_time_recipe_ratings_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='ratings',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='servings',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
