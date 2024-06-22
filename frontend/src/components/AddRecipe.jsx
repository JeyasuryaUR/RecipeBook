import React from 'react';
import axios from 'axios';
import RecipeForm from './cards/RecipeForm';

function AddRecipe({ onAdd }) {
  const handleSubmit = (recipeData) => {
    axios.post('/recipes/', recipeData)
      .then(() => {
        onAdd();
      });
  };

  return (
    <RecipeForm onSubmit={handleSubmit} initialValues={{}} />
  );
}

export default AddRecipe;