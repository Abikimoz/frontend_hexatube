import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar.jsx';
import './Header.css';

const Header = ({ setSelectedComponent, onSearch, setSearchQuery }) => {
  return (
    <header className='header'>
        <div className='logo'>
          <img src='public/logo.png' alt='logo'className='logo-img'></img>
          <p className='home' onClick={() => setSelectedComponent('videoGrid')}>HexaTube</p>
        </div>
        <SearchBar className='search' onSearch={onSearch} setSearchQuery={setSearchQuery}/>
    </header>
  );
};

Header.propTypes = {
  setSelectedComponent: PropTypes.func.isRequired,
};

export default Header;
{/* готов */}