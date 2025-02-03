import React from "react";
import DummyCard from "./DummyCardSection"; // Assuming the DummyCard is in the same folder

const DummyCardSection = ({ onCardClick }) => {
  return (
    <div className="d-flex justify-content-center mt-5">
      {/* Display the Dummy Card to start */}
      <DummyCard onCardClick={onCardClick} />
    </div>
  );
};

export default DummyCardSection;
