import React, { useState } from "react";
import { FaBars, FaSlidersH, FaTimes } from "react-icons/fa"; 
import MultiRangeSlider from "multi-range-slider-react"; 

const FilterPane = ({ handleFilterChange }) => {
  const initialFilters = {
    calories: [0, 5000], 
    servings: [1, 10], 
    prep_time: "",
    category: "",
    keywords: "",
  };

  const [filters, setFilters] = useState(initialFilters);

  const [isPaneOpen, setIsPaneOpen] = useState(false);

  const togglePane = () => {
    setIsPaneOpen(!isPaneOpen);
  };


  const handleRangeChange = (minValue, maxValue, name) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: [minValue, maxValue],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFilters(filters);
  };

  const handleReset = () => {
    setFilters(initialFilters);
    submitFilters(initialFilters); 
  };
  

  const submitFilters = (currentFilters) => {
    if (isPaneOpen) {
      setIsPaneOpen(false);
    }
    const queryString = Object.entries(currentFilters)
      .filter(([_, value]) => value !== "" && value != [0, 0])
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return `${encodeURIComponent(key)}_min=${encodeURIComponent(
            value[0]
          )}&${encodeURIComponent(key)}_max=${encodeURIComponent(value[1])}`;
        }
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      })
      .join("&");
    handleFilterChange(queryString);
  };

  return (
    <>
      <button className="md:hidden p-4" onClick={togglePane}>
        {isPaneOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`filter-pane md:block absolute z-10 md:bg-none bg-white transform ${isPaneOpen ? "translate-x-0" : "-translate-x-full hidden"} transition-transform duration-300 ease-in-out md:translate-x-0`}>
        <form
          className={`p-4 md:p-6 mx-auto`}
          onSubmit={handleSubmit}
        >
          <div className="filter mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Search:
            </label>
            <input
              type="text"
              placeholder="Keyword"
              name="keyword" 
              value={filters.keyword} 
              onChange={handleChange} 
              className="input input-bordered border p-1 rounded w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>
          <div className="filter mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Calories:
            </label>
            <MultiRangeSlider
              min={0}
              max={5000}
              step={1}
              ruler={false}
              label={true}
              preventWheel={false}
              minValue={filters.calories[0]}
              maxValue={filters.calories[1]}            
              onInput={(e) => {
                handleRangeChange(e.minValue, e.maxValue, "calories");
              }}
              className="border-none shadow-none"
            />
          </div>
          <div className="filter mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Servings:
            </label>
            <MultiRangeSlider
              min={1}
              max={10}
              step={1}
              ruler={false}
              label={true}
              preventWheel={false}
              minValue={filters.servings[0]}
              maxValue={filters.servings[1]}
              onInput={(e) => {
                handleRangeChange(e.minValue, e.maxValue, "servings");
              }}
              className="border-none shadow-none"
            />
          </div>
          <div className="filter mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Max. Duration
            </label>
            <input
              type="number"
              placeholder="Minutes"
              name="prep_time"
              value={filters.prep_time}
              onChange={handleChange}
              className="input input-bordered border p-1 w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>
          <div className="filter mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Category:
            </label>
            <input
              type="text"
              placeholder="Category"
              name="category"
              value={filters.category}
              onChange={handleChange}
              className="input input-bordered border p-1 w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out flex items-center"
            >
              Submit
            </button>
            <button
              type="button" 
              onClick={handleReset}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out flex items-center"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      
    </>
  );
};

export default FilterPane;
