import styled, { createGlobalStyle } from "styled-components";
import fondoStars from './img/stars.png';

const desktopStartWidth = 1000;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const GlobalStyle = createGlobalStyle`   
	body {
    /* box-sizing: content-box; */
    background-color: black;
    background-image: url(${fondoStars});  
    margin:2rem auto;
    text-align: center;
    max-width:80vw;
    font-family: 'Roboto Condensed'; 
	}`;

/* export const Image = styled.img(src: `$logoSW`)`
  width: 46%;
  float: left;
  margin-right: 10px;
  /* src: `$logoSW` 
`; */

export const CharactersListsContainer = styled.ul`    //FICHAS DE PERSONAJES 
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  background-color: transparent;
  /* width: 70vw;  */
  color: white;
  list-style: none;
  padding: 0;

  li {
    padding: 0.4rem;
    max-width: 20%;
    /* border-top: 1px solid grey; */
    /* border-radius: 0.5rem; */
    /* margin: 0.5rem; */
    /* box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16); */
  }
   ${mobile} {
    li{
      max-width: 50%;
    }
  }
`;

export const CardContainer = styled.div`
  margin: 1rem;
  background-color: transparent;
  transition: 0.3s;
   color: #282c34;  

   img{
    border-radius: 5px 5px 0 0; 
    width: 100%;
  } 
  div{
    font-size:1.5vw; 
    background-color: whitesmoke;
 
  
  }
  &:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transform: translateY(5%);
  opacity:0.8;
}
`;

export const Title = styled.h1`
  /*  font-family: 'Anton'; */ /* 'Starjedi', 'Roboto Condensed';*/
  font-size: 4em;
  text-align: center;
  color: yellow;
  position: absolute;
  /* text-decoration: uppercase; */
`;

export const Ul2 = styled.ul`   //FICHA CHARACTERS CARD
  list-style: none;

  li {
    font-size: 0.85rem;
    text-align: left;
    color: grey;
    text-decoration: uppercase;
  }
  li:first-child {
    font-size: 1.5em;
    text-align: left;
    color: black;
    text-decoration: uppercase;
  }
`;



/* export const Panel = styled.div`
  background-color: salmon;
  &:hover {
    background-color: paleGreen;
  }
`; */

export const Card = styled.div`
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  display: flex;
  background-color: transparent;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;

  /* On mouse-over, add a deeper shadow */
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  img{
    width:25%;
    height:25%;
  }

  /* Add some padding inside the card container */
  div {
    background-color: white;
    padding: 2px 16px;
    width: 50%;
  }
  ${mobile} {
    flex-direction: column;
    align-items: center;
    div{
      width: 90%;
    }
    img{
      width:90%;
    }
  }

`;

export const Nav = styled.li`
  ul {
    font-size: 0.9rem;
    letter-spacing: 1.05rem;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: transparent;
  }
  li {
    float: left;
    color: white;
    /* border-right: 1px solid #bbb; */
  }
  /*  */
  li a {
    display: block;
    color: #81d4fa;
  /*   text-align: center; */
    /* padding: 14px 16px;*/
    text-decoration: none;
    border-radius:2px;
    padding: 2px;
  }
  li a:hover:not(.active) {
    background-color: #ffffe0;
    color: black;
    opacity:0.5;
    }
  li .active {
    /* border-bottom: 2px solid yellow; */
    color: white;
 
  }
`;

export const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
};




export const Cabecera = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  font-size: 0.8rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Img = styled.img`
  width: 75vw;
  margin: 15px;
  transition: width 6s;
  opacity: 0.8;
`;

export const Button = styled.button`
  position: relative;
  color: white;
  font-size: 1em;
  /* margin: 1em; */
  padding: 0.25em 1em;
  border: 2px solid transparent;
  border-top: 2px solid #ffffe0;
  border-radius: 3px;
  display: block;
  opacity: 0.6;
  background-color: black;
  bottom: 50px;
  // PARA ELIMINAR EL UNDERLINE DE BOTON CON LINK
  &:link {
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
  }

  &:active {
    text-decoration: none;
  }
`;

export const HeaderLogo = styled.div`
display:flex;
/* outline: 1px solid red; */
margin:0px;
padding:0px;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`;

export const ButtonLog = styled.button`
  position:relative;
  color: white;
  font-size: 0.8rem;
  /* margin: 1em; */
  /* padding: 0.25em 1em; */
  border: 1px solid transparent;
  /* border-top: 2px solid #ffffe0; */
  border-radius: 3px;
  display: inline;
  opacity: 0.6;
  background-color: black;
  
  
  // PARA ELIMINAR EL UNDERLINE DE BOTON CON LINK
  &:link {
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
    color:yellow;
    border-top: 2px solid #ffffe0;
  }

  &:active {
    text-decoration: none;
    color:red;
  }
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items:center;
  input{
    min-width:90%;
  }
  Button{
    min-width:90%;
  }
`;
export const InputText = styled.input`
  font-size: 1em;
  padding: 5px;
  margin: 10px; 
  background-color: white;
  border: 1px solid grey;
  border-radius: 3px;
  width: 90%;
  &:hover {
    border: 1px solid grey;
    
  }
`;
export const ModalFoot = styled.div`
    margin:0;
    padding:0;
    border-radius:3px;
`;
export const Pgreen = styled.p`
  font-size: 0.9em;
  color: green;
`;
export const Pred = styled.p`
  font-size: 0.9em;
  color: red;
`;

export const Pyellow = styled.p`
  font-size: 1rem;
  color: yellow;
`;


export const FilmsListsContainer = styled.div`    //FICHAS DE PELICULAS 
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  width: auto;
  background-color: transparent;
  
   ${mobile} {
      flex-wrap:wrap;
  }
`;

export const CardFilms = styled.div`
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 0.5rem;
  justify-content: space-between; 

  /* On mouse-over, add a deeper shadow */
/*   &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  } */
&:hover {
  opacity:0.8;
  }

img{
    background-color: white;
    padding: 2px 8px;
    border-radius: 10px;
    max-width: 150px;
  }

  /* Add some padding inside the card container */
  p {
    
    text-align: center;
  }

  ${mobile} {
    flex-direction: column;
    align-items: center;
    p{
      width: 90%;
    }
    img{
      width:90%;
    }
  }
`;

export const Container2 = styled.div`
 display:flex;
 flex-direction:column;
 justify-content: flex-end;

 width: 70vw;
`;

export const Div = styled.div`
width:50%;
display:flex;
justify-content: flex-end;

`;
export const P = styled.p`

    font-size: 1.5em;
    text-align: left;
    color: grey;
    text-decoration: uppercase;
    border-bottom: 2px solid grey;
    max-width: 90% ;
`
