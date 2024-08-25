import styled, { createGlobalStyle } from "styled-components";
import fondoStars from "./img/stars.png";

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

export const Pred = styled.p`
  font-size: 0.9em;
  color: red;
`;
