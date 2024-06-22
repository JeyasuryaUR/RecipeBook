from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from .models import Recipe
from .serializers import RecipeSerializer
from .filters import RecipeFilter

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = RecipeFilter