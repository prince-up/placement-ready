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
        <main style={{ paddingBottom: '100px', background: 'var(--bg-dark)' }}>
            <Hero />

            {/* Professional Alert Banner */}
            <div className="container" style={{ position: 'relative', zIndex: 30, marginTop: '-40px' }}>
                <div className="glass-card" style={{
                    padding: isMobile ? '12px 16px' : '12px 32px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: isMobile ? '10px' : '20px',
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    borderRadius: '12px',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <div className="badge" style={{ background: 'var(--primary)', color: 'white', padding: '4px 10px' }}>Notice</div>
                    <div style={{ fontSize: isMobile ? '0.8rem' : '0.9rem', fontWeight: '700', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Bell size={14} /> TCS NQT Mock Test series is now active. Start practicing today!
                    </div>
                </div>
            </div>

            {/* Academic Stats Section */}
            <section className="reveal" style={{ marginTop: '80px' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                        gap: '20px'
                    }}>
                        {[
                            { label: 'Units Complete', value: '140+', icon: BookOpen, color: 'var(--primary)', desc: 'Comprehensive syllabus coverage' },
                            { label: 'Active Learners', value: '1,200+', icon: Target, color: 'var(--secondary)', desc: 'Growing community of peers' },
                            { label: 'Interview Hits', value: '85%', icon: Trophy, color: '#facc15', desc: 'Predictive question accuracy' }
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="glass-card"
                                style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '20px', background: 'rgba(255,255,255,0.01)', borderRadius: '14px' }}
                            >
                                <div style={{
                                    width: '50px', height: '50px', background: 'rgba(255,255,255,0.03)',
                                    borderRadius: '10px', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', color: stat.color, border: '1px solid rgba(255,255,255,0.05)'
                                }}>
                                    <stat.icon size={22} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: '900', color: 'white' }}>{stat.value}</div>
                                    <div style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum Explorer */}
            <section className="section reveal" id="subjects">
                <div className="container">
                    <div style={{
                        marginBottom: isMobile ? '2.5rem' : '4rem',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        paddingBottom: '2.5rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)', fontWeight: '900', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>
                            <Sparkles size={14} /> Placement Curriculum 2026
                        </div>
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
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(360px, 1fr))',
                        gap: isMobile ? '16px' : '24px'
                    }}>
                        {subjects.map((sub, index) => (
                            <SubjectCard key={sub.id} subject={sub} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Simple Performance-First Footer CTA */}
            <section className="reveal" style={{ marginTop: '4rem' }}>
                <div className="container">
                    <div className="glass-card" style={{
                        padding: isMobile ? '3rem 2rem' : '5rem 4rem',
                        textAlign: 'center',
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.02), transparent)',
                        borderRadius: '24px'
                    }}>
                        <h3 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: '900', marginBottom: '1rem', color: 'white' }}>Final Assessment Simulation</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                            Simulate real engineering interview rounds with our updated assessment engine.
                        </p>
                        <button className="btn-primary" style={{ padding: '16px 40px', borderRadius: '12px' }}>
                            Launch Sandbox <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
