import React from 'react';
import './InsightsSecondSection.css';

const InsightsSecondSection = () => {
    return (
        <section className="threePoints-section">
            <div className="threePoints-container">
                <div className="threePoints-wrapper">
                    <div className="threePoints-box">
                        <h3 className="threePoints-title">Easy and simple</h3>
                        <figure className="threePoints-divider"></figure>
                        <p className="threePoints-description">Connect your business bank accounts.</p>
                    </div>
                    <div className="threePoints-box">
                        <h3 className="threePoints-title">At a glance</h3>
                        <figure className="threePoints-divider"></figure>
                        <p className="threePoints-description">Quickly see your predicted cash flow.*</p>
                    </div>
                    <div className="threePoints-box">
                        <h3 className="threePoints-title">Anticipate and plan ahead</h3>
                        <figure className="threePoints-divider"></figure>
                        <p className="threePoints-description">Simulate scenarios by adding expected or potential transactions.</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default InsightsSecondSection;
