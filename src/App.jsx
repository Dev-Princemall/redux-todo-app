import React from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";
import "./styles/app.css";
function App() {
  return (
    <div className="app-container">
      <header className="app-header">Task Manager</header>
      <main className="app-content">
        <AddTask />
        <Filters />
        <TaskList />
      </main>
    </div>
  );
}

export default App;
