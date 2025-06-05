import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from '../router/Link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className={`ml-2 font-bold text-xl ${isScrolled ? 'text-green-600' : 'text-white'}`}>
                Constant Cash
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium hover:text-green-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/#features" 
              className={`font-medium hover:text-green-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Features
            </Link>
            <Link 
              to="/#testimonials" 
              className={`font-medium hover:text-green-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Testimonials
            </Link>
            <Link 
              to="/#faq" 
              className={`font-medium hover:text-green-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              FAQ
            </Link>
            <Link 
              to="/about" 
              className={`font-medium hover:text-green-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              About Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-500 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg fade-in">
            <nav className="flex flex-col space-y-4 px-4">
              <Link 
                to="/" 
                className="text-gray-800 font-medium hover:text-green-600 transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/#features" 
                className="text-gray-800 font-medium hover:text-green-600 transition-colors"
                onClick={closeMenu}
              >
                Features
              </Link>
              <Link 
                to="/#testimonials" 
                className="text-gray-800 font-medium hover:text-green-600 transition-colors"
                onClick={closeMenu}
              >
                Testimonials
              </Link>
              <Link 
                to="/#faq" 
                className="text-gray-800 font-medium hover:text-green-600 transition-colors"
                onClick={closeMenu}
              >
                FAQ
              </Link>
              <Link 
                to="/about" 
                className="text-gray-800 font-medium hover:text-green-600 transition-colors"
                onClick={closeMenu}
              >
                About Us
              </Link>
              <div className="pt-2">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.constantcash.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full text-center"
                >
                  Download App
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;