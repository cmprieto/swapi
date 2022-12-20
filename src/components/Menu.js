import { NavLink } from "react-router-dom";
import { Nav } from "../styled";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';


const Menu = ({ visible }) => {
  const { id } = useParams();
  const location = useLocation();
  const [name, setName] = useState('hhhh');

  useEffect(() => {
    location.state && setName(location.state.name);
  }, [id]);

  console.log('name', name);
  console.log('visible', visible);

  return (
    <Nav>
      <ul>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/"}>Home</NavLink>
        </li>
        <li>{visible && (<p>/</p>)}</li>
        <li>
          {visible && (<NavLink to={process.env.PUBLIC_URL + '/Characters/'}>Characters</NavLink>)}
        </li>
        <li>{location.state && (<p>/</p>)}</li>
        <li>
          {location.state && name}
        </li>
      </ul>
    </Nav >
  );
};
export default Menu;
