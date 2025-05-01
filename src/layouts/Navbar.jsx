import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">
              Elijah Fang
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-gray-700">
              Home
            </Link>
            <Link to="/projects" className="px-3 py-2 rounded-md hover:bg-gray-700">
              Projects
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md hover:bg-gray-700">
              About Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;