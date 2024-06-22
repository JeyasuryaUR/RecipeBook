import React, { useState } from 'react';
import { FaRegImage, FaUtensils, FaBook, FaTag, FaUpload, FaClock, FaFire, FaStar, FaUserFriends } from 'react-icons/fa'; // Import FontAwesome icons
import { AiOutlineLoading3Quarters } from 'react-icons/ai'; // Import a loading icon

function RecipeForm({ onSubmit, initialValues }) {
  const [title, setTitle] = useState(initialValues.title || '');
  const [ingredients, setIngredients] = useState(initialValues.ingredients || '');
  const [instructions, setInstructions] = useState(initialValues.instructions || '');
  const [category, setCategory] = useState(initialValues.category || '');
  const [imageUrl, setImageUrl] = useState(initialValues.imageUrl || '');
  const [prepTime, setPrepTime] = useState(initialValues.prepTime || '');
  const [calories, setCalories] = useState(initialValues.calories || '');
  const [servings, setServings] = useState(initialValues.servings || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Create a new object with the required fields
    const formData = {
      title,
      ingredients,
      instructions,
      category,
    };

    // Conditionally add optional fields if they have a value
    if (imageUrl) formData.imageUrl = imageUrl;
    if (prepTime) formData.prepTime = prepTime;
    if (calories) formData.calories = calories;
    if (servings) formData.servings = servings;

    await onSubmit(formData);
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pt-4">
      <div className="flex items-center border border-gray-300 rounded p-2">
        <FaBook className="mr-2" />
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required 
          className="w-full" />
      </div>
      <div className="flex items-center border border-gray-300 rounded p-2">
        <FaUtensils className="mr-2" />
        <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients" required 
          className="w-full" />
      </div>
      <div className="flex items-center border border-gray-300 rounded p-2">
        <FaUpload className="mr-2" />
        <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Instructions" required 
          className="w-full" />
      </div>
      <div className="flex items-center border border-gray-300 rounded p-2">
        <FaTag className="mr-2" />
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required 
          className="w-full" />
      </div>
      <div className="flex items-center border border-gray-300 rounded p-2">
        <FaRegImage className="mr-2" />
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL"
          className="w-full" />
      </div>
      <div className="flex items-center border border-gray-300 rounded p-2">
        <FaClock className="mr-2" />
        <input type="text" value={prepTime} onChange={(e) => setPrepTime(e.target.value)} placeholder="Preparation Time" 
          className="w-full" />
      </div>
      <div className="flex items-center border border-gray-300 rounded p-2">
        <FaFire className="mr-2" />
        <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} placeholder="Calories" 
          className="w-full" />
      </div>
      <div className="flex items-center border border-gray-300 rounded p-2">
        <FaUserFriends className="mr-2" />
        <input type="number" value={servings} onChange={(e) => setServings(e.target.value)} placeholder="Servings" 
          className="w-full" />
      </div>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded flex justify-center items-center">
        {isLoading ? <AiOutlineLoading3Quarters className="animate-spin" /> : 'Submit'}
      </button>
    </form>
  );
}

export default RecipeForm;