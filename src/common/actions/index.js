// actions
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

// action creators
export const increment = () => ({
  type: INCREMENT_COUNTER
});

export const decrement = () => ({
  type: DECREMENT_COUNTER
})
