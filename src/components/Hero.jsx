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

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                            fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                            fontWeight: '900',
                            lineHeight: '1.05',
                            marginBottom: '2.5rem',
                            letterSpacing: '-0.04em',
                            fontFamily: 'var(--font-heading)'
                        }}
                    >
                        Master Your <br />
                        <span className="glow-text">Placement Ready</span> <br />
                        Ecosystem.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-muted)',
                            marginBottom: '4rem',
                            maxWidth: '700px',
                            margin: '0 auto 4rem',
                            lineHeight: '1.8'
                        }}
                    >
                        The ultimate hub for CS core subjects, technical aptitude, and industry-standard interview prep. Built for engineers, by engineers.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
                    >
                        <a href="#subjects" className="btn-primary" style={{ padding: '20px 40px', fontSize: '1.1rem' }}>
                            Start Preparation <ArrowRight size={22} />
                        </a>
                        <button
                            onClick={openCohortModal}
                            className="btn-secondary"
                            style={{ padding: '20px 40px', fontSize: '1.1rem' }}
                        >
                            <Star size={20} className="glow-text" fill="currentColor" /> Join Prep Cohort
                        </button>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="animate-float" style={{ position: 'absolute', top: '10%', left: '-5%', opacity: 0.15, filter: 'blur(2px)' }}>
                    <div style={{ width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, var(--primary) 0%, transparent 60%)' }}></div>
                </div>
                <div className="animate-float" style={{ position: 'absolute', bottom: '10%', right: '-5%', opacity: 0.15, filter: 'blur(2px)', animationDelay: '-3s' }}>
                    <div style={{ width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, var(--secondary) 0%, transparent 60%)' }}></div>
                </div>
            </div>
        </section >
    );
};

export default Hero;
