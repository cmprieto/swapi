import React, { Fragment, useState, useContext } from "react";
import { useCartContext } from '../application/Provider.js';
import "../App.css";
import { Modal, Button, ModalDialog } from "react-bootstrap";
import { ContainerLogin, InputText } from "../styled.js";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Login = () => {
  /* const users = useContext(AppContext); */
  const {
    shows,
    setShows,
  } = useCartContext();

  const [mailLogin, seteMailLogin] = useState();
  const [passLogin, setPassLogin] = useState();
  const [users] = useLocalStorage("users");
  const [login, setLogin] = useLocalStorage("login", false);
  const handleClose = () => {
    setShows(false);
    /* setLogin("false"); // provisional */
  };

  const handleUserLogin = () => {
    setLogin(false);

    users.map((e) => {
      if (mailLogin === e.mail) {
        //verifica mail
        if (passLogin === e.psw) {
          // VERIFICA CONTRASEÑA
          setLogin(true);
          /* alert("Tienes acceso a la web"); */
        } else {
          alert("la contraseña no coincide");
        }
      }
      /* else {
        alert("este mail no está registrado en la web, NO tienes acceso");
      } */

      /*       if (login == "false") {
        //COMPROBAR SI USUARIO ESTÁ REGISTRADO
        mailLogin === e.mail // ERROR, ME HACE LA COMPARACION DE TODOS LOS ELEMENTOS, NO PARA CUANDO ES TRUE
          ? passLogin === e.psw
            ? setLogin("true")
            : alert("la contraseña no coincide")
          : alert("este mail no está registrado en la web, NO tienes acceso");
      }

       */
    });
    // TERNARIO DE CONTROL 
    return login === true
      ? alert("Tienes acceso a la webs")
      : alert("NO TIENES ACCESO");
  };

  return (
    <Fragment>
      <Modal show={shows} onHide={handleClose}>
        <Modal.Header closeButton bsPrefix="modal-header">
          <Modal.Title>SIGN IN</Modal.Title>
        </Modal.Header>
        <ContainerLogin>
          <Modal.Body bsPrefix="modal-body">
            <form /* action="/action_page.php" */>
              <InputText
                type="email"
                placeholder="your email"
                name="mail"
                value={mailLogin}
                onChange={(e) => seteMailLogin(e.target.value)}
              ></InputText>

              <InputText
                type="password"
                placeholder="password"
                name="psw"
                value={passLogin}
                onChange={(e) => setPassLogin(e.target.value)}
              ></InputText>

              <Button
                variant="secondary"
                type="button"
                onClick={handleUserLogin}
              >
                Sign in
              </Button>
            </form>
          </Modal.Body>
        </ContainerLogin>
        <Modal.Footer bsPrefix="modal-footer">
          {/* <Button variant="primary" type="submit" /* onClick={handleClose} */
          /*> 
            Sign in
          </Button> */}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};
export default Login;
