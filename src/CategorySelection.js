import React from "react";

const CategorySelection = ({ setCategory }) => {
  // Define the categories data here, based on your flashcard data
  const categories = ['Initiation', 'Planning', 'Execution', 'Monitoring', 'Closing']; // Add the categories dynamically from flashcardData if needed
  
  return (
    <div>
      <h2>Select a Process Groups Category</h2>
      <div className="row">
        {categories.map((category, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card" style={{ cursor: "pointer", height:"100px",marginTop:"20px"  }} onClick={() => setCategory(category)}>
              <div className="card-body ">
                <h5 className="card-title"style={{ marginTop :"15px",textAlign:"center"}}>{category}</h5>               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;
