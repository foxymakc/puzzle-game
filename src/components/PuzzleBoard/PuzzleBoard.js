import React from "react";
import "./PuzzleBoard.css";
import PuzzleCard from "../PuzzleCard/PuzzleCard";

function PuzzleBoard(props) {
  const numbersAllCardsOnPage = document.querySelectorAll(
    ".puzzle-card__blind"
  );
  let arrNumdersToCompare = [];
  const startNumbersList = [
    { number: 1, id: 1 },
    { number: 2, id: 2 },
    { number: 3, id: 3 },
    { number: 4, id: 4 },
    { number: 5, id: 5 },
    { number: 6, id: 6 },
    { number: 7, id: 7 },
    { number: 8, id: 8 },
    { number: 1, id: 9 },
    { number: 2, id: 10 },
    { number: 3, id: 11 },
    { number: 4, id: 12 },
    { number: 5, id: 13 },
    { number: 6, id: 14 },
    { number: 7, id: 15 },
    { number: 8, id: 16 },
  ];

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
    if (arr.length === startNumbersList.length) {
      props.gameOverPopupOpen();
      numbersAllCardsOnPage.forEach((element) => {
        element.classList.remove("puzzle-card__blind_open");
      });
      arr.splice(0, 16);
    }
  }

  return (
    <div className="puzzle-board">
      {mixArrStart(startNumbersList).map((numbersStart) => (
        <PuzzleCard
          key={numbersStart.id}
          card={numbersStart.number}
          compareNumder={compareNumder}
        />
      ))}
    </div>
  );
}

export default PuzzleBoard;
