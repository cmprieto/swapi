import { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../application/provider.js";
import axios from "axios";

const Swapi = () => {
  /*     const [Starshisps, setStarshisps] = useContext(AppContext); */
  const [Characters, setCharacters, currPage, setCurrPage] = useContext(AppContext);
 

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/?page=${currPage}&size=10`).then((res) => {
      setCharacters(res.data.results);
      console.log(res.data.results);
    });
  }, []);
};
export { Swapi };
