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

  const { shows, setShows, showUp, setShowUp, user, setUser } = useCartContext();

  useEffect(() => {
    setIsVisible(location.pathname.includes('Character'));
  }, []);

  console.log('location.pathname', location.pathname);
  console.log('isVisible', isVisible);
  const handleShow = () => setShows(true);
  const handleRegister = () => setShowUp(true);
  const handleLogout = () => setUser(null);
  return (
    <Fragment>
      <HeaderLogo>
        <Link to={process.env.PUBLIC_URL + '/'}><img src={logoSW} width="25%" alt="StarWars" /></Link>
        <div>
          {user ? (<ButtonLog onClick={handleLogout}>SIGN OUT</ButtonLog>) : (<ButtonLog onClick={handleShow}>SIGN IN</ButtonLog>)
          }
          {shows && <Login />}       {/*  OJO SI DA ALGUN FALLO REVISAR ESTO MUESTRA COMPONENTE LOGIN SI CLICKAMOS BOTON SIGNIN*/}
          {!user && <ButtonLog onClick={handleRegister}>REGISTER</ButtonLog>}

          {showUp && <Signup />}
        </div>
      </HeaderLogo>
      <Cabecera>
        <Menu user={user} />
        {user && <Pagination />}
      </Cabecera>
    </Fragment>
  );
};
export default Header;
