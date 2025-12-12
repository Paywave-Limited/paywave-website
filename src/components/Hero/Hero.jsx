import React from 'react';
import './Hero.scss';
import '../../styles/animations.scss';
import DashboardPreview from '../DashboardPreview/DashboardPreview';
import useParallax from '../../hooks/useParallax';
import useScrollReveal from '../../hooks/useScrollReveal';

const Hero = () => {
  const parallaxOffset = useParallax(0.4);
  const { ref: contentRef, isVisible } = useScrollReveal();

  return (
    <section className="hero">
      <div 
        className="hero-bg-circle" 
        style={{ transform: `translateY(${parallaxOffset}px) translateX(-50%)` }} 
      />
      
      <div className={`hero-container reveal ${isVisible ? 'active' : ''}`} ref={contentRef}>
        <h1>
          Take Control of Your <br />
          <span>Financial Future</span>
        </h1>
        <p className="reveal-delay-1">
          Track expenses, set budgets, and achieve your financial goals with 
          the most intuitive expense tracker on the market.
        </p>
        <div className="hero-actions reveal-delay-2">
          <button className="btn-primary">Start for Free</button>
          <button className="btn-secondary">View Demo</button>
        </div>
        
        <div className="hero-dashboard-container reveal-delay-3">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
};

export default Hero;
