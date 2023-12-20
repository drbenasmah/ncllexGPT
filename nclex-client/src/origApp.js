// // try
// import {
//   BrowserRouter,
//   createBrowserRouter,
//   Route,
//   RouterProvider,
//   Routes,
// } from "react-router-dom";

// import ErrorPage from "./pages/Error";
// import NcllexGPT from "./pages/NcllexGPT/NcllexGPT";

// import RootLayout from "./pages/Root";
// import Home from "./components/home/Home";

// import About from "./components/about/About";
// import CourseHome from "./components/allcourses/CourseHome";
// import Team from "./components/team/Team";
// import Pricing from "./components/pricing/Pricing";
// import Blog from "./components/blog/Blog";
// import Contact from "./components/contact/Contact";
// import "./components/web-feat/webApp.css";
// import Header from "./components/common/header/Header";
// import Footer from "./components/common/web-footer/Footer";

// // QBank imports
// import QbHeader from "./components/qBank/qB-Header/Qb-Header";
// import QbFooter from "./components/qBank/qB-Footer/Qb-Footer";
// import QbApp from "./pages/QBank/QbApp";
// import Result from "./pages/QBank/Result/Result";
// import Quiz from "./pages/QBank/Quiz/Quiz";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import QbHome from "./pages/QBank/QbHome/QbHome";
// import TryQuiz from "./pages/QBank/TryQuiz";
// // import "./pages/QBank/QbApp.css";

// function App() {
//   const [questions, setQuestions] = useState();
//   const [name, setName] = useState();
//   const [score, setScore] = useState(0);

//   const fetchQuestions = async (category = "", difficulty = "") => {
//     const { data } = await axios.get(
//       `https://opentdb.com/api.php?amount=10${
//         category && `&category=${category}`
//       }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
//     );

//     setQuestions(data.results);
//   };
//   return (
//     <BrowserRouter>
//       {/* <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}> */}
//       {/* <Header /> */}
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/courses" element={<CourseHome />} />
//         <Route path="/team" element={<Team />} />
//         <Route path="/pricing" element={<Pricing />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/contact" element={<Contact />} />
//         {/* Uncomment the lines below to include these routes */}
//         <Route path="/qbank" element={<QbApp />} />
//         <Route
//           path="/quiz"
//           element={
//             <Quiz
//               name={name}
//               questions={questions}
//               score={score}
//               setScore={setScore}
//               setQuestions={setQuestions}
//             />
//           }
//         />
//         <Route path="/result" element={<Result />} />
//         <Route path="/qbHome" element={<QbHome />} />
//         <Route path="/tryquiz" element={<TryQuiz />} />
//       </Routes>
//       {/* </div> */}
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;
