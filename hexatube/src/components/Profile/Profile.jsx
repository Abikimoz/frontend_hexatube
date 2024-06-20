import React from "react";
import PropTypes from "prop-types";
import "./Profile.css";

function Profile({ setSelectedComponent, isAuthenticated, logoutUser }) {
  return (
    <nav className="nav-profile">
      <div className="profile-row">
        {isAuthenticated ? (
          <>
            <li onClick={logoutUser} className="nav">
              Выйти
            </li>
            <li onClick={() => setSelectedComponent("upload")} className="nav">
              Загрузить
            </li>
          </>
        ) : (
          <>
            <li
              onClick={() => setSelectedComponent("register")}
              className="nav"
            >
              Зарегистрироваться
            </li>
            <li onClick={() => setSelectedComponent("login")} className="nav">
              Войти
            </li>
          </>
        )}
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
