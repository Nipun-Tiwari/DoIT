import React, { useState } from "react";
import "./MainBody.css";
import SideBar from "./SideBar/SideBar";
import MainBar from "./Tasks/MainBar";

const Mainbody = () => {
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const createTaskDiv = (taskText) => {
    setPendingTasks((prevTasks) => [...prevTasks, taskText]);
  };

  const toggleTask = (taskText, isCompleted) => {
    if (isCompleted) {
      setPendingTasks(pendingTasks.filter((task) => task !== taskText));
      setCompletedTasks((prevCompleted) => [...prevCompleted, taskText]);
    } else {
      setCompletedTasks(completedTasks.filter((task) => task !== taskText));
      setPendingTasks((prevPending) => [...prevPending, taskText]);
    }
  };

  const deleteTask = (taskText, isCompleted) => {
    if (isCompleted) {
      setCompletedTasks(completedTasks.filter((task) => task !== taskText));
    } else {
      setPendingTasks(pendingTasks.filter((task) => task !== taskText));
    }
  };

  return (
    <section className="Mbody">
      <SideBar pendingTasks={pendingTasks} completedTasks={completedTasks} />
      <MainBar
        className="MainBar"
        pendingTasks={pendingTasks}
        completedTasks={completedTasks}
        onAddTask={createTaskDiv}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </section>
  );
};

export default Mainbody;
