import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../application/provider.js";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Pagination = () => {
  const [Characters, setCharacters,TotalNumberItemsPages] = useContext(AppContext);

  let navigate = useNavigate();

  const fetchCharacters = async (currentPage) => {
    const res = await fetch(
      `https://swapi.dev/api/people/?page=${currentPage}`
    );
    const data = await res.json();

    return data.results; //CLAVE, DEVOLVER VALORES DENTRO DEL ARRAY DE PERSONAJES [RESULTS]
  };

  const handlePageClick = async (data) => {
    console.log(data.selected); //nos da el valor integer del page number
    let currentPage = parseInt(data.selected + 1); // corrrige el desfase de valor 0 a pág 1 
    console.log(currentPage);
    const characterFormServer = await fetchCharacters(currentPage);
    setCharacters(characterFormServer);
    navigate(`../page/${currentPage}`, { replace: true });    //SE DEFINE LA PAGINA DESTINO COMO SI FUERA UN LINK PERO SIN COMPONENTES SINO FUNCIONAL O ALGO ASI // SINO SE PONE URL NO VARIA AUNQUE CLIQUES EN PAGINADOR
  };

  
  
  return (
    <div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={Math.ceil(TotalNumberItemsPages/10)}     // OBTENEMOS VALOR NUMERO MAX ITEMS Y LO / NUMERO ITEMS POR PAGINA (10)     //función Math.ceil() devuelve el entero mayor o igual más próximo a un número dado.   
        marginPagesDisplayed={4} //numero pg mostradas en numeros
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"} // ul class bootstrap component pagination
        pageClassName={"page-item"} //li class bootstrap
        pageLinkClassName={"page-link"} // a class bootstrap
        previousClassName={"page-item"} //previous boton
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"} //next boton
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"} //styling boton ...
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export { Pagination };
