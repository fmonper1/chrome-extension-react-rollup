import { a as react, s as slicedToArray, r as reactDom } from '../index-0dd58a3a.js';
import { t as toConsumableArray } from '../toConsumableArray-3f847b04.js';

var App = function App() {
  var _useState = react.useState([]),
      _useState2 = slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = react.useState("--:--"),
      _useState4 = slicedToArray(_useState3, 2),
      date = _useState4[0],
      setDate = _useState4[1];

  react.useEffect(function () {
    setInterval(function () {
      var curr = new Date();
      var hours = curr.getHours().toString().padStart(2, "0");
      var mins = curr.getMinutes().toString().padStart(2, "0");
      var secs = curr.getSeconds().toString().padStart(2, "0");
      setDate("".concat(hours, ":").concat(mins, ":").concat(secs));
      console.log("hello");
    }, 1000);
  }, []);

  var getQuote = function getQuote() {
    var aList = [].concat(toConsumableArray(list), [[]]);
    setList(aList);
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "modal-buttons"
  }, /*#__PURE__*/react.createElement("button", {
    onClick: getQuote
  }, "dsfasdfadsfds"), /*#__PURE__*/react.createElement("div", null, date), list.map(function (item, key) {
    return /*#__PURE__*/react.createElement("p", {
      key: key
    }, "lkdsjlkfjlksdj");
  }));
};

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
      }, function (response) {});
    });
  };

  reactDom.render( /*#__PURE__*/react.createElement(App), document.getElementById("app"));
};
