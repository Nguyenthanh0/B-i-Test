import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    if (id === null) {
      setTasks(tasks.filter((task) => !task.completed));
    } else {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const filteredTasks =
    filter === "All"
      ? tasks
      : filter === "Active"
      ? tasks.filter((task) => !task.completed)
      : tasks.filter((task) => task.completed);

  return (
    <div className="container">
      <h1 style={{ fontFamily: "sans-serif" }}>#todo</h1>
      <Footer
        filter={filter}
        onFilterChange={setFilter}
        onAddTask={addTask}
        onDeleteAllCompletedTasks={removeTask}
        tasks={tasks}
      />
      <TodoList
        tasks={filteredTasks}
        onToggleTaskCompletion={toggleTaskCompletion}
        onRemoveTask={removeTask}
        filter={filter}
      />
    </div>
  );
}

export default App;
