/**
 * App Component - Root component for Artemis Consultancy
 * Handles routing and layout wrapping
 * 
 * Architecture:
 * - BrowserRouter: Client-side routing (no basename, assumes app is at domain root)
 * - AppLayout: Wraps routes with Header and Footer
 * - Routes: Mapped from centralized route configuration
 * - Styles: Global CSS imported once here
 */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import { routeConfig } from './routes';
import './assets/styles/index.css';
import './assets/styles/global.css';
import './assets/styles/animations.css';

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          {routeConfig.map(route => (
            <Route 
              key={route.path} 
              path={route.path} 
              element={<route.component />} 
            />
          ))}
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
