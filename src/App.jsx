import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SubjectDetail from './pages/SubjectDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subject/:id" element={<SubjectDetail />} />
      </Routes>

      {/* Footer */}
      <footer style={{ padding: '80px 0', borderTop: '1px solid var(--border-glass)', marginTop: '80px', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-muted)' }}>
            © 2026 PlacementReady. Built for the high-achievers.
          </p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
