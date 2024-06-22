import React, { useState } from 'react';

const DualRangeSlider = ({ min, max, onChange, name }) => {
  const [range, setRange] = useState({ start: min, end: max });

  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    setRange((prevRange) => ({
      ...prevRange,
      [name]: parseInt(value, 10),
    }));
    onChange({ ...range, [name]: parseInt(value, 10) }, name);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRange((prevRange) => ({
      ...prevRange,
      [name]: parseInt(value, 10),
    }));
    onChange({ ...range, [name]: parseInt(value, 10) }, name);
  };

  return (
    <div className="dual-range-slider" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <input
          type="range"
          min={min}
          max={max}
          value={range.start}
          name="start"
          onChange={handleSliderChange}
          className="range range-primary"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={range.end}
          name="end"
          onChange={handleSliderChange}
          className="range range-primary"
        />
      </div>
      <div className="flex justify-between text-xs">
        <input
          type="number"
          name="start"
          value={range.start}
          onChange={handleInputChange}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="number"
          name="end"
          value={range.end}
          onChange={handleInputChange}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default DualRangeSlider;