import { Field, Formik, Form } from "formik";
import css from "./BookingForm.module.css";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const BookingForm = () => {
  const BookingFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(14, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    bookingDate: Yup.date()
      .typeError("Invalid date format")
      .required("Required"),
    comment: Yup.string().min(10, "Too Short!").max(50, "Too Long!"),
  });

  const [startDate, setStartDate] = useState(null);

  const handleSubmit = (values, actions) => {
    localStorage.setItem("bookingDate", JSON.stringify(values));
    toast.success("Booking successfully completed!", {
      duration: 3000,
    });
    actions.resetForm();
  };
  return (
    <div className={css.form_container}>
      <Toaster />
      <Formik
        initialValues={{
          name: "",
          email: "",
          bookingDate: "",
          comment: "",
        }}
        validationSchema={BookingFormSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className={css.booking_form}>
            <Field
              type="text"
              name="name"
              placeholder="Name*"
              className={css.form_field}
            />
            <Field
              type="text"
              name="email"
              placeholder="Email*"
              className={css.form_field}
            />
            <div className={css.form_field}>
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setFieldValue("bookingDate", date);
                }}
                dateFormat="yyyy/MM/dd"
                placeholderText="Booking Date*"
                className={css.date_picker_input}
              />
            </div>
            <Field
              as="textarea"
              name="comment"
              placeholder="Comment"
              rows="25"
              className={css.form_field_textarea}
            />
            <button type="submit" className={css.btn}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default BookingForm;
