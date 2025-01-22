import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, removeTask } from "../redux/actions";
import "../styles/TaskItem.css";
const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="task-item">
      <input
        type="checkbox"
        className="task-checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <span className={`task-text ${task.completed ? "completed" : ""}`}>
        {task.text}
      </span>
      <button
        className="task-delete-button"
        onClick={() => dispatch(removeTask(task.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
