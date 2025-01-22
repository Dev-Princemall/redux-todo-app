import React from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";
function App() {
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Task Management App</h1>
      <AddTask />
      <Filters />
      <TaskList />
    </div>
  );
}

export default App;
