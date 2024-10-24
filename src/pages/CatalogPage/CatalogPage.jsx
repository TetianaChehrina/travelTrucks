import { useEffect } from "react";
import CamperList from "../../components/CatalogComponents/CamperList/CamperList.jsx";
import SideBar from "../../components/CatalogComponents/SideBar/SideBar.jsx";
import css from "./CatalogPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, selectPage } from "../../redux/campers/selectors.js";
import { fetchAllCampers } from "../../redux/campers/operation.js";

const CatalogPage = () => {
  const page = useSelector(selectPage);
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCampers({ filters, page }));
  }, [dispatch, filters, page]);

  return (
    <section className={css.catalog_section}>
      <div className={css.catalog_container}>
        <SideBar />
        <CamperList />
      </div>
    </section>
  );
};
export default CatalogPage;
