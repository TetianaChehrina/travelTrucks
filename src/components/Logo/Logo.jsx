import { Link } from "react-router-dom";
import css from "./Logo.module.css";
import sprite from "../../img/sprite.svg";
const Logo = () => {
  return (
    <>
      <Link to="/" className={css.logo}>
        <svg className={css.logo_item}>
          <use href={`${sprite}#icon-Logo`} />
        </svg>
      </Link>
    </>
  );
};
export default Logo;
