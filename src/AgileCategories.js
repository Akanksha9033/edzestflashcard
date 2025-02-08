import React from "react";
import agileData from "./agileData";

const AgileCategories = ({ setCategory }) => {
  // Extract unique categories from agileData
  const agileCategories = [...new Set(agileData.map((card) => card.category))];

  return (
    <div>
     
      <div className="row">
        {agileCategories.map((category, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card" style={{ cursor: "pointer", height:"100px",marginTop:"20px" }} onClick={() => setCategory(category)}>
              <div className="card-body" style={{}}>
                <h5 className="card-title" style={{ marginTop :"15px"}}>{category}</h5>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgileCategories;
