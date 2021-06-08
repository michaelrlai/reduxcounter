import React from "react";
import { useSelector } from "react-redux";

const Value = () => {
  const { count } = useSelector((state) => state.counter);

  return <div>{count}</div>;
};

export default Value;
