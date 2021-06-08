import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counter";

const Controls = () => {
  const dispatch = useDispatch();

  return (
    <div className="mt-3">
      <button
        type="button"
        className="btn btn-success me-3"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default Controls;
