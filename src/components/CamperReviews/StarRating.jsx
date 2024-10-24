import sprite from "../../img/sprite.svg";
import css from "./StarRating.module.css";

const StarRating = ({ rating }) => {
  const stars = Array(5).fill(0);
  return (
    <div className={css.star_container}>
      {stars.map((_, index) => (
        <svg key={index} className={css.star}>
          <use
            href={`${sprite}#${
              index < rating ? "icon-star" : "icon-starwhite"
            }`}
          />
        </svg>
      ))}
    </div>
  );
};
export default StarRating;
