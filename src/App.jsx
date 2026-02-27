import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Import each sub-app
import MainApp from './main-app/App.jsx';
import ConsultancyApp from './consultancy/App.jsx';
import NextGenApp from './nextgen/App.jsx';

/**
 * Root Application Component
 *
 * This component serves as the main entry point for the unified Artemis Web platform.
 * It handles routing to each sub-app.
 *
 * Routing Structure:
 * - / → Main App (with its own internal routing)
 * - /consultancy/* → Consultancy App (with its own internal routing)
 * - /nextgen/* → NextGen App (with its own internal routing)
 *
 */

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Update document title based on current route
    if (location.pathname.startsWith('/consultancy')) {
      document.title = 'Artemis Infratech Consultancy';
    } else if (location.pathname.startsWith('/nextgen')) {
      document.title = 'Artemis NextGen';
    } else {
      document.title = 'Artemis';
    }
  }, [location.pathname]);

  return (
    <Routes>
      {/* Main App at root */}
      <Route path="/*" element={<MainApp />} />

      {/* Consultancy App - nested routes */}
      <Route path="/consultancy/*" element={<ConsultancyApp />} />

      {/* NextGen App - nested routes */}
      <Route path="/nextgen/*" element={<NextGenApp />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
