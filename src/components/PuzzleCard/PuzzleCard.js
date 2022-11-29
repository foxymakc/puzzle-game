import React from "react";
import "./PuzzleCard.css";

function PuzzleCard(props) {
  return (
    <div className="puzzle-card">
      <div className="puzzle-card__blind" onClick={props.compareNumder}></div>
      <p className="puzzle-card__text">{props.card}</p>
    </div>
  );
}

export default PuzzleCard;
