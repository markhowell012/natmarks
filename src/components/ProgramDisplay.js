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
            image: mcaPic,
            clickDescription: "Unlock the next level of your business journey with our Merchant Cash Advance (MCA). Engineered to empower businesses, our MCA provides an immediate, hassle-free financial infusion, bridging any cash flow gaps and enabling you to seize time-sensitive opportunities effectively. Experience a financial solution that’s not just swift but also tailored to complement your business's unique needs and aspirations."
        },
        {
            title: 'Term Loan',
            description: '24-36 Month Term Financing: Flexible financing to empower your business growth.',
            image: termPic,
            clickDescription: "Explore new horizons of growth and stability with our 24-36 Month Term Financing. Offering a canvas of financial flexibility and empowerment, our Term Loan is meticulously crafted to fuel your business expansion and fortify its foundations. Whether it’s investing in infrastructure, capitalizing on strategic opportunities, or ensuring smooth operational flow, our flexible financing solution becomes the catalyst that propels your business towards its future."
        },
        {
            title: 'SML',
            description: 'Small Merchant Loan: Tailored loan solutions for small business essentials.',
            image: smlPic,
            clickDescription: "Discover the ease of navigating through your business journey with our Small Merchant Loan (SML). Tailored specifically for small businesses, SML provides the essential financial boost, ensuring you can manage operations, replenish inventory, and seize growth opportunities with confidence and strategic foresight. Your ambitions become attainable with our dedicated financial support."
        },
        {
            title: 'Consolidations',
            description: 'Consolidate up to 5M: Simplify your debts into one manageable monthly payment.',
            image: consolidationsPic,
            clickDescription: "Navigate through your financial obligations effortlessly with our Consolidation services, facilitating up to 5M. Designed to streamline your debts, our offering transforms multiple liabilities into a single, manageable monthly payment. Our aim is to alleviate financial complexities, ensuring you retain a sharp focus on your business aspirations while maintaining balanced financial health, thus providing you with a simplified, strategic path towards fiscal stability and growth."
        },
        {
            title: 'Merchant Line of Credit',
            description: '12-24 month term Up to 4M: Reliable credit line to meet fluctuating business demands.',
            image: mloc,
            clickDescription: "Secure your business operations with our Merchant Line of Credit, offering up to 4M for a 12-24 month term. Crafted to adeptly navigate through fluctuating business demands, this credit line provides immediate access to funds, ensuring you can seize opportunities and manage challenges with financial confidence and strategic ease. Your pathway to flexible and reliable financial management starts here."
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