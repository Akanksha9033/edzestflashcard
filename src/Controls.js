// import React, { useState } from "react";

// const Controls = ({
//   currentCardIndex,
//   setCurrentCardIndex,
//   score,
//   updateScore,
//   flashcards,
//   setCategoryProgress,
//   categoryProgress,
  
// }) => {
//   const [hasAnswered, setHasAnswered] = useState(false);
//   const [isIKnowThisDisabled, setIsIKnowThisDisabled] = useState(false);

//   const handleNext = () => {
//     if (currentCardIndex < flashcards.length - 1) {
//       setCurrentCardIndex((prev) => prev + 1);
//       setHasAnswered(false);
//       setIsIKnowThisDisabled(false);
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
//     updateScore();
//     setCategoryProgress((prev) => {
//       const updatedProgress = {
//         ...prev,
//         [flashcards[currentCardIndex].id]: { answered: "I Know This" },
//         score: prev.score + 1,
//         currentCardIndex: currentCardIndex + 1, // Move to next card after answering
//       };
//       return updatedProgress;
//     });
//     setHasAnswered(true);
//     setIsIKnowThisDisabled(true);
//     handleNext(); // Move to next card immediately after answering
//   };

//   const handleDontKnow = () => {
//     setCategoryProgress((prev) => {
//       const updatedProgress = {
//         ...prev,
//         [flashcards[currentCardIndex].id]: { answered: "I Don't Know This" },
//         currentCardIndex: currentCardIndex + 1, // Immediately move to next card after pressing "I Don't Know This"
//       };
//       return updatedProgress;
//     });
//     setHasAnswered(true); // Disable further answers until next card
//     setIsIKnowThisDisabled(true); // Disable "I Know This"
//     handleNext(); // Move to next card immediately
//   };

//   return (
//     <div className="d-flex justify-content-center gap-3 mt-3">
//       <button className="btn btn-primary" onClick={handlePrevious} disabled={currentCardIndex === 0}>
//         Previous
//       </button>

//       <button className="btn btn-success" onClick={handleKnowThis} disabled={isIKnowThisDisabled || hasAnswered || score >= flashcards.length}>
//         I Know This
//       </button>

//       <button className="btn btn-danger" onClick={handleDontKnow} disabled={hasAnswered}>
//         I Don't Know This
//       </button>

//       <button className="btn btn-warning" onClick={handleNext}>
//         Next
//       </button>
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
//   setActiveTab, // Add this to switch back to flashcard tab
// }) => {
//   const [hasAnswered, setHasAnswered] = useState(false);
//   const [isIKnowThisDisabled, setIsIKnowThisDisabled] = useState(false);
//   const [showToast, setShowToast] = useState(false); // Using Toast instead of Popup

//   const navigate = useNavigate(); // Initialize useNavigate hook

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
//       // Ensure the score is valid
//       const currentScore = score || 0; // Initialize score if undefined

//       updateScore(); // Make sure score is updated here
//       setCategoryProgress((prev) => {
//         const updatedProgress = {
//           ...prev,
//           [flashcards[currentCardIndex].id]: { answered: "I Know This" },
//           score: currentScore + 1, // Increment score correctly
//           currentCardIndex: currentCardIndex + 1,
//         };
//         return updatedProgress;
//       });
//       setHasAnswered(true);
//       setIsIKnowThisDisabled(true);

//       if (currentCardIndex === flashcards.length - 1) {
//         setShowToast(true); // Show toast when last card is answered
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

//     if (currentCardIndex === flashcards.length - 1) {
//       setShowToast(true);
//     } else {
//       handleNext();
//     }
//   };

//   const restartFlashcards = () => {
//     // Reinitialize categoryProgress for this category on reset
//     setCategoryProgress((prev) => ({
//       ...prev,
//       [flashcards[0].category]: { // Reinitialize for the category
//         score: 0, // Reset score to 0
//         currentCardIndex: 0, // Reset to first card index
//         answeredCards: {}, // Reset answered cards
//       },
//     }));

//     setCurrentCardIndex(0); // Reset to the first card
//     setShowToast(false); // Close the toast
//     setHasAnswered(false); // Ensure that no card is answered
//     setIsIKnowThisDisabled(false); // Re-enable the buttons for interaction
//   };

//   const handleClose = () => {
//     navigate("/"); // Navigate to the Flashcards tab
//   };

//   return (
//     <div className="d-flex justify-content-center gap-3 mt-3">
//       <button className="btn btn-primary" onClick={handlePrevious} disabled={currentCardIndex === 0}>
//         Previous
//       </button>

//       <button className="btn btn-success" onClick={handleKnowThis} disabled={isIKnowThisDisabled || hasAnswered || score >= flashcards.length}>
//         I Know This
//       </button>

//       <button className="btn btn-danger" onClick={handleDontKnow} disabled={hasAnswered}>
//         I Don't Know This
//       </button>

//       <button className="btn btn-warning" onClick={handleNext}>
//         Next
//       </button>

//       {/* Bootstrap Toaster for quiz completion */}
//       <ToastContainer position="top-end" className="p-3">
//   <Toast 
//     show={showToast} 
//     onClose={() => setShowToast(false)} 
//     autohide={false} 
//     bg="light" 
//     style={{ 
//       borderRadius: '10px', 
//       boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
//       maxWidth: '400px', 
//       padding: '20px', 
//       fontFamily: 'Arial, sans-serif'
//     }}>
//     <Toast.Header style={{ backgroundColor: '#007bff', color: 'white', borderRadius: '8px' }}>
//       <strong className="me-auto">Quiz Completed!</strong>
//     </Toast.Header>
//     <Toast.Body style={{ backgroundColor: '#f8f9fa', color: '#495057', borderRadius: '8px' }}>
//       <p>Your score is {score} out of {flashcards.length}</p>
//       <div className="d-flex justify-content-end">
//         <button 
//           className="btn btn-primary me-2" 
//           onClick={restartFlashcards} 
//           style={{ 
//             borderRadius: '5px', 
//             padding: '8px 16px', 
//             fontSize: '14px', 
//             backgroundColor: '#007bff', 
//             border: 'none'
//           }}>
//           Try Again
//         </button>
//         <button 
//           className="btn btn-secondary" 
//           onClick={handleClose} 
//           style={{ 
//             borderRadius: '5px', 
//             padding: '8px 16px', 
//             fontSize: '14px', 
//             backgroundColor: '#6c757d', 
//             border: 'none'
//           }}>
//           Close
//         </button>
//       </div>
//     </Toast.Body>
//   </Toast>
// </ToastContainer>

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


import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap"; // Import Bootstrap Toast
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const Controls = ({
  currentCardIndex,
  setCurrentCardIndex,
  score,
  updateScore,
  flashcards,
  setCategoryProgress,
  categoryProgress,
  setFlipped,  // Receive setFlipped as a prop
  setShowPopup, // Add this to switch back to flashcard tab
}) => {
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isIKnowThisDisabled, setIsIKnowThisDisabled] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();

  const handleNext = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex((prev) => prev + 1);
      setHasAnswered(false);
      setIsIKnowThisDisabled(false);
    } else {
      setShowToast(true); // Show toast when last card is answered
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      const prevCardIndex = currentCardIndex - 1;
      setCurrentCardIndex(prevCardIndex);
      const previousCardId = flashcards[prevCardIndex].id;
      const wasAnswered = categoryProgress[previousCardId]?.answered;

      if (wasAnswered) {
        setHasAnswered(true); // Enable Next button when user goes back to an answered card
        setIsIKnowThisDisabled(true);
      } else {
        setHasAnswered(false); // If not answered, Next button will be disabled
        setIsIKnowThisDisabled(false);
      }
    }
  };

  const handleKnowThis = () => {
    if (currentCardIndex < flashcards.length) {
      const currentScore = score || 0;

      updateScore();
      setCategoryProgress((prev) => {
        const updatedProgress = {
          ...prev,
          [flashcards[currentCardIndex].id]: { answered: "I Know This" },
          score: currentScore + 1,
          currentCardIndex: currentCardIndex + 1,
        };
        return updatedProgress;
      });
      setHasAnswered(true);
      setIsIKnowThisDisabled(true);

      // Flip back to question after answering
      setFlipped(false);  // Reset the flip state to show question

      if (currentCardIndex === flashcards.length - 1) {
        setShowToast(true);
      } else {
        handleNext();
      }
    }
  };

  const handleDontKnow = () => {
    setCategoryProgress((prev) => {
      const updatedProgress = {
        ...prev,
        [flashcards[currentCardIndex].id]: { answered: "I Don't Know This" },
        currentCardIndex: currentCardIndex + 1,
      };
      return updatedProgress;
    });
    setHasAnswered(true);
    setIsIKnowThisDisabled(true);

    // Flip back to question after answering
    setFlipped(false);  // Reset the flip state to show question

    if (currentCardIndex === flashcards.length - 1) {
      setShowToast(true);
    } else {
      handleNext();
    }
  };

  const restartFlashcards = () => {
    setCategoryProgress((prev) => ({
      ...prev,
      [flashcards[0].category]: {
        score: 0,
        currentCardIndex: 0,
        answeredCards: {},
      },
    }));

    setCurrentCardIndex(0);
    setShowToast(false);
    setHasAnswered(false);
    setIsIKnowThisDisabled(false);
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center gap-3 mt-3">
      <button className="btn btn-primary" onClick={handlePrevious} disabled={currentCardIndex === 0}>
      <i class="fa-solid fa-arrow-left"></i>
      </button>

      <button className="btn btn-success" onClick={handleKnowThis} disabled={isIKnowThisDisabled || hasAnswered || score >= flashcards.length}>
      <i class="fa-solid fa-check"></i>
      </button>

      <button className="btn btn-danger" onClick={handleDontKnow} disabled={hasAnswered}>
      <i class="fa-solid fa-xmark"></i>
      </button>

      {/* 🚀 Disabled Next button until an answer is given */}
      <button className="btn btn-light" style={{ backgroundColor: "#4748ac" }} onClick={handleNext} disabled={!hasAnswered}>
      <i class="fa-solid fa-arrow-right"></i>
      </button> 

      {/* Toast notification */}
      <ToastContainer position="top-end" className="p-3">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          autohide={false}
          bg="light"
          style={{
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
            padding: "20px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <Toast.Header style={{ backgroundColor: "#007bff", color: "white", borderRadius: "8px" }}>
            <strong className="me-auto">Quiz Completed!</strong>
          </Toast.Header>
          <Toast.Body style={{ backgroundColor: "#f8f9fa", color: "#495057", borderRadius: "8px" }}>
            <p>Your score is {score} out of {flashcards.length}</p>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-primary me-2"
                onClick={restartFlashcards}
                style={{
                  borderRadius: "5px",
                  padding: "8px 16px",
                  fontSize: "14px",
                  backgroundColor: "#007bff",
                  border: "none",
                }}
              >
                Try Again
              </button>
              <button
                className="btn btn-secondary"
                onClick={handleClose}
                style={{
                  borderRadius: "5px",
                  padding: "8px 16px",
                  fontSize: "14px",
                  backgroundColor: "#6c757d",
                  border: "none",
                }}
              >
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


