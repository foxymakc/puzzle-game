import React from "react";
import "./Counter.css";

function Counter(props) {
  return (
    <div className="counter">
      <p className="counter__text">{props.count}</p>
    </div>
  );
}

export default Counter;
