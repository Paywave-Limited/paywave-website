import React, { useState } from 'react';
import './Pricing.scss';

const pricingPlans = [
  {
    title: 'Starter',
    price: '0',
    description: 'Perfect for individuals getting started with expense tracking.',
    features: [
      'Track unlimited expenses',
      '2 Bank accounts connection',
      'Basic monthly reports',
      'Mobile app access'
    ],
    buttonText: 'Get Started Free',
    isPopular: false
  },
  {
    title: 'Pro',
    price: '12',
    description: 'Advanced features for power users and small businesses.',
    features: [
      'Everything in Starter',
      'Unlimited bank connections',
      'Automatic receipt scanning',
      'Advanced categorization',
      'Export to CSV/PDF'
    ],
    buttonText: 'Start Free Trial',
    isPopular: true
  },
  {
    title: 'Enterprise',
    price: '49',
    description: 'Complete financial management for growing teams.',
    features: [
      'Everything in Pro',
      'Team collaboration tools',
      'Role-based access control',
      'Dedicated account manager',
      'Usage API access'
    ],
    buttonText: 'Contact Sales',
    isPopular: false
  }
];

import useScrollReveal from '../../hooks/useScrollReveal';

const Pricing = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="pricing-section" id="pricing" ref={ref}>
      <div className={`pricing-container reveal ${isVisible ? 'active' : ''}`}>
        <div className="pricing-header">
          <h2>Simple, Transparent <span>Pricing</span></h2>
          <p>Choose the plan that best fits your financial journey.</p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div 
              className={`pricing-card ${plan.isPopular ? 'popular' : ''}`} 
              key={index}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {plan.isPopular && <div className="popular-badge">Most Popular</div>}
              <div className="plan-name">{plan.title}</div>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/month</span>
              </div>
              <p className="plan-description">{plan.description}</p>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className={`btn-plan ${plan.isPopular ? 'btn-primary' : 'btn-outline'}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
