import { combineReducers } from "redux";
import {INCREMENT_COUNTER, DECREMENT_COUNTER, SET_COUNTER, FETCH_USERS} from "../actions";

const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    case SET_COUNTER:
      return state = action.value;
    default:
      return state;
  }
};

const users = (state = [], action) => {
  switch (action.type) {
    case "FETCH_USERS_PENDING":
      console.log('here', action);
      return { ...state, loading: true };
    case "FETCH_USERS_FULFILLED":
      console.log('here2 ');
      return { ...state, loading: false, users: action.payload };
    case "FETCH_USERS_REJECTED": {
      return { ...state, loading: false, error: action.payload, }
    } 
    default:
      return state;
  }
};

export default combineReducers({
  counter,
  users
});
