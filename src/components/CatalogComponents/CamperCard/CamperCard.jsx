import { IoHeartOutline } from "react-icons/io5";
import css from "./CamperCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../../redux/campers/selectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../redux/campers/camperSlice";

const CamperCard = ({ camper }) => {
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    gallery,
    transmission,
    TV,
    kitchen,
    microwave,
    gas,
    bathroom,
    reviews,
  } = camper;

  const reviewsCount = reviews ? reviews.length : 0;

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some((favorite) => favorite.id === id);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(camper));
    } else {
      dispatch(addToFavorites(camper));
    }
  };

  return (
    <div className={css.camper_card}>
      <div className={css.image_container}>
        {gallery.length > 0 && (
          <img
            src={gallery[0].thumb}
            alt={`${name} image`}
            className={css.camper_image}
          />
        )}
      </div>

      <div className={css.camper_details}>
        <div className={css.title_container}>
          <div className={css.title_and_rating}>
            <h3 className={css.camper_name}>{name}</h3>
            <p className={css.camper_rating}>
              ⭐ {rating} ({reviewsCount} Reviews) | {location}
            </p>
          </div>
          <p className={css.camper_price}>€{price.toFixed(2)}</p>
          <button className={css.favorite} onClick={handleFavorite}>
            <IoHeartOutline
              width="26"
              height="24"
              style={{ stroke: isFavorite ? "red" : "gray" }}
            />
          </button>
        </div>

        <p className={css.camper_description}>{description}</p>

        <div className={css.camper_features}>
          {gas && <span className={css.feature}>Gas</span>}
          {bathroom && <span className={css.feature}>Bathroom</span>}
          {kitchen && <span className={css.feature}>Kitchen</span>}
          {microwave && <span className={css.feature}>Microwave</span>}
          {TV && <span className={css.feature}>TV</span>}
          {transmission && <span className={css.feature}>{transmission}</span>}
        </div>

        <Link to={`/catalog/${id}`}>
          <button className={css.show_more_button}>Show more</button>
        </Link>
      </div>
    </div>
  );
};
export default CamperCard;
