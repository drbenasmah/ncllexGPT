// FlashcardApp.js
import React, { useState } from "react";
import "./flashcard.css";

const FlashcardApp = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [cards, setCards] = useState([]);

  const handleAddFlashcard = () => {
    setFormVisible(true);
    setEditMode(false);
    setQuestionText("");
    setAnswerText("");
    setErrorMessageVisible(false);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
    if (editMode) {
      setEditMode(false);
      handleSaveFlashcard();
    }
  };

  const handleSaveFlashcard = () => {
    const trimmedQuestion = questionText.trim();
    const trimmedAnswer = answerText.trim();

    if (!trimmedQuestion || !trimmedAnswer) {
      setErrorMessageVisible(true);
    } else {
      setFormVisible(false);
      setErrorMessageVisible(false);
      setCards([
        ...cards,
        { question: trimmedQuestion, answer: trimmedAnswer, showAnswer: false },
      ]);
      setQuestionText("");
      setAnswerText("");
    }
  };

  const handleShowHideAnswer = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].showAnswer = !updatedCards[index].showAnswer;
    setCards(updatedCards);
  };

  const handleEditCard = (index) => {
    setFormVisible(true);
    setEditMode(true);
    setQuestionText(cards[index].question);
    setAnswerText(cards[index].answer);
    setErrorMessageVisible(false);
    handleDeleteCard(index);
  };

  const handleDeleteCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  return (
    <div className="flashcard-container">
      <div className="add-flashcard-con">
        <button onClick={handleAddFlashcard}>Add Flashcard</button>
      </div>

      <div className="card-con">
        <div className="card-list-container">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <p className="question-div">{card.question}</p>
              <p className={`answer-div ${card.showAnswer ? "" : "hide"}`}>
                {card.answer}
              </p>
              <div className="buttons-con">
                <button className="edit" onClick={() => handleEditCard(index)}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  className="delete"
                  onClick={() => handleDeleteCard(index)}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
                <button
                  className="show-hide"
                  onClick={() => handleShowHideAnswer(index)}
                >
                  {card.showAnswer ? "Hide Answer" : "Show Answer"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isFormVisible && (
        <div className="question-container">
          <h2>{editMode ? "Edit Flashcard" : "Add Flashcard"}</h2>
          <div className="wrapper">
            <div className="error-con">
              <span
                className={`hide ${errorMessageVisible ? "" : "hide"}`}
                id="error"
              >
                Input fields cannot be empty!
              </span>
            </div>
            <i className="fa-solid fa-xmark" onClick={handleCloseForm}></i>
          </div>

          <label htmlFor="question">Question:</label>
          <textarea
            className="input"
            id="question"
            placeholder="Type the question here..."
            rows="2"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          ></textarea>
          <label htmlFor="answer">Answer:</label>
          <textarea
            className="input"
            id="answer"
            rows="4"
            placeholder="Type the answer here..."
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
          ></textarea>
          <button onClick={handleSaveFlashcard}>
            {editMode ? "Update" : "Save"}
          </button>
        </div>
      )}
    </div>
  );
};

export default FlashcardApp;
