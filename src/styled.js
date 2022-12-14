import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import img from "./img/background.jpg";


export const GlobalStyle = createGlobalStyle`

	body {
    background-color: black;
    background-image: url("http://www.script-tutorials.com/demos/360/images/stars.png");
    /* 
    http://www.script-tutorials.com/demos/360/images/stars.png
		background-image: url(${img}); */
    margin:3rem;
	}`;
/*   @font-face {
  font-family: 'Roboto Condensed';
  src: url(${RobotoWoff2}) format('woff2'),
       url(${RobotoWoff}) format('woff');
} */


export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  /*  align-items: center;  */
  flex-wrap: wrap;
  align-content: space-between;

  /* width: 70vw;  */
  color: white;
  list-style: none;
  /* padding: 0px 20px; */
  /*  background-color: #a9a9a9; */
  /*   border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  border-top: 3px solid black; */
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  /* margin: 1em ; */
  li {
    /*  padding: 2rem; */
    width: 20%;
    /* border-top: 1px solid grey; */
    background-color: transparent;
    /* border-radius: 0.5rem; */
    /* margin: 0.5rem; */
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: yellow;
  text-decoration: uppercase;
`;

export const Ul2 = styled.ul`
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
  flex-direction: row;
  justify-content: flex-start;
  /* On mouse-over, add a deeper shadow */
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  img {
    /* padding: 2px 16px; */
  }
  /* Add some padding inside the card container */
  div {
    background-color: white;
    padding: 2px 16px;
    width: 50%;
  }
`;

export const Nav = styled.nav`
  padding-bottom: 20px;
  font-size: 1rem;
  letter-spacing: 1.15rem;


  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: transparent;
  }

  li {
    float: left;
    /* border-right: 1px solid #bbb; */
  }

  li:last-child {
    border-right: none;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    background-color: #111;
  }

  .active {
    color: #81d4fa;
  }
`;
