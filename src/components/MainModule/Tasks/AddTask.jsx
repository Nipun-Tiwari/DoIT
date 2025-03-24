import { React, useState, useContext } from "react";
import { DarkModeContext } from "../../../DarkModeContext";
import { AlertIcon, CalIcon } from "./icons";
import "./Tasks.css";
const AddTask = ({ onAddTask }) => {
  const { isDarkMode } = useContext(DarkModeContext);
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      onAddTask(taskText);
      setTaskText("");
    }
  };
  return (
    <div className="AddTask">
      <div class="text-cell">
        <div class="frame-3">
          <input
            className="add-task-text"
            placeholder="Add a task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit(e);
            }}
          ></input>
          <div class="frame-2">
            <button>
              <AlertIcon />
            </button>
            <button>
              <CalIcon />
            </button>
          </div>
        </div>
        <div className="menu-item">
          <button className="menu-label" type="submit" onClick={handleSubmit}>
            ADD TASK
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddTask;
