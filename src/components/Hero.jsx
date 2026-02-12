import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, Cpu, Terminal } from 'lucide-react';
import { useCohort } from '../context/CohortContext';

const Hero = () => {
    const { openCohortModal } = useCohort();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const quickLinks = [
        { icon: BookOpen, label: 'Operating Systems', count: '45 Topics', href: '#subjects' },
        { icon: Brain, label: 'DBMS', count: '38 Topics', href: '#subjects' },
        { icon: Cpu, label: 'Networking', count: '32 Topics', href: '#subjects' },
        { icon: Terminal, label: 'System Design', count: '25 Topics', href: '#subjects' }
    ];

    return (
        <section style={{
            paddingTop: isMobile ? '100px' : '140px',
            paddingBottom: isMobile ? '60px' : '80px',
            position: 'relative',
            background: 'radial-gradient(circle at 50% -20%, rgba(16, 185, 129, 0.05), transparent 70%)'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Quick Access Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
                        gap: isMobile ? '12px' : '16px'
                    }}>
                        {quickLinks.map((link, idx) => (
                            <motion.a
                                key={idx}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                style={{
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-glass)',
                                    borderRadius: '12px',
                                    padding: isMobile ? '1rem' : '1.25rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px',
                                    textDecoration: 'none',
                                    transition: 'var(--transition)',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.borderColor = 'var(--primary)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'var(--border-glass)';
                                }}
                            >
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    background: 'rgba(16, 185, 129, 0.1)',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--primary)'
                                }}>
                                    <link.icon size={20} />
                                </div>
                                <div>
                                    <div style={{
                                        fontSize: '0.9rem',
                                        fontWeight: '800',
                                        color: 'var(--text-main)',
                                        marginBottom: '2px'
                                    }}>
                                        {link.label}
                                    </div>
                                    <div style={{
                                        fontSize: '0.7rem',
                                        fontWeight: '700',
                                        color: 'var(--text-muted)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {link.count}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
