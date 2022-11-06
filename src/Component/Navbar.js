import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <Link to="/">Counter App Home Page</Link>
      <Link to="/CustomCounter">Custom Counter App Home Page</Link>
      <div>Navbar</div>
    </nav>
  );
}
