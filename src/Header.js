import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky-top">
      <div className="container-fluid px-4 py-4">
        <div className="d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="h-18 w-18"
                style={{ height: '38px', width: '90px' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="d-none d-md-flex gap-3 text-gray-700 font-medium">
            <Link to="/training" className="text-decoration-none hover:text-primary">Training</Link>
            <Link to="/mock-exam" className="text-decoration-none hover:text-primary">Mock Exam</Link>
            <a
              href="https://cards.edzest.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none hover:text-primary"
            >
              Flashcards
            </a>
            <Link to="/about" className="text-decoration-none hover:text-primary">About Us</Link>
            <Link to="/contact" className="text-decoration-none hover:text-primary">Contact Us</Link>
            <a
              href="https://exams.edzest.org/learn/account/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-3 py-2 rounded"
            >
              Log In
            </a>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="d-md-none">
            <button
              onClick={toggleMenu}
              className="btn text-gray-700"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      {isMenuOpen && (
        <div
          className="position-fixed top-0 end-0 h-100 bg-light shadow-lg d-md-none"
          style={{ width: '250px', zIndex: 1050, transition: 'transform 0.3s ease-in-out' }}
        >
          {/* Close Icon */}
          <button
            onClick={closeMenu}
            className="btn-close position-absolute top-0 end-0 m-3"
            aria-label="Close"
          ></button>
          <nav className="p-4">
            <Link
              to="/training"
              className="d-block text-gray-700 text-center text-decoration-none py-2 hover:bg-primary"
              onClick={closeMenu}
            >
              Training
            </Link>
            <Link
              to="/mock-exam"
              className="d-block text-gray-700 text-center text-decoration-none py-2 hover:bg-primary"
              onClick={closeMenu}
            >
              Mock Exam
            </Link>
            <a
              href="https://cards.edzest.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-block text-gray-700 text-center text-decoration-none py-2 hover:bg-primary"
              onClick={closeMenu}
            >
              Flashcards
            </a>
            <Link
              to="/about"
              className="d-block text-gray-700 text-center text-decoration-none py-2 hover:bg-primary"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="d-block text-gray-700 text-center text-decoration-none py-2 hover:bg-primary"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
            <a
              href="https://exams.edzest.org/learn/account/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary d-block w-100"
              onClick={closeMenu}
              style={{marginTop:"10px"}}
            >
              Log In
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;