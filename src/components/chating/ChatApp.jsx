import React, { useState } from 'react';
import TransactionList from './TransactionList';
import ChatWindow from './ChatWindow';
import './ChatApp.css';

const ChatApp = () => {
  const transactions = [
    { id: 'txn1', name: 'Jio Payment', amount: '₹499', time: '10:30 AM', date: '2024-10-01', status: 'Success' },
    { id: 'txn2', name: 'BSNL Payment', amount: '₹199', time: '01:20 PM', date: '2024-10-05', status: 'Pending' },
    { id: 'txn3', name: 'Electricity Bill', amount: '₹1200', time: '03:15 PM', date: '2024-10-08', status: 'Failed' },
  ];

  const [activeTransaction, setActiveTransaction] = useState(transactions[0]);

  const handleTransactionSelect = (transaction) => {
    setActiveTransaction(transaction);
  };

  return (
    <div className="chat-app">
      <TransactionList 
        transactions={transactions} 
        activeTransaction={activeTransaction}
        onSelect={handleTransactionSelect} 
      />
      <ChatWindow activeTransaction={activeTransaction} />
    </div>
  );
};

export default ChatApp;
