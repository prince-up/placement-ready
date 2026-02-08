import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, Github, Search, LayoutDashboard, Bookmark, Settings, RotateCcw, UserCheck, Briefcase, Zap } from 'lucide-react';
import { resetData } from '../data/dataManager';
import { useCohort } from '../context/CohortContext';

const Navbar = () => {
    const { openCohortModal } = useCohort();
    const [showSettings, setShowSettings] = useState(false);
    const navigate = useNavigate();

    const handleReset = () => {
        if (window.confirm('This will erase ALL your custom notes, added MCQs, and marked important items. Are you sure?')) {
            resetData();
            window.location.reload(); // Refresh to clear all app state
        }
    };

    return (
        <nav style={{
            padding: '1rem 0',
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 1000,
            background: 'rgba(5, 6, 10, 0.7)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-glass)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        padding: '10px',
                        borderRadius: '12px',
                        display: 'flex',
                        boxShadow: '0 8px 24px rgba(14, 165, 233, 0.2)'
                    }}>
                        <GraduationCap size={22} color="white" />
                    </div>
                    <span style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
                        Placement<span className="glow-text">Ready</span>
                    </span>
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: 'var(--text-main)', fontWeight: '600', fontSize: '0.85rem' }}>
                            <LayoutDashboard size={16} /> Dashboard
                        </Link>
                        <Link to="/library" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: 'var(--text-muted)', fontWeight: '500', fontSize: '0.85rem' }}>
                            <Bookmark size={16} /> Library
                        </Link>
                        <Link to="/interview-vault" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: 'var(--text-muted)', fontWeight: '500', fontSize: '0.85rem' }}>
                            <UserCheck size={16} /> HR Vault
                        </Link>
                        <Link to="/company-sheets" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: 'var(--text-muted)', fontWeight: '500', fontSize: '0.85rem' }}>
                            <Briefcase size={16} /> Cheat Sheets
                        </Link>
                    </div>

                    <div style={{ width: '1px', height: '24px', background: 'var(--border-glass)' }}></div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                        <button
                            onClick={openCohortModal}
                            style={{
                                background: 'rgba(14, 165, 233, 0.1)',
                                border: '1px solid rgba(14, 165, 233, 0.2)',
                                color: 'var(--primary)',
                                padding: '8px 16px',
                                borderRadius: '10px',
                                fontSize: '0.8rem',
                                fontWeight: '800',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                        >
                            <Zap size={14} fill="currentColor" /> Join Cohort
                        </button>
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input
                                type="text"
                                placeholder="Quick search..."
                                style={{
                                    background: 'var(--bg-glass)',
                                    border: '1px solid var(--border-glass)',
                                    color: 'var(--text-main)',
                                    padding: '10px 12px 10px 36px',
                                    borderRadius: '10px',
                                    fontSize: '0.85rem',
                                    width: '180px',
                                    outline: 'none',
                                    transition: 'var(--transition)'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--border-glass)'}
                            />
                        </div>

                        <div style={{ position: 'relative' }}>
                            <button
                                onClick={() => setShowSettings(!showSettings)}
                                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex' }}
                            >
                                <Settings size={20} />
                            </button>

                            {showSettings && (
                                <div style={{
                                    position: 'absolute',
                                    top: '100%',
                                    right: 0,
                                    marginTop: '10px',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-glass)',
                                    borderRadius: '12px',
                                    padding: '8px',
                                    width: '200px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                                    zIndex: 1100
                                }}>
                                    <button
                                        onClick={handleReset}
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            background: 'none',
                                            border: 'none',
                                            color: 'var(--error)',
                                            fontSize: '0.85rem',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            borderRadius: '8px',
                                            transition: 'var(--transition)'
                                        }}
                                        onMouseOver={(e) => e.target.style.background = 'rgba(239, 68, 68, 0.05)'}
                                        onMouseOut={(e) => e.target.style.background = 'none'}
                                    >
                                        <RotateCcw size={14} /> Reset All Data
                                    </button>
                                </div>
                            )}
                        </div>

                        <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                            <Github size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
