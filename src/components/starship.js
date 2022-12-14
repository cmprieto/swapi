import React, { Fragment } from "react";
import { Swapi } from "../services/swapi";
import { Title } from "../styled.js";
import { useParams } from "react-router-dom";
import "../App.css";
import Provider from "../application/provider";

const StarShipCard = () => {

  const { id } = useParams();
  console.log(id);

  return (
    <Fragment>
      <Provider>
        <Swapi />
        <Title>j9ejwd0wj_STAR SHIP CARD {id}</Title>
      </Provider>
    </Fragment>
  );
};
export { StarShipCard };
