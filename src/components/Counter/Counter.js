import React from "react";
import "./Counter.css";

function Counter(props) {
  return (
    <div className="counter">
      {props.children}
    </div>
  );
}

export default Counter;
