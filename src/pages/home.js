import React from "react";
import { Swapi } from "../services/swapi";
import { Menu } from "../components/Navbar";
import { Fragment } from "react";
import Provider from "../application/provider";
import { Title } from "../styled";
import { Characters } from "../components/characters";
import { Header } from "../components/header";

const Home=()=> {
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
export default Home;
