import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import CamperDetailCard from "../../components/CatalogComponents/CamperComponents/CamperDetailCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/campers/operation";
import { selectCamper } from "../../redux/campers/selectors";
import css from "./CamperDetailPage.module.css";
import { NavLink } from "react-router-dom";
import BookCamper from "../../components/BookCaper/BookCamper";

const CamperDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchCamperById(id));
    if (
      location.pathname === `/catalog/${id}` &&
      !location.pathname.endsWith("features")
    ) {
      navigate("features");
    }
  }, [dispatch, id, location.pathname, navigate]);

  return (
    <section className={css.camper_detail_section}>
      <CamperDetailCard camper={camper} />
      <div className={css.content_wrapper}>
        <div className={css.left_content}>
          <ul className={css.reviews_nav}>
            <li>
              <NavLink
                to="reviews"
                className={({ isActive }) =>
                  isActive ? `${css.link} ${css.active}` : css.link
                }
              >
                Reviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to="features"
                className={({ isActive }) =>
                  isActive ? `${css.link} ${css.active}` : css.link
                }
              >
                Features
              </NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
        <div className={css.right_content}>
          <BookCamper />
        </div>
      </div>
    </section>
  );
};

export default CamperDetailPage;
