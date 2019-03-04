import "@babel/polyfill";
import axios from "axios";

// actions
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const SET_COUNTER = "SET_COUNTER";
export const FETCH_USERS = "FETCH_USERS";

// action creators
export const increment = () => ({
  type: INCREMENT_COUNTER
});

export const decrement = () => ({
  type: DECREMENT_COUNTER
})

export const set = (value) => ({
  type: SET_COUNTER,
  value
})

export const fetchUsers = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: FETCH_USERS,
    payload: res.data
  });
};