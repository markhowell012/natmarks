import React, { useState } from 'react';
import './Application.css';

const Application = () => {
    const initialFormData = {
        name: '',
        businessName: '',
        ssn: '',
        ein: '',
        annualGrossIncome: '',
        requestedLoanAmount: '',
        phoneNumber: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if any field is empty
        for (const key in formData) {
            if (formData[key] === '') {
                alert('Please fill out all fields.');
                return;
            }
        }

        setIsSubmitted(true);
        console.log('Form Data Submitted:', formData);
        setFormData(initialFormData);
    };

    return (
        <div className="application-container">
            <div class="application-logo">
                <h1>Business Loan Application</h1>
            </div>
            <form onSubmit={handleSubmit} className="application-form">
                <label className="input-label">
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="text-input" />
                </label>
                <label className="input-label">
                    Business Name:
                    <input type="text" name="businessName" value={formData.businessName} onChange={handleInputChange} className="text-input" />
                </label>
                <label className="input-label">
                    Social Security Number:
                    <input type="password" name="ssn" value={formData.ssn} onChange={handleInputChange} className="text-input" />
                </label>
                <label className="input-label">
                    EIN Number:
                    <input type="text" name="ein" value={formData.ein} onChange={handleInputChange} className="text-input" />
                </label>
                <label className="input-label">
                    Annual Gross Income:
                    <input type="number" name="annualGrossIncome" value={formData.annualGrossIncome} onChange={handleInputChange} className="text-input" />
                </label>
                <label className="input-label">
                    Requested Loan Amount:
                    <input type="number" name="requestedLoanAmount" value={formData.requestedLoanAmount} onChange={handleInputChange} className="text-input" />
                </label>
                <label className="input-label">
                    Phone Number:
                    <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} className="text-input" />
                </label>
                <button type="submit" className="submit-button">Submit</button>
            </form>
            {isSubmitted && <p className="thank-you-message">Thank you, your application has been submitted.</p>}
        </div>
    );
};

export default Application;
