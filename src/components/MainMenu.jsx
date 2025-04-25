import React from 'react';

function MainMenu({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Sudoku</h1>
      <button
        onClick={onStart}
        className="mb-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        New Game
      </button>
      <button
        disabled
        className="px-6 py-2 bg-gray-300 text-gray-600 rounded cursor-not-allowed"
      >
        Load Game (Coming Soon)
      </button>
    </div>
  );
}

export default MainMenu;