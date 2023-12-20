import React, { useState, useEffect, useCallback } from "react";
// import QbFooter from "../../components/qBank/qB-Footer/Qb-Footer";
import QbHeader from "../../components/qBank/qB-Header/Qb-Header";
import "../../components/qBank/qB-Header/qB-header.css";
import "./QbApp.css";
import QbHome from "./QbHome/QbHome";
import axios from "axios";
import Quiz from "./Quiz/Quiz";
import Result from "./Result/Result";
import Footer from "../../components/footer/footer";
// import Header from "../../components/common/header/Header";
import CustomNavbar from "../../components/navbar/navbar";

function QbApp() {
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);

  const fetchQuestions = useCallback(async (category = "", difficulty = "") => {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=13&type=multiple`
      );

      console.log("Data from API:", data); // Log the data from the API

      setQuestions(data.results);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await fetchQuestions(); // Assuming fetchQuestions returns a Promise

      return () => {};
    };

    fetchData();
  }, [fetchQuestions]);

  return (
    <>
      <div className="fixed-page">
        <CustomNavbar />
        <div className="app-qb" style={{ backgroundImage: 'url("/ques.png")' }}>
          <QbHeader />
          <QbHome
            name={name}
            setName={setName}
            fetchQuestions={fetchQuestions}
          />

          <Quiz
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />

          <Result name={name} score={score} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default QbApp;
