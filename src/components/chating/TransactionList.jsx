import React from 'react';
import './TransactionList.css';

const TransactionList = ({ transactions, activeTransaction, onSelect }) => {
  return (
    <div className="transaction-list">
      {transactions.map(transaction => (
        <div 
          key={transaction.id} 
          className={`transaction-item ${transaction.id === activeTransaction.id ? 'active' : ''}`}
          onClick={() => onSelect(transaction)}
        >
          <div className="transaction-details">
            <span className="transaction-name">{transaction.name}</span>
            <span className="transaction-amount">{transaction.amount}</span>
            <span className="transaction-time">{transaction.time}</span>
          </div>
          <div className="transaction-status">
            <span className={`status-icon ${transaction.status.toLowerCase()}`}></span>
            <span className="status-text">{transaction.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
