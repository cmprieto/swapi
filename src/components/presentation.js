import { Fragment } from "react";
import { Container, Img, Button } from "../styled.js";
import "../App.css";
import luz from "../img/starWars.jpg";
import { Link } from 'react-router-dom';
import { linkStyle } from '../styled';

const Presentation = () => {
  return (
    <Fragment>
      <Container>
        {/*       <Img src={Light} alt="StarWarsP" /> */}
        <br />
        <Img src={luz} alt="StarWarsPoster" />
        {/*<Button as="a" href={process.env.PUBLIC_URL + "/Characters/"}>
          MEET THE CHARACTERS
        </Button> */}
        <Button><Link to={process.env.PUBLIC_URL + '/Characters/'} style={linkStyle}>MEET THE CHARACTERS</Link></Button>
      </Container>
    </Fragment>
  );
};

export default Presentation;
