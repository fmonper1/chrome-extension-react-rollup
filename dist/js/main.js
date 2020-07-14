import { r as reactDom, a as react, s as slicedToArray } from '../index-0dd58a3a.js';

function handleClick() {
  console.log("The link was clicked.");
}

var App = function App() {
  var _useState = react.useState(0),
      _useState2 = slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  react.useEffect(function () {
    setInterval(function () {
      setCount(function (count) {
        return count + 1;
      });
    }, 3000);
  }, []);
  return /*#__PURE__*/react.createElement("div", null, "Your App injected to DOM correctly! ", count, /*#__PURE__*/react.createElement("a", {
    onClick: function onClick() {
      return handleClick();
    }
  }, "sdfsdf"));
}; // class App extends React.Component {
//   render() {
//     return (
//       <div>
//         Your App injected to DOM correctly!  carajo
//         <Button />
//       </div>
//     )
//   }
// }
// Message Listener function


chrome.runtime.onMessage.addListener(function (request, sender, response) {
  // If message is injectApp
  if (request.injectApp) {
    // Inject our app to DOM and send response
    injectApp();
    response({
      startedExtension: true
    });
  }
});

function injectApp() {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("id", "chromeExtensionReactApp");
  document.body.appendChild(newDiv);
  reactDom.render( /*#__PURE__*/react.createElement(App, null), newDiv);
}
