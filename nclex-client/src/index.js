// index.js

import React from "react";
import ReactDOM from "react-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import CustomNavbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <CustomNavbar />
      <App />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// freecodecamp tutorial

// import { Configuration, OpenAIApi } from "openai";
// import { process } from "./env";

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// const chatbotConversation = document.getElementById("chatbot-conversation");

// document.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const userInput = document.getElementById("user-input");
//   const newSpeechBubble = document.createElement("div");
//   newSpeechBubble.classList.add("speech", "speech-human");
//   chatbotConversation.appendChild(newSpeechBubble);
//   newSpeechBubble.textContent = userInput.value;
//   userInput.value = "";
//   chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
// });

// function renderTypewriterText(text) {
//   const newSpeechBubble = document.createElement("div");
//   newSpeechBubble.classList.add("speech", "speech-ai", "blinking-cursor");
//   chatbotConversation.appendChild(newSpeechBubble);
//   let i = 0;
//   const interval = setInterval(() => {
//     newSpeechBubble.textContent += text.slice(i - 1, i);
//     if (text.length === i) {
//       clearInterval(interval);
//       newSpeechBubble.classList.remove("blinking-cursor");
//     }
//     i++;
//     chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
//   }, 50);
// }