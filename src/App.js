import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./Actions/index";

function App() {
  const x = useSelector((state) => state.updateValue);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Store</h1>
      <button onClick={() => dispatch(increase())}>+</button>
      <input type="text" value={x} readOnly></input>
      <button onClick={() => dispatch(decrease())}>-</button>
    </div>
  );
}

export default App;
