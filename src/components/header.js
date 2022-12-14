import React, { Fragment } from "react";
import { Menu } from "../components/Navbar";
import { Cabecera, Card, Ul2 } from "../styled.js";
import logoSW from "../img/logoSW.jpg";
import "../App.css";
import { Title } from "../styled";
import {Pagination} from "./pagination.js"

const Header = () => {

  return (
    <Fragment>
      <img src={logoSW} width="15%" alt="StarWars" />
      <Cabecera>
        <Menu />
        <Pagination />
      </Cabecera>
    </Fragment>
  );
};
export { Header };
