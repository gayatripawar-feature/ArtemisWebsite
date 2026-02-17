import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { routeConfig, hiddenRoutes } from './routes';
import './assets/styles/index.css';
import './assets/styles/global.css';
import './assets/styles/animations.css';

function App() {
  return (
    <BrowserRouter>
        <Header />

      <main style={{ minHeight: '100vh', paddingTop: '60px', background: 'var(--gradient-background)' }}>
          <Routes>
            {routeConfig.map(route => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
            {hiddenRoutes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
