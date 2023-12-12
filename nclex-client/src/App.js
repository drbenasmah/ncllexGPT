import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/Error";
import NcllexGPT from "./pages/NcllexGPT/NcllexGPT";

import RootLayout from "./pages/Root";
import Home from "./components/home/Home";

import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import "./components/web-feat/webApp.css";
import Header from "./components/common/header/Header";
import Footer from "./components/common/web-footer/Footer";

// QBank imports
import QbHeader from "./components/qBank/qB-Header/Qb-Header";
import QbFooter from "./components/qBank/qB-Footer/Qb-Footer";
import QbApp from "./pages/QBank/QbApp";
import Result from "./pages/QBank/Result/Result";
import Quiz from "./pages/QBank/Quiz/Quiz";
import { useState } from "react";
import axios from "axios";
import QbHome from "./pages/QBank/QbHome/QbHome";
// import "./pages/QBank/QbApp.css";

const router = createBrowserRouter([
  {
    path: "/",

    errorElement: <ErrorPage />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "courses", element: <CourseHome /> },
      { path: "team", element: <Team /> },
      { path: "pricing", element: <Pricing /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
      // { path: "qbank", element: <QbApp /> },
      { path: "quiz", element: <Quiz /> },
      { path: "result", element: <Result /> },
      { path: "qbHome", element: <QbHome /> },
    ],
  },
  { index: true, element: <NcllexGPT /> },
]);

function App() {
  const [name, setName] = useState("");
  const fetchQuestions = () => {};

  return (
    <RouterProvider router={router}>
      <>
        <div
          className="app-qb"
          style={{ backgroundImage: 'url("/ques1.png")' }}
        >
          <QbHeader />
          <QbHome
            name={name}
            setName={setName}
            fetchQuestions={fetchQuestions}
          />
          {/* <Result /> */}
        </div>
        <QbFooter />
      </>
    </RouterProvider>
  );
}

export default App;
