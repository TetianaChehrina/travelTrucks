import { NavLink } from "react-router-dom";

import css from "./Header.module.css";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.header_container}>
        <Logo />
        <nav className={css.navigation}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${css.link} ${css.active}` : css.link
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${css.link} ${css.active}` : css.link
            }
            to="/catalog"
          >
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
