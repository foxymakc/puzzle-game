import React from "react";
import "./Popup.css";

function Popup(props) {
  return (
    <div className={`popup ${props.isOpen ? "" : "popup_closed"}`}>
      <div className="popup__container">
        <h3 className="popup__title">{props.title}</h3>
        <p className="popup__text">{props.text}</p>
        <button className="popup__btn" onClick={props.onClickBtnPopup}>
          {props.btnText}
        </button>
      </div>
    </div>
  );
}

export default Popup;
