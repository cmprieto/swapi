import React from "react";
import { Swapi } from "../services/swapi";
import NavBar, { Menu } from "../components/Navbar";
import { Fragment } from "react";
import Provider from "../application/provider";
import { Title } from "../styled";


import { CharactersCard } from "../components/charactersCard";

const Personajes = () => {
return (
  <Fragment>
    <Provider>
      <Swapi />
      <Title>STAR WARS</Title>
      <Title>PARRAFOS</Title>

      <CharactersCard />
    </Provider>
  </Fragment>
);}

export { Personajes };
