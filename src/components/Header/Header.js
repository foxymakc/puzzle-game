import React from "react";
import "./Header.css";
import Timer from "../Timer/Timer";
import MoveCounter from "../MoveCounter/MoveCounter";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Мy First Mahjong</h1>
      <div className="header__counters">
        <Timer />
        <MoveCounter />
      </div>
    </header>
  );
}

export default Header;
