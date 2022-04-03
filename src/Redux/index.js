import { combineReducers } from "redux";
import { counterReducer } from "./counter";
const allReducter = combineReducers({ counterReducer });
export default allReducter
