import styled from "styled-components";
const desktopStartWidth = 1000;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
export const FilmsListsContainer = styled.div`
  //FICHAS DE PELICULAS
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  width: auto;
  background-color: transparent;

  ${mobile} {
    flex-wrap: wrap;
  }
`;
export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const P = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: grey;
  margin-bottom: 0;
  text-transform: uppercase;
`;

export const Divider = styled.hr`
  border-top: 8px solid #bbb;
  border-radius: 5px;
  width: 600px;
  margin: 0.5rem auto;

  &:hover {
    border-top: 8px solid yellow;
    margin: 0.5rem auto;
  }
`;
