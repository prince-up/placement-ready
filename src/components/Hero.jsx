import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, BookOpen, CheckCircle } from 'lucide-react';

const Hero = () => {
    return (
        <div className="section" style={{
            paddingTop: '160px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Decor */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }}></div>
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(157, 80, 187, 0.05) 0%, transparent 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }}></div>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(0, 212, 255, 0.1)',
                        padding: '8px 16px',
                        borderRadius: '100px',
                        color: 'var(--primary)',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginBottom: '24px',
                        border: '1px solid rgba(0, 212, 255, 0.2)'
                    }}>
                        <Rocket size={16} />
                        <span>Accelerate Your Placement Prep</span>
                    </div>

                    <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Master Core Subjects <br />
                        <span className="glow-text">In One Place.</span>
                    </h1>

                    <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                        A comprehensive revision portal for Engineering students.
                        Concept summaries, hand-picked MCQs, and interview-ready notes
                        for OS, DBMS, CN, and more.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <CheckCircle size={20} color="var(--success)" />
                            <span style={{ fontWeight: '500' }}>Concepts</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <CheckCircle size={20} color="var(--success)" />
                            <span style={{ fontWeight: '500' }}>MCQ Practice</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <CheckCircle size={20} color="var(--success)" />
                            <span style={{ fontWeight: '500' }}>Quick Revision</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
