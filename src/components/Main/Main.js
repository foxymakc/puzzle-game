import React, { useState } from "react";
import "./Main.css";
import Popup from "../Popup/Popup";
import PuzzleList from "../PuzzleBoard/PuzzleBoard";

function Main() {
  const [startPopupOpen, setStartPopupOpen] = useState(true);

  function handleClickStartPopup() {
    setStartPopupOpen(false);
  }
  return (
    <main className="main">
      <Popup isOpen={startPopupOpen} onClickStartPopup={handleClickStartPopup}/>
      <PuzzleList />
    </main>
  );
}

export default Main;
