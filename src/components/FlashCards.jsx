import React, { useState } from "react";
import questions from "../data";

const FlashCards = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id !== selectedId ? id : null);
  };

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          className={question.id === selectedId ? "selected" : ""}
          onClick={() => handleClick(question.id)}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FlashCards;
