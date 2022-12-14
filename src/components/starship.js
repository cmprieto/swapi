import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { Swapi } from "../services/swapi";
import { useContext } from "react";
import { AppContext } from "../application/provider.js";
import { Ul, Title, Card } from "../styled.js";
import { useParams } from "react-router-dom";
import "../App.css";
import Provider from "../application/provider";

const StarShipCard = () => {
  const [Starshisps] = useContext(AppContext);
  /* console.log(Starshisps); */
  const { id } = useParams();
  console.log(id);

  return (
    <Fragment>
      <Provider>
      <Swapi />
        <Title>STAR SHIP CARD {id}</Title>
      </Provider>
    </Fragment>
  );
};
export { StarShipCard };
