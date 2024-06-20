import React from "react";
import PropTypes from "prop-types";
import "./Profile.css";

function Profile({ setSelectedComponent }) {
  return (
    <nav className="nav-profile">
      <div className="profile-row">
        <li onClick={() => setSelectedComponent("login")} className="nav">
          Войти
        </li>
        <li onClick={() => setSelectedComponent("upload")} className="nav">
          Загрузить
        </li>
      </div>
    </nav>
  );
}

Profile.propTypes = {
  setSelectedComponent: PropTypes.func.isRequired,
};

export default Profile;
{
  /* Ведется работа */
}
