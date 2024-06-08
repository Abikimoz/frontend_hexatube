import React from 'react';
import './Profile.css'
import Dashboard from './Dashboard.jsx';

const components = {
  dashboard: <Dashboard />,
}
function Profile() {
  return (
    <nav className='nav-profile'>
      <div className='profile-row'>
        <li className='login'>Войти</li>
      </div>
    </nav>
  )
}

export default Profile;
{/* Ведется работа */}