import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Impact', path: '/impact' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1749886809045-WLAlogo.png" 
              alt="Women Lens Africa" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-marcellus font-bold text-gray-900">
                Women Lens Africa
              </h1>
              <p className="text-sm text-primary font-marcellus">
                Women Leadership, Data, Digital Rights
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-marcellus font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            {/* Donate Button */}
            <Link
              to="/donate"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-marcellus font-semibold transition-colors duration-200 ml-4"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t"
          >
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 font-marcellus font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile Donate Button */}
              <Link
                to="/donate"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-marcellus font-semibold text-center mt-4 transition-colors duration-200"
              >
                Donate
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;