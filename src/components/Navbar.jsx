import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GraduationCap, Github, Search, LayoutDashboard, Bookmark, Settings, RotateCcw, UserCheck, Briefcase, Zap, Menu, X, BookOpen } from 'lucide-react';
import { resetData } from '../data/dataManager';
import { useCohort } from '../context/CohortContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { openCohortModal } = useCohort();
    const [showSettings, setShowSettings] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleReset = () => {
        if (window.confirm('Delete all custom activity? This cannot be undone.')) {
            resetData();
            window.location.reload();
        }
    };

    const navLinks = [
        { path: '/', label: 'Overview', icon: LayoutDashboard },
        { path: '/library', label: 'Vault', icon: Bookmark },
        { path: '/interview-vault', label: 'HR Archive', icon: UserCheck },
        { path: '/company-sheets', label: 'Resources', icon: Briefcase },
    ];

    return (
        <nav style={{
            height: '80px',
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 1000,
            background: isScrolled ? 'rgba(10, 11, 15, 0.9)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(20px)' : 'none',
            borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{
                        background: 'var(--primary)',
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        boxShadow: '0 0 15px rgba(16, 185, 129, 0.4)'
                    }}>
                        <Zap size={18} fill="white" />
                    </div>
                    <span style={{ fontSize: '1.25rem', fontWeight: '950', letterSpacing: '-0.04em', color: 'white' }}>
                        Sylla<span style={{ color: 'var(--primary)' }}>blink</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                {!isMobile && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            {navLinks.map(link => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    style={{
                                        textDecoration: 'none',
                                        color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-muted)',
                                        fontWeight: '800',
                                        fontSize: '0.8rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        transition: '0.2s'
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <div style={{ width: '1px', height: '20px', background: 'rgba(255, 255, 255, 0.1)' }}></div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <button
                                onClick={openCohortModal}
                                style={{
                                    background: 'rgba(16, 185, 129, 0.1)',
                                    border: '1px solid rgba(16, 185, 129, 0.2)',
                                    color: 'var(--primary)',
                                    padding: '8px 16px',
                                    borderRadius: '8px',
                                    fontSize: '0.75rem',
                                    fontWeight: '900',
                                    cursor: 'pointer'
                                }}
                            >
                                START COHORT
                            </button>
                            <button onClick={handleReset} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.2)', cursor: 'pointer' }}>
                                <RotateCcw size={18} />
                            </button>
                            <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.4)' }}>
                                <Github size={20} />
                            </a>
                        </div>
                    </div>
                )}

                {/* Mobile Menu Trigger */}
                {isMobile && (
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{ background: 'none', border: 'none', color: 'white', padding: '8px' }}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                )}
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isMobile && isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '80px',
                            left: 0,
                            right: 0,
                            background: '#0a0b0f',
                            padding: '2rem 1.5rem',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            zIndex: 999
                        }}
                    >
                        {navLinks.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                    fontWeight: '800',
                                    fontSize: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px'
                                }}
                            >
                                <link.icon size={18} color="var(--primary)" /> {link.label}
                            </Link>
                        ))}
                        <button
                            onClick={() => { openCohortModal(); setIsMobileMenuOpen(false); }}
                            style={{
                                background: 'var(--primary)',
                                color: 'white',
                                padding: '14px',
                                borderRadius: '10px',
                                border: 'none',
                                fontWeight: '900',
                                width: '100%'
                            }}
                        >
                            ENROLL IN COHORT
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
