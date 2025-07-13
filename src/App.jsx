import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import AdminDashboard from './pages/AdminDashboard';
import ProviderDashboard from './pages/ProviderDashboard';
import UserDashboard from './pages/UserDashboard';
import { User } from 'lucide-react';

function App() {
  const [userRole, setUserRole] = useState('user'); // 'admin', 'provider', 'user'
  const [activeTab, setActiveTab] = useState('dashboard');

  const getCurrentUser = () => {
    const users = {
      admin: { name: 'Admin User', email: 'admin@insurance.com' },
      provider: { name: 'Insurance Provider', email: 'provider@insurance.com' },
      user: { name: 'John Doe', email: 'john@example.com' }
    };
    return users[userRole];
  };

  const renderDashboard = () => {
    switch (userRole) {
      case 'admin':
        return <AdminDashboard activeTab={activeTab} />;
      case 'provider':
        return <ProviderDashboard activeTab={activeTab} />;
      case 'user':
        return <UserDashboard activeTab={activeTab} />;
      default:
        return <UserDashboard activeTab={activeTab} />;
    }
  };

  const getPageTitle = () => {
    const titles = {
      dashboard: 'Dashboard',
      users: 'User Management',
      policies: userRole === 'admin' ? 'All Policies' : userRole === 'provider' ? 'Policy Management' : 'My Policies',
      claims: userRole === 'admin' ? 'All Claims' : userRole === 'provider' ? 'Claims Management' : 'My Claims',
      purchase: 'Purchase Insurance',
      'my-policies': 'My Policies',
      'my-claims': 'My Claims',
      claim: 'File Claim',
      analytics: 'Analytics',
      metrics: 'Metrics'
    };
    return titles[activeTab] || 'Dashboard';
  };

  return (
    <div className="dashboard">
      <Sidebar 
        userRole={userRole} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
      <div className="main-content">
        <div className="header">
          <h1>{getPageTitle()}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Role Switcher for Demo */}
            <select 
              value={userRole} 
              onChange={(e) => {
                setUserRole(e.target.value);
                setActiveTab('dashboard');
              }}
              style={{ 
                padding: '0.5rem', 
                borderRadius: '8px', 
                border: '1px solid #d1d5db',
                background: 'white'
              }}
            >
              <option value="user">User View</option>
              <option value="provider">Provider View</option>
              <option value="admin">Admin View</option>
            </select>
            
            <div className="user-info">
              <User size={20} />
              <div>
                <div style={{ fontWeight: '500' }}>{getCurrentUser().name}</div>
                <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  {getCurrentUser().email}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {renderDashboard()}
      </div>
    </div>
  );
}

export default App;