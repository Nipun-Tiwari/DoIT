import React from "react";
import AddTask from "./AddTask";
import Pending from "./Pending";
import Completed from "./Completed";
import "./Tasks.css";

const MainBar = ({
  pendingTasks,
  completedTasks,
  onAddTask,
  onToggleTask,
  onDeleteTask,
}) => {
  return (
    <div className="MainBar">
      <AddTask onAddTask={onAddTask} />
      <Pending
        tasks={pendingTasks}
        onToggleTask={onToggleTask}
        onDeleteTask={onDeleteTask}
      />
      <Completed
        tasks={completedTasks}
        onToggleTask={onToggleTask}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
};

export default MainBar;
