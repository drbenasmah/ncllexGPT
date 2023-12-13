import React, { useState, useEffect } from "react";
import QbFooter from "../../components/qBank/qB-Footer/Qb-Footer";
import QbHeader from "../../components/qBank/qB-Header/Qb-Header";
import "../../components/qBank/qB-Header/qB-header.css";
import "./QbApp.css";
import QbHome from "./QbHome/QbHome";
import axios from "axios";
import Quiz from "./Quiz/Quiz";
import Result from "./Result/Result";

function QbApp() {
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=13&type=multiple`
      );

      console.log("Data from API:", data); // Log the data from the API

      setQuestions(data.results);

      console.log("dataResults in fetchQuestions:", data.results); // Log the questions
      console.log("Questions in QbApp:", questions);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("QbApp component mounted");

      await fetchQuestions(); // Assuming fetchQuestions returns a Promise

      console.log("useEff Questions in QbApp:", questions);

      return () => {
        console.log("QbApp component unmounted");
      };
    };

    fetchData();
  }, [questions]);

  console.log("Outside useEffect - Questions:", questions);
  return (
    <>
      <div className="app-qb" style={{ backgroundImage: 'url("/ques1.png")' }}>
        <QbHeader />
        <QbHome name={name} setName={setName} fetchQuestions={fetchQuestions} />
        {questions.length > 0 && (
          <Quiz
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        )}
        <Result name={name} score={score} />
      </div>
      <QbFooter />
    </>
  );
}

export default QbApp;
