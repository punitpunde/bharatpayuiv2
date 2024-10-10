import React from 'react';
import './ChatBubble.css';

const ChatBubble = ({ message }) => {
  return (
    <div className={`chat-bubble ${message.sender}`}>
      <span>{message.text}</span>
    </div>
  );
};

export default ChatBubble;
