import FilmsList from "./FilmsList";
import { FilmsListsContainer, P, Container2, Div } from '../styled';


const FilmsListContainer = ({ prop }) => {
    console.log('filmsprop', prop);
    return (
        <Container2>
            <Div>
                <P>Appearances</P>
            </Div>
            <FilmsListsContainer>
                {prop &&
                    prop.map((e, i) => {
                        return <FilmsList proper={e} key={i}></FilmsList>
                    })
                }
            </FilmsListsContainer >
        </Container2>
    );
}

export default FilmsListContainer;