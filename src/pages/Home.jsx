import React from 'react';

function Home() {
  return (
    <div className="font- space-y-12">
      <section className="text-center py-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Elijah Fang
        </h1>
        <p className="text-xl md:text-2xl">
          Full Stack Developer
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Featured Project: Sudoku</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-600 mb-4">
            A React-based Sudoku game featuring multiple difficulty levels,
            game state management, and real-time validation.
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
      </section>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700">
          My name is Elijah Fang. 
          I received my Bachelor's degree in Computer Science with Business Applications from the University of California, Riverside. 
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <a href="https://github.com/efang006" className="text-blue-700">
          GitHub
        </a>
        <span> | </span>
        <a href="https://www.linkedin.com/in/elijahfang/" className="text-blue-700">
          LinkedIn
        </a>
      </section>
    </div>
  );
}

export default Home;