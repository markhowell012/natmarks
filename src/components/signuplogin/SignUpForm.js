import React, { useState } from 'react';
import './Signup.css';

const SignUpForm = ({ onSwitch }) => {
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        businessName: '',
        password: '',
        reenterPassword: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-up logic here

        // Assuming you have a function to submit the data to the server,
        // you can call it here. For demonstration purposes, we will
        // just simulate a submission by setting isSubmitted to true.
        setIsSubmitted(true);

        // Clear the form fields
        setFormData({
            email: '',
            fullName: '',
            businessName: '',
            password: '',
            reenterPassword: '',
        });
    };

    return (
        <div className="auth-container">
            <h2 className="signH2">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="signup-email" className="auth-label">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="signup-email"
                        className="auth-input"
                        required
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="signup-fullname" className="auth-label">
                        Full Name:
                    </label>
                    <input
                        type="text"
                        id="signup-fullname"
                        className="auth-input"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                        }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="signup-businessname" className="auth-label">
                        Business Name:
                    </label>
                    <input
                        type="text"
                        id="signup-businessname"
                        className="auth-input"
                        required
                        value={formData.businessName}
                        onChange={(e) =>
                            setFormData({ ...formData, businessName: e.target.value })
                        }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="signup-password" className="auth-label">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="signup-password"
                        className="auth-input"
                        required
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({ ...formData, password: e.target.value })
                        }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="signup-reenterpassword" className="auth-label">
                        Re-enter Password:
                    </label>
                    <input
                        type="password"
                        id="signup-reenterpassword"
                        className="auth-input"
                        required
                        value={formData.reenterPassword}
                        onChange={(e) =>
                            setFormData({ ...formData, reenterPassword: e.target.value })
                        }
                    />
                </div>
                <div className="button-container">
                    <button type="submit" className="auth-button">
                        Sign Up
                    </button>
                    <p>
                        Already have an account?{' '}
                        <span className="auth-link" onClick={() => onSwitch('login')}>
                            Log In
                        </span>
                    </p>
                </div>
            </form>

            {isSubmitted && (
                <p className="success-message">
                    Your account has been submitted for approval. Please talk to your representative for the next steps.
                </p>
            )}

        </div>
    );
};

export default SignUpForm;
