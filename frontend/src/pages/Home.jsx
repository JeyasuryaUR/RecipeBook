import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddRecipe from '../components/AddRecipe';
import RecipeList from '../components/RecipeList';
import EditRecipe from '../components/EditRecipe';

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showAddRecipe, setShowAddRecipe] = useState(false);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    axios.get('/recipes/')
      .then(response => {
        setRecipes(response.data);
        setSelectedRecipe(null);
        setShowAddRecipe(false);
      });
  };

  const handleEdit = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleDelete = (id) => {
    axios.delete(`/recipes/${id}/`)
      .then(response => {
        fetchRecipes();
      });
  };

  return (
    <>
      <nav className="flex items-center justify-between py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
        <h1 className="text-4xl font-bold">Recipe Book</h1>
        <button onClick={() => setShowAddRecipe(!showAddRecipe)} className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded transition duration-200">
          {showAddRecipe ? 'Close' : 'Add Recipe'}
        </button>
      </nav>
      <div className="container mx-auto">
        {showAddRecipe && <AddRecipe onAdd={fetchRecipes} />}
        {selectedRecipe ? (
          <EditRecipe recipe={selectedRecipe} onEdit={fetchRecipes} />
        ) : (
          <RecipeList recipes={recipes} onEdit={handleEdit} onDelete={handleDelete} />
        )}
      </div>
    </>
  );
}

export default HomePage;