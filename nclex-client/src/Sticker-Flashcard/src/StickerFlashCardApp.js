import React, { useState, useEffect, useRef } from "react";
import FlashcardList from "./FlashcardList";
import "./stickerFlashCardApp.css";
import axios from "axios";
import CustomNavbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

function StickerFlashCardApp() {
  const [flashcards, setFlashcards] = useState([]);
  const [categories, setCategories] = useState([]);

  const categoryEl = useRef();
  const amountEl = useRef();

  useEffect(() => {
    document.body.id = "sticker-flashcard-app";
    return () => {
      document.body.id = "";
    };
  }, []);

  useEffect(() => {
    axios.get("https://opentdb.com/api_category.php").then((res) => {
      setCategories(res.data.trivia_categories);
    });
  }, []);

  useEffect(() => {}, []);

  function decodeString(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get("https://opentdb.com/api.php", {
        params: {
          amount: amountEl.current.value,
          category: categoryEl.current.value,
        },
      })
      .then((res) => {
        setFlashcards(
          res.data.results.map((questionItem, index) => {
            const answer = decodeString(questionItem.correct_answer);
            const options = [
              ...questionItem.incorrect_answers.map((a) => decodeString(a)),
              answer,
            ];
            return {
              id: `${index}-${Date.now()}`,
              question: decodeString(questionItem.question),
              answer: answer,
              options: options.sort(() => Math.random() - 0.5),
            };
          })
        );
      });
  }

  return (
    <>
      <div className="background-container">
        <CustomNavbar />
        <form className="flashcard-header" onSubmit={handleSubmit}>
          <div className="flashcard-form-group">
            <label htmlFor="category">Category</label>
            <select id="category" ref={categoryEl}>
              {categories.map((category) => {
                return (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flashcard-form-group">
            <label htmlFor="amount">Number of Questions</label>
            <input
              type="number"
              id="amount"
              min="1"
              step="1"
              defaultValue={10}
              ref={amountEl}
              className="flashcard-input"
            />
          </div>
          <div className="flashcard-form-group">
            <button className="flashcard-btn">Generate</button>
          </div>
        </form>
        <div className="flashcard-container">
          <FlashcardList flashcards={flashcards} />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default StickerFlashCardApp;
