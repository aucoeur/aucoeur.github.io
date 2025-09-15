import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./components/Main/Main";

import SunIcon from "./components/Icons/SunIcon";
import MoonIcon from "./components/Icons/MoonIcon";

import "./App.css";

// Check if OS darkmode set using css media query
const prefersDark = () => {
  const dark = window.matchMedia("(prefers-color-scheme: dark)");
  return dark.matches;
};

function App() {
  // Set initial state to OS preference
  const [theme, setTheme] = useState(prefersDark);
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`App ${theme ? "dark" : "light"} ${toggle ? "toggled" : ""}`}
    >
      <div className="theme-container">
        <button className="toggle-theme" onClick={() => setTheme(!theme)}>
          {theme ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
