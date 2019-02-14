import { combineReducers } from "redux";
import {INCREMENT_COUNTER, DECREMENT_COUNTER, SET_COUNTER} from "../actions";

const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    case SET_COUNTER:
      return state = Number(action.value);
    default:
      return state;
  }
}

export default combineReducers({
  counter
});
