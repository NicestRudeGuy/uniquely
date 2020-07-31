import React, { useState } from "react";
//import axios from "axios";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  //console.log(input);
  const fetchData = (event) => {
    event.preventDefault();
    console.log(input);
    setInput("");
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Uniquely</h1>

        <form className="userForm">
          <input
            placeholder="Username"
            className="inputUserName"
            type="text"
            id="userName"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button
            className="buttonCheck"
            /* disabled={!input}*/
            type="submit"
            variant="contained"
            color="secondary"
            onClick={fetchData}
          >
            Check
          </button>
          <div className="social">
            <div className="fa fa-facebook"></div>
            <div className="fa fa-snapchat-ghost"></div>
            <div className="fa fa-twitter"></div>
            <div className="fa fa-instagram"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
