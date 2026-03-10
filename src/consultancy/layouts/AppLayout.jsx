
import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ConnectWidget from '../components/ConnectWidget/ConnectWidget';

const AppLayout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <main style={{ minHeight: '100vh', paddingTop: '80px', background: 'var(--gradient-background)' }}>
        {children}
      </main>
      <Footer />
      <ConnectWidget />
    </div>
  );
};

export default AppLayout;
