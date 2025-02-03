// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const tabs = [
//   { id: 1, label: "Flashcards", path: "/" },
//   { id: 2, label: "Process Groups", path: "/process-groups" },
//   { id: 3, label: "Agile", path: "/agile" },
//   { id: 4, label: "Domains", path: "/domains" },
// ];

// export default function Tabs() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const activeIndex = tabs.findIndex((tab) => tab.path === location.pathname);

//   return (
//     <div className="w-full p-4">
//       <ul className="nav nav-tabs">
//         {tabs.map((tab, index) => {
//           const isActive = index === activeIndex;
//           return (
//             <React.Fragment key={tab.id}>
//               <li className="nav-item">
//                 <button
//                   className={`nav-link ${isActive ? 'active' : ''} px-4 py-2`}
//                   onClick={() => navigate(tab.path)}
//                 >
//                   {tab.label}
//                 </button>
//               </li>
//               {index < tabs.length - 1 && (
//                 <li className="nav-item mt-2">
//                   <span className="mx-2 "> &gt; </span>
//                 </li>
//               )}
//             </React.Fragment>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const tabs = [
  { id: 1, label: "Flashcards", path: "/" },
  { id: 2, label: "Process Groups", path: "/process-groups" },
  { id: 3, label: "Agile", path: "/agile" },
  { id: 4, label: "Domains", path: "/domains" },
];

const Tabs = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState("Flashcards");

  // Update the selected tab when the location changes (based on the route)
  useEffect(() => {
    const currentPath = location.pathname;
    const currentTab = tabs.find((tab) => tab.path === currentPath)?.label;
    setSelectedTab(currentTab || "Flashcards");
  }, [location.pathname]);

  // Render tabs dynamically based on selected tab
  const renderTabs = () => {
    return tabs.map((tab, index) => {
      // Only render the active tab and the relevant ones
      if (tab.label === selectedTab || tab.label === "Flashcards") {
        return (
          <React.Fragment key={tab.id}>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === tab.path ? "active" : ""}`}
                to={tab.path}
                style={{
                  color: "#4748ac", // Always use this color for both active and non-active tabs
                  borderColor: location.pathname === tab.path ? "#4748ac" : "", // Active tab border color
                }}
              >
                {tab.label}
              </Link>
            </li>
            {/* Insert ">" symbol between tabs, but only show if the tab is clicked (selected) */}
            {index < tabs.length - 1 && location.pathname === tab.path && (
              <li className="nav-item mt-2 ml-2">
                <span style={{ margin: "0 5px", color: "#4748ac" }}>&gt;</span>
              </li>
            )}
          </React.Fragment>
        );
      }
      return null;
    });
  };

  return (
    <div className="container mt-3">
      {/* Render Tabs */}
      <ul className="nav nav-tabs">{renderTabs()}</ul>

      {/* Flashcards Tab Content with Cards */}
      {location.pathname === "/" && (
        <div className="mt-4 row justify-content-center gap-3">
          {/* Card for Process Groups */}
          <div className="col-12 col-md-4">
            <Link
              to="/process-groups" // Link to Process Groups tab
              className="card text-center text-decoration-none"
            >
              <div className="card-body" style={{ height: "95px", marginTop: "20px" }}>
                <h5 className="" style={{ fontSize: "24px" }}>
                  Process Groups
                </h5>
              </div>
            </Link>
          </div>

          {/* Card for Agile */}
          <div className="col-12 col-md-4">
            <Link
              to="/agile" // Link to Agile tab
              className="card text-center text-decoration-none"
            >
              <div className="card-body" style={{ height: "95px", marginTop: "20px" }}>
                <h5 className="card-title" style={{ fontSize: "24px" }}>
                  Agile
                </h5>
              </div>
            </Link>
          </div>

          {/* Card for Domains */}
          <div className="col-12 col-md-4">
            <Link
              to="/domains" // Link to Domains tab
              className="card text-center text-decoration-none"
            >
              <div className="card-body" style={{ height: "95px", marginTop: "20px" }}>
                <h5 className="card-title" style={{ fontSize: "24px" }}>
                  Domains
                </h5>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Render Content for Process Groups, Agile, and Domains */}
      {location.pathname === "/process-groups" && (
        <div className="mt-4">
          {/* <h4>Process Groups Content</h4>
          <p>Here is some detailed information about Process Groups...</p> */}
        </div>
      )}
      {location.pathname === "/agile" && (
        <div className="mt-4">
          {/* <h4>Agile Content</h4>
          <p>Here is some detailed information about Agile...</p> */}
        </div>
      )}
      {location.pathname === "/domains" && (
        <div className="mt-4">
          {/* <h4>Domains Content</h4>
          <p>Here is some detailed information about Domains...</p> */}
        </div>
      )}
    </div>
  );
};

export default Tabs;
