import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import './Signup.css';

function SignUpLogin() {
  // Set the initial formType to 'login'
  const [formType, setFormType] = useState('login');

  const handleFormSwitch = (newFormType) => {
    setFormType(newFormType);
  };

  return (
    <div className="signup-login-container">
      {formType === 'signup' ? (
        <SignUpForm onSwitch={handleFormSwitch} />
      ) : (
        <LoginForm onSwitch={handleFormSwitch} />
      )}
    </div>
  );
}

export default SignUpLogin;
