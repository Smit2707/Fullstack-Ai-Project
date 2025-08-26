import React from 'react';

const AddChatButton = () => (
  <button
    className="bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 text-white rounded-xl p-2 shadow-lg transition"
    aria-label="New chat"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
  </button>
);

const ChatItem = ({ chat, onClick }) => (
  <button
    onClick={onClick}
    className="w-full text-left rounded-xl hover:bg-white/60 dark:hover:bg-gray-800/60 p-3 flex items-center backdrop-blur-lg group transition-all border border-transparent hover:border-gray-200/60 dark:hover:border-gray-700/60"
  >
    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white text-sm font-medium mr-3">
      {(chat.name || "?").slice(0, 1).toUpperCase()}
    </div>
    <div className="min-w-0">
      <p className="text-sm text-gray-800 dark:text-gray-100 truncate">{chat.name || "Untitled chat"}</p>
      <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">{chat.preview || "…"}</p>
    </div>
  </button>
);

const Sidebar = ({ chats = [], sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <aside
        className={[
          "inset-y-0 left-0 z-40 md:z-10",
          "backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-r border-gray-200 dark:border-gray-800",
          "flex flex-col gap-3",
          "w-72 shrink-0",
          "md:relative md:translate-x-0",
          "fixed md:block",
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          "transition-transform duration-200 ease-in-out",
          "pt-16 md:pt-4",
        ].join(" ")}
        aria-label="Sidebar"
      >
        <div className="hidden md:flex items-center justify-between px-4 mb-4">
          <div>
            <h3 className="text-xl font-bold dark:text-gray-100">AI Chat</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Your personal AI assistant</p>
          </div>
          <AddChatButton />
        </div>

        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between px-4 pb-2">
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-700"
            aria-label="Close sidebar"
          >
            ✕
          </button>
          <AddChatButton />
        </div>

        {/* Chat list */}
        <div className="flex-1 overflow-y-auto px-2 pb-safe-or-2 space-y-2">
          {chats.length > 0 ? (
            chats.map((chat) => (
              <ChatItem key={chat.id} chat={chat} onClick={() => {}} />
            ))
          ) : (
            <div className="text-xs text-gray-500 dark:text-gray-400 px-3 py-2">
              No chats yet
            </div>
          )}
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <button
          aria-label="Close sidebar overlay"
          onClick={() => setSidebarOpen(false)}
          className="md:hidden fixed inset-0 z-30 bg-black/40"
        />
      )}
    </>
  );
};

export default Sidebar;
