import React from 'react';
import './HowItWorks.scss';
import stepSignup from '../../assets/step-signup.png';
import stepConnect from '../../assets/step-connect.png';
import stepTrack from '../../assets/step-track.png';

const steps = [
  {
    image: stepSignup,
    title: 'Sign Up',
    description: 'Create your free account in seconds. No credit card required to get started.',
  },
  {
    image: stepConnect,
    title: 'Add Accounts',
    description: 'Connect your bank accounts securely or add your expenses manually.',
  },
  {
    image: stepTrack,
    title: 'Track & Optimize',
    description: 'See where your money goes and discover ways to save more every month.',
  },
];

import useScrollReveal from '../../hooks/useScrollReveal';

const HowItWorks = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="how-it-works" id="how-it-works" ref={ref}>
      <div className={`hiw-container reveal ${isVisible ? 'active' : ''}`}>
        <h2>How It <span>Works</span></h2>
        <div className="steps">
          {steps.map((step, index) => (
            <div 
              className="step" 
              key={index}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="step-image">
                <img src={step.image} alt={step.title} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
