import React, { useState } from 'react';

function RecipeList({ recipes, onEdit, onDelete }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleClose = () => {
    setSelectedRecipe(null);
  };

  const handleDelete = (id) => {
    onDelete(id);
    setSelectedRecipe(null);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="rounded-lg shadow-lg overflow-hidden bg-white transform hover:scale-105 transition-transform duration-200 cursor-pointer" onClick={() => handleRecipeClick(recipe)}>
            <div className="p-6">
              {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-64 object-cover mb-4" /> }
              <h2 className="font-bold text-2xl mb-2 text-purple-800">{recipe.title}</h2>
              <p className="text-gray-700 text-base mb-2"><strong className="text-gray-900">Ingredients:</strong> {recipe.ingredients}</p>
              <p className="text-gray-700 text-base mb-2"><strong className="text-gray-900">Instructions:</strong> {recipe.instructions.substring(0, 20)}...</p>
              <div className="inline-block bg-blue-200 text-blue-800 py-2 px-4 rounded-full mb-2">{recipe.category}</div>
            </div>
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <div className="absolute top-0 left-0 w-full h-[90vh] flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg p-8 max-w-2xl mx-auto">
            <button onClick={handleClose} className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">X</button>
            {selectedRecipe.imageUrl && <img src={selectedRecipe.imageUrl} alt={selectedRecipe.title} className="w-full h-64 object-cover mb-4" /> }
            <h2 className="font-bold text-2xl mb-2 text-purple-800">{selectedRecipe.title}</h2>
            <div className="inline-block bg-blue-200 text-blue-800 py-2 px-4 rounded-full mb-2">{selectedRecipe.category}</div>
            <p className="text-gray-700 text-base mb-2"><strong className="text-gray-900">Ingredients:</strong> {selectedRecipe.ingredients}</p>
            <p className="text-gray-700 text-base mb-2"><strong className="text-gray-900">Instructions:</strong></p>
            <ol className="list-decimal list-inside">
              {selectedRecipe.instructions.split('\n').map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
            <div className="flex justify-between mt-4">
              <button onClick={() => onEdit(selectedRecipe)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out">Edit</button>
              <button onClick={() => handleDelete(selectedRecipe.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeList;