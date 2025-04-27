import React from 'react';

function Cell({ value, isFixed, row, col, onChange, isInvalid }) {
  const handleChange = (e) => {
    const val = e.target.value;
    const parsed = /^[1-9]$/.test(val) ? parseInt(val, 10) : null;
    if (!isFixed && onChange) {
      onChange(row, col, parsed);
    }
  };

  // Add conditional classes for 3x3 grid borders
  const borderClasses = `
    ${row % 3 === 0 ? 'border-t-2' : ''} 
    ${col % 3 === 0 ? 'border-l-2' : ''} 
    ${row === 8 ? 'border-b-2' : ''} 
    ${col === 8 ? 'border-r-2' : ''}
  `;

  return (
    <input
      type="text"
      value={value !== null ? value : ''}
      onChange={handleChange}
      disabled={isFixed}
      maxLength={1}
      className={`w-12 h-12 text-center border text-lg font-semibold ${borderClasses} ${
        isFixed ? 'bg-gray-300' : isInvalid ? 'bg-red-300' : 'bg-white'
      }`}
    />
  );
}

export default Cell;