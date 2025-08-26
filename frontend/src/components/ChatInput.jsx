import React from 'react';

const ChatInput = ({ message, setMessage, loading, onSubmit }) => {
  return (
    <div className="px-4 pb-4">
      <form onSubmit={onSubmit} className="backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-2xl p-2 flex items-center gap-2 shadow-lg">
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
  );
};

export default ChatInput;
