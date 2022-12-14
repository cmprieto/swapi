import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { StarShipCard } from "./starship.js";
import { useContext } from "react";
import { AppContext } from "../application/provider.js";
import { Ul, Title, Card } from "../styled.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../App.css";

const StarShips = () => {
  const [Starshisps] = useContext(AppContext);
  console.log(Starshisps);
  let direccion, ids, control;
  const handleStarship = () => {
    console.log("hola");
    /* console.log(useParams()); */
  };

  return (
    <Fragment>
      <Ul>
        {Starshisps &&
          Starshisps.map((e) => {
            /* const parametro = (e) => {
              const urlSearchParams = new URLSearchParams(e);
              const param = urlSearchParams.get("id");
              console.log("param es " + param)
            }; */
            return (
              /*EXTRAER ID DE URL DE api*/
              <li key={e.url}>
                {(direccion = e.url)}
                {(control = direccion.substring(33, 34))}
                {control === "/"
                  ? (ids = direccion.substring(32, 33))
                  : (ids = direccion.substring(32, 34))}
                {/*  if(control==="/"){
                      ids=direccion.substring(32,33)
                      }else{                    
                      ids=direccion.substring(32,34)
                      }
                
                 */}

                {/* {ids=direccion.substring(32,34)} */}
                {console.log("control es " + control + " direccion es " + ids)}

                <Link to={`/${ids}`}>
                  {console.log(e.url)}

                  <div className="card" onClick={handleStarship}>
                    <img
                      src={
                        "https://starwars-visualguide.com/assets/img/starships/" +
                        ids +
                        ".jpg"
                      }
                      alt="alternatetext"
                      width="90%"
                      height="90%"
                    ></img>
                    <div className="container">
                      {/* {e.name}-{e.model} */}
                      {e.url}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
      </Ul>
    </Fragment>
  );
};
export { StarShips };
