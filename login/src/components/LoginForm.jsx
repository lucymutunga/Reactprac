import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const theme = useContext(ThemeContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      setErrorMessage('Please enter both email and password');
    } else {
      // Perform your login logic here
      setErrorMessage('');
      console.log('Login successful');
    }
  };

  return (
    <div className="login-form">
    <form onSubmit={handleSubmit} className={theme === 'dark' ? 'dark' : 'light'}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default LoginForm;
