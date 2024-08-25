import styled from 'styled-components';
const desktopStartWidth = 1000;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const Card = styled.div`
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  display: flex;
  background-color: transparent;
  flex-direction: row;
  justify-content: center;
  padding: 2rem;
  border-radius: 8px;
  /* On mouse-over, add a deeper shadow */
  &:hover {
    box-shadow: 0 4px 8px 0 whitesmoke;
    
  }
  img{
    width:25%;
    height:25%;
     &:hover {
    box-shadow: 0 4px 8px 0 whitesmoke;
    
  }
  }

  /* Add some padding inside the card container */
  div {
    background-color: white;
    padding: 2px 16px;
    min-width: 50%;
         &:hover {
    box-shadow: 0 4px 8px 0 whitesmoke;
    
  }
  }
  ${mobile} {
    flex-direction: column;
    align-items: center;
    div{
      width: 70%;
    }
    img{
      width:70%;
    }
  }

`;

export const Ul2 = styled.ul`   //FICHA CHARACTERS CARD
  list-style: none;

  li {
    font-size: 1rem;
    text-align: left;
    color: grey;
    text-transform: uppercase;
    font-weight:500;
  }
  li:first-child {
    font-size: 1.5em;
    text-align: left;
    color: black;
    text-transform: uppercase;
    font-weight:bold;
  }
`;
