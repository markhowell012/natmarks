import React from 'react'
import ProgramCard from './ProgramCard'
import './Program.css'
import mcaPic from '../images/mcapic.webp'
import termPic from '../images/termloanpic.webp'
import smlPic from '../images/smlpic.webp'
import consolidationsPic from '../images/consolidations.webp'
import mloc from '../images/mloc.webp'
import { useNavigate } from 'react-router-dom'

function ProgramDisplay() {
    const navigate = useNavigate()
    const programsData = [
        {
            title: 'MCA',
            description: 'Merchant Cash Advance: Swift financial solution for immediate business needs.',
            image: mcaPic
        },
        {
            title: 'Term Loan',
            description: '24-36 Month Term Financing: Flexible financing to empower your business growth.',
            image: termPic
        },
        {
            title: 'SML',
            description: 'Small Merchant Loan: Tailored loan solutions for small business essentials.',
            image: smlPic
        },
        {
            title: 'Consolidations',
            description: 'Consolidate up to 5M: Simplify your debts into one manageable monthly payment.',
            image: consolidationsPic
        },
        {
            title: 'Merchant Line of Credit',
            description: '12-24 month term Up to 4M: Reliable credit line to meet fluctuating business demands.',
            image: mloc
        },
    ];

    function handleApplyNow(){
        navigate('/application')
    }
    return (
        <div className="programs">
            <h1>Our Programs</h1>
            <div className="programs-list">
                {programsData.map((program, index) => (
                    <ProgramCard key={index} {...program} />
                ))}
            </div>
            <div className="more-info">
                <p>Interested in Applying for a Business Loan?</p>
                <button onClick={handleApplyNow}>Apply Now</button>
            </div>
        </div>
    );
}
export default ProgramDisplay