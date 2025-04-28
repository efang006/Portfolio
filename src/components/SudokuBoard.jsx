import React, { useState, useEffect, useCallback } from 'react';
import Cell from './Cell';
import { generateSudoku } from '../utils/sudokuGenerator';

function SudokuBoard({ difficulty, onBack, initialBoard }) {
  const [board, setBoard] = useState(initialBoard || generateSudoku(difficulty));
  const [invalidCells, setInvalidCells] = useState(new Set());
  const [gameWon, setGameWon] = useState(false);

  // Memoize updateCell function
  const updateCell = useCallback((row, col, newValue) => {
    setBoard(prevBoard => {
      const newBoard = [...prevBoard];
      newBoard[row] = [...newBoard[row]];
      newBoard[row][col] = { ...newBoard[row][col], value: newValue };
      return newBoard;
    });
  }, []);

  // Optimized board validation with early return
  const validateBoard = useCallback((board) => {
    const errors = new Set();
    const rows = Array(9).fill().map(() => new Set());
    const cols = Array(9).fill().map(() => new Set());
    const boxes = Array(9).fill().map(() => new Set());

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const value = board[r][c]?.value;
        if (value !== null) {
          const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
          
          if (rows[r].has(value) || cols[c].has(value) || boxes[boxIndex].has(value)) {
            errors.add(`${r}-${c}`);
          }
          
          rows[r].add(value);
          cols[c].add(value);
          boxes[boxIndex].add(value);
        }
      }
    }
    return errors;
  }, []);

  // Debounced validation with useEffect
  useEffect(() => {
    const timeout = setTimeout(() => {
      const errors = validateBoard(board);
      setInvalidCells(errors);
      setGameWon(errors.size === 0 && board.every(row => 
        row.every(cell => cell.value !== null)));
    }, 100);

    return () => clearTimeout(timeout);
  }, [board, validateBoard]);

  return (
    <div className="flex flex-col items-center mt-10">
      {gameWon && (
        <div className="mb-4 p-4 bg-green-500 text-white font-bold rounded">
          🎉 Congratulations! You solved the puzzle!
        </div>
      )}
      <div className="mb-4">
        <button
          onClick={() => {
            const gameState = { board, difficulty };
            localStorage.setItem('savedGame', JSON.stringify(gameState));
            alert('Game saved!');
            onBack();
          }}
          className="mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save and Exit Game
        </button>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Exit Game
        </button>
      </div>
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