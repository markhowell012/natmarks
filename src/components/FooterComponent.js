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
                            <a href="/" className="link">Partners</a>
                            <p onClick={handleInsightsClick} className="link">Insights</p>
                        </nav>
                    </div>

                    <div className="column">
                        <h5 className="section-title">Resources</h5>
                        <nav className="nav-links">
                            <a href="/" className="link">Business Funding Guide</a>
                            <a href="/" className="link">Business Line of Credit</a>
                            <a href="/" className="link">Partner Marketplace</a>
                            <a href="/" className="link">Resources Library</a>
                            <a href="/" className="link">Blog</a>
                        </nav>
                    </div>

                    <div className="column">
                        <h5 className="section-title">Get in touch</h5>
                        <nav className="nav-links">
                            <a href=":8555727707" className="link">Questions: (404)-920-4946</a>
                            <a href="://help.fundbox.com/hc/en-us" className="link">Help Center</a>
                            <a href="//" className="link">About</a>
                            <a href="//press/" className="link">Press</a>
                            <a href="//" className="link">Careers</a>
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
                        <a href="//" className="bottom-link">Terms of Use</a>
                        <a href="//" className="bottom-link">Privacy Policy</a>
                        <a href="//" className="bottom-link">Disclaimers</a>
                        <a href="/-businesses/" className="bottom-link">Prohibited Businesses</a>
                    </nav>
                </section>
            </div>
        </footer>
    );
}

export default FooterComponent;
