import React, { Fragment, useState } from "react";
import { useCartContext } from '../application/Provider.js';
import "../App.css";
import { Modal, Button, ModalDialog, ModalFooter } from "react-bootstrap";
import { ContainerLogin, InputText, Pgreen, Pred, ModalFoot } from "../styled.js";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Login = () => {
  /* const users = useContext(AppContext); */
  const {
    shows,
    setShows,
  } = useCartContext();

  const [mailLogin, seteMailLogin] = useState('');
  const [passLogin, setPassLogin] = useState('');
  const [users] = useLocalStorage("users");
  const [login, setLogin] = useLocalStorage("login", false);

  const handleClose = () => {
    setShows(false);
  };

  const handleUserLogin = () => {
    setLogin(false);
    console.log('users', users);
    console.log('mailLogin', mailLogin);
    console.log('passLogin', passLogin);

    users.map((e) => {
      console.log('e', e);
      if (mailLogin === e.mail) {
        console.log('E.MAIL', e.mail)
        //verifica mail
        if (passLogin === e.psw) {
          console.log('E.PSW', e.psw)
          // VERIFICA CONTRASEÑA
          setLogin(true);
          alert("Tienes acceso a la web");
          console.log("Tu usuario tiene acceso a la web")
          console.log('login', login) //login no actualizado
        }
        else {
          alert("la contraseña no coincide");
          console.log("Tu usuario NO tiene acceso a la web")
          console.log('login', login) //login no actualizado

        }
      }
    });

  };

  /*  TERNARIO DE CONTROL
  (login === true)
  ? alert("Tienes acceso a la webs")
  : alert("NO TIENES ACCESO")) */


  return (
    <Fragment>
      <Modal show={shows} onHide={handleClose}>
        <Modal.Header closeButton bsPrefix="modal-header">
          <Modal.Title>SIGN IN</Modal.Title>
        </Modal.Header>
        <ContainerLogin>
          <Modal.Body bsPrefix="modal-body">
            <form >
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
          <ModalFoot>
            {(login === true)
              ? <Pgreen>Usuario válido</Pgreen>
              : <Pred>Introduce unas credenciales válidas</Pred>}
            {/*  <p>{`${login}`}</p> */}
          </ModalFoot>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};
export default Login;
