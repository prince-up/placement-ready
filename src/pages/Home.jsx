import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import SubjectCard from '../components/SubjectCard';
import { getData } from '../data/dataManager';
import { BookMarked, Target, Zap, ChevronRight, Bell, Sparkles, Trophy, BookOpen, Clock } from 'lucide-react';

const Home = () => {
    const [subjects, setSubjects] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        setSubjects(getData());

        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Unobserve after showing
                }
            });
        }, { threshold: 0.05 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <main style={{ paddingBottom: '60px', background: 'var(--bg-dark)', minHeight: '100vh' }}>
            <Hero />

            {/* Professional Alert Banner */}
            <div className="container" style={{ position: 'relative', zIndex: 30, marginTop: '-50px', marginBottom: '80px' }}>
                <div className="glass-card" style={{
                    padding: isMobile ? '14px 18px' : '16px 32px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: isMobile ? '10px' : '20px',
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    borderRadius: '12px',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <div className="badge" style={{ background: 'var(--primary)', color: 'white', padding: '6px 12px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: '900' }}>Notice</div>
                    <div style={{ fontSize: isMobile ? '0.85rem' : '0.95rem', fontWeight: '700', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Bell size={16} /> TCS NQT Mock Test series is now active. Start practicing today!
                    </div>
                </div>
            </div>

            {/* Academic Stats Section */}
            <section className="reveal" style={{ marginBottom: '100px' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                        gap: isMobile ? '16px' : '24px'
                    }}>
                        {[
                            { label: 'Units Complete', value: '140+', icon: BookOpen, color: 'var(--primary)' },
                            { label: 'Active Learners', value: '1,200+', icon: Target, color: '#0ea5e9' },
                            { label: 'Interview Hits', value: '85%', icon: Trophy, color: '#f59e0b' }
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="glass-card"
                                style={{
                                    padding: isMobile ? '1.25rem' : '1.75rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    background: 'var(--bg-card)',
                                    borderRadius: '16px',
                                    border: '1px solid var(--border-glass)',
                                    transition: 'transform 0.2s ease',
                                    cursor: 'default'
                                }}
                            >
                                <div style={{
                                    width: isMobile ? '48px' : '56px',
                                    height: isMobile ? '48px' : '56px',
                                    background: `${stat.color}15`,
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: stat.color,
                                    flexShrink: 0
                                }}>
                                    <stat.icon size={isMobile ? 20 : 24} />
                                </div>
                                <div>
                                    <div style={{ fontSize: isMobile ? '1.5rem' : '1.75rem', fontWeight: '900', color: 'var(--text-main)', marginBottom: '2px' }}>{stat.value}</div>
                                    <div style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', opacity: 0.8 }}>{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum Explorer */}
            <section className="section reveal" id="subjects" style={{ marginBottom: '80px' }}>
                <div className="container">
                    <div style={{
                        marginBottom: isMobile ? '3rem' : '4rem',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: 'var(--primary)',
                            fontWeight: '900',
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            marginBottom: '1.5rem',
                            background: 'rgba(16, 185, 129, 0.1)',
                            padding: '8px 16px',
                            borderRadius: '8px'
                        }}>
                            <Sparkles size={14} /> Placement Curriculum 2026
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                                fontSize: isMobile ? '2.2rem' : '3.5rem',
                                fontWeight: '950',
                                lineHeight: '1.1',
                                marginBottom: '1rem',
                                letterSpacing: '-0.03em',
                                color: 'var(--text-main)'
                            }}
                        >
                            Last Minute{' '}
                            <span style={{ color: 'var(--primary)' }}>Syllabus Sync.</span>
                        </motion.h2>
                        <p style={{
                            fontSize: isMobile ? '0.95rem' : '1.1rem',
                            color: 'var(--text-muted)',
                            maxWidth: '600px',
                            margin: '0 auto',
                            lineHeight: '1.6'
                        }}>
                            Comprehensive coverage of core engineering subjects for technical interviews
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(340px, 1fr))',
                        gap: isMobile ? '20px' : '28px'
                    }}>
                        {subjects.map((sub, index) => (
                            <SubjectCard key={sub.id} subject={sub} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Simple Performance-First Footer CTA */}
            <section className="reveal">
                <div className="container">
                    <div className="glass-card" style={{
                        padding: isMobile ? '3rem 2rem' : '4rem 3rem',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05), transparent)',
                        borderRadius: '20px',
                        border: '1px solid var(--border-glass)'
                    }}>
                        <h3 style={{
                            fontSize: isMobile ? '1.6rem' : '2.2rem',
                            fontWeight: '900',
                            marginBottom: '1rem',
                            color: 'var(--text-main)'
                        }}>
                            Final Assessment Simulation
                        </h3>
                        <p style={{
                            color: 'var(--text-muted)',
                            fontSize: isMobile ? '0.95rem' : '1.05rem',
                            maxWidth: '560px',
                            margin: '0 auto 2rem',
                            lineHeight: '1.6'
                        }}>
                            Simulate real engineering interview rounds with our updated assessment engine.
                        </p>
                        <button className="btn-primary" style={{
                            padding: isMobile ? '14px 32px' : '16px 40px',
                            borderRadius: '12px',
                            fontSize: '1rem',
                            fontWeight: '800',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            Launch Sandbox <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
