import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

function RecipeDetails({ recipe, onClose, onEdit, onDelete }) {
  return (
    <div className="p-8 relative">
      <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out">Back to Recipes</button>
      <div className="mb-4 flex space-x-2">
        <button onClick={onEdit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out flex items-center"><FaEdit className="mr-2"/>Edit</button>
        <button onClick={onDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out flex items-center"><FaTrashAlt className="mr-2"/>Delete</button>
      </div>
      {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-[50vh] object-cover mb-4" />}
      <h2 className="font-bold text-2xl mb-2 text-purple-800">{recipe.title}</h2>
      <div className="inline-block bg-blue-200 text-blue-800 py-2 px-4 rounded-full mb-2">{recipe.category}</div>
      <p className="text-gray-700 text-base mb-2"><strong className="text-gray-900">Ingredients:</strong> {recipe.ingredients}</p>
      <p className="text-gray-700 text-base mb-2"><strong className="text-gray-900">Instructions:</strong></p>
      <ol className="list-decimal list-inside">
        {recipe.instructions.split(/(?:\.(?!\s*$)|\n)+/).map((instruction, index) => (
          <li key={index}>{instruction.trim()}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetails;