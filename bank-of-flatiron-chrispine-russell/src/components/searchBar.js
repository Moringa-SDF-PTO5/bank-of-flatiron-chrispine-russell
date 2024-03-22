import React, { useState } from 'react';
import './SearchBar.css'; // Import the CSS file for styling

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Call the onSearch function with the search term
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar-container">
      <h2 className="search-bar-heading">Search Transactions</h2>
      <form onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          placeholder="Search by description"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
