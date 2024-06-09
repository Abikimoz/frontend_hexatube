import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = ({ setSelectedComponent }) => {
  return (
    <footer className="footer">
      <div className='second-block'>
        <li onClick={() => setSelectedComponent('about')}>О нас</li>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  setSelectedComponent: PropTypes.func.isRequired,
};

export default Footer;
{/* готово */}