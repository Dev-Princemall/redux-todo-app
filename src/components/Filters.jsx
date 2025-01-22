import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTasks } from "../redux/actions";
import "../styles/filters.css";
const Filters = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.filter);

  const filters = ["ALL", "ACTIVE", "COMPLETED"];

  return (
    <div className="filters-container">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-button ${activeFilter === filter ? "active" : ""}`}
          onClick={() => dispatch(filterTasks(filter))}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filters;
