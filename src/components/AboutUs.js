import React from 'react';
import './AboutUs.css';
import AboutTeam from './AboutTeam';
import teamPic from '../images/teampic.webp';

const AboutUs = () => {
    return (
        <div className="aboutUsContainer">
            <div className="aboutUsInner">
                <div className="aboutUsContent">
                    <div className="aboutUsText">
                        <h1 className="aboutUsTitle">About Us</h1>
                        <p className="aboutUsDescription">GFN Capital is an embedded working capital platform for small businesses. As a leading provider of working capital, we use technology to help small businesses optimize cash flow. Since 2013, we have unlocked over $3 Billion in capital and connected to over 500,000 businesses.</p>
                    </div>
                    <div className="aboutUsTeamImgWrap">
                        <img src={teamPic} alt="GFN Capital Team" className="aboutUsTeamImg" />
                    </div>
                </div>
            </div>
            <AboutTeam />
        </div>
    );
};

export default AboutUs;
