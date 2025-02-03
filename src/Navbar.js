import React from "react";
import { FaCog } from "react-icons/fa";

const Navbar = ({ setIsSidebarOpen, darkMode }) => (
  <nav className={`navbar navbar-expand-md px-3  mb-4 ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
    <span className="navbar-brand mb-0 h1">Flashcard</span>
    <button 
      className="btn btn-link ms-auto d-flex align-items-center" 
      onClick={() => setIsSidebarOpen(true)} 
      style={{ fontSize: "1.5rem" }}
    >
      <FaCog style={{ color: "#4748ac" }} />
    </button>
  </nav>
);

export default Navbar;

