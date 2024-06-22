import django_filters
from .models import Recipe

class RecipeFilter(django_filters.FilterSet):
    calories = django_filters.RangeFilter()
    servings = django_filters.RangeFilter()
    prep_time = django_filters.NumberFilter(lookup_expr='lte')
    category = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Recipe
        fields = ['calories', 'servings', 'prep_time', 'category']