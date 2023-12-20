import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

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
import { useEffect, useState } from "react";
import axios from "axios";
import QbHome from "./pages/QBank/QbHome/QbHome";
import TryQuiz from "./pages/QBank/TryQuiz";
import "./pages/QBank/QbApp.css";
import StickerFlashCardApp from "./Sticker-Flashcard/src/StickerFlashCardApp";

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
      { path: "qbank", element: <QbApp /> },
      { path: "quiz", element: <Quiz /> },
      { path: "result", element: <Result /> },
      { path: "qbHome", element: <QbHome /> },
      { path: "tryquiz", element: <TryQuiz /> },
      { path: "flashcard", element: <StickerFlashCardApp /> },
    ],
  },
  { index: true, element: <NcllexGPT /> },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <>
        <Route path="/quiz"></Route>
        {/* <Route path="/tryquiz" element={<TryQuiz />} /> */}
      </>
    </RouterProvider>
  );
}

export default App;
