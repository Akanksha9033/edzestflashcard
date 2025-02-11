import React from "react";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, clearScore, darkMode, toggleDarkMode }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "61px",
        right: isSidebarOpen ? "0" : "-250px",
        width: "250px",
        height: "100vh",
        transition: "right 0.3s ease-in-out",
        padding: "20px",
        backgroundColor: darkMode ? "#333" : "#f8f9fa",
        color: darkMode ? "#fff" : "#000",
        zIndex : "100",
        boxShadow: "rgba(0, 0, 0, 0.2) -5px 0px 10px",
      }}
    >
      <button className="btn btn-danger mt-3 " onClick={() => setIsSidebarOpen(false)}><i class="fa-solid fa-xmark"></i></button>
      <button className="btn  mt-3 w-100" style={{backgroundColor : "#ddd"}} onClick={clearScore}>Clear Score</button>
      <button className="btn  mt-3 w-100" style={{backgroundColor : "#ddd"}} onClick={toggleDarkMode}>
        {darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
      </button>
    </div>
  );
};

export default Sidebar;
