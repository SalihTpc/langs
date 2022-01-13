import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import myEmailReducer from "./myEmail";
import { combineReducers } from "redux";
import detailsReducer from "./detail";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  myEmailReducer: myEmailReducer,
  details: detailsReducer,
});
export default allReducers;
