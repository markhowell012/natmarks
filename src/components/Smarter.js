import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faCheckCircle, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './Smarter.css';

const Smarter = () => {
  return (
    <div className="row-smarter">
      
      <div className="column-smarter">
        <div className="blurb-smarter">
          <div className="blurb-content-smarter">
            <div className="main-blurb-image-smarter">
              <FontAwesomeIcon icon={faDollarSign} className="icon-smarter" />
            </div>
            <div className="blurb-container-smarter">
              <h4>Reasons For Funding</h4>
              <p>
                Companies today have many reasons for securing capital.
                Unfortunately, there are very few alternatives to obtain capital
                in today's environment. While a traditional bank loan may offer
                the best terms and least expensive cost of capital, very few
                small businesses get approved.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="column-smarter">
        <div className="blurb-smarter">
          <div className="blurb-content-smarter">
            <div className="main-blurb-image-smarter">
              <FontAwesomeIcon icon={faCheckCircle} className="icon-smarter" />
            </div>
            <div className="blurb-container-smarter">
              <h4>Why You Should Apply</h4>
              <p>
                Fast decisions, little documentation, and a frictionless process
                is why you should apply for an alternative small business loan.
                GFN Capital has been providing working capital to 100’s
                of thousands of small businesses since 2013.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="column-smarter">
        <div className="blurb-smarter">
          <div className="blurb-content-smarter">
            <div className="main-blurb-image-smarter">
              <FontAwesomeIcon icon={faChartLine} className="icon-smarter" />
            </div>
            <div className="blurb-container-smarter">
              <h4>Help Your Business Succeed</h4>
              <p>
                Every business, big or small, will at some point require
                capital. Money provides the cash flow that is the most important
                aspect of running a business. Without a healthy cash flow, your
                business will be handcuffed and growth stalled. Having a source
                for fast capital in your back pocket will provide you a
                competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Smarter;
