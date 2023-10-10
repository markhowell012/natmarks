import React from 'react';
import './AboutTeam.css';
import jimmy from '../images/jimmy.jpg';
import chris from '../images/chris.jpg';
import tony from '../images/tony.jpg';
import don from '../images/don.jpg';
import alex from '../images/alex.jpeg';
import james from '../images/james.webp';
import diana from '../images/diana.webp';
import { useNavigate } from 'react-router-dom';

function AboutTeam() {

  const navigate = useNavigate()

  const preventRightClick = (e) => {
    e.preventDefault();
  };

  function handleApplyForQuoteClick() {
    navigate('/application')
  }


  return (
    <div className="at-container">
      <section className="at-team-section">
        <h2>Our Team</h2>
        <ul className="team-list">
          {[{ img: chris, alt: "Chris Chutter", title: "CEO", name: "Chris Chutter" },
            { img: tony, alt: "Tony Carso", title: "VP Of Sales", name: "Tony Carso" },
            { img: don, alt: "Don Walker", title: "Head Underwriter", name: "Don Walker" },
            { img: jimmy, alt: "Alex Star", title: "Line Of Credit Operator", name: "Alex Star" },
            { img: alex, alt: "Jimmy Cook", title: "Funding Manager", name: "Jimmy Cook" },
            { img: james, alt: "Bill Baker", title: "GM Of Banking", name: "Bill Baker" },
            { img: diana, alt: "Diana Martinez", title: "Account Management", name: "Diana Martinez" }
          ]
            .map((member, index) => (
              <li key={index} className="team-member" onContextMenu={preventRightClick}>
                <div className="image-wrapper">
                  <img src={member.img} alt={member.alt} className="team-image" />
                  <div className="overlay">
                    <span className="title">{member.title}</span>
                    <span className="name">{member.name}</span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </section>

      <section className="at-application-form">
        <h3>Apply Today</h3>
        <p>To apply for a quote: <button onClick={handleApplyForQuoteClick} className='aboutClickHere'>Click Here</button></p>
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
