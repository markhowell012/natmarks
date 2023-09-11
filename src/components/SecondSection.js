import React from 'react'
import './SecondSection.css'
import locIcon from '../images/loc-icon-2.svg'
import payrollIcon from '../images/payroll-icon.svg'
import rocketIcon from '../images/rocket-icon.svg'
function SecondSection() {
  return (
    <div className="second-section">
        <div className="benefit">
            <img style={{backgroundColor: 'rgb(248,189,170)', borderRadius: '5px'}} src={rocketIcon} alt='rocket' className="benefit-icon"/>
            <p className="benefit-title">Quick application</p>
            <p className="benefit-description">Applying is quick and easy, and you can get a credit decision in as little as 3 minutes.</p>
        </div>
        <div className="benefit">
            <img style={{backgroundColor: 'rgb(146,219,244)', borderRadius: '5px'}} src={locIcon} alt='loc' className="benefit-icon"/>
            <p className="benefit-title">Fast access to funds</p>
            <p className="benefit-description">Funds can be available as soon as the next business day if approved.</p>
        </div>
        <div className="benefit">
            <img style={{backgroundColor: 'rgb(253,212,97)', borderRadius: '5px'}} src={payrollIcon} alt='payroll' className="benefit-icon"/>
            <p className="benefit-title">Flexible repayment terms</p>
            <p className="benefit-description">Choose your repayment plan each time you draw funds—with no prepayment penalty.</p>
        </div>
    </div>
  )
}

export default SecondSection