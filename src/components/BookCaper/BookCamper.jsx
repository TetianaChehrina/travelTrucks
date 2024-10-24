import BookingForm from "../BookingForm/BookingForm";
import css from "./BookCamper.module.css";

const BookCamper = () => {
  return (
    <div className={css.book_card}>
      <div className={css.book_details}>
        <h3 className={css.book_title}>Book your campervan now</h3>
        <p className={css.book_text}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <BookingForm />
    </div>
  );
};
export default BookCamper;
