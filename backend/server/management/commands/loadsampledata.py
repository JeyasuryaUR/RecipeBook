from django.core.management.base import BaseCommand
from django.conf import settings
import os
import json
from server.models import Recipe

class Command(BaseCommand):
    help = 'Load a list of recipes from a JSON file into the database'

    def handle(self, *args, **kwargs):
        file_path = os.path.join(settings.BASE_DIR, 'sampledata.json')
        with open(file_path, 'r') as file:
            recipes = json.load(file)
            for recipe_data in recipes:
                Recipe.objects.create(**recipe_data)
        self.stdout.write(self.style.SUCCESS('Successfully loaded sample data into the database'))