import React, { useState } from 'react';

const TransactionsTable = ({ transactions }) => {
  const [sortBy, setSortBy] = useState(null);
  const [filterBy, setFilterBy] = useState('');


  // Function to handle sorting
  const handleSort = (field) => {
    setSortBy(field);
  };

  // Function to handle filtering
  const handleFilter = (e) => {
    setFilterBy(e.target.value);
  };

  // Filter transactions based on search term
  const filteredTransactions = transactions.filter(transactions =>
    transactions.description.toLowerCase().includes(filterBy.toLowerCase())
  );

  // Sort transactions based on selected field
  const sortedTransactions = sortBy ? filteredTransactions.slice().sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  }) : filteredTransactions;

  return (
    <div className="transactions-table">
      <h2>Transactions</h2>
      {/* Input for filtering */}
      <input
        type="text"
        placeholder="Search description"
        value={filterBy}
        onChange={handleFilter}
      />
      {/* Table for displaying transactions */}
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('date')}>Date</th>
            <th onClick={() => handleSort('description')}>Description</th>
            <th onClick={() => handleSort('amount')}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="3">Loading...</td>
            </tr>
          ) : error ? (
            <tr>
            </tr>
          ) : sortedTransactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsTable;
