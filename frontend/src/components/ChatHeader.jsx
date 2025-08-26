import React from 'react';

const ChatHeader = ({ theme, setTheme }) => (
  <div className="md:hidden fixed inset-x-0 top-0 z-30 flex items-center justify-between px-4 py-3 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
    <div className="flex items-center gap-2">
      <button
        onClick={() => setSidebarOpen(true)}
        className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-400 text-white shadow-lg"
        aria-label="Open sidebar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2z" clipRule="evenodd" />
        </svg>
      </button>
      <div>
        <h3 className="text-base font-bold dark:text-gray-100">AI Chat</h3>
        <p className="text-[11px] text-gray-500 dark:text-gray-400">Your personal AI assistant</p>
      </div>
    </div>

    <button
      className="p-2 rounded-xl backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 hover:bg-white/90 dark:hover:bg-gray-700/90 transition"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "🌙" : "🌞"}
    </button>
  </div>
);

export default ChatHeader;
