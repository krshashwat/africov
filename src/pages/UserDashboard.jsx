import React, { useState } from 'react';
import StatCard from '../components/StatCard';
import { Shield, FileText, DollarSign, Clock } from 'lucide-react';
import { mockData } from '../data/mockData';

const UserDashboard = ({ activeTab }) => {
  const [purchaseForm, setPurchaseForm] = useState({
    type: 'Motor',
    coverage: '',
    premium: ''
  });
  
  const [claimForm, setClaimForm] = useState({
    policyId: '',
    amount: '',
    description: ''
  });

  const renderDashboard = () => (
    <div>
      <div className="stats-grid">
        <StatCard title="Active Policies" value="3" icon={Shield} />
        <StatCard title="Total Claims" value="2" icon={FileText} />
        <StatCard title="Pending Claims" value="1" icon={Clock} />
        <StatCard title="Total Premium" value="$7,200" icon={DollarSign} />
      </div>
      
      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <h3>My Recent Claims</h3>
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
                {mockData.claims.slice(0, 2).map(claim => (
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
            <h3>Quick Actions</h3>
          </div>
          <div className="card-content">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button className="btn btn-primary">Purchase New Policy</button>
              <button className="btn btn-secondary">File a Claim</button>
              <button className="btn btn-secondary">View Policy Documents</button>
              <button className="btn btn-secondary">Update Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPurchase = () => (
    <div className="card">
      <div className="card-header">
        <h3>Purchase New Insurance</h3>
      </div>
      <div className="card-content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Insurance Type</label>
            <select 
              value={purchaseForm.type}
              onChange={(e) => setPurchaseForm({...purchaseForm, type: e.target.value})}
            >
              <option value="Motor">Motor Insurance</option>
              <option value="Health">Health Insurance</option>
              <option value="Life">Life Insurance</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Coverage Amount</label>
            <select 
              value={purchaseForm.coverage}
              onChange={(e) => setPurchaseForm({...purchaseForm, coverage: e.target.value})}
            >
              <option value="">Select Coverage</option>
              <option value="basic">Basic - $50,000</option>
              <option value="standard">Standard - $100,000</option>
              <option value="premium">Premium - $250,000</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Annual Premium</label>
            <input 
              type="text" 
              value="$1,200 (estimated)"
              readOnly
              style={{ background: '#f8fafc' }}
            />
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <button type="submit" className="btn btn-primary">Get Quote</button>
            <button type="button" className="btn btn-secondary">Save Draft</button>
          </div>
        </form>
      </div>
    </div>
  );

  const renderMyPolicies = () => (
    <div className="card">
      <div className="card-header">
        <h3>My Policies</h3>
      </div>
      <div className="card-content">
        <table className="table">
          <thead>
            <tr>
              <th>Policy ID</th>
              <th>Type</th>
              <th>Premium</th>
              <th>Status</th>
              <th>Next Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mockData.policies.map(policy => (
              <tr key={policy.id}>
                <td>#{policy.id}</td>
                <td>{policy.type}</td>
                <td>${policy.premium}</td>
                <td><span className="status approved">{policy.status}</span></td>
                <td>2024-12-15</td>
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

  const renderMyClaims = () => (
    <div className="card">
      <div className="card-header">
        <h3>My Claims</h3>
      </div>
      <div className="card-content">
        <table className="table">
          <thead>
            <tr>
              <th>Claim ID</th>
              <th>Policy Type</th>
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
                <td>{claim.type}</td>
                <td>${claim.amount.toLocaleString()}</td>
                <td><span className={`status ${claim.status.toLowerCase().replace(' ', '-')}`}>{claim.status}</span></td>
                <td>{claim.date}</td>
                <td>
                  <button className="btn btn-secondary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>
                    Track Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderClaim = () => (
    <div className="card">
      <div className="card-header">
        <h3>File New Claim</h3>
      </div>
      <div className="card-content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Select Policy</label>
            <select 
              value={claimForm.policyId}
              onChange={(e) => setClaimForm({...claimForm, policyId: e.target.value})}
            >
              <option value="">Choose a policy</option>
              {mockData.policies.map(policy => (
                <option key={policy.id} value={policy.id}>
                  {policy.type} Insurance - Policy #{policy.id}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label>Claim Amount</label>
            <input 
              type="number" 
              placeholder="Enter claim amount"
              value={claimForm.amount}
              onChange={(e) => setClaimForm({...claimForm, amount: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <label>Description</label>
            <textarea 
              rows="4"
              placeholder="Describe the incident and reason for claim"
              value={claimForm.description}
              onChange={(e) => setClaimForm({...claimForm, description: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <label>Supporting Documents</label>
            <input type="file" multiple />
            <small style={{ color: '#64748b', marginTop: '0.5rem', display: 'block' }}>
              Upload receipts, photos, or other supporting documents
            </small>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <button type="submit" className="btn btn-primary">Submit Claim</button>
            <button type="button" className="btn btn-secondary">Save Draft</button>
          </div>
        </form>
      </div>
    </div>
  );

  switch (activeTab) {
    case 'purchase': return renderPurchase();
    case 'my-policies': return renderMyPolicies();
    case 'my-claims': return renderMyClaims();
    case 'claim': return renderClaim();
    default: return renderDashboard();
  }
};

export default UserDashboard;