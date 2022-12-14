import React, { Fragment } from "react";
import { Menu } from "../components/Navbar";
import { Cabecera } from "../styled.js";
import logoSW from "../img/logoSW.jpg";
import "../App.css";
import { Pagination } from "./pagination.js";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);

  let isVisible=(location.pathname).includes("/character");

/*   if ((location.pathname).includes("/characters/")) {
    isVisible = true;
  } else {
    isVisible = false;
  }
 */

  return (
    <Fragment>
      <img src={logoSW} width="15%" alt="StarWars" />
      <Cabecera>
        <Menu />
        {isVisible && <Pagination />}
      </Cabecera>
    </Fragment>
  );
};
export { Header };
