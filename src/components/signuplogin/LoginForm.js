import React, { useState } from 'react';
import './Signup.css';

const LoginForm = ({ onSwitch }) => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login logic for demonstration purposes
    // Replace this with your actual login logic
    const email = e.target.querySelector("#login-email").value;
    const password = e.target.querySelector("#login-password").value;

    if (email === "your_correct_email" && password === "your_correct_password") {
      // Successful login, you can navigate to another page or set a flag to indicate successful login
      console.log("Login successful");
    } else {
      // Incorrect login, show error message
      setShowErrorMessage(true);
    }
  };

  return (
    <div className="auth-container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="login-email" className="auth-label">
            Email:
          </label>
          <input type="email" id="login-email" className="auth-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="login-password" className="auth-label">
            Password:
          </label>
          <input
            type="password"
            id="login-password"
            className="auth-input"
            required
          />
        </div>
        <div className="button-container">
          <button type="submit" className="auth-button">
            Log In
          </button>
          <p>
            Don't have an account?{' '}
            <span className="auth-link" onClick={() => onSwitch('signup')}>
              Sign Up
            </span>
          </p>
        </div>
      </form>

      {/* Display error message when showErrorMessage is true */}
      {showErrorMessage && (
        <p className="error-message">Incorrect username or password</p>
      )}
    </div>
  );
};

export default LoginForm;
