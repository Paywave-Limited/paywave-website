import React from 'react';
import './DashboardPreview.scss';

const DashboardPreview = () => {
  const chartData = [30, 45, 25, 60, 75, 50, 80];
  
  const transactions = [
    { icon: '🛒', name: 'Grocery Store', date: 'Today, 2:30 PM', amount: '-$124.50', type: 'expense' },
    { icon: '🎬', name: 'Netflix', date: 'Yesterday', amount: '-$14.99', type: 'expense' },
    { icon: '💰', name: 'Freelance', date: 'Oct 24', amount: '+$850.00', type: 'income' },
    { icon: '☕', name: 'Coffee Shop', date: 'Oct 23', amount: '-$5.40', type: 'expense' },
  ];

  return (
    <div className="dashboard-preview">
      <div className="dash-header">
        <div className="dash-logo">
          <div className="circle"></div>
          <span>My Overview</span>
        </div>
        <div className="dash-user">
          <div className="avatar"></div>
        </div>
      </div>

      <div className="dash-grid">
        <div className="card card-balance">
          <h4>Total Balance</h4>
          <div className="amount">$12,450.80</div>
          <div className="trend">
            <span>▲ 12%</span> 
            <span style={{color: '#888', fontSize: '0.8rem'}}>vs last month</span>
          </div>
          
          <div className="chart-container">
            {chartData.map((val, i) => (
              <div key={i} className="bar" style={{'--percentage': `${val}%`}}></div>
            ))}
          </div>
        </div>

        <div className="card card-transactions">
          <h4>Recent Activity</h4>
          <div className="transaction-list">
            {transactions.map((t, i) => (
              <div key={i} className="transaction-item">
                <div className="info">
                  <div className="icon">{t.icon}</div>
                  <div className="details">
                    <span className="name">{t.name}</span>
                    <span className="date">{t.date}</span>
                  </div>
                </div>
                <div className={`amount ${t.type}`}>{t.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
