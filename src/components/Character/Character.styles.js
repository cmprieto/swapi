import styled from 'styled-components';
const desktopStartWidth = 1000;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
export const CardContainer = styled.div`
  margin: 1rem;
  background-color: transparent;
  transition: 0.3s;
  color: #282c34;  

  img{
    border-radius: 8px 8px 0 0; 
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
  p{
    font-weight:600;
  }
`;



export const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
  };

  