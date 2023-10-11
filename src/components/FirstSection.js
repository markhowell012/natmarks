import React from 'react';
import './FirstSection.css';
import fundingPic from '../images/mobile_app-screenshots.png'
import { useNavigate } from 'react-router-dom';

const FirstSection = () => {

    const navigate = useNavigate();

    function handleGetStartedClick() {
        navigate('/application');
    }

    function preventRightClick(e) {
        e.preventDefault()
    }

    return (
        <section className="section-container">
            <div className="section-inner">
                <div className="header-bg">
                    <div className="content-container">
                        <div className="text-content">
                            <h1>Streamlined Working Capital Solutions</h1>
                            <p className="subheading">Optimize your cash flow and manage expenses with a revolving line of credit up to $1,500,000.</p>
                            <p className="subheading">Apply today without impacting your credit score.</p>
                            <button onClick={handleGetStartedClick} className="cta-button">Get Started</button>
                        </div>
                        <div className="image-content">
                            <figure>
                                <img onContextMenu={preventRightClick} src={fundingPic} alt="GFN Capital working capital loan platform" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FirstSection;
