import React from "react";
import "./Popup.css";

function Popup(props) {
  return (
    <div className={`popup ${props.isOpen ? "" : "popup_closed"}`}>
      <div className="popup__container">
        <h3 className="popup__title">Правила игры.</h3>
        <p className="popup__text">
          Под пазлами спрятаны пары чисел от 1 до 8, ваша задача найти их как
          можно быстрее. Удачи!
        </p>
        <button className="popup__btn" onClick={props.onClickStartPopup}>Начать</button>
      </div>
    </div>
  );
}

export default Popup;
