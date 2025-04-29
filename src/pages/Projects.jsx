import React from 'react';

function Projects() {
  return (
    <div className="space-y-12 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Sudoku Game</h2>
            <p className="text-gray-600 mb-2">
              A React-based Sudoku game featuring multiple difficulty levels,
              game state management, and real-time validation. Built with React
              and Tailwind CSS.
            </p>
          </div>
          <div className="p-6 space-y-2">
            <p className="text-sm text-gray-500 mb-2">
              <span className="font-semibold">Technologies:</span> React, JavaScript, Tailwind CSS
            </p>
            <a 
              href="https://sudoku-sage-two.vercel.app" // Replace with the actual deployed URL
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Play Sudoku
            </a>
          </div>
        </div>
        
        {/* Add other project cards here */}
      </div>
    </div>
  );
}

export default Projects;