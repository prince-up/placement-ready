import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, ShieldCheck, Zap, Star, Code, Terminal, Brain, Cpu, BookOpen } from 'lucide-react';
import { useCohort } from '../context/CohortContext';

const Hero = () => {
    const { openCohortModal } = useCohort();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section style={{
            paddingTop: isMobile ? '120px' : '180px',
            paddingBottom: isMobile ? '80px' : '120px',
            position: 'relative',
            background: 'radial-gradient(circle at 50% -20%, rgba(16, 185, 129, 0.05), transparent 70%)'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>

                    {/* Simple Professional Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '8px 20px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '8px',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            color: 'var(--primary)',
                            marginBottom: '2.5rem',
                            fontSize: '0.8rem',
                            fontWeight: '900',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase'
                        }}
                    >
                        <Zap size={14} fill="var(--primary)" /> Syllablink Engineering Archive
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            fontSize: isMobile ? '2.8rem' : '5.5rem',
                            fontWeight: '950',
                            lineHeight: '1.05',
                            marginBottom: '2rem',
                            letterSpacing: '-0.05em',
                            color: 'white'
                        }}
                    >
                        Last Minute <br />
                        <span style={{ color: 'var(--primary)' }}>Syllabus Sync.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        style={{
                            fontSize: isMobile ? '1.05rem' : '1.35rem',
                            color: 'var(--text-muted)',
                            marginBottom: '3.5rem',
                            maxWidth: '700px',
                            margin: '0 auto 3.5rem',
                            lineHeight: '1.6',
                            fontWeight: '500'
                        }}
                    >
                        A curated knowledge base designed for technical interview preparation,
                        covering OS, DBMS, Networking, and advanced System Architecture.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        style={{
                            display: 'flex',
                            gap: '1.5rem',
                            justifyContent: 'center',
                            flexDirection: isMobile ? 'column' : 'row',
                            alignItems: 'center'
                        }}
                    >
                        <a href="#subjects" className="btn-primary" style={{
                            padding: '16px 36px',
                            fontSize: '1rem',
                            borderRadius: '10px',
                            width: isMobile ? '100%' : 'auto'
                        }}>
                            Browse Curriculum <ArrowRight size={20} />
                        </a>
                        <button
                            onClick={openCohortModal}
                            className="btn-secondary"
                            style={{
                                padding: '16px 36px',
                                fontSize: '1rem',
                                borderRadius: '10px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                width: isMobile ? '100%' : 'auto'
                            }}
                        >
                            Learning Cohorts 2026
                        </button>
                    </motion.div>

                    {/* Trust Indicators */}
                    {!isMobile && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ delay: 0.6 }}
                            style={{
                                marginTop: '6rem',
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '3rem',
                                fontSize: '0.85rem',
                                fontWeight: '700',
                                color: 'var(--text-muted)'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <ShieldCheck size={18} /> Structured Units
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Code size={18} /> Industry Standards
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Zap size={18} /> Fast Revision
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section >
    );
};

export default Hero;
