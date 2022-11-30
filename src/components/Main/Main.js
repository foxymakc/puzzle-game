import React, { useState } from "react";
import "./Main.css";
import Popup from "../Popup/Popup";
import PuzzleBoard from "../PuzzleBoard/PuzzleBoard";

function Main(props) {
  const [startPopupOpen, setStartPopupOpen] = useState(true);
  const [finishPopupOpen, setFinishtPopupOpen] = useState(false);
  const [step, setStep] = useState(0);
  const counterStep = document.querySelectorAll(".counter__text")[1];
  let number = 0;

  function handleClickPlay() {
    setStartPopupOpen(false);
  }

  function gameOverPopupOpen() {
    setFinishtPopupOpen(true);
    setStep(number)
  }

  function handleClickPlaySomeMore() {
    setFinishtPopupOpen(false);
    counterStep.innerText = 0;
    setStep(0)
  }

  function makeStep(){
    number++
    counterStep.innerText = number
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
        text={`Количество шагов: ${step}`}
        btnText={"Играть ещё"}
      />
      <PuzzleBoard gameOverPopupOpen={gameOverPopupOpen} clickPuzzle={props.clickPuzzle} makeStep={makeStep}/>
    </main>
  );
}

export default Main;
