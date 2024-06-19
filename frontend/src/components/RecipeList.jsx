import React from 'react';

function RecipeList({ recipes, onEdit, onDelete }) {
  return (
    <div className="space-y-4 flex">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="p-4 border border-gray-300 rounded">
          <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
          <p className="mb-1"><strong>Ingredients:</strong> {recipe.ingredients}</p>
          <p className="mb-1"><strong>Instructions:</strong> {recipe.instructions}</p>
          <p className="mb-2"><strong>Category:</strong> {recipe.category}</p>
          <button onClick={() => onEdit(recipe)} className="mr-2 py-1 px-2 bg-blue-500 text-white rounded">Edit</button>
          <button onClick={() => onDelete(recipe.id)} className="py-1 px-2 bg-red-500 text-white rounded">Delete</button>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;