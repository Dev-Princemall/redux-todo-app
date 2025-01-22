import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTasks } from "../redux/actions";

const Filters = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.filter);

  const filters = ["ALL", "ACTIVE", "COMPLETED"];

  return (
    <div className="filters">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => dispatch(filterTasks(filter))}
          style={{
            margin: "0 5px",
            fontWeight: activeFilter === filter ? "bold" : "normal",
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filters;
