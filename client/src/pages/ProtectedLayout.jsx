import React from 'react';
import Sidebar from '../components/Sidebar';

export default function ProtectedLayout({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
       <div style={{ flex: 1, padding: '20px' }}>{children}</div>
    </div>
  );
}
