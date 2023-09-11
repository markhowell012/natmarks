import React from 'react';
import insigtsPic from '../../images/insights.webp';
import './InsightsContainer.css';
import InsightsSecondSection from './InsightsSecondSection';
import InsightsThirdSection from './InsightsThirdSection';

const InsightsContainer = () => {
    return (
        <div className="bd-container">
            <div className="bd-content-container">
                <div className="bd-text-content">
                    <h1>Make smarter business decisions, faster</h1>
                    <h3>Get helpful insights and smart predictions to help you plan with confidence.</h3>
                    <button className="cta-button">Learn More</button>
                </div>
                <div className="bd-main-image">
                    <img src={insigtsPic} alt="Insightful analytics representation" />
                </div>
            </div>
            <InsightsSecondSection />
            <InsightsThirdSection />
        </div>
    );
}

export default InsightsContainer;
