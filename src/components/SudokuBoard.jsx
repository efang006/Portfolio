import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import { generateSudoku } from '../utils/sudokuGenerator';

function SudokuBoard() {
  const [board, setBoard] = useState(Array(9).fill().map(() => Array(9).fill({ value: null, isFixed: false })));

  useEffect(() => {
    const generated = generateSudoku('easy');
    if (generated && Array.isArray(generated) && generated.length === 9) {
      setBoard(generated);
    } else {
      console.error("generateSudoku did not return a valid 9x9 board.");
    }
  }, []);

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
    <div className="grid grid-cols-9 w-max mx-auto mt-10 border border-black">
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
  );
}

export default SudokuBoard;