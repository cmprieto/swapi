import { linkStyle, CardContainer } from '../styled.js';
import { Link } from 'react-router-dom';

const Character = ({ element, ident }) => {

    return (
        <li key={element.url}>
            <Link to={process.env.PUBLIC_URL + `/Character/${ident}`} state={element} style={linkStyle}>
                {console.log('PersonajeProp1', element)}
                <CardContainer>
                    {/*ESTILOS EN app.css -> pasarlos a styledcomp*/}
                    <img
                        src={
                            "https://starwars-visualguide.com/assets/img/characters/" +
                            ident +
                            ".jpg"
                        }
                        alt="characters"
                        width="75%"
                        height="75%"
                    ></img>
                    <div>{element.name}</div>
                </CardContainer>
            </Link>
        </li>
    );


}

export default Character;