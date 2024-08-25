import styled from 'styled-components';
const desktopStartWidth = 1000;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

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