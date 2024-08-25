import styled from "styled-components";
const desktopStartWidth = 1000;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

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

export const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
  };
  
  
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
