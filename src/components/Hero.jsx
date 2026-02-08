import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, ShieldCheck, Zap, Star } from 'lucide-react';
import { useCohort } from '../context/CohortContext';

const Hero = () => {
    const { openCohortModal } = useCohort();
    return (
        <section style={{
            paddingTop: '180px',
            paddingBottom: '100px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>

                    {/* Floating Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '8px 20px',
                            background: 'rgba(14, 165, 233, 0.08)',
                            borderRadius: '100px',
                            border: '1px solid rgba(14, 165, 233, 0.15)',
                            color: 'var(--primary)',
                            marginBottom: '2.5rem',
                            fontSize: '0.85rem',
                            fontWeight: '700',
                            letterSpacing: '0.02em'
                        }}
                    >
                        <span style={{
                            display: 'flex',
                            padding: '4px',
                            background: 'var(--primary)',
                            borderRadius: '50%',
                            color: 'white'
                        }}>
                            <Zap size={10} fill="currentColor" />
                        </span>
                        Trusted by 10,000+ CSE Students
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                            fontWeight: '900',
                            lineHeight: '1.05',
                            letterSpacing: '-0.04em',
                            marginBottom: '2rem'
                        }}
                    >
                        Master Your <span className="glow-text">Placements</span> <br />
                        With Precision.
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            color: 'var(--text-muted)',
                            fontSize: '1.35rem',
                            lineHeight: '1.6',
                            marginBottom: '3.5rem',
                            maxWidth: '700px',
                            margin: '0 auto 3.5rem'
                        }}
                    >
                        An all-in-one technical ecosystem designed to help you dominate core CS subjects and behavioral rounds with confidence.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <a href="#subjects" className="btn-primary" style={{ padding: '18px 36px', fontSize: '1.05rem' }}>
                            Start Preparation <ArrowRight size={20} />
                        </a>
                        <button onClick={openCohortModal} className="btn-secondary" style={{ padding: '18px 36px', fontSize: '1.05rem', background: 'rgba(255,255,255,0.03)' }}>
                            Join Prep Cohort
                        </button>
                    </motion.div>

                    {/* Feature Pills */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '40px',
                            marginTop: '5rem',
                            flexWrap: 'wrap',
                            opacity: 0.6
                        }}
                    >
                        {[
                            { icon: ShieldCheck, text: 'Verified Labs' },
                            { icon: Zap, text: 'Real-time Analytics' },
                            { icon: Star, text: 'Curated Content' }
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: '600' }}>
                                <item.icon size={18} color="var(--primary)" />
                                {item.text}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '1200px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(14, 165, 233, 0.05) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />
        </section>
    );
};

export default Hero;
