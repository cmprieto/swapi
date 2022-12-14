import { NavLink, Link } from "react-router-dom";
import { Nav } from "../styled";

const Menu = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/page2">Page2</NavLink>
        </li>
        {/* <li>
          <Link to="/:id">Id</Link>
        </li> */}
       <li>
          <NavLink to="/ajksdfkjhasdk">Error en la url</NavLink>
        </li> 
      </ul>
    </Nav>
  );
};
export {Menu};
