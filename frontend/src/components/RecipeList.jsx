import React, { useState } from 'react';
import RecipeDetails from './cards/RecipeDetails';

function RecipeList({ recipes, onEdit, onDelete, children }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleClose = () => {
    setSelectedRecipe(null);
  };

  const handleEdit = (recipe) => {
    onEdit(recipe);
  };

  const handleDelete = (recipe) => {
    handleClose(); 
    onDelete(recipe.id); 
  };

  if (selectedRecipe) {
    return (
      <RecipeDetails
        recipe={selectedRecipe}
        onClose={handleClose}
        onEdit={() => handleEdit(selectedRecipe)}
        onDelete={() => handleDelete(selectedRecipe)}
      />
    );
  }

  return (
    <div className="flex">
  <div className="w-1/4">{children}</div>
  <div className="w-3/4">
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="rounded-lg shadow-lg overflow-hidden bg-white transform hover:scale-105 transition-transform duration-200 cursor-pointer" onClick={() => handleRecipeClick(recipe)}>
            <div className="p-6">
              {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-64 object-cover mb-4" />}
              <h2 className="font-bold text-2xl mb-2 text-purple-800">{recipe.title}</h2>
              <p className="text-gray-700 text-base mb-2"><strong className="text-gray-900">Ingredients:</strong> {recipe.ingredients}</p>
              <p className="text-gray-700 text-base mb-2"><strong className="text-gray-900">Instructions:</strong> {recipe.instructions.substring(0, 20)}...</p>
              <div className="inline-block bg-blue-200 text-blue-800 py-2 px-4 rounded-full mb-2">{recipe.category}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  );
}

export default RecipeList;