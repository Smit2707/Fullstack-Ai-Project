import React from 'react';

const Message = ({ text, isUser }) => (
  <div className={`flex justify-${isUser ? 'end' : 'start'}`}>
    <div
      className={`${
        isUser
          ? 'bg-gradient-to-r from-purple-500 to-pink-400 text-white'
          : 'backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100'
      } px-4 py-3 rounded-2xl ${isUser ? 'rounded-tr-sm' : 'rounded-tl-sm'} shadow-lg max-w-md`}
    >
      {text}
    </div>
  </div>
);

const MessageList = ({ messages = [], listBottomRef }) => (
  <div
    className="flex-1 overflow-y-auto px-3 sm:px-4 md:px-6 pt-20 md:pt-2 pb-24"
    role="log"
    aria-live="polite"
  >
    <div className="mx-auto max-w-2xl space-y-3">
      {messages.map((msg, index) => (
        <Message key={index} text={msg.text} isUser={msg.isUser} />
      ))}
      <div ref={listBottomRef} />
    </div>
  </div>
);

export default MessageList;
