import React from "react";
import Provider from "./application/provider";
import { GlobalStyle } from "./styled";
import "./App.css";
import Router from "./application/router";


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
