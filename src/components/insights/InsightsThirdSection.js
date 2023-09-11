import React from 'react';
import './InsightsThirdSection.css';
import insightsGraph from '../../images/Screenshot 2023-08-31 at 1.06.44 AM.png'

function InsightsThirdSection() {
    return (
        <div className="insights-container">
            <h2 className="insights-title">The Insights Advantage</h2>

            <div className="insights-feature">
                <h3>Cash flow predictions</h3>
                <p>Based on historical transactions and the ability to simulate future scenarios, cash flow predictions allow you to make more informed decisions.</p>
            </div>

            <div className="insights-feature">
                <h3>A simpler way to view your balances</h3>
                <p>See your combined balances and cash flow predictions in one convenient place when you connect multiple business bank accounts.</p>
            </div>

            <div className="insights-feature">
                <h3>Customize your threshold</h3>
                <p>Get alerts when we predict that your cash flow may fall below your set threshold.</p>
            </div>

            <div className="insights-feature">
                <h3>No fees</h3>
                <p>Insights is free for businesses with a connected bank account—even without Fundbox credit.</p>
            </div>
            <img src={insightsGraph} alt="Insights Visual Representation" className="insights-image" />
        </div>
    );
}

export default InsightsThirdSection;
