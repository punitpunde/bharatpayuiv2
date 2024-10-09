import React, { useState } from 'react';
import './transactionHistory.css';
import { FaCheckCircle, FaHourglassHalf, FaTimesCircle } from 'react-icons/fa';

// Sample transactions with reason and timestamp
const initialTransactions = [
    { id: 1, date: '13-10-2024', time: '10:15:26', amount: '₹1,000', reason: 'Bill Payment', status: 'Completed', to: 'John Doe (upi_id@example.com)' },
    { id: 2, date: '10-10-2024', time: '14:30:45', amount: '₹500', reason: 'Recharge', status: 'Pending', to: 'Jane Smith (upi_id2@example.com)' },
    { id: 3, date: '09-10-2024', time: '09:00:00', amount: '₹2,500', reason: 'Transfer', status: 'Completed', to: 'Alice (upi_id3@example.com)' },
    { id: 4, date: '08-10-2024', time: '17:45:12', amount: '₹1,200', reason: 'Refund', status: 'Failed', to: 'Bob (upi_id4@example.com)' },
    { id: 5, date: '07-10-2024', time: '12:00:00', amount: '₹3,000', reason: 'Purchase', status: 'Completed', to: 'Charlie (upi_id5@example.com)' },
];

function TransactionHistory() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTransactions = initialTransactions.filter(transaction =>
        transaction.date.includes(searchTerm) ||
        transaction.amount.includes(searchTerm) ||
        transaction.reason.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="transaction-history-container">
            <h2>Transaction History</h2>
            <input
                type="text"
                placeholder="Search by date, amount, or reason"
                className="search-input"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <div className="transaction-table-container">
                <table className="transaction-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Amount</th>
                            <th>Reason</th>
                            <th>To</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTransactions.length > 0 ? (
                            filteredTransactions.map(transaction => (
                                <tr key={transaction.id}>
                                    <td>{transaction.id}</td>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.time}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.reason}</td>
                                    <td>{transaction.to}</td>
                                    <td>
                                        {transaction.status === 'Completed' && <FaCheckCircle className="icon completed" />}
                                        {transaction.status === 'Pending' && <FaHourglassHalf className="icon pending" />}
                                        {transaction.status === 'Failed' && <FaTimesCircle className="icon failed" />}
                                        <span>{transaction.status}</span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7">No transactions found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TransactionHistory;
