import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GraduationCap, Github, Search, LayoutDashboard, Bookmark, Settings, RotateCcw, UserCheck, Briefcase, Zap, Menu, X, BookOpen, Sun, Moon, User } from 'lucide-react';
import { resetData } from '../data/dataManager';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();
    const { user, signOut } = useAuth();
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

    const handleBuyPremium = () => {
        navigate('/buy-premium');
    };

    const handleAuth = () => {
        navigate('/auth');
    };

    const handleSignOut = async () => {
        await signOut();
        navigate('/');
    };

    return (
        <nav style={{
            height: '80px',
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 1000,
            background: isScrolled ? 'var(--bg-dark)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(20px)' : 'none',
            borderBottom: isScrolled ? '1px solid var(--border-glass)' : '1px solid transparent',
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
                    <span style={{ fontSize: '1.25rem', fontWeight: '950', letterSpacing: '-0.04em', color: 'var(--text-main)' }}>
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

                        <div style={{ width: '1px', height: '20px', background: 'rgba(0, 0, 0, 0.1)' }}></div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <button
                                onClick={handleBuyPremium}
                                style={{
                                    background: 'var(--primary)',
                                    border: '1px solid rgba(16, 185, 129, 0.2)',
                                    color: 'white',
                                    padding: '8px 16px',
                                    borderRadius: '8px',
                                    fontSize: '0.75rem',
                                    fontWeight: '900',
                                    cursor: 'pointer',
                                    transition: 'var(--transition)'
                                }}
                            >
                                BUY PREMIUM
                            </button>
                            <button
                                onClick={handleAuth}
                                title={user?.email || 'Profile'}
                                style={{
                                    width: '34px',
                                    height: '34px',
                                    borderRadius: '50%',
                                    border: '1px solid var(--border-glass)',
                                    background: user ? 'rgba(16, 185, 129, 0.12)' : 'rgba(0,0,0,0.04)',
                                    color: user ? 'var(--primary)' : 'var(--text-muted)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: '900',
                                    fontSize: '0.8rem',
                                    cursor: 'pointer'
                                }}
                            >
                                {user?.email ? user.email.charAt(0).toUpperCase() : <User size={16} />}
                            </button>
                            {user ? (
                                <button
                                    onClick={handleSignOut}
                                    title={user.email || 'Account'}
                                    style={{
                                        background: 'rgba(16, 185, 129, 0.12)',
                                        border: '1px solid rgba(16, 185, 129, 0.2)',
                                        color: 'var(--primary)',
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        fontSize: '0.7rem',
                                        fontWeight: '900',
                                        cursor: 'pointer'
                                    }}
                                >
                                    LOG OUT
                                </button>
                            ) : (
                                <button
                                    onClick={handleAuth}
                                    style={{
                                        background: 'rgba(0,0,0,0.04)',
                                        border: '1px solid rgba(0,0,0,0.08)',
                                        color: 'var(--text-main)',
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        fontSize: '0.7rem',
                                        fontWeight: '900',
                                        cursor: 'pointer'
                                    }}
                                >
                                    LOGIN
                                </button>
                            )}
                            <button
                                onClick={toggleTheme}
                                style={{
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-glass)',
                                    color: 'var(--text-main)',
                                    cursor: 'pointer',
                                    padding: '8px',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'var(--transition)'
                                }}
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                            <button onClick={handleReset} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', opacity: 0.5 }}>
                                <RotateCcw size={18} />
                            </button>
                            <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', opacity: 0.6 }}>
                                <Github size={20} />
                            </a>
                        </div>
                    </div>
                )}

                {/* Mobile Menu Trigger */}
                {isMobile && (
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{ background: 'none', border: 'none', color: 'var(--text-main)', padding: '8px' }}
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
                            background: 'var(--bg-dark)',
                            backdropFilter: 'blur(20px)',
                            padding: '2rem 1.5rem',
                            borderBottom: '1px solid var(--border-glass)',
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
                                    color: 'var(--text-main)',
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
                            onClick={() => { navigate('/buy-premium'); setIsMobileMenuOpen(false); }}
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
                            BUY PREMIUM
                        </button>
                        <button
                            onClick={() => { user ? handleSignOut() : handleAuth(); setIsMobileMenuOpen(false); }}
                            style={{
                                background: user ? 'rgba(16, 185, 129, 0.12)' : 'var(--bg-card)',
                                color: user ? 'var(--primary)' : 'var(--text-main)',
                                padding: '14px',
                                borderRadius: '10px',
                                border: '1px solid var(--border-glass)',
                                fontWeight: '800'
                            }}
                        >
                            {user ? 'LOG OUT' : 'LOGIN'}
                        </button>
                        <button
                            onClick={toggleTheme}
                            style={{
                                background: 'var(--bg-card)',
                                color: 'var(--text-main)',
                                padding: '14px',
                                borderRadius: '10px',
                                border: '1px solid var(--border-glass)',
                                fontWeight: '800',
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px'
                            }}
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                            {isDark ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
