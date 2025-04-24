// === src/components/SudokuBoard.jsx ===
import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import { generateSudoku } from '../utils/sudokuGenerator';

function SudokuBoard() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const generated = generateSudoku('easy');
    setBoard(generated);
  }, []);

  console.log(board);

  return (
    <div className="grid grid-cols-9 w-10 h-10 bg-red-100 border border-black">
      {board.map((row, rowIdx) =>
        row.map((value, colIdx) => (
          <Cell
            key={`${rowIdx}-${colIdx}`}
            value={value}
            row={rowIdx}
            col={colIdx}
          />
        ))
      )}
    </div>
  );
}

export default SudokuBoard;
