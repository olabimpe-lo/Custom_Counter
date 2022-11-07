import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <NavLink to="/"> UseReducer</NavLink>
      <NavLink to="/customhook"> CustomHook</NavLink>
      <NavLink to="*">ErrorPage</NavLink>
      <div>Navbar</div>
    </nav>
  );
}
