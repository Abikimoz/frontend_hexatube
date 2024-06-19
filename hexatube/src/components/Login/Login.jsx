import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Login.css';

function Login({ setSelectedComponent }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      console.log('Login successful:', response.data);
    } catch (error) {
      setError('Неправильный адрес электронной почты или пароль.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
      <p className="reg" onClick={() => setSelectedComponent('register')}>
        Регистрация
      </p>
    </div>
  );
}

Login.propTypes = {
  setSelectedComponent: PropTypes.func.isRequired,
};

export default Login;
