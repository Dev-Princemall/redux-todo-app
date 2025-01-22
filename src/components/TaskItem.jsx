import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, removeTask, editTask } from "../redux/actions";
import "../styles/TaskItem.css";
const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [editText, setEditText] = useState(task.text);
  const [isEditing, setIsEditing] = useState(false);
  const handleEditSave = () => {
    if (editText.trim()) {
      const editedTask = {
        id: task.id,
        text: editText,
        completed: task.completed,
      };
      dispatch(editTask(editedTask));
      setIsEditing(false);
    }
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        className="task-checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      {isEditing ? (
        <input
          type="text"
          className="task-edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleEditSave();
            if (e.key === "Escape") setIsEditing(false);
          }}
        />
      ) : (
        <span className={`task-text ${task.completed ? "completed" : ""}`}>
          {task.text}
        </span>
      )}

      <button
        className="task-edit-button"
        onClick={() => {
          setIsEditing(true);
        }}
      >
        Edit
      </button>
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
