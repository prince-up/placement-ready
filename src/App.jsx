import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SubjectDetail from './pages/SubjectDetail';
import Library from './pages/Library';
import InterviewVault from './pages/InterviewVault';
import CompanySheets from './pages/CompanySheets';
import BuyPremium from './pages/BuyPremium';
import Auth from './pages/Auth';
import Footer from './components/Footer';
import { CohortProvider, useCohort } from './context/CohortContext';
import { ThemeProvider } from './context/ThemeContext';
import CohortModal from './components/CohortModal';
import { AuthProvider } from './context/AuthContext';

import GlobalSearch from './components/GlobalSearch';
import NotFound from './pages/NotFound';


const AppContent = () => {
  const { isCohortModalOpen, closeCohortModal } = useCohort();

  return (
    <div className="app-root">
      <GlobalSearch />
      {/* Background System */}
      <div className="bg-mesh" />


      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subject/:id" element={<SubjectDetail />} />
          <Route path="/library" element={<Library />} />
          <Route path="/interview-vault" element={<InterviewVault />} />
          <Route path="/company-sheets" element={<CompanySheets />} />
          <Route path="/buy-premium" element={<BuyPremium />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
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
    <ThemeProvider>
      <AuthProvider>
        <CohortProvider>
          <Router>
            <AppContent />
          </Router>
        </CohortProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
