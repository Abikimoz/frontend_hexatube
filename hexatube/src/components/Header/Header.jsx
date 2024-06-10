import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
        <div className='logo'>
          <img src='public/logo.png' alt='logo'className='logo-img'></img>
          <p>HexaTube</p>
        </div>
        <SearchBar className='search'/>
    </header>
  );
}

export default Header;
{/* готов */}