import styled from 'styled-components';
const desktopStartWidth = 1000;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;


export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items:center;
  input{
    min-width:90%;
  }
  Button{
    min-width:90%;
  }
`;

export const InputText = styled.input`
  font-size: 1em;
  padding: 5px;
  margin: 10px; 
  background-color: white;
  border: 1px solid grey;
  border-radius: 3px;
  width: 90%;
  &:hover {
    border: 1px solid grey;
    
  }
`;
export const ModalFoot = styled.div`
    margin:0;
    padding:0;
    border-radius:3px;
`;
export const Pgreen = styled.p`
  font-size: 0.9em;
  color: green;
`;
export const Pred = styled.p`
  font-size: 0.9em;
  color: red;
`;
