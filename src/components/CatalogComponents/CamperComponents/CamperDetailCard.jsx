import css from "./CamperDetailCard.module.css";

const CamperDetailCard = ({ camper }) => {
  const { name, rating, price, reviews, location, gallery, description } =
    camper;
  const reviewsCount = reviews ? reviews.length : 0;

  return (
    <div className={css.camper_card}>
      <div className={css.camper_info}>
        <h3 className={css.card_title}>{name}</h3>
        <p className={css.camper_rating}>
          ⭐ {rating} ({reviewsCount} Reviews) | {location}
        </p>
        <p className={css.camper_price}>€{price}</p>
      </div>
      {gallery && gallery.length > 0 && (
        <div className={css.camper_gallery}>
          {gallery.map((image, index) => (
            <img
              key={index}
              src={image.thumb}
              alt={`${name} image ${index + 1}`}
              className={css.camper_image}
            />
          ))}
        </div>
      )}
      <p className={css.camper_description}>{description}</p>
    </div>
  );
};

export default CamperDetailCard;
