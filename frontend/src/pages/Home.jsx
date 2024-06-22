import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // Step 1: Import toast
import 'react-toastify/dist/ReactToastify.css';
import AddRecipe from '../components/AddRecipe';
import RecipeList from '../components/RecipeList';
import EditRecipe from '../components/EditRecipe';
import FilterPane from '../components/cards/FilterPane';

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showAddRecipe, setShowAddRecipe] = useState(false);
  const [filters, setFilters] = useState({
    calories: { min: '', max: '' },
    servings: { min: '', max: '' },
    prep_time: '',
    category: ''
  });

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = (queryString = '') => {
    if (queryString) {
      queryString = `?${queryString}`;
    }
    axios.get(`/recipes/${queryString}`)
      .then(response => {
        setRecipes(response.data);
        setSelectedRecipe(null);
        setShowAddRecipe(false);
        toast.success('Recipes fetched successfully!');
      })
      .catch(error => {
        toast.error('Failed to fetch recipes.');
      });
  };

  const handleEdit = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleFilterChange = (queryString) => {
    fetchRecipes(queryString);
  };

  const handleDelete = (id) => {
    axios.delete(`/recipes/${id}/`)
      .then(response => {
        fetchRecipes();
        toast.success('Recipe deleted successfully!'); // Step 2: Success toast
      })
      .catch(error => {
        toast.error('Failed to delete recipe.'); // Handling errors
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
          <RecipeList recipes={recipes} onEdit={handleEdit} onDelete={handleDelete}>
            <FilterPane handleFilterChange={handleFilterChange} />
          </RecipeList>
        )}
      </div>
    </>
  );
}

export default HomePage;