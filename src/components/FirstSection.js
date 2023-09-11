import React from 'react';
import './FirstSection.css';
import fundingPic from '../images/mobile_app-screenshots.png'

const FirstSection = () => {
    return (
        <section className="section-container">
            <div className="section-inner">
                <div className="header-bg">
                    <div className="content-container">
                        <div className="text-content">
                            <h1>Working capital made simple.</h1>
                            <h3>Optimize your cash flow and manage expenses with a revolving line of credit up to $1,500,000. Apply today without impacting your credit score.</h3>
                            <a target="_blank" href="/" className="cta-button">Get Started</a>
                        </div>
                        <div className="image-content">
                            <figure>
                                <img src={fundingPic} alt="Fundbox working capital loan platform" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FirstSection;
