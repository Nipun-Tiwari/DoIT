import "./styles.css";
import { useContext } from "react";
import NavBar from "./components/Navigation/navbar";
import Mainbody from "./components/MainModule/MainBody";
import { DarkModeProvider, DarkModeContext } from "./DarkModeContext";
import Waves from "./Waves"; // Import the Waves component

export default function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

function AppContent() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Waves component as the background */}
      <Waves
        lineColor={
          isDarkMode ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"
        }
        backgroundColor={
          isDarkMode ? "rgba(35, 35, 35, 0.8)" : "rgba(255, 255, 255, 0.2)"
        }
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
        style={{ zIndex: -1 }} // Ensure Waves is behind other content
      />
      {/* Foreground content */}
      <NavBar />
      <Mainbody />
    </div>
  );
}
