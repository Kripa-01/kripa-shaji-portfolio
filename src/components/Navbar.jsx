import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-6 bg-gray-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-white font-semibold text-sm">REACTIVE</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            ABOUT ME
          </a>
          <a href="#skills" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            SKILLS
          </a>
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            PROJECTS
          </a>
        </div>

        {/* Desktop Contact Button */}
        <button className="hidden md:flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 text-white px-6 py-3 rounded-full border border-gray-700 transition-all">
          <span className="text-sm font-medium">CONTACT</span>
          <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 text-gray-900" />
          </div>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-white hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-4 pb-2 flex flex-col gap-2">
          <a
            href="#about"
            onClick={closeMenu}
            className="text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all text-sm font-medium px-4 py-3 rounded-lg"
          >
            ABOUT ME
          </a>
          <a
            href="#skills"
            onClick={closeMenu}
            className="text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all text-sm font-medium px-4 py-3 rounded-lg"
          >
            SKILLS
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all text-sm font-medium px-4 py-3 rounded-lg"
          >
            PROJECTS
          </a>
          <button className="flex items-center justify-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 text-white px-6 py-3 rounded-full border border-gray-700 transition-all mt-2">
            <span className="text-sm font-medium">CONTACT</span>
            <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-gray-900" />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;