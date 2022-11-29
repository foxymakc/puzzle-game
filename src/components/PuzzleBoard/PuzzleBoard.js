import React from "react";
import "./PuzzleBoard.css";
import PuzzleCard from "../PuzzleCard/PuzzleCard";

function PuzzleBoard() {
  let startNumbersListOne = [1, 2, 3, 4, 5, 6, 7, 8];
  let startNumbersListTwo = [1, 2, 3, 4, 5, 6, 7, 8];
  let ArrNumdersToCompare = [];

  function mixarr(arr){
    return arr.map(i=>[Math.random(), i]).sort().map(i=>i[1])
 }
  
  function compareNumder(e) {
    e.target.classList.add("puzzle-card__blind_open");
    const number = e.target.parentElement.innerText;
    if (
      ArrNumdersToCompare.length % 2 === 0 ||
      ArrNumdersToCompare.length === 0
    ) {
      ArrNumdersToCompare.unshift(number);
    } else {
      if (number === ArrNumdersToCompare[0]) {
        ArrNumdersToCompare.push(number);
      } else {
        ArrNumdersToCompare.shift();
        setTimeout(() => {
          closeCardsNotInArr(ArrNumdersToCompare);
        }, 300);
      }
    }
  }

  function closeCardsNotInArr(Arr) {
    const numbersAllCardsOnPage = document.querySelectorAll(
      ".puzzle-card__blind"
    );
    numbersAllCardsOnPage.forEach((element) => {
      if (Arr.includes(element.parentElement.innerText)) {
        //element.classList.add("puzzle-card__blind_open");
      } else {
        element.classList.remove("puzzle-card__blind_open");
      }
    });
  }

  return (
    <div className="puzzle-board">
      {(mixarr(startNumbersListOne)).map((numbersOne) => (
        <PuzzleCard
          key={numbersOne}
          card={numbersOne}
          compareNumder={compareNumder}
        />
      ))}
      {(mixarr(startNumbersListTwo)).map((numberTwo) => (
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
