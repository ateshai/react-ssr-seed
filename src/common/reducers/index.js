import { combineReducers } from "redux";
import {INCREMENT_COUNTER, DECREMENT_COUNTER} from "../actions";

const counter = (state = 3, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}

export default combineReducers({
  counter
});
