import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const TodoItem = ({ task, onToggleTaskCompletion, onRemoveTask, filter }) => {
  const { id, text, completed } = task;

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleTaskCompletion(id)}
      />
      <span className={completed ? "completed" : ""}>{text}</span>
      {filter === "Complete" && (
        <button className="delete-task" onClick={() => onRemoveTask(id)}>
          <MdDeleteOutline className="deleteIcon" />
        </button>
      )}
    </li>
  );
};

export default TodoItem;
