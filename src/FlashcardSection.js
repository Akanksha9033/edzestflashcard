import React from "react";
import Flashcard from "./Flashcard";
import Controls from "./Controls";

const FlashcardSection = ({
  category,
  setCategory,
  filteredFlashcards,
  getScore,
  progress,
  setCurrentCardIndex,
  currentCardIndex,
  flipped,
  setFlipped,
  categoryProgress,
  updateScore,
  clearScore
}) => {
  return (
    <>
      {/* Show Category Selection when category is selected */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <h3 className="text-primary">{category} Flashcards</h3>
        <button className="btn btn-secondary" onClick={() => setCategory(null)}>
          Back to Categories
        </button>
      </div>

      <div className="mt-3 w-50 mx-auto">
        <div className="d-flex justify-content-between">
          <span>Score: {getScore()}</span>
          <span>Progress: {Math.round(progress)}%</span>
        </div>
        <div className="progress mt-2" style={{ height: "20px" }}>
          <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {filteredFlashcards.length > 0 ? (
        <>
          <Flashcard
            currentCard={filteredFlashcards[currentCardIndex]}
            flipped={flipped}
            setFlipped={setFlipped}
            darkMode={false} // Assuming darkMode can be passed or managed globally
            currentCardIndex={currentCardIndex}
          />
          <Controls
            currentCardIndex={currentCardIndex}
            setCurrentCardIndex={setCurrentCardIndex}
            score={getScore()}
            updateScore={updateScore}
            flashcards={filteredFlashcards}
            setCategoryProgress={null} // Assuming the context of managing progress is handled elsewhere
            categoryProgress={categoryProgress}
          />
        </>
      ) : (
        <p className="text-danger mt-4">No flashcards available.</p>
      )}
    </>
  );
};

export default FlashcardSection;
