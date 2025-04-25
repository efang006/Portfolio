import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import { generateSudoku } from '../utils/sudokuGenerator';

function SudokuBoard({ difficulty, onBack }) {
  const [board, setBoard] = useState(Array(9).fill().map(() => Array(9).fill({ value: null, isFixed: false })));

  useEffect(() => {
    const generated = generateSudoku(difficulty);
    setBoard(generated);
  }, [difficulty]);

  const updateCell = (row, col, newValue) => {
    setBoard(prevBoard =>
      prevBoard.map((r, rIdx) =>
        r.map((cell, cIdx) =>
          rIdx === row && cIdx === col ? { ...cell, value: newValue } : cell
        )
      )
    );
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        ← Back to Menu
      </button>
      <div className="grid grid-cols-9 w-max border border-black">
        {board.map((row, rowIdx) =>
          row.map((cell, colIdx) => (
            <Cell
              key={`${rowIdx}-${colIdx}`}
              value={cell.value}
              isFixed={cell.isFixed}
              row={rowIdx}
              col={colIdx}
              onChange={updateCell}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default SudokuBoard;