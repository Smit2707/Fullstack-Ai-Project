import { useState } from "react";
import useTheme from "./useTheme";

const chats = [ /* Array of chat objects */ ];

const Home = () => {
  const [theme, setTheme] = useTheme();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setLoading(true);
    // TODO: Implement chat message sending
    setLoading(false);
    setMessage("");
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#e0e7ff]/30 to-[#f0abfc]/30 dark:from-gray-900 dark:to-gray-800 transition-colors">
      {/* Sidebar */}
      <aside className="w-20 md:w-64 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-r border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-3 fixed inset-y-0 left-0 z-10 md:relative md:block">
        <div className="flex items-center justify-between mb-6">
          <div className="hidden md:block">
            <h3 className="text-xl font-bold dark:text-gray-100">AI Chat</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Your personal AI assistant</p>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 text-white rounded-xl p-2 shadow-lg transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto space-y-2">
          {chats.map(chat => (
            <div key={chat.id} className="rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 p-3 flex items-center backdrop-blur-lg group transition-all">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white text-sm font-medium mr-3">
                {chat.name[0]}
              </div>
              <span className="text-gray-700 dark:text-gray-200 truncate hidden md:block">{chat.name}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col pt-4 pb-4 ml-20 md:ml-64 relative">
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            className="p-2 rounded-xl backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 hover:bg-white/90 dark:hover:bg-gray-700/90 transition"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "🌞"}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 space-y-4 pb-4">
          {/* Message bubbles with modern styling */}
          <div className="flex justify-end">
            <div className="bg-gradient-to-r from-purple-500 to-pink-400 text-white p-4 rounded-2xl rounded-tr-sm max-w-md ml-auto shadow-lg">
              Hello, Assistant!
            </div>
          </div>
          <div className="flex justify-start">
            <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 p-4 rounded-2xl rounded-tl-sm max-w-md mr-auto shadow-lg">
              Hi! How can I help you today? I'm your AI assistant, ready to tackle any questions or tasks you have.
            </div>
          </div>
        </div>

        <div className="px-4 pb-4">
          <form onSubmit={handleSubmit} className="backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-2xl p-2 flex items-center gap-2 shadow-lg">
            <input
              className="flex-1 bg-transparent px-4 py-2 focus:outline-none text-gray-800 dark:text-gray-100 placeholder-gray-500"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 text-white rounded-xl px-4 py-2 shadow-lg transition disabled:opacity-50"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <span>Send</span>
              )}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};
export default Home;
