import React from "react";
import ReactDOM from "react-dom";
// import { BrowseRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import "modern-normalize/modern-normalize.css";

console.log(store);

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowseRouter> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </BrowseRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);
