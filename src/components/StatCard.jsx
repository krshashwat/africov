import React from 'react';

const StatCard = ({ title, value, icon: Icon }) => {
  return (
    <div className="stat-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3>{title}</h3>
          <div className="value">{value}</div>
        </div>
        {Icon && <Icon size={24} style={{ color: '#1e40af', opacity: 0.7 }} />}
      </div>
    </div>
  );
};

export default StatCard;