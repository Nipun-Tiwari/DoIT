import React from "react";
import Task from "./Task";
import "./Tasks.css";

const Completed = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
    <div className="Completed">
      <b>Completed Tasks</b>
      <div className="tasks-list">
        {tasks.map((task, index) => (
          <Task
            key={index}
            text={task}
            isCompleted={true}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Completed;
