import styled from 'styled-components';
const desktopStartWidth = 1000;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const Pyellow = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  line-height:1.5rem;
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
    border-radius: 8px;
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
