const PORT = 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

const API_KEY = process.env.API_KEY;
app.post("/completions", async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.body.message }],
      max_tokens: 100,
    }),
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log("Your server is running on PORT " + PORT));

// firebase

// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, push } from "firebase/app";

// const appSettings = {
//   databaseurl:
//     "https://ncllexgpt-default-rtdb.europe-west1.firebasedatabase.app/",
// };
// const firebaseApp = initializeApp(appSettings);

// const database = getDatabase(firebaseApp);

// const conversationInDb = ref(database);

// const PORT = 8000;
// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const app = express();

// app.use(express.json());
// app.use(cors());

// //
// const conversationRef = ref(database, "conversations");

// const API_KEY = process.env.API_KEY;
// app.post("/completions", async (req, res) => {
//   const userMessage = req.body.message;

//   const userMessageRef = push(conversationRef, {
//     role: "user",
//     content: userMessage,
//   });

//   const options = {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${API_KEY}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: req.body.message }],
//       max_tokens: 100,
//     }),
//   };

//   try {
//     const response = await fetch(
//       "https://api.openai.com/v1/chat/completions",
//       options
//     );
//     const data = await response.json();
//     res.send(data);
//   } catch (error) {
//     console.error(error);
//   }
// });

// app.listen(PORT, () => console.log("Your server is running on PORT " + PORT));
