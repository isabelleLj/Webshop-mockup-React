import { NavLink } from "react-router-dom";
import ModeToggle from "./ModeToggle";

function Navigation() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 shadow-sm md:px-12">
      <NavLink
        to="/"
        className="!no-underline text-sm font-medium transition-colors hover:text-brand"
      >
        Min webbshop
      </NavLink>

      <div className="flex items-center gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `!no-underline text-sm font-medium transition-colors hover:text-brand ${
              isActive ? "!text-brand" : "!text-gray-600"
            }`
          }
        >
          Butik
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `!no-underline text-sm font-medium transition-colors hover:text-brand ${
              isActive ? "!text-brand" : "!text-gray-600"
            }`
          }
        >
          Om
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `!no-underline text-sm font-medium transition-colors hover:text-brand ${
              isActive ? "!text-brand" : "!text-gray-600"
            }`
          }
        >
          Kundvagn
        </NavLink>

        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navigation;
