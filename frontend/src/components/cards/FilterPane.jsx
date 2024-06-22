import React, { useState } from "react";
import { FaSlidersH } from "react-icons/fa"; // Importing slider icon
import MultiRangeSlider from "multi-range-slider-react"; // Importing MultiRangeSlider

const FilterPane = ({ handleFilterChange }) => {
  const [filters, setFilters] = useState({
    calories: [0, 5000], // Assuming a default range for calories
    servings: [1, 10], // Assuming a default range for servings
    prep_time: "",
    category: "",
  });

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
    const queryString = Object.entries(filters)
      .filter(([_, value]) => value !== "" && value !== [0, 0])
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
    <form className="filter-pane p-4" onSubmit={handleSubmit}>
      <div className="filter mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900">Calories:</label>
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
        />
      </div>
      <div className="filter mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900">Servings:</label>
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
        />
      </div>
      <div className="filter mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          {"Prep Time (<= minutes):"}
        </label>
        <input
          type="number"
          placeholder="Minutes"
          name="prep_time"
          value={filters.prep_time}
          onChange={handleChange}
          className="input input-bordered w-full max-w-xs"
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
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out flex items-center">
        <FaSlidersH className="mr-2" /> Submit
      </button>
    </form>
  );
};

export default FilterPane;