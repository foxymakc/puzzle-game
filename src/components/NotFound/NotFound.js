import React from "react";
import "./NotFound.css";

function NotFound({ navigate }) {

  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <p className="not-found__link" onClick={() => navigate("/")}>
        Назад
      </p>
    </section>
  );
}

export default NotFound;