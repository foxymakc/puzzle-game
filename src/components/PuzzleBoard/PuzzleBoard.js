import React from "react";
import "./PuzzleBoard.css";
import PuzzleCard from "../PuzzleCard/PuzzleCard";

function PuzzleBoard(props) {
  const startNumbersListOne = [1, 2, 3, 4, 5, 6, 7, 8];
  const startNumbersListTwo = [1, 2, 3, 4, 5, 6, 7, 8];
  let arrNumdersToCompare = [];
  let mixArrOne = mixArrStart(startNumbersListOne);
  let mixArrTwo = mixArrStart(startNumbersListTwo);
  const numbersAllCardsOnPage = document.querySelectorAll(
    ".puzzle-card__blind"
  );

  function mixArrStart(arr) {
    return arr
      .map((i) => [Math.random(), i])
      .sort()
      .map((i) => i[1]);
  }

  function compareNumder(e) {
    e.target.classList.add("puzzle-card__blind_open");
    const number = e.target.parentElement.innerText;
    props.makeStep();
    if (
      arrNumdersToCompare.length % 2 === 0 ||
      arrNumdersToCompare.length === 0
    ) {
      arrNumdersToCompare.unshift(number);
    } else {
      if (number === arrNumdersToCompare[0]) {
        arrNumdersToCompare.push(number);
        finish(arrNumdersToCompare);
      } else {
        arrNumdersToCompare.shift();
        setTimeout(() => {
          closeCardsNotInArr(arrNumdersToCompare);
        }, 300);
      }
    }
  }

  function closeCardsNotInArr(arr) {
    numbersAllCardsOnPage.forEach((element) => {
      if (arr.includes(element.parentElement.innerText)) {
        //если карточки одинаковые добавить какой-нибудь эфект
      } else {
        element.classList.remove("puzzle-card__blind_open");
      }
    });
  }

  function finish(arr) {
    if (
      arr.length ===
      startNumbersListOne.length + startNumbersListTwo.length
    ) {
      props.gameOverPopupOpen();
      numbersAllCardsOnPage.forEach((element) => {
        element.classList.remove("puzzle-card__blind_open");
      });
      arr.splice(0, 16);
    }
  }

  return (
    <div className="puzzle-board">
      {mixArrOne.map((numbersOne) => (
        <PuzzleCard
          key={numbersOne}
          card={numbersOne}
          compareNumder={compareNumder}
        />
      ))}
      {mixArrTwo.map((numberTwo) => (
        <PuzzleCard
          key={numberTwo}
          card={numberTwo}
          compareNumder={compareNumder}
        />
      ))}
    </div>
  );
}

export default PuzzleBoard;
