

// import React, { useState } from "react";
// import { Toast, ToastContainer } from "react-bootstrap"; // Import Bootstrap Toast
// import { useNavigate } from "react-router-dom"; // Import useNavigate hook
// const Controls = ({
//   currentCardIndex,
//   setCurrentCardIndex,
//   score,
//   updateScore,
//   flashcards,
//   setCategoryProgress,
//   categoryProgress,
//   setFlipped,  // Receive setFlipped as a prop
//   setShowPopup, // Add this to switch back to flashcard tab
// }) => {
//   const [hasAnswered, setHasAnswered] = useState(false);
//   const [isIKnowThisDisabled, setIsIKnowThisDisabled] = useState(false);
//   const [showToast, setShowToast] = useState(false);

//   const navigate = useNavigate();

//   const handleNext = () => {
//     if (currentCardIndex < flashcards.length - 1) {
//       setCurrentCardIndex((prev) => prev + 1);
//       setHasAnswered(false);
//       setIsIKnowThisDisabled(false);
//     } else {
//       setShowToast(true); // Show toast when last card is answered
//     }
//   };

//   const handlePrevious = () => {
//     if (currentCardIndex > 0) {
//       const prevCardIndex = currentCardIndex - 1;
//       setCurrentCardIndex(prevCardIndex);
//       const previousCardId = flashcards[prevCardIndex].id;
//       const wasAnswered = categoryProgress[previousCardId]?.answered;
//       if (wasAnswered) {
//         setIsIKnowThisDisabled(true);
//       } else {
//         setIsIKnowThisDisabled(false);
//       }
//       setHasAnswered(false);
//     }
//   };

//   const handleKnowThis = () => {
//     if (currentCardIndex < flashcards.length) {
//       const currentScore = score || 0;

//       updateScore();
//       setCategoryProgress((prev) => {
//         const updatedProgress = {
//           ...prev,
//           [flashcards[currentCardIndex].id]: { answered: "I Know This" },
//           score: currentScore + 1,
//           currentCardIndex: currentCardIndex + 1,
//         };
//         return updatedProgress;
//       });
//       setHasAnswered(true);
//       setIsIKnowThisDisabled(true);

//       // Flip back to question after answering
//       setFlipped(false);  // Reset the flip state to show question

//       if (currentCardIndex === flashcards.length - 1) {
//         setShowToast(true);
//       } else {
//         handleNext();
//       }
//     }
//   };

//   const handleDontKnow = () => {
//     setCategoryProgress((prev) => {
//       const updatedProgress = {
//         ...prev,
//         [flashcards[currentCardIndex].id]: { answered: "I Don't Know This" },
//         currentCardIndex: currentCardIndex + 1,
//       };
//       return updatedProgress;
//     });
//     setHasAnswered(true);
//     setIsIKnowThisDisabled(true);

//     // Flip back to question after answering
//     setFlipped(false);  // Reset the flip state to show question

//     if (currentCardIndex === flashcards.length - 1) {
//       setShowToast(true);
//     } else {
//       handleNext();
//     }
//   };

//   const restartFlashcards = () => {
//     setCategoryProgress((prev) => ({
//       ...prev,
//       [flashcards[0].category]: {
//         score: 0,
//         currentCardIndex: 0,
//         answeredCards: {},
//       },
//     }));

//     setCurrentCardIndex(0);
//     setShowToast(false);
//     setHasAnswered(false);
//     setIsIKnowThisDisabled(false);
//   };

//   const handleClose = () => {
//     navigate("/");
//   };

//   return (
//     <div className="d-flex justify-content-center gap-3 mt-3">
//       <button className="btn btn-primary" onClick={handlePrevious} disabled={currentCardIndex === 0}>
//       {/* <i class="fa-solid fa-arrow-left"></i> */}
//       Previous
//       </button>

//       <button className="btn btn-success" onClick={handleKnowThis} disabled={isIKnowThisDisabled || hasAnswered || score >= flashcards.length}>
//       {/* <i class="fa-solid fa-check"></i> */}
//       I know this
//       </button>

//       <button className="btn btn-danger" onClick={handleDontKnow} disabled={hasAnswered}>
//       {/* <i class="fa-solid fa-xmark"></i> */}
//       I don't know this
//       </button>

//       <button className="btn btn-light"style={{ backgroundColor: "#4748ac" }} onClick={handleNext}>
//       {/* <i class="fa-solid fa-arrow-right"></i> */}
//       Next
//       </button> 

//       {/* Toast notification */}
//       <ToastContainer position="top-end" className="p-3">
//         <Toast
//           show={showToast}
//           onClose={() => setShowToast(false)}
//           autohide={false}
//           bg="light"
//           style={{
//             borderRadius: "10px",
//             boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//             maxWidth: "400px",
//             padding: "20px",
//             fontFamily: "Arial, sans-serif",
//           }}
//         >
//           <Toast.Header style={{ backgroundColor: "#007bff", color: "white", borderRadius: "8px" }}>
//             <strong className="me-auto">Quiz Completed!</strong>
//           </Toast.Header>
//           <Toast.Body style={{ backgroundColor: "#f8f9fa", color: "#495057", borderRadius: "8px" }}>
//             <p>Your score is {score} out of {flashcards.length}</p>
//             <div className="d-flex justify-content-end">
//               <button
//                 className="btn btn-primary me-2"
//                 onClick={restartFlashcards}
//                 style={{
//                   borderRadius: "5px",
//                   padding: "8px 16px",
//                   fontSize: "14px",
//                   backgroundColor: "#007bff",
//                   border: "none",
//                 }}
//               >
//                 Try Again
//               </button>
//               <button
//                 className="btn btn-secondary"
//                 onClick={handleClose}
//                 style={{
//                   borderRadius: "5px",
//                   padding: "8px 16px",
//                   fontSize: "14px",
//                   backgroundColor: "#6c757d",
//                   border: "none",
//                 }}
//               >
//                 Close
//               </button>
//             </div>
//           </Toast.Body>
//         </Toast>
//       </ToastContainer>
//     </div>
//   );
// };

// export default Controls;


// import React, { useState } from "react";
// import { Toast, ToastContainer } from "react-bootstrap"; // Import Bootstrap Toast
// import { useNavigate } from "react-router-dom"; // Import useNavigate hook

// const Controls = ({
//   currentCardIndex,
//   setCurrentCardIndex,
//   score,
//   updateScore,
//   flashcards,
//   setCategoryProgress,
//   categoryProgress,
//   setFlipped,  // Receive setFlipped as a prop
//   setShowPopup, // Add this to switch back to flashcard tab
// }) => {
//   const [hasAnswered, setHasAnswered] = useState(false);
//   const [isIKnowThisDisabled, setIsIKnowThisDisabled] = useState(false);
//   const [showToast, setShowToast] = useState(false);

//   const navigate = useNavigate();

//   const handleNext = () => {
//     if (currentCardIndex < flashcards.length - 1) {
//       setCurrentCardIndex((prev) => prev + 1);
//       setHasAnswered(false);
//       setIsIKnowThisDisabled(false);
//     } else {
//       setShowToast(true); // Show toast when last card is answered
//     }
//   };

//   const handlePrevious = () => {
//     if (currentCardIndex > 0) {
//       const prevCardIndex = currentCardIndex - 1;
//       setCurrentCardIndex(prevCardIndex);
//       const previousCardId = flashcards[prevCardIndex].id;
//       const wasAnswered = categoryProgress[previousCardId]?.answered;

//       if (wasAnswered) {
//         setHasAnswered(true); // Enable Next button when user goes back to an answered card
//         setIsIKnowThisDisabled(true);
//       } else {
//         setHasAnswered(false); // If not answered, Next button will be disabled
//         setIsIKnowThisDisabled(false);
//       }
//     }
//   };

//   const handleKnowThis = () => {
//     if (currentCardIndex < flashcards.length) {
//       const currentScore = score || 0;

//       updateScore();
//       setCategoryProgress((prev) => {
//         const updatedProgress = {
//           ...prev,
//           [flashcards[currentCardIndex].id]: { answered: "I Know This" },
//           score: currentScore + 1,
//           currentCardIndex: currentCardIndex + 1,
//         };
//         return updatedProgress;
//       });
//       setHasAnswered(true);
//       setIsIKnowThisDisabled(true);

//       // Flip back to question after answering
//       setFlipped(false);  // Reset the flip state to show question

//       if (currentCardIndex === flashcards.length - 1) {
//         setShowToast(true);
//       } else {
//         handleNext();
//       }
//     }
//   };

//   const handleDontKnow = () => {
//     // Update the category progress without affecting the score
//     setCategoryProgress((prev) => {
//       const updatedProgress = {
//         ...prev,
//         [flashcards[currentCardIndex].id]: { answered: "I Don't Know This" }, // Mark as attempted but don't change score
//         currentCardIndex: currentCardIndex + 1, // Move to the next card
//       };
//       return updatedProgress;
//     });
  
//     setHasAnswered(true);
//     setIsIKnowThisDisabled(true);
//     setFlipped(false);  // Reset flip state
  
//     if (currentCardIndex === flashcards.length - 1) {
//       setShowToast(true); // Show toast when last card is answered
//     } else {
//       handleNext();  // Proceed to the next card
//     }
//   };
  
  
  
  

//   const restartFlashcards = () => {
//     setCategoryProgress((prev) => ({
//       ...prev,
//       [flashcards[0].category]: {
//         score: 0,
//         currentCardIndex: 0,
//         answeredCards: {},
//       },
//     }));

//     setCurrentCardIndex(0);
//     setShowToast(false);
//     setHasAnswered(false);
//     setIsIKnowThisDisabled(false);
//   };

//   const handleClose = () => {
//     navigate("/");
//   };

//   return (
//     <div className="d-flex justify-content-center gap-3 mt-3">
//       <button className="btn btn-primary" onClick={handlePrevious} disabled={currentCardIndex === 0}>
//       <i class="fa-solid fa-arrow-left"></i>
//       </button>

//       <button className="btn btn-success" onClick={handleKnowThis} disabled={isIKnowThisDisabled || hasAnswered || score >= flashcards.length}>
//       <i class="fa-solid fa-check"></i>
//       </button>

//       <button className="btn btn-danger" onClick={handleDontKnow} disabled={hasAnswered}>
//       <i class="fa-solid fa-xmark"></i>
//       </button>

//       {/* 🚀 Disabled Next button until an answer is given */}
//       <button className="btn btn-light" style={{ backgroundColor: "#4748ac" }} onClick={handleNext} disabled={!hasAnswered}>
//       <i class="fa-solid fa-arrow-right"></i>
//       </button> 

//       {/* Toast notification */}
//       <ToastContainer position="top-end" className="p-3">
//         <Toast
//           show={showToast}
//           onClose={() => setShowToast(false)}
//           autohide={false}
//           bg="light"
//           style={{
//             borderRadius: "10px",
//             boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//             maxWidth: "400px",
//             padding: "20px",
//             fontFamily: "Arial, sans-serif",
//           }}
//         >
//           <Toast.Header style={{ backgroundColor: "#007bff", color: "white", borderRadius: "8px" }}>
//             <strong className="me-auto">Quiz Completed!</strong>
//           </Toast.Header>
//           <Toast.Body style={{ backgroundColor: "#f8f9fa", color: "#495057", borderRadius: "8px" }}>
//             <p>Your score is {score} out of {flashcards.length}</p>
//             <div className="d-flex justify-content-end">
//               <button
//                 className="btn btn-primary me-2"
//                 onClick={restartFlashcards}
//                 style={{
//                   borderRadius: "5px",
//                   padding: "8px 16px",
//                   fontSize: "14px",
//                   backgroundColor: "#007bff",
//                   border: "none",
//                 }}
//               >
//                 Try Again
//               </button>
//               <button
//                 className="btn btn-secondary"
//                 onClick={handleClose}
//                 style={{
//                   borderRadius: "5px",
//                   padding: "8px 16px",
//                   fontSize: "14px",
//                   backgroundColor: "#6c757d",
//                   border: "none",
//                 }}
//               >
//                 Close
//               </button>
//             </div>
//           </Toast.Body>
//         </Toast>
//       </ToastContainer>
//     </div>
//   );
// };

// export default Controls;


import React, { useState, useEffect, useRef } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Controls = ({
  currentCardIndex,
  setCurrentCardIndex,
  score,
  updateScore,
  flashcards,
  setCategoryProgress,
  categoryProgress,
  setFlipped,
  setShowPopup,
}) => {
  const [showToast, setShowToast] = useState(false);
  const [isIKnowThisDisabled, setIsIKnowThisDisabled] = useState(false);
  const [isIDontKnowThisDisabled, setIsIDontKnowThisDisabled] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const navigate = useNavigate();

  const category = flashcards[0].category;
  const timeoutRef = useRef(null);

 // ✅ useEffect for "Next" Button
useEffect(() => {
  const answeredCards = categoryProgress[category]?.answeredCards || {};
  const isAnswered = answeredCards[currentCardIndex] || false;

  setIsNextDisabled(!isAnswered);
}, [currentCardIndex, categoryProgress, category]);

// ✅ Handles enabling/disabling buttons when switching cards
useEffect(() => {
  const answeredCards = categoryProgress[category]?.answeredCards || {};
  const isAnswered = answeredCards[currentCardIndex] || false;

  if (isAnswered) {
    // ✅ Disable buttons only for answered cards
    setIsIKnowThisDisabled(true);
    setIsIDontKnowThisDisabled(true);
  } else {
    // ✅ Enable buttons for new, unanswered cards
    setIsIKnowThisDisabled(false);
    setIsIDontKnowThisDisabled(false);
  }
}, [currentCardIndex, categoryProgress, category]);

// ✅ "I Know This" button logic
const handleIKnowThis = () => {
  const answeredCards = categoryProgress[category]?.answeredCards || {};

  if (!answeredCards[currentCardIndex]) {
    updateScore();
    updateProgress(currentCardIndex + 1);

    setCategoryProgress((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        answeredCards: {
          ...answeredCards,
          [currentCardIndex]: true,
        },
      },
    }));

    setFlipped(false);
    // ❌ No disabling here
  }
};

// ✅ "I Don't Know This" button logic
const handleIDontKnowThis = () => {
  const answeredCards = categoryProgress[category]?.answeredCards || {};

  setFlipped(true);
  updateProgress(currentCardIndex + 1);

  setCategoryProgress((prev) => ({
    ...prev,
    [category]: {
      ...prev[category],
      answeredCards: {
        ...answeredCards,
        [currentCardIndex]: true,
      },
    },
  }));

  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
  }

  timeoutRef.current = setTimeout(() => {
    handleNext(); // ✅ Automatically moves to the next card
  }, 10000);

  // ❌ No disabling here
};

// ✅ Navigation logic ensures correct button states
const handleNext = () => {
  if (currentCardIndex < flashcards.length - 1) {
    setCurrentCardIndex(currentCardIndex + 1);
    setFlipped(false);
  } else {
    setShowToast(true);
  }
};

const handlePrevious = () => {
  if (currentCardIndex > 0) {
    setCurrentCardIndex(currentCardIndex - 1);
    updateProgress(currentCardIndex - 1);
    setFlipped(false);
  }
};


  const updateProgress = (newIndex) => {
    const progress = (newIndex / (flashcards.length - 1)) * 100;
    setCategoryProgress((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        progress: progress,
      },
    }));
  };

  const restartFlashcards = () => {
    setCategoryProgress((prev) => ({
      ...prev,
      [category]: {
        score: 0,
        currentCardIndex: 0,
        answeredCards: {},
        progress: 0,
      },
    }));
    setCurrentCardIndex(0);
    setShowToast(false);
    setFlipped(false);
    setIsIKnowThisDisabled(false);
    setIsIDontKnowThisDisabled(false);
    setIsNextDisabled(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="d-flex flex-column align-items-center gap-3 mt-3">
      <div className="d-flex justify-content-center gap-3 flex-wrap">
        <button className="btn btn-primary" onClick={handlePrevious}>
          Previous
        </button>

        <button
          className="btn btn-success"
          onClick={handleIKnowThis}
          disabled={isIKnowThisDisabled}
        >
          I Know This
        </button>

        <button
          className="btn btn-warning text-white"
          onClick={handleIDontKnowThis}
          disabled={isIDontKnowThisDisabled}
        >
          I Don't Know This
        </button>

        <button
          className="btn btn-light"
          style={{ backgroundColor: "#4748ac", color: "white" }}
          onClick={handleNext}
          disabled={isNextDisabled}
        >
          Next
        </button>
      </div>

      

      <ToastContainer position="top-middle" style={{ marginTop: "-230px" }} className="p-3">
        <Toast show={showToast} onClose={() => setShowToast(false)} autohide={false}>
          <Toast.Header style={{ backgroundColor: "#007bff", color: "white" }}>
            <strong className="me-auto">Quiz Completed!</strong>
          </Toast.Header>
          <Toast.Body>
            <p>You have completed {flashcards.length} cards.</p>
            <p>Your final score: <strong>{score}</strong></p>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary me-2" onClick={restartFlashcards}>
                Try Again
              </button>
              <button className="btn btn-secondary" onClick={handleClose}>
                Close
              </button>
            </div>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Controls;
