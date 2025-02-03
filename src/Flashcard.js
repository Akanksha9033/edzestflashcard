import React from "react";

const Flashcard = ({ currentCard, flipped, setFlipped, darkMode, currentCardIndex }) => {
  // Safely handle currentCardIndex and ensure it's a valid number
  const cardNumber = currentCardIndex >= 0 ? currentCardIndex + 1 : 0; // Ensure valid card index

  return currentCard ? (
    <div
      className={`card mx-auto my-4 ${darkMode ? "card-dark" : ""}`}
      style={{
        width: "90%",
        maxWidth: "500px",
        cursor: "pointer",
        backgroundColor: darkMode ? "#333" : "#fff",
        padding: "20px",
        borderRadius: "8px",
        textAlign : 'center',
      }}
      onClick={() => setFlipped(!flipped)}
    >
      {!flipped ? (
        <div className="card-body" style={{ padding: "30px" }}>
          <h5 className={`card-title ${darkMode ? "text-light" : "text-dark"}`}>
            {currentCard.question}
          </h5>
        </div>
      ) : (
        <div className={`card-body ${darkMode ? "bg-dark" : "bg-light"}`} style={{ padding: "30px" }}>
          <p className={`card-text ${darkMode ? "text-light" : "text-dark"}`}>{currentCard.answer}</p>
        </div>
      )}
    </div>
  ) : (
    <p className={darkMode ? "text-light" : "text-dark"}>No cards available for this category.</p>
  );
};

export default Flashcard;
