// import React from "react";
// import DomainData from "./DomainData"; // Import the new data for Governance

// const DomainCategories = ({ setCategory }) => {
//   // Extract unique categories from DomainData
//   const governanceCategories = [...new Set(DomainData.map((card) => card.category))];

//   return (
//     <div>
//       <h2>Select a Governance Category</h2>
//       <div className="row">
//         {governanceCategories.map((category, index) => (
//           <div className="col-md-4 mb-4" key={index}>
//             <div className="card" style={{ cursor: "pointer", height:"100px", marginTop:"20px" }} onClick={() => setCategory(category)}>
//               <div className="card-body">
//                 <h5 className="card-title" style={{ marginTop: "15px" }}>{category}</h5>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DomainCategories;

import React from "react";
import domainData from "./domainData";  // Assuming you have a domainData.js file

const DomainCategories = ({ setCategory }) => {
  // Extract unique categories from domainData
  const domainCategories = [...new Set(domainData.map((card) => card.category))];

  return (
    <div>
     
      <div className="row">
        {domainCategories.map((category, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="card"
              style={{ cursor: "pointer", height: "100px", marginTop: "20px" }}
              onClick={() => setCategory(category)}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ marginTop: "15px" }}>
                  {category}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DomainCategories;

