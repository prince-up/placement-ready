import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { hrQuestions } from '../data/interviewData';
import { MessageSquare, Star, Lightbulb, ChevronDown, ChevronUp, UserCheck, ShieldCheck } from 'lucide-react';

const InterviewVault = () => {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => setOpenId(openId === id ? null : id);

    return (
        <div style={{ paddingTop: '140px', minHeight: '100vh', paddingBottom: '100px' }}>
            <div className="bg-mesh"></div>
            <div className="container" style={{ maxWidth: '900px' }}>

                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'var(--primary)', marginBottom: '1rem' }}>
                        <UserCheck size={20} />
                        <span style={{ fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Behavioral Mastery</span>
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1rem' }}>HR & Behavioral <span className="glow-text">Vault</span></h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                        Master the art of communication and soft skills to ace the final round.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {hrQuestions.map((q, index) => (
                        <motion.div
                            key={q.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card"
                            style={{
                                padding: '1.75rem 2rem',
                                border: '1px solid var(--border-glass)',
                                background: openId === q.id ? 'rgba(255,255,255,0.02)' : 'var(--bg-card)',
                                cursor: 'pointer',
                                transition: '0.3s'
                            }}
                            onClick={() => toggle(q.id)}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                    <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(14, 165, 233, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.9rem' }}>
                                        {q.id}
                                    </div>
                                    <h3 style={{ fontSize: '1.15rem', fontWeight: '700' }}>{q.question}</h3>
                                </div>
                                {openId === q.id ? <ChevronUp size={20} color="var(--text-muted)" /> : <ChevronDown size={20} color="var(--text-muted)" />}
                            </div>

                            <AnimatePresence>
                                {openId === q.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <div style={{ paddingTop: '2rem', display: 'grid', gap: '2rem' }}>
                                            {/* Tips */}
                                            <div style={{ padding: '1.25rem', background: 'rgba(245, 158, 11, 0.05)', borderRadius: '14px', border: '1px solid rgba(245, 158, 11, 0.1)' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--warning)', fontWeight: '800', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                                                    <Lightbulb size={14} /> Key Strategies
                                                </div>
                                                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'grid', gap: '6px' }}>
                                                    {q.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                                                </ul>
                                            </div>

                                            {/* Model Answer */}
                                            <div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '800', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                                                    <MessageSquare size={14} /> Suggested Model Response
                                                </div>
                                                <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: '1.6', fontStyle: 'italic', background: 'rgba(255,255,255,0.01)', padding: '1.5rem', borderRadius: '14px', border: '1px solid var(--border-glass)' }}>
                                                    "{q.modelAnswer}"
                                                </p>
                                            </div>

                                            {/* STAR Method Example */}
                                            {q.starMethod && (
                                                <div style={{ padding: '1.5rem', background: 'rgba(16, 185, 129, 0.03)', borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', fontWeight: '800', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                                                        <Star size={14} fill="#10b981" /> Structured Storytelling (STAR Method)
                                                    </div>
                                                    <div style={{ display: 'grid', gap: '1rem' }}>
                                                        {Object.entries(q.starMethod).map(([key, val]) => (
                                                            <div key={key} style={{ display: 'flex', gap: '12px' }}>
                                                                <span style={{ fontWeight: '900', color: '#10b981', minWidth: '85px', fontSize: '0.8rem', textTransform: 'uppercase' }}>{key}</span>
                                                                <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{val}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InterviewVault;
