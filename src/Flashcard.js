// import React from "react";

// const Flashcard = ({ currentCard, flipped, setFlipped, darkMode, currentCardIndex }) => {
//   // Safely handle currentCardIndex and ensure it's a valid number
//   // const cardNumber = currentCardIndex >= 0 ? currentCardIndex + 1 : 0; // Ensure valid card index

//   return currentCard ? (
//     <div
//       className={`card mx-auto my-4 ${darkMode ? "card-dark" : ""}`}
//       style={{
//         width: "90%",
//         maxWidth: "500px",
//         cursor: "pointer",
//         backgroundColor: darkMode ? "#333" : "#fff",
//         padding: "20px",
//         borderRadius: "8px",
//         textAlign : 'center',
//       }}
//       onClick={() => setFlipped(!flipped)}
//     >
//       {!flipped ? (
//         <div className="card-body" style={{ padding: "30px" }}>
//           <h5 className={`card-title ${darkMode ? "text-light" : "text-dark"}`}>
//             {currentCard.question}
//           </h5>
//         </div>
//       ) : (
//         <div className={`card-body ${darkMode ? "bg-dark" : "bg-light"}`} style={{ padding: "30px" }}>
//           <p className={`card-text ${darkMode ? "text-light" : "text-dark"}`}>{currentCard.answer}</p>
//         </div>
//       )}
//     </div>
//   ) : (
//     <p className={darkMode ? "text-light" : "text-dark"}>No cards available for this category.</p>
//   );
// };

// export default Flashcard;


import React from "react";

const Flashcard = ({ currentCard, flipped, setFlipped, darkMode }) => {
  return currentCard ? (
    <div
      className={`card my-4 ${darkMode ? "card-dark" : ""}`}
      style={{
        width: "100%",
        maxWidth: "500px",
        cursor: "pointer",
        backgroundColor: darkMode ? "#333" : "#fff",
        padding: "20px",
        borderRadius: "12px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: darkMode ? "0px 4px 10px rgba(255, 255, 255, 0.1)" : "0px 4px 10px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease-in-out",
        overflow: "hidden",
        margin: "0 auto",
      }}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card-body">
        <h5 className={`card-title ${darkMode ? "text-light" : "text-dark"}`} style={{ fontSize: "1.2rem" }}>
          {flipped ? currentCard.answer : currentCard.question}
        </h5>
      </div>
    </div>
  ) : (
    <p className="text-center text-muted p-3">No cards available.</p>
  );
};

export default Flashcard;


