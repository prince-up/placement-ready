import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import SubjectCard from '../components/SubjectCard';
import { getData } from '../data/dataManager';
import { BookMarked, Target, Zap, ChevronRight } from 'lucide-react';

const Home = () => {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        setSubjects(getData());
    }, []);

    return (
        <main style={{ paddingBottom: '100px' }}>
            <Hero />

            {/* Quick Stats Section */}
            <section style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '20px'
                    }}>
                        {[
                            { label: 'Total Topics', value: '140+', icon: BookMarked, color: 'var(--primary)' },
                            { label: 'MCQs Ready', value: '250+', icon: Target, color: '#e879f9' },
                            { label: 'Active Users', value: '1.2k', icon: Zap, color: '#facc15' }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="glass-card"
                                style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '15px' }}
                            >
                                <div style={{
                                    padding: '10px',
                                    background: `${stat.color}15`,
                                    borderRadius: '12px',
                                    color: stat.color
                                }}>
                                    <stat.icon size={20} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: '800' }}>{stat.value}</div>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: '5rem' }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        marginBottom: '3.5rem',
                        flexWrap: 'wrap',
                        gap: '20px'
                    }}>
                        <div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: 'var(--primary)',
                                fontSize: '0.8rem',
                                fontWeight: '800',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                marginBottom: '1rem'
                            }}>
                                <Zap size={14} /> Accelerated Learning
                            </div>
                            <h2 style={{ fontSize: '3rem', fontWeight: '800', letterSpacing: '-0.02em' }}>
                                Core <span className="glow-text">Subjects</span>
                            </h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '0.5rem' }}>
                                Master the fundamentals required for top-tier technical interviews.
                            </p>
                        </div>

                        <div style={{ display: 'flex', gap: '10px' }}>
                            <div className="badge" style={{ padding: '8px 16px' }}>CSE Core</div>
                            <div className="badge" style={{ padding: '8px 16px', opacity: 0.5 }}>Full Stack</div>
                        </div>
                    </div>

                    <div className="subject-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {subjects.map((sub, index) => (
                            <SubjectCard key={sub.id} subject={sub} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Preparation Roadmap Call to Action */}
            <section style={{ marginTop: '5rem' }}>
                <div className="container">
                    <div className="glass-card" style={{
                        padding: '4rem',
                        textAlign: 'center',
                        background: 'linear-gradient(45deg, rgba(14, 165, 233, 0.05), rgba(232, 121, 249, 0.05))',
                        border: '1px solid var(--border-glass)'
                    }}>
                        <h3 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Ready for a <span className="glow-text">Mock Quiz</span>?</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                            Test your knowledge across all subjects with our randomized placement simulator.
                        </p>
                        <button className="btn-primary" style={{ padding: '16px 32px', fontSize: '1rem' }}>
                            Start Mega Quiz <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
