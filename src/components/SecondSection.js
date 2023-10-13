import React from 'react';
import './SecondSection.css';
import locIcon from '../images/loc-icon-2.svg';
import payrollIcon from '../images/payroll-icon.svg';
import rocketIcon from '../images/rocket-icon.svg';

function SecondSection() {
  const benefits = [
    {
      icon: rocketIcon,
      title: "Quick application",
      description: "Credit decisions in as little as 3 minutes.",
    },
    {
      icon: locIcon,
      title: "Fast access to funds",
      description: "Funds available as soon as the next business day.",
    },
    {
      icon: payrollIcon,
      title: "Flexible repayment terms",
      description: "Choose your repayment plan with each draw.",
    },
  ];

  return (
    <section className="second-section">
      {benefits.map((benefit, index) => (
        <div key={index} className="benefit">
          <img src={benefit.icon} alt={benefit.title} className="benefit-icon"/>
          <h3 className="benefit-title">{benefit.title}</h3>
          <p className="benefit-description">{benefit.description}</p>
        </div>
      ))}
    </section>
  );
}

export default SecondSection;
