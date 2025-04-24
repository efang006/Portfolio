// src/components/Cell.jsx
import React from 'react';

function Cell({ value, row, col }) {
  // Now row and col are defined!
  const borderStyles = `
    ${row % 3 === 0 ? 'border-t-2' : ''}
    ${col % 3 === 0 ? 'border-l-2' : ''}
    ${row === 8 ? 'border-b-2' : ''}
    ${col === 8 ? 'border-r-2' : ''}
  `;

  return (
    <div className={`w-10 h-10 flex items-center justify-center border border-gray-300 bg-white ${borderStyles}`}>
      {value !== null ? value : ''}
    </div>
  );
}


export default Cell;
