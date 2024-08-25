import { Fragment, useState } from "react";
import { useCartContext } from '../../application/Provider.js';
import { Modal, Button } from "react-bootstrap";
import { ContainerLogin, InputText } from "./Register.styles.js";
import { useLocalStorage } from "../../hooks/useLocalStorage.js";

const Register = () => {
  const { showRegister, setShowRegister } = useCartContext();
  const [users, setUsers] = useLocalStorage("users", []);
  const [mail, setMail] = useState("");
  const [psw, setPsw] = useState("");
  const [username, setUsername] = useState("");
  const [addNewUser, setAddNewUser] = useState(false);


  const handleClose = () => {
    setShowRegister(false);
    setAddNewUser(false);
  }


  const handleUsers = () => {
    console.log('users', users)
    console.log('users.lenght', users.lenght);
    /*  alert('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'); */
    addNewUser && setUsers([...users, { mail, psw, username }]);
    setAddNewUser(true);
  }




  const handleBlur = () => {
    /* alert('blurrrrrrrrrrrrrrrrr'); */
    console.log('users', users);
    users.forEach((e, i) => {    // RECORRE USUARIOS PARA VER SI EXISTE USUARIO
      console.log('e', e);
      /*  alert('i es ' + i); */
      if (e.mail === mail /* || e.username === username */) {
        alert("mail o usuario ya existe");
        console.log(e.mail + 'iguales ' + mail);
        setAddNewUser(false);
      }
      else (setAddNewUser(true))
    })
    return (alert('addNewUser ' + addNewUser))
  }


  return (
    <Fragment>
      <Modal show={showRegister} onHide={handleClose}>
        <Modal.Header closeButton bsPrefix="modal-header">
          <Modal.Title>CREATE YOUR ACCOUNT</Modal.Title>
        </Modal.Header>
        <ContainerLogin>
          <Modal.Body bsPrefix="modal-body">

            <form onSubmit={handleUsers}>
              <InputText
                type="text"
                placeholder="username"
                name="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              /* onBlur={handleBlur} */
              ></InputText>

              <InputText
                type="email"
                placeholder="email address"
                name="mail1"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                onBlur={handleBlur}
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
                type="submit"
                onClick={handleUsers} 
              >
                Create an account
              </Button>
            </form>
          </Modal.Body>
        </ContainerLogin>
        <Modal.Footer bsPrefix="modal-footer">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Register;
