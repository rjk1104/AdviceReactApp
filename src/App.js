import React, { useState, useEffect } from "react";

import "../src/App.css";

const App = () => {
  const [advice, setAdvice] = useState("");
  const getAdvice = async () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((res) => {
        console.log("Output: ", res.slip.advice);
        setAdvice(res.slip.advice);
      });
  };
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="cardBody">
          <h2>{advice}</h2>
          <button onClick={getAdvice} className="btn">
            Get New Advice
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
