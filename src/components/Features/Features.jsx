import React from 'react';
import './Features.scss';

const featuresData = [
  {
    icon: '📊',
    title: 'Insightful Reports',
    description: 'Visualize your spending habits with intuitive charts and detailed breakdowns.'
  },
  {
    icon: '⚡',
    title: 'Real-time Sync',
    description: 'Access your data across all devices instantly. Never lose track of a transaction.'
  },
  {
    icon: '🔒',
    title: 'Secure Encryption',
    description: 'Your financial data is encrypted with bank-grade security protocols.'
  },
  {
    icon: '🏷️',
    title: 'Smart Categories',
    description: 'Automatically categorize your expenses to save time and stay organized.'
  },
  {
    icon: '🎯',
    title: 'Budget Goals',
    description: 'Set monthly budgets and get alerts when you are close to overspending.'
  },
  {
    icon: '📱',
    title: 'Mobile Friendly',
    description: 'Designed for a seamless experience on both desktop and mobile devices.'
  }
];

import useScrollReveal from '../../hooks/useScrollReveal';

const Features = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="features" id="features" ref={ref}>
      <div className={`features-container reveal ${isVisible ? 'active' : ''}`}>
        <h2>Why Choose <span>Paywave</span>?</h2>
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div 
              className="feature-card" 
              key={index}
              style={{ transitionDelay: `${index * 100}ms` }} // Inline delay for dynamic list
            >
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
