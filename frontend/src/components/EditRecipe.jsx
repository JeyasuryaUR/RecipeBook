import React from 'react';
import axios from 'axios';
import RecipeForm from './cards/RecipeForm';

function EditRecipe({ recipe, onEdit }) {
  const handleSubmit = (recipeData) => {
    axios.put(`/recipes/${recipe.id}/`, recipeData)
      .then(() => {
        onEdit();
      });
  };

  return (
    <RecipeForm onSubmit={handleSubmit} initialValues={recipe} />
  );
}

export default EditRecipe;