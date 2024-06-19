import React, { useState } from 'react';
import axios from 'axios';

function AddRecipe({ onAdd }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/recipes/', { title, ingredients, instructions, category })
      .then(() => {
        onAdd();
        setTitle('');
        setIngredients('');
        setInstructions('');
        setCategory('');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required 
        className="w-full p-2 border border-gray-300 rounded" />
      <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients" required 
        className="w-full p-2 border border-gray-300 rounded" />
      <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Instructions" required 
        className="w-full p-2 border border-gray-300 rounded" />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required 
        className="w-full p-2 border border-gray-300 rounded" />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Add Recipe</button>
    </form>
  );
}

export default AddRecipe;