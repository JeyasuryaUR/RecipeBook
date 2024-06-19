import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddRecipe from '../components/AddRecipe';
import RecipeList from '../components/RecipeList';
import EditRecipe from '../components/EditRecipe';

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    axios.get('/recipes/')
      .then(response => {
        setRecipes(response.data);
        setSelectedRecipe(null);
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
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">Recipe Book</h1>
      <AddRecipe onAdd={fetchRecipes} />
      {selectedRecipe ? (
        <EditRecipe recipe={selectedRecipe} onEdit={fetchRecipes} />
      ) : (
        <RecipeList recipes={recipes} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </div>
  );
}

export default HomePage;