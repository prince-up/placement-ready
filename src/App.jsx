import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SubjectDetail from './pages/SubjectDetail';
import Library from './pages/Library';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subject/:id" element={<SubjectDetail />} />
        <Route path="/library" element={<Library />} />
      </Routes>

      {/* Premium Footer */}
      <footer style={{
        padding: '100px 0 60px',
        borderTop: '1px solid var(--border-glass)',
        marginTop: '120px',
        background: 'rgba(5, 6, 10, 0.5)',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '60px', textAlign: 'left' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  padding: '8px',
                  borderRadius: '10px',
                  display: 'flex'
                }}>
                  <GraduationCap size={20} color="white" />
                </div>
                <span style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
                  Placement<span className="glow-text">Ready</span>
                </span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Empowering the next generation of software engineers with the tools and knowledge to ace their technical interviews.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Modules</h4>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {['Operating Systems', 'Database Management', 'OOPs Concepts', 'Computer Networks'].map(item => (
                  <a key={item} href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'var(--transition)' }}>{item}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>Connect</h4>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {['GitHub', 'LinkedIn', 'Documentation'].map(item => (
                  <a key={item} href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', transition: 'var(--transition)' }}>{item}</a>
                ))}
              </div>
            </div>
          </div>
          <div style={{ paddingTop: '40px', borderTop: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            <p>© 2026 PlacementReady. All rights reserved.</p>
            <p>Built with ❤️ for Engineering Students</p>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
