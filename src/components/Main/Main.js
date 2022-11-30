import React, { useState } from "react";
import "./Main.css";
import Popup from "../Popup/Popup";
import PuzzleBoard from "../PuzzleBoard/PuzzleBoard";

function Main() {
  const [startPopupOpen, setStartPopupOpen] = useState(true);
  const [finishPopupOpen, setFinishtPopupOpen] = useState(false);

  function handleClickPlay() {
    setStartPopupOpen(false);
  }

  function gameOverPopupOpen() {
    setFinishtPopupOpen(true);
  }

  function handleClickPlaySomeMore() {
    setFinishtPopupOpen(false);
  }

  return (
    <main className="main">
      <Popup
        isOpen={startPopupOpen}
        onClickBtnPopup={handleClickPlay}
        title={"Правила игры."}
        text={
          "Под пазлами спрятаны пары чисел от 1 до 8, ваша задача найти их как можно быстрее. Удачи!"
        }
        btnText={"Начать"}
      />
      <Popup
        isOpen={finishPopupOpen}
        onClickBtnPopup={handleClickPlaySomeMore}
        title={"Ура! Вы прошли!"}
        text={"Время прохождения"}
        btnText={"Играть ещё"}
      />
      <PuzzleBoard gameOverPopupOpen={gameOverPopupOpen} />
    </main>
  );
}

export default Main;
