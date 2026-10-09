import { NavLink } from "react-router-dom";
import ModeToggle from "./ModeToggle";

function Navigation() {
  return (
    <nav className="flex gap-5 p-4">
      {" "}
      <NavLink to="/">Butik</NavLink>
      <NavLink to="/about">Om</NavLink>
      <NavLink to="/cart">Kundvagn</NavLink>
      <ModeToggle />
    </nav>
  );
}

export default Navigation;
