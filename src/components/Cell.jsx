import React from 'react';

function Cell({ value, isFixed, row, col, onChange }) {
  const handleInput = (e) => {
    const input = e.target.value;
    const numeric = /^[1-9]$/.test(input) ? parseInt(input, 10) : null;
    if (!isFixed && onChange) {
      onChange(row, col, numeric);
    }
  };

  const borderStyles = `
    ${row % 3 === 0 ? 'border-t-2' : ''}
    ${col % 3 === 0 ? 'border-l-2' : ''}
    ${row === 8 ? 'border-b-2' : ''}
    ${col === 8 ? 'border-r-2' : ''}
  `;

  return (
    <input
      type="text"
      maxLength="1"
      value={value === null ? '' : value}
      onChange={handleInput}
      disabled={isFixed}
      className={`w-10 h-10 text-center text-lg border border-gray-300 ${
        isFixed ? 'bg-gray-200 font-bold' : 'bg-white'
      } ${borderStyles}`}
    />
  );
}

export default Cell;