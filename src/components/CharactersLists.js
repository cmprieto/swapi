import React, { Fragment } from "react";
import { useCartContext } from "../application/Provider.js";
import { Ul, linkStyle } from "../styled.js";
import { Link } from "react-router-dom";
import "../App.css";

const CharactersLists = () => {
  const { Characters } = useCartContext();
  let direccion, ids, control;

  /*   if(loading){
    return <Title>Loading...</Title>;
  } */

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
                <Link to={process.env.PUBLIC_URL + `/Character/${ids}`} state={e} style={linkStyle}>
                  {console.log('Personaje', e)}
                  <div className="card">
                    {/*ESTILOS EN app.css -> pasarlos a styledcomp*/}
                    <img id="foto"
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
    </Fragment>
  );
};
export default CharactersLists;
