import React, { useState } from "react";
import QbFooter from "../../components/qBank/qB-Footer/Qb-Footer";
import QbHeader from "../../components/qBank/qB-Header/Qb-Header";
import "../../components/qBank/qB-Header/qB-header.css";
import "./QbApp.css";
import QbHome from "./QbHome/QbHome";

function QbApp() {
  const [name, setName] = useState();

  const fetchQuestions = () => {};
  return (
    <>
      <div className="app-qb" style={{ backgroundImage: 'url("/ques1.png")' }}>
        <QbHeader />
        <QbHome name={name} setName={setName} fetchQuestions={fetchQuestions} />
        {/* <Result /> */}
      </div>
      <QbFooter />
    </>
  );
}

export default QbApp;
