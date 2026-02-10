import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { hrSections } from '../data/interviewData';
import {
    MessageSquare, Star, Lightbulb, ChevronDown, ChevronUp,
    UserCheck, Search, Target, Users, Zap, AlertTriangle,
    CheckCircle, Info, Sparkles, Filter, X
} from 'lucide-react';

const InterviewVault = () => {
    const [openId, setOpenId] = useState(null);
    const [activeSection, setActiveSection] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggle = (id) => setOpenId(openId === id ? null : id);

    const icons = {
        intro: UserCheck,
        self: Search,
        goals: Target,
        team: Users,
        trick: Zap,
        redflag: AlertTriangle,
        ending: CheckCircle
    };

    const allQuestions = hrSections.flatMap(s => s.questions.map(q => ({ ...q, sectionTitle: s.title, sectionId: s.id })));

    const filteredQuestions = allQuestions.filter(q => {
        const matchesSection = activeSection === 'all' || q.sectionId === activeSection;
        const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.modelAnswer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSection && matchesSearch;
    });

    return (
        <div style={{ paddingTop: isMobile ? '100px' : '140px', minHeight: '100vh', paddingBottom: '80px', background: 'var(--bg-dark)' }}>
            <div className="container" style={{ maxWidth: '1100px' }}>

                {/* Header Section */}
                <div style={{ marginBottom: isMobile ? '2.5rem' : '4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', marginBottom: '1rem' }}>
                        <Sparkles size={16} />
                        <span style={{ fontWeight: '900', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Behavioral Mastery</span>
                    </div>
                    <h1 style={{ fontSize: isMobile ? '2.2rem' : '3.5rem', fontWeight: '900', letterSpacing: '-0.02em', marginBottom: '1rem', color: 'var(--text-main)' }}>
                        HR Archive
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '1rem' : '1.1rem', maxWidth: '650px', lineHeight: '1.6' }}>
                        Master behavioral interviews with 50+ curated model answers following the STAR framework.
                    </p>
                </div>

                {/* Control Bar */}
                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: '1.5rem',
                    marginBottom: '2.5rem',
                    alignItems: isMobile ? 'stretch' : 'center',
                    justifyContent: 'space-between'
                }}>
                    <div style={{
                        display: 'flex',
                        gap: '8px',
                        overflowX: 'auto',
                        paddingBottom: isMobile ? '12px' : '0',
                        maskImage: 'linear-gradient(to right, black 80%, transparent)'
                    }}>
                        <button
                            onClick={() => setActiveSection('all')}
                            style={{
                                padding: '8px 16px', borderRadius: '8px', whiteSpace: 'nowrap',
                                background: activeSection === 'all' ? 'var(--primary)' : 'rgba(0,0,0,0.03)',
                                color: activeSection === 'all' ? 'white' : 'var(--text-muted)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                fontWeight: '800', fontSize: '0.75rem', cursor: 'pointer', transition: '0.2s'
                            }}
                        >
                            ENTIRE VAULT
                        </button>
                        {hrSections.map(s => (
                            <button
                                key={s.id}
                                onClick={() => setActiveSection(s.id)}
                                style={{
                                    padding: '8px 16px', borderRadius: '8px', whiteSpace: 'nowrap',
                                    background: activeSection === s.id ? 'rgba(16, 185, 129, 0.1)' : 'rgba(0,0,0,0.03)',
                                    color: activeSection === s.id ? 'var(--primary)' : 'var(--text-muted)',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    fontWeight: '800', fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px'
                                }}
                            >
                                {icons[s.id] && React.createElement(icons[s.id], { size: 12 })}
                                {s.title.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    <div style={{ position: 'relative', width: isMobile ? '100%' : '300px' }}>
                        <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.3 }} />
                        <input
                            type="text"
                            placeholder="Search keywords..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%', padding: '10px 12px 10px 36px', borderRadius: '8px',
                                background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)',
                                color: 'var(--text-main)', fontSize: '0.85rem', outline: 'none'
                            }}
                        />
                    </div>
                </div>

                {/* Questions List */}
                <div style={{ display: 'grid', gap: '1rem' }}>
                    <AnimatePresence mode="popLayout">
                        {filteredQuestions.map((q, idx) => (
                            <motion.div
                                key={q.id}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                style={{
                                    background: 'rgba(0,0,0,0.01)',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    overflow: 'hidden',
                                    transition: '0.2s'
                                }}
                            >
                                <button
                                    onClick={() => toggle(q.id)}
                                    style={{
                                        width: '100%', padding: isMobile ? '1.25rem' : '1.5rem 2rem',
                                        background: 'none', border: 'none', textAlign: 'left',
                                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                                        <div style={{ fontSize: '0.75rem', fontWeight: '900', color: 'var(--primary)', opacity: 0.5 }}>
                                            {String(idx + 1).padStart(2, '0')}
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '4px' }}>
                                                {q.question}
                                            </h3>
                                            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '900', opacity: 0.4, textTransform: 'uppercase' }}>
                                                {q.sectionTitle}
                                            </div>
                                        </div>
                                    </div>
                                    {openId === q.id ? <ChevronUp size={20} color="var(--primary)" /> : <ChevronDown size={20} color="var(--text-muted)" />}
                                </button>

                                <AnimatePresence>
                                    {openId === q.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                        >
                                            <div style={{ padding: isMobile ? '0 1.25rem 2rem' : '0 2rem 3rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                                                <div style={{ paddingTop: '2rem', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2.5rem' }}>

                                                    {/* Strategy & Model Answer */}
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                                        <div>
                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--warning)', fontWeight: '900', fontSize: '0.65rem', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                                                                <Lightbulb size={12} /> Strategic Nuance
                                                            </div>
                                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                                                {q.tips.map((tip, i) => (
                                                                    <span key={i} style={{ padding: '6px 12px', background: 'rgba(251, 191, 36, 0.05)', color: 'var(--warning)', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '800', border: '1px solid rgba(251, 191, 36, 0.1)' }}>
                                                                        {tip}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '900', fontSize: '0.65rem', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                                                                <MessageSquare size={12} /> Model Script
                                                            </div>
                                                            <div style={{
                                                                padding: '1.5rem', borderRadius: '12px',
                                                                background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.05)',
                                                                color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.7', fontStyle: 'italic'
                                                            }}>
                                                                "{q.modelAnswer}"
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* STAR Method / Context */}
                                                    <div>
                                                        {q.starMethod ? (
                                                            <div style={{ background: 'rgba(16, 185, 129, 0.02)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
                                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', fontWeight: '900', fontSize: '0.65rem', textTransform: 'uppercase', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
                                                                    <Star size={14} fill="#10b981" /> Performance Breakdown (STAR)
                                                                </div>
                                                                <div style={{ display: 'grid', gap: '1rem' }}>
                                                                    {Object.entries(q.starMethod).map(([key, val]) => (
                                                                        <div key={key}>
                                                                            <div style={{ fontSize: '0.6rem', fontWeight: '900', color: '#10b981', textTransform: 'uppercase', marginBottom: '4px' }}>{key}</div>
                                                                            <div style={{ fontSize: '0.85rem', color: 'var(--text-main)', opacity: 0.7, lineHeight: '1.5' }}>{val}</div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div style={{ padding: '2rem', background: 'rgba(0,0,0,0.01)', border: '1px dashed rgba(0,0,0,0.1)', borderRadius: '12px', textAlign: 'center' }}>
                                                                <Info size={24} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                                                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                                                    Personalize your answer with specific college artifacts or internship milestones.
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty Area */}
                {filteredQuestions.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '100px 0', opacity: 0.2 }}>
                        <Search size={48} style={{ marginBottom: '1.5rem' }} />
                        <h3 style={{ fontWeight: '900' }}>No findings match your query.</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InterviewVault;
