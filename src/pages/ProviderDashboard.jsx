import React from 'react';
import StatCard from '../components/StatCard';
import { Shield, FileText, DollarSign, TrendingUp } from 'lucide-react';
import { mockData } from '../data/mockData';

const ProviderDashboard = ({ activeTab }) => {
  const renderDashboard = () => (
    <div>
      <div className="stats-grid">
        <StatCard title="Active Policies" value={mockData.stats.totalPolicies} icon={Shield} />
        <StatCard title="Claims Received" value={mockData.stats.totalClaims} icon={FileText} />
        <StatCard title="Pending Claims" value={mockData.stats.pendingClaims} icon={TrendingUp} />
        <StatCard title="Premium Collected" value="$2.45M" icon={DollarSign} />
      </div>
      
      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <h3>Recent Claims</h3>
          </div>
          <div className="card-content">
            <table className="table">
              <thead>
                <tr>
                  <th>Claim ID</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {mockData.claims.map(claim => (
                  <tr key={claim.id}>
                    <td>#{claim.id}</td>
                    <td>{claim.type}</td>
                    <td>${claim.amount.toLocaleString()}</td>
                    <td><span className={`status ${claim.status.toLowerCase().replace(' ', '-')}`}>{claim.status}</span></td>
                    <td>
                      {claim.status === 'Pending' && (
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button className="btn btn-primary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>
                            Approve
                          </button>
                          <button className="btn btn-secondary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>
                            Reject
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="card">
          <div className="card-header">
            <h3>Monthly Performance</h3>
          </div>
          <div className="card-content">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Claims Processed</span>
                <span style={{ fontWeight: 'bold', color: '#1e40af' }}>28</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Average Processing Time</span>
                <span style={{ fontWeight: 'bold', color: '#1e40af' }}>3.2 days</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Approval Rate</span>
                <span style={{ fontWeight: 'bold', color: '#1e40af' }}>89%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPolicies = () => (
    <div className="card">
      <div className="card-header">
        <h3>Policy Management</h3>
      </div>
      <div className="card-content">
        <table className="table">
          <thead>
            <tr>
              <th>Policy ID</th>
              <th>Customer</th>
              <th>Type</th>
              <th>Premium</th>
              <th>Status</th>
              <th>Next Payment</th>
            </tr>
          </thead>
          <tbody>
            {mockData.policies.map(policy => (
              <tr key={policy.id}>
                <td>#{policy.id}</td>
                <td>John Doe</td>
                <td>{policy.type}</td>
                <td>${policy.premium}</td>
                <td><span className="status approved">{policy.status}</span></td>
                <td>2024-12-15</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderClaims = () => (
    <div className="card">
      <div className="card-header">
        <h3>Claims Management</h3>
      </div>
      <div className="card-content">
        <table className="table">
          <thead>
            <tr>
              <th>Claim ID</th>
              <th>Customer</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date Filed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mockData.claims.map(claim => (
              <tr key={claim.id}>
                <td>#{claim.id}</td>
                <td>John Doe</td>
                <td>{claim.type}</td>
                <td>${claim.amount.toLocaleString()}</td>
                <td><span className={`status ${claim.status.toLowerCase().replace(' ', '-')}`}>{claim.status}</span></td>
                <td>{claim.date}</td>
                <td>
                  <button className="btn btn-secondary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  switch (activeTab) {
    case 'policies': return renderPolicies();
    case 'claims': return renderClaims();
    case 'metrics': return renderDashboard();
    default: return renderDashboard();
  }
};

export default ProviderDashboard;