import React from "react";
import Task from "./Task";
import "./Tasks.css";

const Pending = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
    <div className="Pending">
      <b>Pending Tasks</b>
      <div className="tasks-list">
        {tasks.map((task, index) => (
          <Task
            key={index}
            text={task}
            isCompleted={false}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Pending;
