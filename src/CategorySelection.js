import React from "react";

const CategorySelection = ({ setCategory }) => {
  // Define the categories data here, based on your flashcard data
  const categories = ['Initiation', 'Planning', 'Execution', 'Monitoring', 'Closing']; // Add the categories dynamically from flashcardData if needed
  
  return (
    <div>
     
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


// import React from "react";

// const ProcessGroupCategories = ({ setCategory }) => {
//   const categories = ["Initiating", "Planning", "Executing", "Monitoring and Controlling", "Closing"];

//   return (
//     <div className="category-selection text-center">
//       <h2 className="mt-4" style={{ color: "#4748ac" }}>Select a Process Group Category</h2>
//       <div className="d-flex justify-content-center flex-wrap mt-3">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             className="btn btn-primary m-2"
//             onClick={() => setCategory(cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProcessGroupCategories;

