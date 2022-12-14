import React, { Fragment, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../application/provider.js";
import Provider from "../application/provider";
import { Swapi } from "../services/swapi";
import { Card, Ul2 } from "../styled.js";
import { useParams } from "react-router-dom";
import "../App.css";
import { Header } from "./header.js";

const CharactersCard = () => {
  const location = useLocation();
  const personaje = location.state;
  const { id } = useParams();
  const [Characters] = useContext(AppContext);

  return (
    <Fragment>
      {/* <Provider> */}
         <Swapi /> 
        <Header />
        <Card>
          <br />
          <img
            src={
              "https://starwars-visualguide.com/assets/img/characters/" +
              id +
              ".jpg"
            }
            alt="characters"
            width="25%"
            height="25%"
          ></img>

          <div>
            <br />
            <Ul2>
              <li>{personaje.name}</li>
              <br />
              <li>Birth Year : {personaje.birth_year}</li>
              <li>Height : {personaje.height}</li>
              <li>Mass : {personaje.mass}</li>
              <li>Gender : {personaje.gender}</li>
              <li>Hair Color : {personaje.hair_color}</li>
              <li>Skin Color : {personaje.skin_color}</li>
            </Ul2>
          </div>
        </Card>
     {/*  </Provider> */}
    </Fragment>
  );
};
export { CharactersCard };
