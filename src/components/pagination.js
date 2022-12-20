import ReactPaginate from "react-paginate";
import React from "react";
import { useCartContext } from '../application/Provider.js';
import "../App.css";
import { useNavigate } from "react-router-dom";

const Pagination = () => {
  const { setCharacters, TotalNumberItemsPages } =
    useCartContext();

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
    navigate(`${process.env.PUBLIC_URL}/Characters/${currentPage}`, { replace: true }); //SE DEFINE LA PAGINA DESTINO COMO SI FUERA UN LINK PERO SIN COMPONENTES SINO FUNCIONAL O ALGO ASI // SINO SE PONE URL NO VARIA AUNQUE CLIQUES EN PAGINADOR
  };



  return (
    <div className="paginador">
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={Math.ceil(TotalNumberItemsPages / 10)} // OBTENEMOS VALOR NUMERO MAX ITEMS Y LO / NUMERO ITEMS POR PAGINA (10)     //función Math.ceil() devuelve el entero mayor o igual más próximo a un número dado.
        marginPagesDisplayed={2} //numero pg mostradas en numeros
        onPageChange={handlePageClick}
        /* containerClassName={"pagination pagination-sm justify-content-end"}  */ // ul class bootstrap component pagination
        containerClassName={
          "paginationBttns paginationBttns-sm justify-content-end"
        } // ul class bootstrap component pagination
        //DEFINIMOS UNA CLASE EN APP.CSS
        activeClassName={"paginationActive"} //DEFINIMOS UNA CLASE EN APP.CSS
        pageClassName={"page-item"} //li class bootstrap
        pageLinkClassName={"page-link"} // a class bootstrap
        previousClassName={"page-item"} //previous boton
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"} //next boton
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"} //styling boton ...
        breakLinkClassName={"page-link"}
      /* activeClassName={"active"} */
      />
    </div>
  );
};

export default Pagination;
