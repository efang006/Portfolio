import React, { useEffect, useState } from 'react';
import Cell from './Cell';
import { generateSudoku } from '../utils/sudokuGenerator';

function SudokuBoard({ difficulty, onBack }) {
  const [board, setBoard] = useState(Array(9).fill().map(() => Array(9).fill({ value: null, isFixed: false })));
  const [invalidCells, setInvalidCells] = useState(new Set());
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    const generated = generateSudoku(difficulty);
    setBoard(generated);
  }, [difficulty]);

  useEffect(() => {
    const errors = validateBoard(board);
    setInvalidCells(errors);

    if (errors.size === 0 && boardIsFull(board)) {
      setGameWon(true);
    } else {
      setGameWon(false);
    }
  }, [board]);

  const updateCell = (row, col, newValue) => {
    setBoard(prevBoard =>
      prevBoard.map((r, rIdx) =>
        r.map((cell, cIdx) =>
          rIdx === row && cIdx === col ? { ...cell, value: newValue } : cell
        )
      )
    );
  };

  function validateBoard(board) {
    const errors = new Set();

    for (let r = 0; r < 9; r++) {
      const seen = {};
      for (let c = 0; c < 9; c++) {
        const value = board[r][c]?.value;
        if (value !== null) {
          if (seen[value] !== undefined) {
            errors.add(`${r}-${c}`);
            errors.add(`${r}-${seen[value]}`);
          }
          seen[value] = c;
        }
      }
    }

    for (let c = 0; c < 9; c++) {
      const seen = {};
      for (let r = 0; r < 9; r++) {
        const value = board[r][c]?.value;
        if (value !== null) {
          if (seen[value] !== undefined) {
            errors.add(`${r}-${c}`);
            errors.add(`${seen[value]}-${c}`);
          }
          seen[value] = r;
        }
      }
    }

    return errors;
  }

  function boardIsFull(board) {
    for (let row of board) {
      for (let cell of row) {
        if (cell.value === null) return false;
      }
    }
    return true;
  }

  return (
    <div className="flex flex-col items-center mt-10">
      {gameWon && (
        <div className="mb-4 p-4 bg-green-500 text-white font-bold rounded">
          🎉 Congratulations! You solved the puzzle!
        </div>
      )}
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
              isInvalid={invalidCells.has(`${rowIdx}-${colIdx}`)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default SudokuBoard;