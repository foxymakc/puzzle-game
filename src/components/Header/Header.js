import React from "react";
import "./Header.css";
import Counter from "../Counter/Counter";

function Header(props) {

  let counterTimeMinute = 0;
  let counterTimeSecond = 0;
  let counterTimeMillisecond = 0;

  return (
    <header className="header">
      <h1 className="header__title">Мy First Mahjong</h1>
      <div className="header__counters">
        <Counter
          count={
            (counterTimeMinute > 9
              ? counterTimeMinute
              : "0" + counterTimeMinute) +
            ":" +
            (counterTimeSecond > 9
              ? counterTimeSecond
              : "0" + counterTimeSecond) +
            ":" +
            (counterTimeMillisecond > 9
              ? counterTimeMillisecond
              : "0" + counterTimeMillisecond)
          }
        />
        <Counter count={0} />
      </div>
    </header>
  );
}

export default Header;
