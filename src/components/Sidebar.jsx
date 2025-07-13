import React from 'react';
import { Home, FileText, Users, Settings, Shield, DollarSign } from 'lucide-react';

const Sidebar = ({ userRole, activeTab, setActiveTab }) => {
  const getNavItems = () => {
    const common = [
      { id: 'dashboard', label: 'Dashboard', icon: Home }
    ];

    switch (userRole) {
      case 'admin':
        return [
          ...common,
          { id: 'users', label: 'Users', icon: Users },
          { id: 'policies', label: 'All Policies', icon: Shield },
          { id: 'claims', label: 'All Claims', icon: FileText },
          { id: 'analytics', label: 'Analytics', icon: DollarSign }
        ];
      case 'provider':
        return [
          ...common,
          { id: 'policies', label: 'Policies', icon: Shield },
          { id: 'claims', label: 'Claims', icon: FileText },
          { id: 'metrics', label: 'Metrics', icon: DollarSign }
        ];
      case 'user':
        return [
          ...common,
          { id: 'purchase', label: 'Buy Insurance', icon: Shield },
          { id: 'my-policies', label: 'My Policies', icon: FileText },
          { id: 'my-claims', label: 'My Claims', icon: FileText },
          { id: 'claim', label: 'File Claim', icon: DollarSign }
        ];
      default:
        return common;
    }
  };

  return (
    <div className="sidebar">
      <h2>AfriCOV</h2>
      <nav>
        {getNavItems().map(item => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <Icon size={20} />
              {item.label}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;