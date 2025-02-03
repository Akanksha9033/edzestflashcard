import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CategorySelection from "./CategorySelection";
import AgileCategories from "./AgileCategories";
import Flashcard from "./Flashcard";
import Controls from "./Controls";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Tabs from "./Tabs";
import flashcardData from "./flashcardsData";
import agileData from "./agileData";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [category, setCategory] = useState(() => sessionStorage.getItem("selectedCategory") || null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [filteredFlashcards, setFilteredFlashcards] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    return storedDarkMode !== null ? storedDarkMode : false;
  });

  const [categoryProgress, setCategoryProgress] = useState(() => {
    const storedProgress = localStorage.getItem("categoryProgress");
    return storedProgress ? JSON.parse(storedProgress) : {};
  });

  useEffect(() => {
    sessionStorage.setItem("lastRoute", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const lastRoute = sessionStorage.getItem("lastRoute");
    if (lastRoute && location.pathname !== lastRoute) {
      navigate(lastRoute, { replace: true });
    }
  }, [navigate, location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/flashcards" && location.pathname !== "/agile") {
      setCategory(null);
      setFilteredFlashcards([]);
      setCurrentCardIndex(0);
      setFlipped(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (category) {
      const data = location.pathname === "/agile" ? agileData : flashcardData;
      const selectedFlashcards = data.filter((card) => card.category === category);

      setFilteredFlashcards(selectedFlashcards.length > 0 ? selectedFlashcards : []);
      setCurrentCardIndex(categoryProgress[category]?.currentCardIndex || 0);

      if (!categoryProgress[category]) {
        setCategoryProgress((prev) => ({
          ...prev,
          [category]: { score: 0, answeredCards: {}, currentCardIndex: 0 },
        }));
      }
    }
  }, [category]);

  useEffect(() => {
    localStorage.setItem("categoryProgress", JSON.stringify(categoryProgress));
  }, [categoryProgress]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const getScore = () => (category && categoryProgress[category] ? categoryProgress[category].score || 0 : 0);
  const progress = filteredFlashcards.length > 0 ? (getScore() / filteredFlashcards.length) * 100 : 0;

  const updateScore = () => {
    if (!category) return;
    setCategoryProgress((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        score: prev[category].score + 1,
        answeredCards: { ...prev[category].answeredCards, [currentCardIndex]: true },
      },
    }));
  };

  const restartFlashcards = () => {
    setCategoryProgress((prev) => ({
      ...prev,
      [category]: { score: 0, answeredCards: {}, currentCardIndex: 0 },
    }));
    setCurrentCardIndex(0);
    setFlipped(false);
    setShowPopup(false);
  };

  const handleCategorySelection = (selectedCategory) => {
    setCategory(selectedCategory);
    sessionStorage.setItem("selectedCategory", selectedCategory);
  };

  return (
    <div style={{ backgroundColor: darkMode ? "#000" : "#fff", color: darkMode ? "#fff" : "#000", minHeight: "100vh" }}>
      <Navbar setIsSidebarOpen={setIsSidebarOpen} darkMode={darkMode} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        clearScore={restartFlashcards}
        toggleDarkMode={() => setDarkMode((prevMode) => !prevMode)}
        darkMode={darkMode}
      />

      <Tabs category={category} />

      <div className="container">
        {location.pathname === "/process-groups" && !category ? (
          <CategorySelection setCategory={handleCategorySelection} />
        ) : location.pathname === "/agile" && !category ? (
          <AgileCategories setCategory={handleCategorySelection} />
        ) : (
          <div>
            {category && (
              <>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <h3 className="text-align-center" style={{ color: "#4748ac" }}>{category} Set</h3>
                </div>

                <div className="mt-3 mx-auto text-center" style={{ maxWidth: "500px" }}>
                  <div className="d-flex justify-content-between">
                    <span>Score: {getScore()}</span>
                    <span>Progress: {Math.round(progress)}%</span>
                  </div>
                  <div className="progress mt-2" style={{ height: "20px", width: "100%" }}>
                    <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }}></div>
                  </div>
                </div>

                {filteredFlashcards.length > 0 ? (
                  <>
                    <Flashcard
                      currentCard={filteredFlashcards[Math.min(currentCardIndex, filteredFlashcards.length - 1)]}
                      flipped={flipped}
                      setFlipped={setFlipped}
                      darkMode={darkMode}
                      currentCardIndex={currentCardIndex}
                    />
                    <Controls
                      currentCardIndex={Math.min(currentCardIndex, filteredFlashcards.length - 1)}
                      setCurrentCardIndex={setCurrentCardIndex}
                      score={getScore()}
                      updateScore={updateScore}
                      flashcards={filteredFlashcards}
                      setCategoryProgress={setCategoryProgress}
                      categoryProgress={categoryProgress}
                      setFlipped={setFlipped}
                      setShowPopup={setShowPopup}
                    />
                  </>
                ) : (
                  <p className="text-danger mt-4">No flashcards available for this category.</p>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h4>Quiz Completed!</h4>
            <p>Your score is {getScore()} out of {filteredFlashcards.length}</p>
            <button className="btn btn-primary me-2" onClick={restartFlashcards}>Try Again</button>
            <button className="btn btn-secondary" onClick={() => navigate("/flashcards")}>Go Back to Flashcards</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
