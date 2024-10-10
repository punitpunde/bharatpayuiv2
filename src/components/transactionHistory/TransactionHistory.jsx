import React, { useEffect, useState } from 'react';
import './transactionHistory.css';
import { FaCheckCircle, FaHourglassHalf, FaTimesCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../extra/Loader';
import { getTransactionHistory } from '../../features/transactionHistory';

function TransactionHistory() {
    const dispatch = useDispatch();
    
    // Fetch transaction history when the component mounts
    useEffect(() => {
        dispatch(getTransactionHistory({
            "mobileNumber":"9171535016",
            "userName":"Punit Punde"
        }));
    }, [dispatch]);

    const { transactionHistory, loading, transactionHistoryRequestFailed: error } = useSelector((state) => state.transactionHistory);
    
    const [searchTerm, setSearchTerm] = useState('');

    if (loading) {
        return <Loader />;
    }

    if (error) {
        alert(`Error occurred: ${error}`);
    }

    const filteredTransactions = transactionHistory?.filter(transaction =>
        transaction.date.includes(searchTerm) ||
        transaction.amount.toString().includes(searchTerm) || // Convert amount to string for searching
        transaction.reason.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="transaction-history-container">
            <h2>Transaction History</h2>
            {/* <input
                type="text"
                placeholder="Search by date, amount, or reason"
                className="search-input"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            /> */}
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
                        {filteredTransactions && filteredTransactions.length > 0 ? (
                            filteredTransactions.map(transaction => (
                                <tr key={transaction.id}>
                                    <td>{transaction.id}</td>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.time.toUpperCase()}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.reason}</td>
                                    <td>{transaction.receiverUpiId}</td>
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
