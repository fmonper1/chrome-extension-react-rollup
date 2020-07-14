import { r as reactDom, a as react } from '../index-0dd58a3a.js';
import { A as App } from '../App-8757bd69.js';

// import App from "./App.js";

window.onload = function () {
  var $startButton = document.querySelector(".start");

  $startButton.onclick = function () {
    // Get active tab
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      // Send message to script file
      chrome.tabs.sendMessage(tabs[0].id, {
        injectApp: true
      }, function (response) {
        return window.close();
      });
    });
  };

  reactDom.render( /*#__PURE__*/react.createElement(App), document.getElementById("app"));
};
