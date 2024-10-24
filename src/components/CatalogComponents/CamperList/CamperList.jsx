import { useDispatch, useSelector } from "react-redux";
import css from "./CamperList.module.css";
import {
  selectCampers,
  selectIsError,
  selectIsLoading,
  selectPage,
  selectTotal,
} from "../../../redux/campers/selectors.js";
import CamperCard from "../CamperCard/CamperCard.jsx";
import { setPage } from "../../../redux/campers/camperSlice.js";
import Loader from "../../Loader/Loader.jsx";

const CamperList = () => {
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const total = useSelector(selectTotal);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  const handleLoadMore = (e) => {
    e.preventDefault();

    dispatch(setPage(page + 1));
  };

  return (
    <div>
      {isLoading && !isError && <Loader />}
      {isError && <p>Error fetching campers. Please try again later.</p>}
      {!isLoading && campers.length > 0 ? (
        <>
          <ul className={css.camper_list}>
            {campers.map((camper) => (
              <li key={camper.id}>
                <CamperCard camper={camper} />
              </li>
            ))}
          </ul>
          {campers.length < total && (
            <div className={css.load_more_btn_container}>
              <button className={css.load_more_btn} onClick={handleLoadMore}>
                Load More
              </button>
            </div>
          )}
        </>
      ) : (
        !isLoading && <h1>Campers not found</h1>
      )}
    </div>
  );
};
export default CamperList;
