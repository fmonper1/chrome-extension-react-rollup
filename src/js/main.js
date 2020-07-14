import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function handleClick() {
  console.log("The link was clicked.");
}

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(function () {
      setCount((count) => count + 1);
    }, 3000);
  }, []);

  return (
    <div>
      Your App injected to DOM correctly! {count}
      <a onClick={() => handleClick()}>sdfsdf</a>
    </div>
  );
};

// class App extends React.Component {
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
chrome.runtime.onMessage.addListener((request, sender, response) => {
  // If message is injectApp
  if (request.injectApp) {
    // Inject our app to DOM and send response
    injectApp();
    response({
      startedExtension: true,
    });
  }
});

function injectApp() {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "chromeExtensionReactApp");
  document.body.appendChild(newDiv);
  ReactDOM.render(<App />, newDiv);
}
