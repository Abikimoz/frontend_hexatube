import React from "react";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar.jsx";
import "./Header.css";

function Header({ setSelectedComponent, onSearch, setSearchQuery }) {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="logo" className="logo-img" />
        <p className="home" onClick={() => setSelectedComponent("videoGrid")}>
          HexaTube
        </p>
      </div>
      <div className="search-field">
        <SearchBar
          className="search"
          onSearch={onSearch}
          setSearchQuery={setSearchQuery}
        />
      </div>
    </header>
  );
}

Header.propTypes = {
  setSelectedComponent: PropTypes.func.isRequired,
};

export default Header;
{
  /* готов */
}
