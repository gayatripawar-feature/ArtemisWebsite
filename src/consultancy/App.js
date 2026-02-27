
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import { routeConfig } from './routes';
import './assets/styles/index.css';
import './assets/styles/global.css';
import './assets/styles/animations.css';

function App() {
  return (
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
  );
}

export default App;
