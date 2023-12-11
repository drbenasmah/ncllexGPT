import { useState, useEffect } from "react";

import { RiFileCopyLine } from "react-icons/ri";
import CustomNavbar from "../../components/navbar/navbar";
import "./ncllexGPT.css";

const NcllexGPT = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);

  const [clearInput, setClearInput] = useState(false);

  const createNewChat = () => {
    setMessage(null);
    setValue("");
    setCurrentTitle(null);
  };

  const handleClick = (uniqueTitles) => {
    setCurrentTitle(uniqueTitles);
    setMessage(null);
    setValue("");
  };

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value,
      }),
      headers: { "Content-Type": "application/json" },
    };
    try {
      const response = await fetch(
        "http://localhost:8000/completions",
        options
      );
      const data = await response.json();

      setMessage(data.choices[0].message);
      // setValue("");
      setClearInput(true);
    } catch (error) {
      console.error(error);
    }
  };

  // overflow hidden

  useEffect(() => {
    // Apply the no-overflow class to the body when the component mounts
    document.body.classList.add("no-overflow");

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("no-overflow");
    };
  }, []);

  // ov
  useEffect(() => {
    // console.log(currentTitle, value, message);
    if (!currentTitle && value && message) {
      setCurrentTitle(value);
    }
    if (currentTitle && value && message) {
      setPreviousChats((prevChats) => [
        ...prevChats,
        {
          title: currentTitle,
          role: (
            <img
              src={process.env.PUBLIC_URL + "/user-images.jpeg"}
              alt="Ncllex Logo"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
          ),
          content: value,
        },
        {
          title: currentTitle,
          role: (
            <img
              src={process.env.PUBLIC_URL + "/logo192.png"}
              alt="Ncllex Logo"
              style={{ width: "50px", height: "50px" }}
            />
          ),
          content: message.content,
        },
      ]);
      if (clearInput) {
        setValue(""); // clear the input value
        setClearInput(false); // reset the state
      }
    }
  }, [message, currentTitle]);
  // console.log(previousChats);
  const currentChat = previousChats.filter(
    (previousChats) => previousChats.title === currentTitle
  );
  const uniqueTitles = Array.from(
    new Set(previousChats.map((previousChats) => previousChats.title))
  );
  // console.log(uniqueTitles);

  const handleCopyClick = (content) => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className="no-overflow">
      <CustomNavbar />
      <div className="app">
        <section className="side-bar">
          <button className="button-sidebar" onClick={createNewChat}>
            + New chat{" "}
          </button>
          <ul className="history">
            {uniqueTitles?.map((uniqueTitles, index) => (
              <li key={index} onClick={() => handleClick(uniqueTitles)}>
                {uniqueTitles}
              </li>
            ))}
          </ul>
          <nav>
            <p>Made by Benasco</p>
          </nav>
        </section>
        <section className="main">
          {/* added this div for flexing span and h1 */}
          <div>
            {!currentTitle && <h1>NcllexGPT</h1>}
            <span>Nursing College Exam GPT</span>
          </div>
          <ul className="feed">
            {currentChat?.map((chatMessage, index) => (
              <li key={index}>
                <div className="message-container">
                  <p className="role">{chatMessage.role}</p>
                  <div className="content-container">
                    <p className="message">{chatMessage.content}</p>
                    <RiFileCopyLine
                      className="copy-icon"
                      onClick={() => handleCopyClick(chatMessage.content)}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="bottom-section">
            <div className="input-container">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Message NcllexGPT..."
              />

              <div id="submit" onClick={getMessages}>
                ➢
              </div>
            </div>
            <p className="info">
              ⚠️ Disclaimer: NclexGPT's responses are for educational purposes
              only. Not intended as medical advice.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NcllexGPT;
