import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css'


const Profile = () => {
  return (
    <nav className='nav-profile'>
      <div className='profile-row'>
        <li onClick={() => setSelectedComponent('login')} className='login'>Войти</li>
      </div>
    </nav>
  )
}

Profile.propTypes = {
  setSelectedComponent: PropTypes.func.isRequired,
};

export default Profile;
{/* Ведется работа */}