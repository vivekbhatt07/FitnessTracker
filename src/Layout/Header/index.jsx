import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";
import "./Header.css";

const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <header
      className={`px-2 py-4 text-xl ${isDarkTheme ? "dark" : "light"}-header`}
    >
      <div className="flex justify-between items-center">
        <h1>
          <Link to="/">Fitness</Link>
        </h1>
        <a
          href="https://github.com/vivekbhatt07/FitnessTracker"
          target="_blank"
        >
          Github Link
        </a>
        <button
          className={`mode ${isDarkTheme ? "dark" : "light"}-mode`}
          variant="contained"
          onClick={() => toggleTheme(!isDarkTheme)}
          aria-label="Theme Toggle Button"
        >
          <span
            className={`circle ${isDarkTheme ? "dark" : "light"}-circle`}
          ></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
