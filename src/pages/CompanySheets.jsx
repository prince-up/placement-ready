import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { companySheets } from '../data/interviewData';
import { Target, ShieldCheck, Briefcase, Zap, Rocket, ChevronRight, Check } from 'lucide-react';
import { useCohort } from '../context/CohortContext';

const CompanySheets = () => {
    const { openCohortModal } = useCohort();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{ paddingTop: isMobile ? '100px' : '140px', minHeight: '100vh', paddingBottom: '80px', background: 'var(--bg-dark)' }}>
            <div className="container" style={{ maxWidth: '1100px' }}>

                {/* Header Section */}
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: isMobile ? '3rem' : '5rem', textAlign: isMobile ? 'left' : 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'flex-start' : 'center', gap: '8px', color: 'var(--primary)', marginBottom: '1rem' }}>
                        <Briefcase size={16} />
                        <span style={{ fontWeight: '900', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Tailored Strategy</span>
                    </div>
                    <h1 style={{ fontSize: isMobile ? '2.2rem' : '3.5rem', fontWeight: '900', letterSpacing: '-0.02em', color: 'white' }}>
                        Industry Briefings
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '1rem' : '1.1rem', marginTop: '1rem', maxWidth: '750px', margin: isMobile ? '1rem 0 0' : '1rem auto 0', lineHeight: '1.6' }}>
                        Strategic blueprints mapped against the hiring mandates of leading technical organizations.
                    </p>
                </motion.div>

                {/* Grid Section */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: isMobile ? '1.5rem' : '2rem' }}>
                    {companySheets.map((sheet, index) => (
                        <motion.div
                            key={sheet.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                padding: isMobile ? '1.5rem' : '2.5rem',
                                background: 'rgba(255, 255, 255, 0.01)',
                                border: '1px solid rgba(255, 255, 255, 0.03)',
                                borderRadius: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                display: 'inline-flex', padding: '4px 10px', borderRadius: '4px',
                                background: `${sheet.color}10`, color: sheet.color,
                                fontSize: '0.65rem', fontWeight: '900', textTransform: 'uppercase',
                                letterSpacing: '0.05em', marginBottom: '1.25rem', width: 'fit-content',
                                border: `1px solid ${sheet.color}20`
                            }}>
                                {sheet.level}
                            </div>

                            <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '0.75rem', color: 'white' }}>
                                {sheet.name}
                            </h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                                {sheet.description}
                            </p>

                            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
                                <h4 style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.6 }}>
                                    <Target size={12} /> High-Yield Concepts
                                </h4>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                                    {sheet.mustKnow.map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                                            <Check size={14} color={sheet.color} />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ marginTop: 'auto', background: 'rgba(255, 255, 255, 0.02)', padding: '1.25rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.03)' }}>
                                <h4 style={{ fontSize: '0.65rem', fontWeight: '900', color: sheet.color, textTransform: 'uppercase', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <Zap size={10} fill={sheet.color} /> Execution Plan
                                </h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', fontStyle: 'italic' }}>
                                    {sheet.strategy}
                                </p>
                            </div>

                            {/* Decorative Accent */}
                            <div style={{
                                position: 'absolute', top: 0, right: 0, width: '80px', height: '80px',
                                background: `radial-gradient(circle at top right, ${sheet.color}15, transparent 70%)`,
                                zIndex: -1
                            }} />
                        </motion.div>
                    ))}
                </div>

                {/* Call To Action */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{
                    marginTop: isMobile ? '3rem' : '5rem',
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.01)',
                    padding: isMobile ? '2.5rem 1.5rem' : '4rem 2rem',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.03)',
                }}>
                    <h3 style={{ fontSize: isMobile ? '1.25rem' : '1.75rem', fontWeight: '900', marginBottom: '1rem', color: 'white' }}>
                        Ready for a comprehensive drills?
                    </h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '0.95rem' }}>
                        Unlock expert-curated roadmaps and personalized guidance in our upcoming tech cohorts.
                    </p>
                    <button onClick={openCohortModal} style={{
                        background: 'var(--primary)',
                        color: 'white',
                        padding: '12px 32px',
                        borderRadius: '8px',
                        border: 'none',
                        fontWeight: '900',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        APPLY FOR COHORT <ChevronRight size={18} />
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default CompanySheets;
