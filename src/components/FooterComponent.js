import React from 'react';
import './FooterComponent.css';
import { useNavigate } from 'react-router-dom';

function FooterComponent() {
    const navigate = useNavigate()

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    function handleBusinessCreditClick() {
        scrollToTop();
        navigate('/Business_Credit')
    }
    function handleInsightsClick() {
        scrollToTop();
        navigate('/insights')
    }
    return (
        <footer className="footer">
            <div className="container">
                <section className="flex-wrap">
                    <div className="column">
                        <h5 className="section-title">Solutions</h5>
                        <nav className="nav-links">
                            <p onClick={handleBusinessCreditClick} href="/" className="link">Business credit</p>
                            <p className="link">Partners</p>
                            <p onClick={handleInsightsClick} className="link">Insights</p>
                        </nav>
                    </div>

                    <div className="column">
                        <h5 className="section-title">Resources</h5>
                        <nav className="nav-links">
                            <p className="link">Business Funding Guide</p>
                            <p className="link">Business Line of Credit</p>
                            <p className="link">Partner Marketplace</p>
                            <p className="link">Resources Library</p>
                            <p className="link">Blog</p>
                        </nav>
                    </div>

                    <div className="column">
                        <h5 className="section-title">Get in touch</h5>
                        <nav className="nav-links">
                            <p className="link">Questions: (404)-920-4946</p>
                            <p className="link">Help Center</p>
                            <p className="link">About</p>
                            <p className="link">Press</p>
                            <p className="link">Careers</p>
                        </nav>
                    </div>

                    {/* Divider */}
                    <div className="divider"></div>

                    {/* Additional content */}
                    <div className="additional-content">
                        <nav className="social-links">
                            {/* ... Social media icons */}
                        </nav>
                        <div className="security-info">
                            <p>Security is our top priority. We use industry best practice security protocols.</p>
                        </div>
                    </div>
                </section>

                <section className="footer-bottom">
                    <div className="white-bar"></div>
                    <nav className="bottom-nav">
                        <p className="bottom-link">Terms of Use</p>
                        <p className="bottom-link">Privacy Policy</p>
                        <p className="bottom-link">Disclaimers</p>
                        <p className="bottom-link">Prohibited Businesses</p>
                    </nav>
                </section>
            </div>
        </footer>
    );
}

export default FooterComponent;
