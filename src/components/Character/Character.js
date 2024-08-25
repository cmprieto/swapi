import { linkStyle, CardContainer } from './Character.styles';
import { Link } from 'react-router-dom';

const Character = ({ element, ident, i }) => {

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
                    <div><p>{element.name}</p></div>
                </CardContainer>
            </Link>
        </li>
    );


}

export default Character;