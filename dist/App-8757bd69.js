import { b as arrayLikeToArray, u as unsupportedIterableToArray, a as react, s as slicedToArray } from './index-0dd58a3a.js';

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

var App = function App() {
  var _useState = react.useState([]),
      _useState2 = slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var getQuote = function getQuote() {
    var aList = [].concat(toConsumableArray(list), [[]]);
    setList(aList);
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "modal-buttons"
  }, /*#__PURE__*/react.createElement("button", {
    onClick: getQuote
  }, "dsfasdfadsfds"), list.map(function (item, key) {
    return /*#__PURE__*/react.createElement("p", {
      key: key
    }, "lkdsjlkfjlksdj");
  }));
};

export { App as A };
