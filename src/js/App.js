import React, { useState, Component, Fragment } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const getQuote = () => {
    let aList = [...list, []];
    setList(aList);
  };

  return (
    <div className="modal-buttons">
      <button onClick={getQuote}>dsfasdfadsfds</button>
      {list.map((item, key) => (
        <p key={key}>lkdsjlkfjlksdj</p>
      ))}
    </div>
  );
};

export default App;
