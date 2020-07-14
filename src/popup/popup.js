// import App from "./App.js";
import React from "react";
import ReactDOM from "react-dom";
import App from "../js/App";

window.onload = () => {
  const $startButton = document.querySelector(".start");

  $startButton.onclick = () => {
    // Get active tab
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true
      },
      tabs => {
        // Send message to script file
        chrome.tabs.sendMessage(tabs[0].id, { injectApp: true }, response =>
          window.close()
        );
      }
    );
  };

  ReactDOM.render(React.createElement(App), document.getElementById("app"));
};
