import React from 'react';

function Projects() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-left space-y-6">
      <h1 className="absolute top-6 right-8 text-4xl font-bold text-black">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-12xl">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Sudoku Game</h2>
          <p className="text-gray-600 mb-4">
            A React-based Sudoku game featuring multiple difficulty levels,
            game state management, and real-time validation.
          </p>
          <a 
            href="https://sudoku-sage-two.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Play Sudoku
          </a>
        </div>
        {/* Add more project cards here */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Finance Tracker</h2>
          <p className="text-gray-600 mb-4">
            Coming soon!
          </p>
          <a 
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 cursor-not-allowed opacity-50"
          >
            Coming soon!
          </a>
        </div>

      </div>
    </div>
  );
}

export default Projects;