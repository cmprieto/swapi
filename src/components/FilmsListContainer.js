import FilmsList from "./FilmsList";
import { FilmsListsContainer, P, Container2, Div, Divider } from '../styled';


const FilmsListContainer = ({ prop }) => {
    console.log('filmsprop', prop);
    return (
        <Container2>

            <P>Appearances</P>
            <Divider />
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