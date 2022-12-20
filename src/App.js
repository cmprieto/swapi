import React from "react";
import Provider from "./application/Provider";
import { GlobalStyle } from "./styled";
import Router from "./application/Router";
import "./App.css";

const App = () => {
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
