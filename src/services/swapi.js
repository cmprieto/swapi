import { useEffect } from "react";
import { useCartContext } from '../application/Provider.js';
import axios from "axios";

const Swapi = () => {

  const { Characters, setCharacters, TotalNumberItemsPages, setTotalNumberItemsPages } = useCartContext();


  useEffect(() => {
    const getComments = async () => {
      const res = await axios.get(`https://swapi.dev/api/people/?page=1`);    // SIEMPRE RECARGA PAG 1 DE API AL REFRESCAR, NO RESPETA CURRENTPAGE
      setCharacters(res.data.results);
      setTotalNumberItemsPages(res.data.count);  // OBTENEMOS VALOR NUMERO MAX ITEMS Y LO / NUMERO ITEMS POR PAGINA (10)        
    };
    getComments();
  }, []);

  console.log('PersonajesAxios', Characters);
  console.log('TotalNumberItemsPages', TotalNumberItemsPages);


};

export default Swapi;
