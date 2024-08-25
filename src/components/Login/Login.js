import { Fragment, useState } from "react";
import { useCartContext } from "../../application/Provider.js";
import "../../App.css";
import { Modal, Button } from "react-bootstrap";
import {
  ContainerLogin,
  InputText,
  Pgreen,
  Pred,
  ModalFoot,
} from "./Login.styles.js";
import { useLocalStorage } from "../../hooks/useLocalStorage.js";

const Login = () => {
  const { showLogin, setShowLogin, user, setUser } = useCartContext();
  const [mailLogin, seteMailLogin] = useState("");
  const [passLogin, setPassLogin] = useState("");
  const [users] = useLocalStorage("users", []);
  const [login, setLogin] = useLocalStorage("login", false);

  const handleClose = () => {
    setShowLogin(false);
  };

  const handleUserLogin = () => {
    setLogin(false);
    console.log("users", users);
    console.log("mailLogin", mailLogin);
    console.log("passLogin", passLogin);

    users &&
      users.forEach((e, i) => {
        console.log("e", e);
        /*  alert('i es ' + i); */
        if (mailLogin === e.mail) {
          console.log("E.MAIL", e.mail);
          //verifica mail
          if (passLogin === e.psw) {
            console.log("E.PSW", e.psw);
            // VERIFICA CONTRASEÑA
            setLogin(true);
            /* alert("Tienes acceso a la web"); */
            console.log("Tu usuario tiene acceso a la web");
            console.log("login", login); //login no actualizado
            setUser(mailLogin);
            /* alert(user); */
          } else {
            alert("la contraseña no coincide");
            console.log("Tu usuario NO tiene acceso a la web");
            console.log("login", login); //login no actualizado
          }
        }
      });
  };

  return (
    <Fragment>
      <Modal show={showLogin} onHide={handleClose}>
        <Modal.Header closeButton bsPrefix="modal-header">
          <Modal.Title>SIGN IN</Modal.Title>
        </Modal.Header>
        <ContainerLogin>
          <Modal.Body bsPrefix="modal-body">
            <form>
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
                Log In
              </Button>
            </form>
          </Modal.Body>
        </ContainerLogin>
        <Modal.Footer bsPrefix="modal-footer">
          <ModalFoot>
            {" "}
            {/* TERNARIO DE CONTROL */}
            {user ? (
              <Pgreen>Usuario válido</Pgreen>
            ) : (
              <Pred>Introduce unas credenciales válidas</Pred>
            )}
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
