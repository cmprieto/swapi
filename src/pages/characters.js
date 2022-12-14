import React from "react";
import { Swapi } from "../services/swapi";
import { Fragment } from "react";
import Provider from "../application/provider";
import { Characters } from "../components/characters";
import { Header } from "../components/header";
const People=()=> {
  return (
    <Fragment>
      <Provider>
        <Header />
        <Swapi />
        <Characters />
      </Provider>
    </Fragment>
  );
}
export default People;
