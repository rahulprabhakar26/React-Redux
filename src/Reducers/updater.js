const intialState = 100;
const updateValue = (state = intialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};
export default updateValue;
