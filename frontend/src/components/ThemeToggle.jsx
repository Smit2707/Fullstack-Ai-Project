import React from 'react';

const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
      <button
        className="p-2 rounded-xl backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 hover:bg-white/90 dark:hover:bg-gray-700/90 transition"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "🌙" : "🌞"}
      </button>
    </div>
  );
};

export default ThemeToggle;
