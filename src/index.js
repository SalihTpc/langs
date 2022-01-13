import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./redux/reducers";
import { Provider } from "react-redux";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// let store = createStore(reducer)

// const LogIn = () => {
//   return {
//     type: "LOGIN",
//   };
// };
// const LogOut = () => {
//   return {
//     type: "LOGOUT",
//   };
// };

// const counter = (state = false, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return true;
//     case "LOGOUT":
//       return false;
//     default:
//       return false;
//   }
// };
// let store = createStore(counter);

// store.subscribe(() => console.log(store.getState()));
// store.dispatch(LogIn());
// store.dispatch(LogOut());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
