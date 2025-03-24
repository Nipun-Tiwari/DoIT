import React from "react";
import "./Tasks.css";
import { StarIcon, AlertIcon } from "./icons.js";

const Task = ({ text, isCompleted, onToggleTask, onDeleteTask }) => {
  const handleCheckboxChange = () => {
    onToggleTask(text, !isCompleted);
  };

  const handleDelete = () => {
    onDeleteTask(text, isCompleted);
  };

  return (
    <div className="task-item">
      <div className="combo">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleCheckboxChange}
        />
        <span>{text}</span>
      </div>
      <button onClick={handleDelete}>
        <StarIcon />
      </button>
    </div>
  );
};

export default Task;
