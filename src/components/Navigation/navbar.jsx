import React, { useState, useContext } from "react";

import {
  MenuIcon,
  NightMode,
  TileView,
  ListView,
  SearchIcon,
  LogoIcon,
} from "./icons";
import "./NavBar.css";
import { DarkModeContext } from "../../DarkModeContext";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header className="navbar">
      <div className="logo">
        <button>
          <MenuIcon className="menuIcon" />
        </button>
        <LogoIcon className="logoIcon" />
      </div>
      <nav className="open">
        <ul>
          <li>
            <button>
              <SearchIcon />
            </button>
          </li>
          <button>
            <TileView />
          </button>
          <li>
            <button onClick={toggleDarkMode}>
              <NightMode />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
