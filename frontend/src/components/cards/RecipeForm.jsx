import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaRegImage, FaUtensils, FaBook, FaTag, FaUpload, FaClock, FaFire, FaUserFriends } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function FormField({ label, type = "text", value, onChange, optional = false, icon: Icon, ...props }) {
  return (
    <div className="flex flex-col mb-4 relative">
      <label className="mb-1 text-gray-700">
        {label} {optional && <span className="text-sm text-gray-500">(Optional)</span>}
      </label>
      <div className="flex items-center border-2 p-2 rounded border-gray-200 focus-within:border-gray-200 focus:ring-0 w-full">
        {Icon && <Icon className="mr-2 self-start pt-1 h-full text-gray-500" />}
        {type === "textarea" ? (
          <textarea
            className="flex-1 border-0 outline-none focus:ring-0"
            value={value}
            onChange={onChange}
            {...props}
          />
        ) : (
          <input
            type={type}
            className="flex-1 border-0 outline-none focus:ring-0"
            value={value}
            onChange={onChange}
            {...props}
          />
        )}
      </div>
    </div>
  );
}

function RecipeForm({ onSubmit, initialValues }) {
  const [formData, setFormData] = useState({
    title: initialValues.title || '',
    ingredients: initialValues.ingredients || '',
    instructions: initialValues.instructions || '',
    category: initialValues.category || '',
    imageUrl: initialValues.imageUrl || '',
    prep_time: initialValues.prep_time || '',
    calories: initialValues.calories || '',
    servings: initialValues.servings || '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (key) => (e) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await onSubmit(formData); // Assuming onSubmit returns a promise
      toast.success('Recipe submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit the recipe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pt-4">
      <FormField label="Title" value={formData.title} onChange={handleChange('title')} required icon={FaBook} />
      <FormField label="Ingredients" value={formData.ingredients} onChange={handleChange('ingredients')} required icon={FaUtensils} />
      <FormField label="Instructions" type="textarea" value={formData.instructions} onChange={handleChange('instructions')} required icon={FaRegImage} />
      <FormField label="Category" value={formData.category} onChange={handleChange('category')} required icon={FaTag} />
      <FormField label="Image URL" value={formData.imageUrl} onChange={handleChange('imageUrl')} optional icon={FaUpload} />
      <FormField label="Preparation Time" value={formData.prep_time} onChange={handleChange('prep_time')} optional icon={FaClock} />
      <FormField label="Calories" type="number" value={formData.calories} onChange={handleChange('calories')} optional icon={FaFire} />
      <FormField label="Servings" type="number" value={formData.servings} onChange={handleChange('servings')} optional icon={FaUserFriends} />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded flex justify-center items-center">
        {isLoading ? <AiOutlineLoading3Quarters className="animate-spin" /> : 'Submit'}
      </button>
    </form>
  );
}

export default RecipeForm;