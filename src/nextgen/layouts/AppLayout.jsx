import React from 'react';

const AppLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <main style={{ flex: 1, paddingTop: '80px' }}>
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
