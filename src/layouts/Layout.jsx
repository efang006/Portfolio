import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Layout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Slim Navigation Bar */}
      <motion.nav
        initial={{ width: "50px" }}
        animate={{ width: isNavOpen ? "250px" : "50px" }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 h-full bg-black text-white z-40"
      >
        {/* Menu Icon */}
        <button
          className="w-full p-4 text-left hover:bg-gray-700"
          onClick={toggleNav}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isNavOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={`${isNavOpen ? 'block' : 'hidden'} p-4`}
        >
          <Link to="/" className="block py-2 hover:text-gray-300">Home</Link>
          <Link to="/projects" className="block py-2 hover:text-gray-300">Projects</Link>
          <Link to="/about" className="block py-2 hover:text-gray-300">About</Link>
        </motion.div>
      </motion.nav>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 overflow-hidden ml-[50px]">
        <div className="h-full w-full max-w-6xl mx-auto flex items-center justify-center">
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;