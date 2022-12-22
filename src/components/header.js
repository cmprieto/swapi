import React from 'react';
import { Fragment, useEffect, useState } from 'react';
import { useCartContext } from '../application/Provider.js';
import Menu from "./Menu";
import { Cabecera, ButtonLog, HeaderLogo } from "../styled.js";
import logoSW from "../img/logoSW.jpg";
import "../App.css";
import Pagination from "./Pagination.js";
import { useLocation } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup.js";
import { Link } from "react-router-dom";


const Header = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const { shows, setShows, showUp, setShowUp } = useCartContext();

  useEffect(() => {
    setIsVisible(location.pathname.includes('Character'));
  }, []);

  console.log('location.pathname', location.pathname);
  console.log('isVisible', isVisible);
  /*   const handleShow = () => setShows(true);
    const handleShowUp = () => setShowUp(true);
   */
  return (
    <Fragment>
      <HeaderLogo>
        <Link to={process.env.PUBLIC_URL + '/'}><img src={logoSW} width="25%" alt="StarWars" /></Link>
        {/* <div>
          <ButtonLog onClick={handleShow}>LOGIN</ButtonLog>
          {shows && <Login />}
          <ButtonLog onClick={handleShowUp}>SIGN UP</ButtonLog>
          {showUp && <Signup />}
        </div> */}
      </HeaderLogo>
      <Cabecera>
        <Menu visible={isVisible} />
        {isVisible && <Pagination />}
      </Cabecera>
    </Fragment>
  );
};
export default Header;
