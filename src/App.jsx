import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
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
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subject/:id" element={<SubjectDetail />} />
        <Route path="/library" element={<Library />} />
        <Route path="/interview-vault" element={<InterviewVault />} />
        <Route path="/company-sheets" element={<CompanySheets />} />
      </Routes>
      <Footer />
      <CohortModal isOpen={isCohortModalOpen} onClose={closeCohortModal} />
    </>
  );
};

function App() {
  return (
    <CohortProvider>
      <Router>
        <AppContent />
      </Router>
    </CohortProvider>
  );
}

export default App;
