import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

export default function AddTask() {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    dispatch(addTask(newTask));
    setTaskText("");
  };
  return (
    <form className="addtask-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
