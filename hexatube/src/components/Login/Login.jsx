import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";

function Login({ setSelectedComponent, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onLogin({ username, password });
      setSelectedComponent("videoGrid");
    } catch (error) {
      setError("Неправильный адрес электронной почты или пароль.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Войти</button>
      </form>
      <p className="reg" onClick={() => setSelectedComponent("register")}>
        Регистрация
      </p>
    </div>
  );
}

Login.propTypes = {
  setSelectedComponent: PropTypes.func.isRequired,
};

export default Login;
