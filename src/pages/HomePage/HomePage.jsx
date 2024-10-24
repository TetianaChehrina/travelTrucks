import { useNavigate } from "react-router";
import css from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClickViewNow = () => {
    navigate("/catalog");
  };
  return (
    <section className={css.campers_home}>
      <div className={css.outer_container}>
        <div className={css.text_container}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>
          <button className={css.btn_home} onClick={handleClickViewNow}>
            View Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
