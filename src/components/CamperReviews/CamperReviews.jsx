import { useSelector } from "react-redux";
import css from "./CamperReviews.module.css";
import { selectCamper } from "../../redux/campers/selectors";
import StarRating from "./StarRating";

const CamperReviews = () => {
  const camper = useSelector(selectCamper);
  const { reviews } = camper || {};

  return (
    <div className={css.review_list}>
      {reviews && reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className={css.review}>
            <div className={css.reviews_header}>
              <div className={css.avatar_circle}>
                {review.reviewer_name.charAt(0).toUpperCase()}
              </div>
              <div className={css.review_content}>
                <p className={css.review_name}>{review.reviewer_name}</p>
                <StarRating rating={review.reviewer_rating} />
              </div>
            </div>
            <div className={css.comment}>
              <p className={css.review_comment}>{review.comment}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Not found reviews</p>
      )}
    </div>
  );
};
export default CamperReviews;
