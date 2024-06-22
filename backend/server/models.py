from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=200)
    ingredients = models.TextField()
    instructions = models.TextField()
    category = models.CharField(max_length=200)
    imageUrl = models.URLField(max_length=500, default='', blank=True, null=True)
    prep_time = models.IntegerField(blank=True, null=True) 
    calories = models.IntegerField(blank=True, null=True) 
    ratings = models.FloatField(blank=True, null=True) 
    servings = models.IntegerField(blank=True, null=True)

    # def save(self, *args, **kwargs):
    #     if isinstance(self.prep_time, int):
    #         self.prep_time = timedelta(minutes=self.prep_time)
    #     super(Recipe, self).save(*args, **kwargs)