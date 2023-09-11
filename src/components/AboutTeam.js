// AboutTeam.jsx
import React from 'react';
import './AboutTeam.css';

function AboutTeam() {
  return (
    <div className="at-container">
      
      <section className="at-team-section">
        <h2>Our Team</h2>
        <ul>
          <li>Founder - Chris Chutter</li>
          <li>CEO - Tony Carso</li>
          <li>CFO - Gary Hudson</li>
          <li>Head Underwriter - Don Walker</li>
        </ul>
      </section>

      <section className="at-application-form">
        <h3>Apply Today</h3>
        <p>To apply for a quote, fill out the info below:</p>
        <form>
          <input type="text" placeholder="Full Name*" required />
          <input type="email" placeholder="Email*" required />
          <input type="tel" placeholder="Phone Number*" required />
          <input type="text" placeholder="Company Name" />
          <input type="text" placeholder="Industry" />
          <input type="number" placeholder="Amount Requesting" />
          <button type="submit">SEND</button>
        </form>
        <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
      </section>

      <section className="at-office-hours">
        <h2>GFN Capital</h2>
        <address>55 Water St, Manhattan, NY 10038</address>
        <a href="mailto:Info@gfncapital.com">Info@gfncapital.com</a>
        <a href="tel:404-920-4946">404-920-4946</a>
        <ul>
          {/* You can expand this list for each day's office hours */}
        </ul>
      </section>

    </div>
  );
}

export default AboutTeam;
