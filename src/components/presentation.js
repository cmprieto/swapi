import React, { Fragment } from "react";
import { Container, Img, Button } from "../styled.js";
import "../App.css";
import luz from "../img/starWars.jpg";
import Light from "../img/Luz.gif";

const Presentation = () => {
  return (
    <Fragment>
      <Container>
        {/*       <Img src={Light} alt="StarWarsP" /> */}
        <br />
        <Img src={luz} alt="StarWarsPoster" />
        <Button as="a" href="/characters/">
          MEET THE CHARACTERS
        </Button>
      </Container>
    </Fragment>
  );
};

export { Presentation };
