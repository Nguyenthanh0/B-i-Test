import React from "react";

const Footer = ({
  filter,
  onFilterChange,
  onAddTask,
  onDeleteAllCompletedTasks,
  tasks,
}) => {
  return (
    <div className="filters">
      <button
        className={filter === "All" ? "active" : ""}
        onClick={() => onFilterChange("All")}
      >
        All
      </button>
      <button
        className={filter === "Active" ? "active" : ""}
        onClick={() => onFilterChange("Active")}
      >
        Active
      </button>
      <button
        className={filter === "Complete" ? "active" : ""}
        onClick={() => onFilterChange("Complete")}
      >
        Completed
      </button>
      <div className="add-task-container">
        <input
          type="text"
          placeholder="Add a new task..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onAddTask(e.target.value);
              e.target.value = "";
            }
          }}
        />
        <button
          style={{ color: "white" }}
          onClick={() => {
            const input = document.querySelector(".add-task-container input");
            onAddTask(input.value);
            input.value = "";
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Footer;
