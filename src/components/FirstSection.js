import React from 'react';
import './FirstSection.css';
import fundingPic from '../images/mobile_app-screenshots.png';
import { useNavigate } from 'react-router-dom';

const FirstSection = () => {
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        navigate('/application');
    }

    return (
        <section className="section-container">
            <div className="content-container">
                <div className="text-content">
                    <h1>Streamlined Working Capital Solutions</h1>
                    <p className="subheading">
                        Optimize your cash flow and manage expenses with a revolving line of credit up to $1,500,000.
                    </p>
                    <p className="subheading">
                        Apply today without impacting your credit score.
                    </p>
                    <button onClick={handleGetStartedClick} className="cta-button">
                        Get Started
                    </button>
                </div>
                <div className="image-content">
                    <img src={fundingPic} alt="GFN Capital working capital loan platform" />
                </div>
            </div>
        </section>
    );
};

export default FirstSection;
