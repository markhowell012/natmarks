import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faCheckCircle, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './Smarter.css';

const Smarter = () => {
  const blurbs = [
    {
      icon: faDollarSign,
      title: "Reasons For Funding",
      text: "Companies today have many reasons for securing capital. Unfortunately, there are very few alternatives to obtain capital in today's environment. While a traditional bank loan may offer the best terms and least expensive cost of capital, very few small businesses get approved.",
    },
    {
      icon: faCheckCircle,
      title: "Why You Should Apply",
      text: "Fast decisions, little documentation, and a frictionless process is why you should apply for an alternative small business loan. GFN Capital has been providing working capital to 100’s of thousands of small businesses since 2013.",
    },
    {
      icon: faChartLine,
      title: "Help Your Business Succeed",
      text: "Every business, big or small, will at some point require capital. Money provides the cash flow that is the most important aspect of running a business. Without a healthy cash flow, your business will be handcuffed and growth stalled. Having a source for fast capital in your back pocket will provide you a competitive advantage.",
    },
  ];

  return (
    <div className="smarter-section">
      {blurbs.map((blurb, idx) => (
        <div key={idx} className="smarter-blurb">
          <FontAwesomeIcon icon={blurb.icon} className="smarter-icon" />
          <h4 className="smarter-title">{blurb.title}</h4>
          <p className="smarter-text">{blurb.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Smarter;
