import { Fragment, useEffect, useState } from 'react';
import { useCartContext } from '../../application/Provider.js';
import Menu from "../Menu/Menu.js";
import { Cabecera, ButtonLog, HeaderLogo } from "./Header.styles";
import logoSW from "../../img/logoSW.jpg";
import "../../App.css";
import Pagination from '../Pagination/index.js';
import { useLocation } from "react-router-dom";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import { Link } from "react-router-dom";


const Header = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const { showLogin, setShowLogin, showRegister, setShowRegister, user, setUser } = useCartContext();

  useEffect(() => {
    setIsVisible(location.pathname.includes('Character'));
  }, []);

  console.log('location.pathname', location.pathname);
  console.log('isVisible', isVisible);
  const handleShowLogin = () => setShowLogin(true);
  const handleRegister = () => setShowRegister(true);
  const handleLogout = () => setUser(null);
  return (
    <Fragment>
      <HeaderLogo>
        <Link to={process.env.PUBLIC_URL + '/'}><img src={logoSW} width="25%" alt="StarWars" /></Link>
        <div>
          {user ? (<ButtonLog onClick={handleLogout}>SIGN OUT</ButtonLog>) : (<ButtonLog onClick={handleShowLogin}>SIGN IN</ButtonLog>)
          }
          {showLogin && <Login />}       {/*  OJO SI DA ALGUN FALLO REVISAR ESTO MUESTRA COMPONENTE LOGIN SI CLICKAMOS BOTON SIGNIN*/}
          {!user && <ButtonLog onClick={handleRegister}>REGISTER</ButtonLog>}

          {showRegister && <Register />}
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
