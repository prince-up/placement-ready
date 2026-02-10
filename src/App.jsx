import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SubjectDetail from './pages/SubjectDetail';
import Library from './pages/Library';
import InterviewVault from './pages/InterviewVault';
import CompanySheets from './pages/CompanySheets';
import Footer from './components/Footer';
import { CohortProvider, useCohort } from './context/CohortContext';
import CohortModal from './components/CohortModal';

const AppContent = () => {
  const { isCohortModalOpen, closeCohortModal } = useCohort();
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-root">
      {/* Background System */}
      <div className="bg-mesh" />

      {/* Advanced Interactive Cursor */}
      {window.innerWidth > 768 && (
        <>
          <div
            className="custom-cursor"
            style={{
              transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`
            }}
          />
          <div
            className="custom-cursor-follower"
            style={{
              transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`
            }}
          />
        </>
      )}

      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subject/:id" element={<SubjectDetail />} />
          <Route path="/library" element={<Library />} />
          <Route path="/interview-vault" element={<InterviewVault />} />
          <Route path="/company-sheets" element={<CompanySheets />} />
        </Routes>
      </main>
      <Footer />
      <CohortModal isOpen={isCohortModalOpen} onClose={closeCohortModal} />
    </div>
  );
};

function App() {
  useEffect(() => {
    document.title = "Syllablink - Core Engineering Prep";
  }, []);

  return (
    <CohortProvider>
      <Router>
        <AppContent />
      </Router>
    </CohortProvider>
  );
}

export default App;
