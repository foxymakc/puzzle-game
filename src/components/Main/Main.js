import React, { useState } from "react";
import "./Main.css";
import Popup from "../Popup/Popup";
import PuzzleBoard from "../PuzzleBoard/PuzzleBoard";

function Main() {
  const [startPopupOpen, setStartPopupOpen] = useState(true);
  const [finishPopupOpen, setFinishtPopupOpen] = useState(false);

  const [step, setStep] = useState(0);
  const stepCounter = document.getElementById("step");

  const [timerMillisecond, setTimerMillisecond] = useState(0);
  const [timerSecond, setTimerSecond] = useState(0);
  const [timerMinute, setTimerMinute] = useState(0);
  const millisecondCounter = document.getElementById("millisecond");
  const secondCounter = document.getElementById("second");
  const minuteCounter = document.getElementById("minute");

  const [intervalId, setIntervalId] = useState(0);

  let number = 0;
  let millisecond = 0;
  let second = 0;
  let minute = 0;
  let timerId;

  function handleClickPlay() {
    setStartPopupOpen(false);
    startTimer();
  }

  function gameOverPopupOpen() {
    setFinishtPopupOpen(true);
    setStep(number);
    setTimerMillisecond(millisecondCounter.innerText);
    setTimerSecond(secondCounter.innerText);
    setTimerMinute(minuteCounter.innerText);
    stopTimer();
  }

  function handleClickPlaySomeMore() {
    setFinishtPopupOpen(false);
    stepCounter.innerText = 0;
    millisecondCounter.innerText = "00";
    secondCounter.innerText = "00:";
    minuteCounter.innerText = "00:";
    startTimer();
  }

  function makeStep() {
    number++;
    stepCounter.innerText = number;
  }

  function startTimer() {
    timerId = setInterval(counterTimers, 100);
    setIntervalId(timerId);
  }

  function stopTimer() {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }
  }

  function counterTimers() {
    const millisecondCounter = document.getElementById("millisecond");
    const secondCounter = document.getElementById("second");
    const minuteCounter = document.getElementById("minute");

    millisecond = millisecond + 10;
    millisecondCounter.innerText =
      millisecond < 10 ? `0${millisecond}` : millisecond;

    if (millisecond === 100) {
      millisecond = 0;
      second++;
      secondCounter.innerText = second < 10 ? `0${second}:` : `${second}:`;
    }
    if (second === 60) {
      second = 0;
      minute++;
      minuteCounter.innerText = minute < 10 ? `0${minute}:` : `${minute}:`;
    }
  }

  return (
    <main className="main">
      <Popup
        isOpen={startPopupOpen}
        onClickBtnPopup={handleClickPlay}
        title={"Правила игры."}
        text={
          "Под пазлами спрятаны пары чисел от 1 до 8, ваша задача найти их как можно быстрее."
        }
        text1={"Удачи!"}
        btnText={"Начать"}
      />
      <Popup
        isOpen={finishPopupOpen}
        onClickBtnPopup={handleClickPlaySomeMore}
        title={"Ура! Вы прошли!"}
        text={`Ваше время прохождения: ${timerMinute}${timerSecond}${timerMillisecond}`}
        text1={`Количество шагов: ${step}`}
        btnText={"Играть ещё"}
      />
      <PuzzleBoard gameOverPopupOpen={gameOverPopupOpen} makeStep={makeStep} />
    </main>
  );
}

export default Main;
