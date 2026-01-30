/**
 * AppLayout Component
 * Wraps the entire application with Header and Footer
 * This layout component ensures consistent structure across all pages
 */
import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const AppLayout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <main style={{ minHeight: '100vh', paddingTop: '80px', background: 'var(--gradient-background)' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
