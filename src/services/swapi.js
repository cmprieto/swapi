import { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../application/provider.js";
import axios from "axios";
import ReactPaginate from "react-paginate";

const Swapi = () => {
  /*     const [Starshisps, setStarshisps] = useContext(AppContext); */
  const [Characters, setCharacters,TotalNumberItemsPages,setTotalNumberItemsPages] = useContext(AppContext);

  /* useEffect(() => {
    axios.get(`https://swapi.dev/api/people/?page=${currPage}`).then((res) => {
      setCharacters(res.data.results);
      console.log(res.data.results);
    });
  }, []); */

  useEffect(() => {
    const getComments = async () => {
      const res = await axios.get(`https://swapi.dev/api/people/?page=1`);
      setCharacters(res.data.results);
      setTotalNumberItemsPages(res.data.count);  // OBTENEMOS VALOR NUMERO MAX ITEMS Y LO / NUMERO ITEMS POR PAGINA (10)        

    };
    getComments();

  }, []);
  console.log(Characters);

  /* const fetchComments = async (currentPage) => {
    const res = await fetch(
      `https://swapi.dev/api/people/?page=${currentPage}`
    );
    const data = await res.json();
    return data;
  }; */
};

export { Swapi };
