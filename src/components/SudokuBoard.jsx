import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import { generateSudoku } from '../utils/sudokuGenerator';

function SudokuBoard() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const generated = generateSudoku();
    setBoard(generated);
  }, []);

  return (
    <div className="grid grid-cols-9 gap-[1px] bg-black">
      {board.map((row, rowIdx) =>
        row.map((value, colIdx) => (
          <Cell key={`${rowIdx}-${colIdx}`} value={value} />
        ))
      )}
    </div>
  );
}

export default SudokuBoard;
