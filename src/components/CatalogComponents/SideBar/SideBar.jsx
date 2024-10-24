import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../../redux/campers/selectors";
import css from "./SideBar.module.css";
import {
  resetFilters,
  setFilters,
} from "../../../redux/campers/camperSlice.js";
import sprite from "../../../img/sprite.svg";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SideBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const [location, setLocation] = useState("");
  const [form, setForm] = useState("");
  const [equipment, setEquipment] = useState({});
  console.log("Fetching campers with filters:", filters);

  const handleSearch = (e) => {
    e.preventDefault();
    if (location && !location.includes(",")) {
      toast.error("Please enter both city and country separated by a comma.");
      return;
    }

    if (location) {
      const [city, country] = location.split(",");
      if (!city.trim() || !country.trim()) {
        toast.error("Please enter both city and country.");
        return;
      }
    }

    dispatch(setFilters({ location, form, equipment }));
  };

  const handleReset = () => {
    setLocation("");
    setForm({});
    setEquipment({});
    dispatch(resetFilters());
  };

  return (
    <aside className={css.sideBar_container}>
      <Toaster />
      <form className={css.sidebar} onSubmit={handleSearch}>
        <h4>Location</h4>
        <div className={css.inputWrapper}>
          <svg className={css.location_item} width="20" height="20">
            <use href={`${sprite}#icon-Map`} />
          </svg>
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={css.input_location}
            placeholder="Ukraine, Kyiv"
          />
        </div>
        <h2 className={css.filters}>Filters</h2>
        <h4 className={css.vehicle_equipment}>Vehicle equipment</h4>
        <div className={css.checkboxGroup}>
          {["AC", "Automatic", "Kitchen", "TV", "Bathroom"].map((item) => (
            <label
              key={item}
              className={`${css.checkboxLabel} ${
                equipment[item] ? css.checked : ""
              }`}
            >
              <input
                type="checkbox"
                name={item}
                checked={equipment[item] || false}
                onChange={(e) => {
                  setEquipment({
                    ...equipment,
                    [e.target.name]: e.target.checked,
                  });
                }}
                className={css.checkbox}
              />

              <span className={css.customCheckbox}>
                <svg width="32" height="32">
                  <use href={`${sprite}#icon-${item.toLowerCase()}`} />
                </svg>
                <span className={css.itemText}>{item}</span>
              </span>
            </label>
          ))}
        </div>

        <h4 className={css.vehicle_type}>Vehicle type</h4>
        <div className={css.radioGroup}>
          {["Van", "Fully Integrated", "Alcove"].map((type) => (
            <label key={type} className={css.radioLabel}>
              <input
                type="checkbox"
                name={type}
                checked={form[type] || false}
                onChange={(e) => {
                  setForm({
                    ...form,
                    [e.target.name]: e.target.checked,
                  });
                }}
                className={css.radio}
              />
              <span className={css.customRadio}>
                <svg width="32" height="32">
                  <use
                    href={`${sprite}#icon-${type
                      .replace(" ", "")
                      .toLowerCase()}`}
                  />
                </svg>
                <span className={css.itemText}>{type}</span>
              </span>
            </label>
          ))}
        </div>

        <div className={css.buttonsWrapper}>
          <button type="submit" className={css.searchButton}>
            Search
          </button>
          <button
            type="button"
            onClick={handleReset}
            className={css.resetButton}
          >
            Reset
          </button>
        </div>
      </form>
    </aside>
  );
};

export default SideBar;
