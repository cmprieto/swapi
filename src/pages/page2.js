import React from "react";
import { Swapi } from "../services/swapi";
import { Menu } from "../components/Navbar";
import { Fragment } from "react";
import Provider from "../application/provider";
import { Title } from "../styled";
import { useParams } from "react-router-dom";
import { Characters } from "../components/characters";

function Page2() {
  console.log(useParams());
  return (
    <Fragment>
      <Provider>
        <Menu />
        <Swapi />
        <Title>STAR WARS</Title>
        <Title>PARRAFOS</Title>

        <Characters />

      </Provider>
    </Fragment>
  );
}
export default Page2;
