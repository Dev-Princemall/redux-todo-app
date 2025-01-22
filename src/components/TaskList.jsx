import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

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
    <div className="TaskList">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
