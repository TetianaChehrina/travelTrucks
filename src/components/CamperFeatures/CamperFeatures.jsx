import { useSelector } from "react-redux";
import css from "./CamperFeatures.module.css";
import { selectCamper } from "../../redux/campers/selectors";

const CamperFeatures = () => {
  const camper = useSelector(selectCamper);

  return (
    <div className={css.features_card}>
      <ul className={css.features}>
        {camper.AC && <li className={css.features_item}>AC</li>}
        {camper.bathroom && <li className={css.features_item}>Bathroom</li>}
        {camper.kitchen && <li className={css.features_item}>Kitchen</li>}
        {camper.TV && <li className={css.features_item}>TV</li>}
        {camper.radio && <li className={css.features_item}>Radio</li>}
      </ul>
      <h2 className={css.vehicle_details}>Vehicle details</h2>
      <ul className={css.vehicle_details_list}>
        <li className={css.vehicle_details_item}>
          <span className={css.list_label}>Form</span>
          <span className={css.list_value}>{camper.form}</span>
        </li>
        <li className={css.vehicle_details_item}>
          <span className={css.list_label}>Length</span>
          <span className={css.list_value}>{camper.length}</span>
        </li>
        <li className={css.vehicle_details_item}>
          <span className={css.list_label}>Width</span>
          <span className={css.list_value}>{camper.width}</span>
        </li>
        <li className={css.vehicle_details_item}>
          <span className={css.list_label}>Height</span>
          <span className={css.list_value}>{camper.height}</span>
        </li>
        <li className={css.vehicle_details_item}>
          <span className={css.list_label}>Tank</span>
          <span className={css.list_value}>{camper.tank}</span>
        </li>
        <li className={css.vehicle_details_item}>
          <span className={css.list_label}>Consumption</span>
          <span className={css.list_value}>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
};
export default CamperFeatures;
