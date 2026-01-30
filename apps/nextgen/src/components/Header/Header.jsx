import React from 'react';

const Header = () => {
  return (
    <header style={{
      background: 'var(--bg-secondary)',
      padding: '20px 40px',
      boxShadow: 'var(--shadow-light)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: 'var(--primary-maroon)', fontSize: '24px', fontWeight: '700' }}>
          NextGen
        </h1>
        <nav style={{ display: 'flex', gap: '30px' }}>
          <a href="/" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500' }}>Home</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
