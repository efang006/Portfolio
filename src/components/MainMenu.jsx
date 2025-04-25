import React, { useState } from 'react';

function MainMenu({ onStart }) {
  const [showDifficulty, setShowDifficulty] = useState(false);

  const handleStart = (difficulty) => {
    onStart(difficulty);
    setShowDifficulty(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Sudoku</h1>
      <div className="relative inline-block">
        <button
          onClick={() => setShowDifficulty(!showDifficulty)}
          className="mb-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          New Game
        </button>
        {showDifficulty && (
          <div className="absolute top-0 left-full ml-2 flex flex-col gap-2 bg-white p-3 rounded shadow-lg border border-gray-300 z-10">
            {['Easy', 'Medium', 'Hard'].map((level) => (
              <button
                key={level}
                onClick={() => handleStart(level.toLowerCase())}
                className="px-4 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm"
              >
                {level}
              </button>
            ))}
          </div>
        )}
      </div>
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