export const mockData = {
  users: [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'user' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'provider' },
    { id: 3, name: 'Admin User', email: 'admin@example.com', role: 'admin' }
  ],
  
  policies: [
    { id: 1, userId: 1, type: 'Motor', premium: 1200, status: 'Active', startDate: '2024-01-15' },
    { id: 2, userId: 1, type: 'Health', premium: 2400, status: 'Active', startDate: '2024-02-01' },
    { id: 3, userId: 1, type: 'Life', premium: 3600, status: 'Active', startDate: '2024-03-01' }
  ],
  
  claims: [
    { id: 1, policyId: 1, userId: 1, type: 'Motor', amount: 5000, status: 'Pending', date: '2024-11-01', description: 'Vehicle accident claim' },
    { id: 2, policyId: 2, userId: 1, type: 'Health', amount: 1500, status: 'Approved', date: '2024-10-15', description: 'Medical treatment' },
    { id: 3, policyId: 3, userId: 1, type: 'Life', amount: 50000, status: 'Under Review', date: '2024-11-10', description: 'Life insurance claim' }
  ],
  
  stats: {
    totalPolicies: 156,
    totalClaims: 43,
    pendingClaims: 12,
    totalPremiums: 2450000,
    claimsApproved: 28,
    claimsRejected: 3
  }
};