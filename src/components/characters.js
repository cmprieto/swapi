import React, { Fragment, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../application/provider.js";
import { Ul } from "../styled.js";
import { Link } from "react-router-dom";
import "../App.css";

const Characters = () => {
  const [Characters] = useContext(AppContext);
  const [controlPage, setControlPage] = useState(1);

  let direccion, ids, control;



  const handleNextPage = () => {
    let suma = controlPage + 1;
    setControlPage(suma);
  };

  return (
    <Fragment>
      <Ul>
        {Characters &&
          Characters.map((e) => {
            /*EXTRAER ID DE URL DE api*/
            direccion = e.url;
            control = direccion.substring(30, 31);
            //ternario ->para obteber id varia si la id es una cifra o dos. hay que extraerlo con ternario
            control === "/"
              ? (ids = direccion.substring(29, 30))
              : (ids = direccion.substring(29, 31));

            console.log("control es " + control + " direccion es " + ids);

            return (
              <li key={e.url}>
                <Link to={`/character/${ids}`} state={e}>
                  {console.log(e)}
                  <div className="card">

                    {/*ESTILOS EN app.css -> pasarlos a styledcomp*/}
                    <img
                      src={
                        "https://starwars-visualguide.com/assets/img/characters/" +
                        ids +
                        ".jpg"
                      }
                      alt="characters"
                      width="75%"
                      height="75%"
                    ></img>
                    <div className="container">{e.name}</div>
                  </div>
                </Link>
              </li>
            );
          })}
      </Ul>
      <button onClick={handleNextPage}>
        <p>Cargar más personajes</p>
      </button>
    </Fragment>
  );
};
export { Characters };
