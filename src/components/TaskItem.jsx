import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, removeTask } from "../redux/actions";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="Item" style={{ display: "flex", alignItems: "center" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          flex: 1,
        }}
      >
        {task.text}
      </span>
      <button onClick={() => dispatch(removeTask(task.id))}>Delete</button>
    </div>
  );
};

export default TaskItem;
