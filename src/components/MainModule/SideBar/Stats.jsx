import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./SideBar.css"; // Ensure this is imported

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const Stats = ({ pendingTasks, completedTasks }) => {
  const rootStyles = getComputedStyle(document.documentElement);
  const todoColor = rootStyles.getPropertyValue("--pie-todo").trim();
  const doneColor = rootStyles.getPropertyValue("--pie-done").trim();
  const doneHover = rootStyles.getPropertyValue("--pie-done-hover").trim();
  const todoHover = rootStyles.getPropertyValue("--pie-todo-hover").trim();
  const data = {
    labels: ["ToDo", "Done"],
    datasets: [
      {
        label: "Task Distribution",
        data: [pendingTasks.length, completedTasks.length],
        backgroundColor: [doneColor, todoColor],
        hoverBackgroundColor: [doneHover, todoHover],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Ensures the chart respects its aspect ratio
    responsive: true, // Makes the chart scale to its container
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="Stats">
      <h3>Task Statistics</h3>
      <div className="chart-container">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default Stats;
