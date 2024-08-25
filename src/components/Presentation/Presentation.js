import { Fragment } from "react";
import { Container, Img, Button,linkStyle } from "./Presentation.styles.js";
import "../../App.css";
import luz from "../../img/starWars.jpg";
import { Link } from 'react-router-dom';


const Presentation = () => {
  return (
    <Fragment>
      <Container>
        <br />
        <Img src={luz} alt="StarWarsPoster" />
        <Button><Link to={process.env.PUBLIC_URL + '/Characters/'} style={linkStyle}>MEET THE CHARACTERS</Link></Button>
      </Container>
    </Fragment>
  );
};

export default Presentation;
