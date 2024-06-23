import django_filters
from django.db.models import Q
from .models import Recipe

class RecipeFilter(django_filters.FilterSet):
    calories = django_filters.RangeFilter()
    servings = django_filters.RangeFilter()
    prep_time = django_filters.NumberFilter(lookup_expr='lte')
    category = django_filters.CharFilter(lookup_expr='icontains')
    keyword = django_filters.CharFilter(method='keyword_search')

    class Meta:
        model = Recipe
        fields = ['calories', 'servings', 'prep_time', 'category']

    def keyword_search(self, queryset, name, value):
        return queryset.filter(
            Q(title__icontains=value) | 
            Q(ingredients__icontains=value) | 
            Q(category__icontains=value)
        )