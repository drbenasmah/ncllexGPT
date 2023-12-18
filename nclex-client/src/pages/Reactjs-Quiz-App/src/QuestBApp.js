import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}>
        <Header />
        <Switch>
          <Route path="/quesbankhome" exact>
            <QuesBankHome
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path="/quiz">
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route path="/result">
            <Result name={name} score={score} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// QBank imports
// import QbHome from "./pages/QBank/QbHome/QbHome";
// import axios from "axios";
// import { useState } from "react";
// // import { BrowserRouter, Route, Switch } from "react-router-dom";
// import "./pages/QBank/QbApp.css";
// import QbFooter from "../src/components/qBank/qB-Footer/Qb-Footer";
// import QbHeader from "../src/components/qBank/qB-Header/Qb-Header";
// import Quiz from "./pages/QBank/Quiz/Quiz";
// import Result from "./pages/QBank/Result/Result";



import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./components/web-feat/webApp.css"; // Assuming this is required for your main app styling

import QbHome from "./pages/QBank/QbHome/QbHome";
import Header from "./components/common/header/Header";
import Footer from "./components/common/web-footer/Footer";

// ... (other imports)

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  // Assuming createBrowserRouter is used to create your main app's router
  const mainAppRouter = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />, // Assuming you have an ErrorPage component
      children: [
        { path: "home", element: <Home name={name} setName={setName} fetchQuestions={fetchQuestions} /> },
        { path: "about", element: <About /> },
        { path: "courses", element: <CourseHome /> },
        { path: "team", element: <Team /> },
        { path: "pricing", element: <Pricing /> },
        { path: "blog", element: <Blog /> },
        { path: "contact", element: <Contact /> },
        { index: true, element: <NcllexGPT /> },
      ],
    },
    // Add other routes as needed
  ]);

  return (
    <RouterProvider router={mainAppRouter}>
      <Header />
      {/* Routes for the Quiz App */}
      <Route path="/quiz" exact>
        <QbHome name={name} setName={setName} fetchQuestions={fetchQuestions} />
      </Route>
      <Route path="/quiz/quiz">
        <Quiz name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions} />
      </Route>
      <Route path="/quiz/result">
        <Result name={name} score={score} />
      </Route>
      <Footer />
    </RouterProvider>
  );
}

export default App;

