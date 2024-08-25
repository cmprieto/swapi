import styled from 'styled-components';
const desktopStartWidth = 1000;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;


export const Nav = styled.li`
  ul {
    font-size: 0.9rem;
    letter-spacing: 1rem;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: transparent;
    text-transform: uppercase;
    font-weight:600;
  }
  li {
    float: left;
    color: white;
    /* border-right: 1px solid #bbb; */
  }

  li a {
    display: block;
    color: #81d4fa;
  /*   text-align: center; */
    /* padding: 14px 16px;*/
    text-decoration: none;
    border-radius:2px;
    padding: 2px;
  }
  li a:hover:not(.active) {
    background-color: #ffffe0;
    color: black;
    opacity:0.5;
    }
  li .active {
    /* border-bottom: 2px solid yellow; */
    color: white;
 
  }
`;