import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";

function App() {
  let navigate = useNavigate();

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

        <Route
          exact
          path="*"
          element={
            <>
              <NotFound navigate={navigate} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
