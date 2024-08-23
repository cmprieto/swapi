import { useLocation } from "react-router-dom";
import { Card, Ul2 } from "../styled.js";
import { useParams } from "react-router-dom";
import FilmsListContainer from "./FilmsListContainer.js";


const CharactersCard = () => {
  const location = useLocation();
  const personaje = location.state;
  const { id } = useParams();

  return (
    <div>
      {console.log('personaje', personaje)}

      <Card>
        <br />
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="characters"
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
      <br />

      {personaje.films && <FilmsListContainer prop={personaje.films} ></FilmsListContainer>}

    </div>
  );
};
export default CharactersCard;
