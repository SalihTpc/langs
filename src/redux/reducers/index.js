import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import myEmailReducer from "./myEmail";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  myEmailReducer: myEmailReducer,
});
export default allReducers;
