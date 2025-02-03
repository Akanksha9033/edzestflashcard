import React from "react";

const ProgressBar = ({ score, total, darkMode }) => (
  <div className="progress mb-3 " style={{ height: "20px", maxWidth: "450px", width:'100%' }}>
    <div className="progress-bar" role="progressbar" style={{ width: `${(score / total) * 100}%`, backgroundColor: "#007bff" }}>
      {score}/{total}
    </div>
  </div>
);

export default ProgressBar;
