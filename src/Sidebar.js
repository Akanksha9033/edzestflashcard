import React from "react";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, clearScore, darkMode, toggleDarkMode }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        right: isSidebarOpen ? "0" : "-250px",
        width: "250px",
        height: "100vh",
        transition: "right 0.3s ease-in-out",
        padding: "20px",
        backgroundColor: darkMode ? "#333" : "#f8f9fa",
        color: darkMode ? "#fff" : "#000",
        boxShadow: "rgba(0, 0, 0, 0.2) -5px 0px 10px",
      }}
    >
      <button className="btn btn-danger mt-3 w-100" onClick={() => setIsSidebarOpen(false)}>Close</button>
      <button className="btn btn-warning mt-3 w-100" onClick={clearScore}>Clear Score</button>
      <button className="btn btn-secondary mt-3 w-100" onClick={toggleDarkMode}>
        {darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
      </button>
    </div>
  );
};

export default Sidebar;
