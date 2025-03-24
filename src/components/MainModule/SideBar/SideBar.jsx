import React from "react";
import "./SideBar.css";
import Pic from "./Pic";
import Stats from "./Stats";

const sideBar = ({ pendingTasks, completedTasks }) => {
  return (
    <div className="sideBar">
      <div className="sideMenu">
        <Pic />
        <h2 id="username">Nipun Tiwari</h2>
        <Stats pendingTasks={pendingTasks} completedTasks={completedTasks} />
      </div>
    </div>
  );
};

export default sideBar;
