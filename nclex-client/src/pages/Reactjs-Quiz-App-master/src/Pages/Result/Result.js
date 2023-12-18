import { useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Result.css";

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/quesbankhome");
    }
  }, [name, navigate]);

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        // href="/"
        onClick={() => navigate("/quesbankhome")}
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;

// QbResult.js

// import { useEffect } from "react";

// import "./Result.css";
// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const Result = ({ name, score }) => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!name) {
//       navigate("/qbank");
//     }
//   }, [name, navigate]);

//   return (
//     <div className="result">
//       <span className="title">Final Score : {score}</span>
//       <Button
//         variant="contained"
//         color="secondary"
//         size="large"
//         style={{ alignSelf: "center", marginTop: 20 }}
//         href="/qbank"
//       >
//         Go to homepage
//       </Button>
//     </div>
//   );
// };

// export default Result;
