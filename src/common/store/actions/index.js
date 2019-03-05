import "@babel/polyfill";
import axios from "axios";
import fetch from "node-fetch";

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
  await fetch('http://localhost:3008/api/users').then(res => {  
    return res.json()
  }).then(response => {
    dispatch({
      type: FETCH_USERS,
      payload: response
    });
  }).catch(e => console.log(e));
};