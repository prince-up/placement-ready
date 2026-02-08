import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, BookOpen, CheckCircle } from 'lucide-react';

const Hero = () => {
    return (
        <div className="section" style={{
            paddingTop: '180px',
            paddingBottom: '120px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Mesh Effect */}
            <div className="bg-mesh"></div>

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        background: 'rgba(14, 165, 233, 0.08)',
                        padding: '10px 20px',
                        borderRadius: '100px',
                        color: 'var(--primary)',
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        marginBottom: '32px',
                        border: '1px solid rgba(14, 165, 233, 0.15)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                    }}>
                        <Rocket size={16} />
                        <span>The Ultimate Revision Hub</span>
                    </div>

                    <h1 style={{
                        fontSize: '5rem',
                        marginBottom: '1.5rem',
                        lineHeight: '1',
                        letterSpacing: '-0.04em'
                    }}>
                        Everything you need <br />
                        <span className="glow-text">to get Placed.</span>
                    </h1>

                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '1.25rem',
                        maxWidth: '800px',
                        margin: '0 auto 48px',
                        lineHeight: '1.6',
                        fontFamily: 'var(--font-body)'
                    }}>
                        Master Computer Science fundamentals with structured concepts,
                        hand-picked practice questions, and expert revision notes.
                        Designed by engineers, for future engineers.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem' }}>
                        {[
                            { label: 'Core Concepts', icon: BookOpen },
                            { label: 'MCQ Practice', icon: CheckCircle },
                            { label: 'Interview Prep', icon: Rocket }
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-main)' }}>
                                <div style={{
                                    padding: '6px',
                                    borderRadius: '50%',
                                    background: 'rgba(16, 185, 129, 0.1)',
                                    display: 'flex'
                                }}>
                                    <CheckCircle size={18} color="var(--success)" />
                                </div>
                                <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
