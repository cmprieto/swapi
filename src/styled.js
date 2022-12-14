import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`   
	body {
    /* box-sizing: content-box; */
    background-color: black;
    background-image: url("http://www.script-tutorials.com/demos/360/images/stars.png");
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

export const Ul = styled.ul`    //FICHAS DE PERSONAJES 
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  flex-wrap: wrap;
  align-content: center;
  background-color: transparent;
  /* width: 70vw;  */
  color: white;
  list-style: none;
  padding: 0;

  /* padding: 0px 20px; */
  /*  background-color: #a9a9a9; */
  /*   border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  border-top: 3px solid black; */
  /* box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16); */
  /* margin: 1em ; */
  li {
    padding: 0.4rem;
    max-width: 20%;
    /* border-top: 1px solid grey; */
    /* border-radius: 0.5rem; */
    /* margin: 0.5rem; */
    /* box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16); */
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
  justify-content: flex-start;
  padding: 1rem;

  /* On mouse-over, add a deeper shadow */
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  /* Add some padding inside the card container */
  div {
    background-color: white;
    padding: 2px 16px;
    width: 50%;
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
    color: white;
    text-align: center;
    /*     padding: 14px 16px;*/
    text-decoration: none;
  }
  li a:hover:not(.active) {
    background-color: #111;
  }
  li .active {
    /* border-bottom: 2px solid yellow; */
    color: #81d4fa;
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
