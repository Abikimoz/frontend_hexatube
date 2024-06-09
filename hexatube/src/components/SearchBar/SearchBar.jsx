import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>
          <FaSearch className='search'/>
      </button>
    </div>
  );
}

export default SearchBar;
{/* Ведется работа, допишите поиск */}