import { useEffect, useMemo, useRef, useState } from "react";
import useTheme from "./useTheme";
import Sidebar from "../components/Sidebar";
import MessageList from "../components/MessageList";
import ChatInput from "../components/ChatInput";
import ChatHeader from "../components/ChatHeader";

// Example data - replace with actual data from your backend
const initialChats = [];
const initialMessages = [
  { text: "Hello, Assistant!", isUser: true },
  { text: "Hi! How can I help today? I'm your AI assistant, ready to tackle any questions or tasks you have.", isUser: false }
];

const Home = () => {
  const [theme, setTheme] = useTheme();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chats, setChats] = useState(initialChats);
  const [messages, setMessages] = useState(initialMessages);

  const formRef = useRef(null);
  const listBottomRef = useRef(null);

  // Example: memoize latest chat list initial to avoid re-render flashing
  const hasChats = useMemo(() => Array.isArray(chats) && chats.length > 0, [chats]);

  // Scroll to bottom when messages change (placeholder behavior)
  useEffect(() => {
    listBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setLoading(true);
    try {
      // TODO: Implement chat message sending with API
      // await sendMessage(message)
    } finally {
      setLoading(false);
      setMessage("");
    }
  };

  // Close sidebar on md+ to avoid stale overlay state
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setSidebarOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className="flex h-dvh min-h-screen bg-gradient-to-br from-[#e0e7ff]/30 to-[#f0abfc]/30 dark:from-gray-900 dark:to-gray-800 transition-colors">
        {/* Mobile top bar */}
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

        {/* Sidebar (desktop static, mobile drawer) */}
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
            "pt-16 md:pt-4", // space for mobile top bar
          ].join(" ")}
          aria-label="Sidebar"
        >
          <div className="hidden md:flex items-center justify-between px-4 mb-4">
            <div>
              <h3 className="text-xl font-bold dark:text-gray-100">AI Chat</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Your personal AI assistant</p>
            </div>
            <button
              className="bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 text-white rounded-xl p-2 shadow-lg transition"
              aria-label="New chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Mobile header inside drawer */}
          <div className="md:hidden flex items-center justify-between px-4 pb-2">
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-700"
              aria-label="Close sidebar"
            >
              ✕
            </button>
            <button
              className="bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 text-white rounded-xl p-2 shadow-lg transition"
              aria-label="New chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Chat list */}
          <div className="flex-1 overflow-y-auto px-2 pb-safe-or-2 space-y-2">
            <div className="text-xs text-gray-500 dark:text-gray-400 px-3 py-2">
              {hasChats ? (
                chats.map((chat) => (
                  <button
                    key={chat.id}
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
                ))
              ) : (
                "No chats yet"
              )}
            </div>
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

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col md:pt-4 md:pb-0 md:mx-auto">
          {/* Desktop theme toggle */}
          <div className="hidden md:flex absolute top-4 right-4 z-20 items-center gap-2">
            <button
              className="p-2 rounded-xl backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 hover:bg-white/90 dark:hover:bg-gray-700/90 transition"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "🌙" : "🌞"}
            </button>
          </div>

          {/* Messages container */}
          <div
            className={[
              "flex-1 overflow-y-auto",
              "px-3 sm:px-4 md:px-6",
              "pt-20 md:pt-2", // space for mobile top bar
              "pb-24", // space for sticky composer
            ].join(" ")}
            role="log"
            aria-live="polite"
          >
            {/* Message bubbles */}
            <div className="mx-auto max-w-2xl space-y-3">
              {messages.map((msg, index) => (
                <div key={index} className={`flex justify-${msg.isUser ? 'end' : 'start'}`}>
                  <div className={`
                    ${msg.isUser 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-400 text-white rounded-2xl rounded-tr-sm'
                      : 'backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 rounded-2xl rounded-tl-sm'
                    }
                    px-4 py-3 shadow-lg max-w-md
                  `}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={listBottomRef} />
            </div>
          </div>

          {/* Sticky composer */}
          <div className="px-3 sm:px-4 md:px-6 fixed md:static inset-x-0 bottom-0 md:bottom-auto">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mx-auto max-w-3xl mb-safe-or-2 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-2xl p-2 flex items-center gap-2 shadow-xl"
            >
              <input
                className="flex-1 bg-transparent px-3 py-2 focus:outline-none text-gray-800 dark:text-gray-100 placeholder-gray-500"
                placeholder="Type a message…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-label="Message input"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 text-white rounded-xl px-4 py-2 shadow-lg transition disabled:opacity-50"
                aria-busy={loading}
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
    </div>
  );
};

export default Home;
