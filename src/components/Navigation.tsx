import { NavLink } from "react-router-dom";
import StoreHours from "./StoreHours";

function Navigation() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 shadow-sm md:px-12">
      <div className="flex items-center gap-6">
        <NavLink
          to="/"
          className="!no-underline cursor-pointer rounded-md px-2 py-1 text-sm font-medium text-brand transition-colors hover:bg-gray-100 hover:text-brand-dark"
        >
          My webshop
        </NavLink>
        <StoreHours />
      </div>

      <div className="flex items-center gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `!no-underline cursor-pointer rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-gray-100 ${
              isActive ? "!text-brand" : "!text-gray-600 hover:!text-brand-dark"
            }`
          }
        >
          Store
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `!no-underline cursor-pointer rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-gray-100 ${
              isActive ? "!text-brand" : "!text-gray-600 hover:!text-brand-dark"
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `!no-underline cursor-pointer rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-gray-100 ${
              isActive ? "!text-brand" : "!text-gray-600 hover:!text-brand-dark"
            }`
          }
        >
          Cart
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
