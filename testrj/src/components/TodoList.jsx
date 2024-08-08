import React from "react";
import TodoItem from "./TodoItem";
import { MdDeleteOutline } from "react-icons/md";
import "./TodoList.css";

const TodoList = ({ tasks, onToggleTaskCompletion, onRemoveTask, filter }) => {
  return (
    <div className="todo-list">
      <ul>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onToggleTaskCompletion={onToggleTaskCompletion}
            onRemoveTask={onRemoveTask}
            filter={filter}
          />
        ))}
      </ul>
      {filter === "Complete" && (
        <div className="footer-actions">
          <button className="delete-all" onClick={() => onRemoveTask(null)}>
            <MdDeleteOutline className="deleteIcon" />
            Delete All
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoList;
