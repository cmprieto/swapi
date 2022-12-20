import React, { Fragment, useState } from "react";
import { useCartContext } from '../application/Provider.js';
import "../App.css";
import { Modal, Button } from "react-bootstrap";
import { ContainerLogin, InputText } from "../styled.js";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Signup = () => {
  const {
    showUp,
    setShowUp,
  } = useCartContext();

  const [users, setUsers] = useLocalStorage("users", []);
  const [mail, setMail] = useState("");
  const [psw, setPsw] = useState("");
  const [username, setUsername] = useState("");
  const [control, setControl] = useState(false);

  const handleClose = () => {
    setShowUp(false);
    setControl(false);
  }

  const handleUsers = () => {
    //INTERESANTE AÑADIR UN STOPPER NO SE PUDIERA AÑADIR MAIL NI USERNAME REPETIDO. MAP NECESARIO

    users.map((e) => {    // REALMENT LO QUE NECESITO ES BUSCAR EN EL MAP HASTA Q SE CUMPLA UNA CONDICION Y Q SALGA DEL BUCLE
      if (e.mail === mail || e.username === username) {
        alert("mail o usuario ya existe");
        setControl(true);
      }
    });
    !control && setUsers([...users, { mail, psw, username }]);  // no va del todo bien el control, 

  };

  return (
    <Fragment>
      <Modal show={showUp} onHide={handleClose}>
        <Modal.Header closeButton bsPrefix="modal-header">
          <Modal.Title>SIGN UP</Modal.Title>
        </Modal.Header>
        <ContainerLogin>
          <Modal.Body bsPrefix="modal-body">
            <form /* action="/action_page.php" */>
              <InputText
                type="text"
                placeholder="username"
                name="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></InputText>

              <InputText
                type="email"
                placeholder="email address"
                name="mail1"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              ></InputText>
              <InputText
                type="password"
                placeholder="password"
                name="psw"
                value={psw}
                onChange={(e) => setPsw(e.target.value)}
              ></InputText>
              <Button
                variant="secondary"
                type="button"
                onClick={handleUsers} //AL ENVIAR LA INFOR, AÑADIMOS UNA POSICION AL ARRAY DE OBJETOS
              >
                Sign up
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
export default Signup;
