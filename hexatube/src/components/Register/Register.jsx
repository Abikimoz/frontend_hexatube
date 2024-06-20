import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = { email, password };
      await onRegister(user);
      history("/login");
    } catch (error) {
      console.error("Error registering", error);
      alert("Failed to register");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Регистрация</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Register;
