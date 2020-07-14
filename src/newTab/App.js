import React, { useState, useEffect, Component, Fragment } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const [date, setDate] = useState("--:--");

  useEffect(() => {
    setInterval(() => {
      let curr = new Date();
      let hours = curr
        .getHours()
        .toString()
        .padStart(2, "0");
      let mins = curr
        .getMinutes()
        .toString()
        .padStart(2, "0");
      let secs = curr
        .getSeconds()
        .toString()
        .padStart(2, "0");
      setDate(`${hours}:${mins}:${secs}`);
      console.log("hello");
    }, 1000);
  }, []);

  const getQuote = () => {
    let aList = [...list, []];
    setList(aList);
  };

  return (
    <div className="modal-buttons">
      <button onClick={getQuote}>dsfasdfadsfds</button>
      <div>{date}</div>
      {list.map((item, key) => (
        <p key={key}>lkdsjlkfjlksdj</p>
      ))}
    </div>
  );
};

export default App;
