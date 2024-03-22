import React, { useState, useEffect } from 'react';
import TransactionsTable from './components/TransactionsTable';
import TransactionForm from './components/TransactionForm';
import SearchrchBar from './components/searchBar';
import './App.css'; // Importing the CSS file

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);


  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await fetch('http://localhost:3001/transactions');
      const data = await response.json();
      setTransactions(data);
      setFilteredTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions: ', error);
    }
  };

  const addTransaction = async (newTransaction) => {
    try {
      const response = await fetch('http://localhost:3001/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTransaction),
      });
      const data = await response.json();
      setTransactions([...transactions, data]);
      setFilteredTransactions([...transactions, data]);
    } catch (error) {
      console.error('Error adding transaction: ', error);
    }
  };

  const handleSearch = (searchTerm) => {
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div className="app-container">
      <h1 className="app-heading">Bank of Flatiron</h1>
      <TransactionForm onAddTransaction={addTransaction} />
      <SearchBar onSearch={handleSearch} />
      <TransactionsTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
