import React from "react";
import "./Header.css";
import Counter from "../Counter/Counter";

function Header() {

  return (
    <header className="header">
      <h1 className="header__title">Мy First Mahjong</h1>
      <div className="header__counters">
        <Counter>
        <span className="counter__text" id="minute">00:</span>
        <span className="counter__text" id="second">00:</span>
        <span className="counter__text" id="millisecond">00</span>
        </Counter>
        <Counter>
        <span className="counter__text" id="step">0</span>
        </Counter>
      </div>
    </header>
  );
}

export default Header;
