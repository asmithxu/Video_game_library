import React, { useState } from 'react';
import './LoginBox.css';

function LoginBox() {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  let handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${username}`);
  };

  return (
    <div className="login-box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function RegisterButton({ onClick }) {
  return (
    <button type="button" onClick={onClick} className="register-button">
      Register
    </button>
  );
}

export default LoginBox;