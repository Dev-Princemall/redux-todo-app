import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
import "../styles/addTask.css";
export default function AddTask() {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    dispatch(addTask(newTask));
    setTaskText("");
  };
  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-task-input"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a new task"
      />
      <button
        type="submit"
        className="add-task-button"
        disabled={!taskText.trim()}
      >
        Add Task
      </button>
    </form>
  );
}
