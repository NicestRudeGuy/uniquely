import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  //console.log(input);
  const checkUserName = (event) => {
    event.preventDefault();
    console.log(input);
    //find a regex that allows current username standards
    const userRegex = /^[^0-9][a-zA-Z0-9_]+$/;
    if (!userRegex.test(input)) {
      alert("User name cant start with a no");
    } else {
      fetchUserNames(input);
    }
    setInput("");
  };

  const fetchUserNames = async () => {

    try {
      const resInsta = await axios.get(`https://instagram.com/${input}`);
      document.querySelector(".fa-instagram").style.filter = "grayscale(90%)";

      console.log(resInsta);
    } catch (error) {
      document.querySelector(".fa-instagram").style.filter = "grayscale(0%)";

      console.log(error);
    }
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
            onChange={(event) => setInput(event.target.value.trim())}
          />
          <button
            className="buttonCheck"
            disabled={!input}
            type="submit"
            variant="contained"
            color="secondary"
            onClick={checkUserName}
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
