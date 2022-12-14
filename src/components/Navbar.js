import { NavLink, Link } from "react-router-dom";
import { Nav } from "../styled";

const Menu = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>/</li>
        <li>
          <NavLink to="/characters/">Characters</NavLink>
        </li>
      </ul>
    </Nav>
  );
};
export {Menu};
