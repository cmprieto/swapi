import { NavLink, Link } from "react-router-dom";
import { Fragment } from "react";
 import { Nav } from "../styled";
import { useLocation } from "react-router-dom";
import { AppContext } from "../application/provider.js";
import { useParams } from "react-router-dom";
const Menu = () => {
  const location = useLocation();
/*   let names= location.state.name;
 */  let isVisible = location.pathname.includes("/character");
  const { id } = useParams();
  return (
      <Nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="current">Home</NavLink>
        </li> 
        <li>{isVisible && (<p>/</p>)}</li>
        <li>
        {isVisible && (<NavLink to="/characters/" activeClassName="current">Characters</NavLink>)}
        </li>
    {/*     <li>
        {isVisible && (<NavLink to='/characters/${id}' activeClassName="current">{names}</NavLink>)}
        </li> */}
      </ul>
      </Nav>
  );
};
export { Menu };
