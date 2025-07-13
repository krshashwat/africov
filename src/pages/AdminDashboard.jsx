import React from 'react';
import StatCard from '../components/StatCard';
import { Users, Shield, FileText, DollarSign } from 'lucide-react';
import { mockData } from '../data/mockData';

const AdminDashboard = ({ activeTab }) => {
  const renderDashboard = () => (
    <div>
      <div className="stats-grid">
        <StatCard title="Total Users" value="1,234" icon={Users} />
        <StatCard title="Active Policies" value={mockData.stats.totalPolicies} icon={Shield} />
        <StatCard title="Total Claims" value={mockData.stats.totalClaims} icon={FileText} />
        <StatCard title="Revenue" value="$2.45M" icon={DollarSign} />
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
                </tr>
              </thead>
              <tbody>
                {mockData.claims.slice(0, 3).map(claim => (
                  <tr key={claim.id}>
                    <td>#{claim.id}</td>
                    <td>{claim.type}</td>
                    <td>${claim.amount.toLocaleString()}</td>
                    <td><span className={`status ${claim.status.toLowerCase().replace(' ', '-')}`}>{claim.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="card">
          <div className="card-header">
            <h3>Policy Distribution</h3>
          </div>
          <div className="card-content">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Motor Insurance</span>
                <span style={{ fontWeight: 'bold' }}>45%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Health Insurance</span>
                <span style={{ fontWeight: 'bold' }}>35%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Life Insurance</span>
                <span style={{ fontWeight: 'bold' }}>20%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="card">
      <div className="card-header">
        <h3>User Management</h3>
      </div>
      <div className="card-content">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mockData.users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td style={{ textTransform: 'capitalize' }}>{user.role}</td>
                <td><span className="status approved">Active</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderPolicies = () => (
    <div className="card">
      <div className="card-header">
        <h3>All Policies</h3>
      </div>
      <div className="card-content">
        <table className="table">
          <thead>
            <tr>
              <th>Policy ID</th>
              <th>Type</th>
              <th>Premium</th>
              <th>Status</th>
              <th>Start Date</th>
            </tr>
          </thead>
          <tbody>
            {mockData.policies.map(policy => (
              <tr key={policy.id}>
                <td>#{policy.id}</td>
                <td>{policy.type}</td>
                <td>${policy.premium}</td>
                <td><span className="status approved">{policy.status}</span></td>
                <td>{policy.startDate}</td>
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
        <h3>All Claims</h3>
      </div>
      <div className="card-content">
        <table className="table">
          <thead>
            <tr>
              <th>Claim ID</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {mockData.claims.map(claim => (
              <tr key={claim.id}>
                <td>#{claim.id}</td>
                <td>{claim.type}</td>
                <td>${claim.amount.toLocaleString()}</td>
                <td><span className={`status ${claim.status.toLowerCase().replace(' ', '-')}`}>{claim.status}</span></td>
                <td>{claim.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  switch (activeTab) {
    case 'users': return renderUsers();
    case 'policies': return renderPolicies();
    case 'claims': return renderClaims();
    default: return renderDashboard();
  }
};

export default AdminDashboard;