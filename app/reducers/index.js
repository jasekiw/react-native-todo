import todos from "./todos";
import {combineReducers} from "redux";
import newTodo from "./newTodo";
import dimensions from "./dimensions";

export default combineReducers({
  todos,
  newTodo,
  dimensions
})