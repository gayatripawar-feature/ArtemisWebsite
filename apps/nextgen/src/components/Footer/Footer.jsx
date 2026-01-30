import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--neutral-charcoal)',
      color: 'var(--text-white)',
      padding: '40px',
      textAlign: 'center',
      marginTop: '60px',
    }}>
      <p>&copy; 2026 Artemis NextGen. All rights reserved.</p>
      <p style={{ marginTop: '10px', fontSize: '12px', opacity: 0.8 }}>
        Next Generation Solutions Platform
      </p>
    </footer>
  );
};

export default Footer;
