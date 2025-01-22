import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import "../styles/TaskList.css";

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "ALL") return true;
    if (filter === "ACTIVE") return !task.completed;
    if (filter === "COMPLETED") return task.completed;
    return false;
  });

  return (
    <div className="task-list">
      <h2 className="task-list-header">Your Tasks</h2>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p className="task-list-empty">No tasks to show!</p>
      )}
    </div>
  );
}
