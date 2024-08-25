import styled from "styled-components";
const desktopStartWidth = 1000;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const Cabecera = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid #343434;
`;
export const HeaderLogo = styled.div`
  display: flex;
  /* outline: 1px solid red; */
  margin: 0px;
  padding: 0px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const ButtonLog = styled.button`
  position: relative;
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
    color: yellow;
    border-top: 2px solid #ffffe0;
  }

  &:active {
    text-decoration: none;
    color: red;
  }
`;
