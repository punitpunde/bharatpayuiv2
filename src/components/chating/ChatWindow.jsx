import React, { useState } from 'react';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import './ChatWindow.css';

const ChatWindow = ({ activeTransaction }) => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'support', text: `How can I help you with ${activeTransaction.name}?` },
    { id: 2, sender: 'user', text: 'I need assistance with this transaction.' },
  ]);

  const sendMessage = (message) => {
    setMessages([...messages, { id: messages.length + 1, sender: 'user', text: message }]);
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h3>{activeTransaction.name}</h3>
        <p>{activeTransaction.date} - {activeTransaction.status}</p>
      </div>
      <div className="chat-messages">
        {messages.map(message => (
          <ChatBubble key={message.id} message={message} />
        ))}
      </div>
      <ChatInput onSendMessage={sendMessage} />
    </div>
  );
};

export default ChatWindow;
