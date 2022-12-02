import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
