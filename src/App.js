import React from "react";
import Provider from "./application/provider";
import { GlobalStyle, Title } from "./styled";
import "./App.css";
import { Swapi } from "./services/swapi";
import { StarShips } from "./components/starships";
import Router from "./application/routes";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Provider>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
