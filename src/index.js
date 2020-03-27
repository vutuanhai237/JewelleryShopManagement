var React = require("react");
var ReactDOM = require("react-dom");
var App = require("./components/layout/App");
var serviceWorker = require("./serviceWorker");
var {Provider} = require("react-redux");
var store = require("./reducers/index");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      
      <App />
      
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
