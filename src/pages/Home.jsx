import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Elijah T. Fang
        </h1>
        <p className="text-xl md:text-2xl">
          Full Stack Developer | React Specialist
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Featured Project: Sudoku</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-600 mb-4">
            A React-based Sudoku game featuring multiple difficulty levels,
            game state management, and real-time validation.
          </p>
          <Link 
            to="/sudoku" 
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Play Sudoku
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;