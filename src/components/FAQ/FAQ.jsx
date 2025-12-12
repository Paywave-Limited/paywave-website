import React, { useState } from 'react';
import './FAQ.scss';

const faqs = [
  {
    question: 'Is Paywave completely free to use?',
    answer: 'Yes, our basic plan is completely free for individuals. We also offer premium plans for businesses and power users with advanced features.',
  },
  {
    question: 'Is my financial data secure?',
    answer: 'Absolutely. We use bank-grade encryption (256-bit SSL) to ensure that your data is safe and private. We never sell your data to third parties.',
  },
  {
    question: 'Can I sync with my bank accounts?',
    answer: 'Yes, Paywave supports integration with over 10,000 financial institutions globally for real-time transaction tracking.',
  },
  {
    question: 'Can I export my data?',
    answer: 'Yes, you can export your expense reports and data in CSV, PDF, or Excel formats at any time.',
  },
  {
    question: 'Is there a mobile app available?',
    answer: 'Yes, Paywave is available for both iOS and Android devices, so you can track your expenses on the go.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <h2>Frequently Asked <span>Questions</span></h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="question">
                <h3>{faq.question}</h3>
                <span className="toggle-icon">{activeIndex === index ? '-' : '+'}</span>
              </div>
              <div className="answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
