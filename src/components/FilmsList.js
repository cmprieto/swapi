import { useEffect, useState } from 'react';
import { Pyellow, CardFilms } from '../styled';

import "../App.css";
const FilmsList = ({ proper }) => {
    const [filmsList, setFilmsList] = useState(null);
    const [opening, setOpening] = useState('');
    const [episodeId, setEpisodeId] = useState(null);


    useEffect(() => {
        fetch(`${proper}`)
            .then(res => res.json())
            .then(res => {
                setFilmsList(res.title)
                setOpening(res.opening_crawl)
                setEpisodeId(res.episode_id)
            }
            )
    }, []);

    const episode = (episodeId) => {
        if (episodeId > 3) {
            return episodeId - 3;
        }
        else if (episodeId <= 3) {
            return (episodeId + 3);
        }
    }
    return (
        <div>
            {episodeId &&
                <CardFilms>
                    <img
                        src={`https://starwars-visualguide.com/assets/img/films/${episode(episodeId)}.jpg`}
                        alt="films"
                    ></img>
                    <Pyellow>{filmsList}</Pyellow>
                </CardFilms >
            }
        </div>


    )
}

export default FilmsList;