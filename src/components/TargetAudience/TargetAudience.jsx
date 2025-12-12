import React from 'react';
import './TargetAudience.scss';

import useScrollReveal from '../../hooks/useScrollReveal';

const TargetAudience = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="target-audience" id="audience" ref={ref}>
      <div className={`audience-container reveal ${isVisible ? 'active' : ''}`}>
        <div className="audience-header">
          <h2>Built for <span>SMEs</span> and <span>Individuals</span></h2>
          <p>Whether you're managing personal finances or running a growing business, Paywave adapts to your needs.</p>
        </div>
        
        <div className="audience-grid">
          <div className="audience-card individual reveal-delay-1">
            <div className="card-icon">👤</div>
            <h3>For Individuals</h3>
            <p>Take control of your daily expenses and savings goals with intuitive tracking tools.</p>
            <ul className="benefits-list">
              <li>Automatic transaction categorization</li>
              <li>Monthly budget & spending limits</li>
              <li>Savings goals visualization</li>
            </ul>
          </div>

          <div className="audience-card sme reveal-delay-2">
            <div className="card-icon">🏢</div>
            <h3>For SMEs</h3>
            <p>Streamline your business financial management with professional tools and reporting.</p>
            <ul className="benefits-list">
              <li>Invoicing & Expense Reports</li>
              <li>Team access & permissions</li>
              <li>Tax-ready exportable data</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
