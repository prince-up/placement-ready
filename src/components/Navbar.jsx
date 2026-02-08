import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Github } from 'lucide-react';

const Navbar = () => {
    return (
        <nav style={{
            padding: '1.5rem 0',
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 1000,
            background: 'rgba(10, 11, 16, 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--border-glass)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}>
                    <div style={{
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        padding: '8px',
                        borderRadius: '10px',
                        display: 'flex'
                    }}>
                        <GraduationCap size={24} color="white" />
                    </div>
                    <span style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--font-heading)' }}>
                        Placement<span className="glow-text">Ready</span>
                    </span>
                </Link>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontWeight: '500' }}>Home</Link>
                    <a href="#" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontWeight: '500' }}>Resources</a>
                    <div style={{ width: '1px', height: '24px', background: 'var(--border-glass)' }}></div>
                    <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-main)' }}>
                        <Github size={20} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
