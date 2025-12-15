import React from "react";
import "./TargetAudience.scss";

import useScrollReveal from "../../hooks/useScrollReveal";

const TargetAudience = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="target-audience" id="audience" ref={ref}>
      <div className={`audience-container reveal ${isVisible ? "active" : ""}`}>
        <div className="audience-header">
          <h2>
            Built for <span>Businesses</span> of All Sizes
          </h2>
          <p>
            From small and medium enterprises to large corporations, Paywave
            scales with your business needs.
          </p>
        </div>

        <div className="audience-grid">
          <div className="audience-card sme reveal-delay-1">
            <div className="card-icon">🏠</div>
            <h3>For SMEs</h3>
            <p>
              Streamline your business financial management with professional
              tools and reporting.
            </p>
            <ul className="benefits-list">
              <li>Invoicing & Expense Reports</li>
              <li>Team access & permissions</li>
              <li>Tax-ready exportable data</li>
            </ul>
          </div>

          <div className="audience-card enterprise reveal-delay-2">
            <div className="card-icon">🏢</div>
            <h3>For Large Corporations</h3>
            <p>
              Scalable expense tracking for large teams and multiple
              departments.
            </p>
            <ul className="benefits-list">
              <li>Department-level expense tracking</li>
              <li>Centralized financial oversight</li>
              <li>Bulk data import & export</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
