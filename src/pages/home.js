import React from "react";
import { Swapi } from "../services/swapi";
import { Menu } from "../components/Navbar";
import { Fragment } from "react";
import Provider from "../application/provider";
import { Title } from "../styled";
import { Characters } from "../components/characters";

const Home=()=> {
  return (
    <Fragment>
      <Provider>
        <Menu />
        <Swapi />
        <Title>STAR WARS</Title>
        <Characters />
      </Provider>
    </Fragment>
  );
}
export default Home;
