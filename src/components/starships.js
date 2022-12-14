import React, { Fragment } from "react";
import { useContext } from "react";
import { AppContext } from "../application/provider.js";
import { Ul, } from "../styled.js";
import { Link } from "react-router-dom";

import "../App.css";

const StarShips = () => {
  const [Starshisps] = useContext(AppContext);
  console.log(Starshisps);
  let direccion, ids, control;
  const handleStarship = () => {
    console.log("hola");

  };

  return (
    <Fragment>
      <Ul>
        {Starshisps &&
          Starshisps.map((e) => {
            return (
              /*EXTRAER ID DE URL DE api*/
              <li key={e.url}>
                {(direccion = e.url)}
                {(control = direccion.substring(33, 34))}
                {control === "/"
                  ? (ids = direccion.substring(32, 33))
                  : (ids = direccion.substring(32, 34))}
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
