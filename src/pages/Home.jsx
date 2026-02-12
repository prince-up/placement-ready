import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import SubjectCard from '../components/SubjectCard';
import { getData } from '../data/dataManager';
import { BookMarked, Target, Zap, ChevronRight, Bell, Sparkles, Trophy, BookOpen, Clock } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();
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
            {/* Main Title & Why Syllablink Section */}
            <section className="section reveal" style={{
                paddingTop: isMobile ? '120px' : '180px',
                paddingBottom: isMobile ? '40px' : '60px',
                marginBottom: '60px',
                background: 'radial-gradient(ellipse at 50% 0%, rgba(16, 185, 129, 0.12), transparent 60%), radial-gradient(ellipse at 100% 50%, rgba(59, 130, 246, 0.08), transparent 50%)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative Elements */}
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    right: '5%',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15), transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    pointerEvents: 'none'
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '0%',
                    width: '250px',
                    height: '250px',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(50px)',
                    pointerEvents: 'none'
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                        gap: isMobile ? '2rem' : '3.5rem',
                        alignItems: 'center'
                    }}>
                        {/* Left Div - Main Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            style={{ textAlign: isMobile ? 'center' : 'left' }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    color: 'var(--primary)',
                                    fontWeight: '900',
                                    fontSize: '0.75rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.15em',
                                    marginBottom: '2rem',
                                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.05))',
                                    padding: '10px 20px',
                                    borderRadius: '50px',
                                    border: '1px solid rgba(16, 185, 129, 0.2)',
                                    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.1)'
                                }}
                            >
                                <Sparkles size={16} style={{ animation: 'pulse 2s ease-in-out infinite' }} />
                                Syllablink Engineering Archive
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                style={{
                                    fontSize: isMobile ? '2.5rem' : '4rem',
                                    fontWeight: '950',
                                    lineHeight: '1.05',
                                    marginBottom: '1.5rem',
                                    letterSpacing: '-0.04em',
                                    color: 'var(--text-main)',
                                    textShadow: '0 2px 20px rgba(0,0,0,0.05)'
                                }}
                            >
                                Last Minute{' '}
                                <span style={{
                                    background: 'linear-gradient(135deg, var(--primary), #14b8a6)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    position: 'relative'
                                }}>
                                    Syllabus Sync.
                                </span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                style={{
                                    fontSize: isMobile ? '1rem' : '1.15rem',
                                    color: 'var(--text-muted)',
                                    lineHeight: '1.7',
                                    marginBottom: '2.5rem',
                                    fontWeight: '500'
                                }}
                            >
                                A curated knowledge base designed for technical interview preparation, covering OS, DBMS, Networking, and advanced System Architecture.
                            </motion.p>
                            <div style={{
                                display: 'flex',
                                gap: '12px',
                                flexWrap: 'wrap',
                                justifyContent: isMobile ? 'center' : 'flex-start'
                            }}>
                                <button
                                    className="btn-primary"
                                    onClick={() => document.getElementById('subjects').scrollIntoView({ behavior: 'smooth' })}
                                    style={{
                                        padding: '12px 24px',
                                        borderRadius: '10px',
                                        fontSize: '0.95rem',
                                        fontWeight: '800',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    Browse Curriculum <ChevronRight size={16} />
                                </button>
                                <button
                                    className="glass-card"
                                    style={{
                                        padding: '12px 24px',
                                        borderRadius: '10px',
                                        fontSize: '0.95rem',
                                        fontWeight: '800',
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--border-glass)',
                                        color: 'var(--text-main)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    Learning Cohorts 2026
                                </button>
                            </div>
                        </motion.div>

                        {/* Right Div - Platform Features */}
                        <div className="glass-card" style={{
                            padding: isMobile ? '1.5rem' : '2rem',
                            background: 'var(--bg-card)',
                            borderRadius: '16px',
                            border: '1px solid var(--border-glass)'
                        }}>
                            <h3 style={{
                                fontSize: isMobile ? '1.3rem' : '1.6rem',
                                fontWeight: '900',
                                color: 'var(--text-main)',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <Zap size={24} style={{ color: 'var(--primary)' }} />
                                Why Syllablink?
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    { icon: BookMarked, title: 'Structured Learning Path', desc: 'Step-by-step curriculum designed by industry experts' },
                                    { icon: Target, title: 'Interview-Focused', desc: 'Content tailored for technical placement rounds' },
                                    { icon: Clock, title: 'Last-Minute Ready', desc: 'Quick revision modules for pre-interview prep' },
                                    { icon: Trophy, title: 'Real Success Stories', desc: '85% of learners crack their dream placements' }
                                ].map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        style={{
                                            display: 'flex',
                                            gap: '12px',
                                            alignItems: 'start'
                                        }}
                                    >
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '10px',
                                            background: 'rgba(16, 185, 129, 0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <feature.icon size={20} style={{ color: 'var(--primary)' }} />
                                        </div>
                                        <div>
                                            <h4 style={{
                                                fontSize: '0.95rem',
                                                fontWeight: '800',
                                                color: 'var(--text-main)',
                                                marginBottom: '4px'
                                            }}>
                                                {feature.title}
                                            </h4>
                                            <p style={{
                                                fontSize: '0.85rem',
                                                color: 'var(--text-muted)',
                                                lineHeight: '1.4'
                                            }}>
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero Component - Quick Access Cards */}
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

            {/* Subject Cards Section */}
            <section className="section reveal" id="subjects" style={{ marginBottom: '80px' }}>
                <div className="container">
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
                        <button
                            onClick={() => navigate('/interview-vault')}
                            className="btn-primary"
                            style={{
                                padding: isMobile ? '14px 32px' : '16px 40px',
                                borderRadius: '12px',
                                fontSize: '1rem',
                                fontWeight: '800',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                        >
                            Launch Sandbox <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
