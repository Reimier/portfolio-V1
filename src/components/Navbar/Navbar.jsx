import "./navbar.css";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <>
      <nav>
        
        <NavLink to="#">Reimier Reyes</NavLink>

        <div className="links">
          <NavLink to="#">About</NavLink>
          <NavLink to="#">Projects</NavLink>
        </div>
      </nav>
    </>
  );
}