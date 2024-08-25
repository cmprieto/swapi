import { Fragment } from "react";
import { useCartContext } from "../../application/Provider.js";
import { CharactersListsContainer } from "./CharactersLists.styles.js";
import Character from "../Character/Character.js";
import "../../App.css";

const CharactersLists = () => {
  const { Characters } = useCartContext();
  let direccion, ids, control;

  /*   if(loading){
    return <Title>Loading...</Title>;
  } */

  return (
    <Fragment>
      <CharactersListsContainer>
        {Characters &&
          Characters.map((e, index) => {
            /*EXTRAER ID DE URL DE api*/
            console.log('e', e);
            direccion = e.url;
            control = direccion.substring(30, 31);
            //ternario -> para obteber id varia si la id es una cifra o dos. hay que extraerlo con ternario
            control === "/"
              ? (ids = direccion.substring(29, 30))
              : (ids = direccion.substring(29, 31));

            console.log("control es " + control + " direccion es " + ids);

            return (
              <Character element={e} key={index} ident={ids} /> //he cambiado 1 i por key 22/8/2024
            );
          })}
        {/* <button>Ver más personajes</button> */}
      </CharactersListsContainer>
    </Fragment>
  );
};
export default CharactersLists;
