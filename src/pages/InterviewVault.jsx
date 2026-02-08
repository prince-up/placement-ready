import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { hrSections } from '../data/interviewData';
import {
    MessageSquare, Star, Lightbulb, ChevronDown, ChevronUp,
    UserCheck, Search, Target, Users, Zap, AlertTriangle,
    CheckCircle, Info, Sparkles, Filter
} from 'lucide-react';

const InterviewVault = () => {
    const [openId, setOpenId] = useState(null);
    const [activeSection, setActiveSection] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

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

    // Flatten for search
    const allQuestions = hrSections.flatMap(s => s.questions.map(q => ({ ...q, sectionTitle: s.title, sectionId: s.id })));

    const filteredQuestions = allQuestions.filter(q => {
        const matchesSection = activeSection === 'all' || q.sectionId === activeSection;
        const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.modelAnswer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSection && matchesSearch;
    });

    return (
        <div style={{ paddingTop: '140px', minHeight: '100vh', paddingBottom: '120px' }}>
            <div className="bg-mesh"></div>
            <div className="container" style={{ maxWidth: '1200px' }}>

                {/* Header Area */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)', marginBottom: '1rem' }}>
                            <Sparkles size={20} className="glow-text" />
                            <span style={{ fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Behavioral Excellence</span>
                        </div>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '1rem' }}>HR & Behavioral <span className="glow-text">Vault</span></h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', lineHeight: '1.6' }}>
                            Master the 50 most critical HR questions with structured responses and expert strategies.
                        </p>
                    </motion.div>

                    <div style={{ display: 'flex', gap: '15px' }}>
                        <div className="glass-card" style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)' }}>50+</div>
                            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Questions</div>
                        </div>
                        <div className="glass-card" style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#10b981' }}>STAR</div>
                            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Method</div>
                        </div>
                    </div>
                </div>

                {/* Filters and Search Toolbar */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '1.5rem', marginBottom: '3rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '10px', scrollbarWidth: 'none' }}>
                        <button
                            onClick={() => setActiveSection('all')}
                            style={{
                                padding: '10px 20px', borderRadius: '12px', whiteSpace: 'nowrap',
                                background: activeSection === 'all' ? 'var(--bg-card)' : 'rgba(255,255,255,0.02)',
                                color: activeSection === 'all' ? 'var(--primary)' : 'var(--text-muted)',
                                border: '1px solid', borderColor: activeSection === 'all' ? 'var(--primary)' : 'var(--border-glass)',
                                fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer', transition: '0.3s'
                            }}
                        >
                            All Sections
                        </button>
                        {hrSections.map(s => (
                            <button
                                key={s.id}
                                onClick={() => setActiveSection(s.id)}
                                style={{
                                    padding: '10px 20px', borderRadius: '12px', whiteSpace: 'nowrap',
                                    background: activeSection === s.id ? 'var(--bg-card)' : 'rgba(255,255,255,0.02)',
                                    color: activeSection === s.id ? 'var(--primary)' : 'var(--text-muted)',
                                    border: '1px solid', borderColor: activeSection === s.id ? 'var(--primary)' : 'var(--border-glass)',
                                    fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: '0.3s'
                                }}
                            >
                                {icons[s.id] && React.createElement(icons[s.id], { size: 14 })}
                                {s.title}
                            </button>
                        ))}
                    </div>

                    <div style={{ position: 'relative' }}>
                        <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Find a question..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%', padding: '14px 16px 14px 48px', borderRadius: '16px',
                                background: 'var(--bg-glass)', border: '1px solid var(--border-glass)',
                                color: 'white', fontSize: '0.95rem', outline: 'none'
                            }}
                        />
                    </div>
                </div>

                {/* Questions Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100%, 1fr))', gap: '1.25rem' }}>
                    <AnimatePresence mode="popLayout">
                        {filteredQuestions.map((q, index) => (
                            <motion.div
                                layout
                                key={q.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ delay: index * 0.05 }}
                                className="glass-card"
                                style={{
                                    padding: '1.5rem 2rem',
                                    border: '1px solid',
                                    borderColor: q.isImportant ? 'rgba(14, 165, 233, 0.3)' : 'var(--border-glass)',
                                    background: openId === q.id ? 'rgba(255,255,255,0.02)' : 'var(--bg-card)',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                onClick={() => toggle(q.id)}
                            >
                                {q.isImportant && (
                                    <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', background: 'var(--primary)' }} />
                                )}

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                        <div style={{
                                            width: '36px', height: '36px', borderRadius: '10px',
                                            background: q.isImportant ? 'rgba(14, 165, 233, 0.15)' : 'rgba(255,255,255,0.03)',
                                            color: q.isImportant ? 'var(--primary)' : 'var(--text-muted)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontWeight: '900'
                                        }}>
                                            {q.id}
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '4px' }}>{q.question}</h3>
                                            <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '800', letterSpacing: '0.05em' }}>
                                                {q.sectionTitle}
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        {q.isImportant && <div className="badge" style={{ background: 'rgba(14, 165, 233, 0.1)', color: 'var(--primary)', borderColor: 'rgba(14,165,233,0.2)' }}>Essential</div>}
                                        {openId === q.id ? <ChevronUp size={20} color="var(--primary)" /> : <ChevronDown size={20} color="var(--text-muted)" />}
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {openId === q.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div style={{ paddingTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                                                {/* Left Column: Tips and Model Answer */}
                                                <div style={{ display: 'grid', gap: '2rem' }}>
                                                    <div>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--warning)', fontWeight: '900', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
                                                            <Lightbulb size={14} /> Winning Strategies
                                                        </div>
                                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                                            {q.tips.map((tip, i) => (
                                                                <span key={i} style={{ padding: '6px 12px', background: 'rgba(245, 158, 11, 0.05)', color: 'var(--warning)', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700', border: '1px solid rgba(245, 158, 11, 0.1)' }}>
                                                                    {tip}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div style={{ position: 'relative' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '900', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
                                                            <MessageSquare size={14} /> Guided Model Answer
                                                        </div>
                                                        <div style={{
                                                            padding: '1.75rem',
                                                            borderRadius: '16px',
                                                            background: 'rgba(255, 255, 255, 0.02)',
                                                            border: '1px solid var(--border-glass)',
                                                            color: 'var(--text-main)',
                                                            fontSize: '1.05rem',
                                                            lineHeight: '1.8',
                                                            fontStyle: 'italic',
                                                            opacity: 0.9
                                                        }}>
                                                            "{q.modelAnswer}"
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Right Column: STAR Method or Additional Context */}
                                                <div>
                                                    {q.starMethod ? (
                                                        <div style={{
                                                            padding: '2rem',
                                                            background: 'rgba(16, 185, 129, 0.03)',
                                                            borderRadius: '20px',
                                                            border: '1px solid rgba(16, 185, 129, 0.1)'
                                                        }}>
                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', fontWeight: '900', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                                                                <Star size={16} fill="#10b981" /> Structured Case Study (STAR)
                                                            </div>
                                                            <div style={{ display: 'grid', gap: '1.25rem' }}>
                                                                {Object.entries(q.starMethod).map(([key, val]) => (
                                                                    <div key={key}>
                                                                        <div style={{ fontSize: '0.65rem', fontWeight: '900', color: '#10b981', textTransform: 'uppercase', marginBottom: '4px' }}>{key}</div>
                                                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{val}</div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div style={{
                                                            height: '100%',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            textAlign: 'center',
                                                            padding: '2rem',
                                                            background: 'rgba(255,255,255,0.01)',
                                                            borderRadius: '20px',
                                                            border: '1px dashed var(--border-glass)'
                                                        }}>
                                                            <Info size={32} color="var(--text-muted)" style={{ opacity: 0.3, marginBottom: '1rem' }} />
                                                            <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Personalize this!</h4>
                                                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                                                Always tailor the model answer with your own specific college examples or internship experiences.
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
                {filteredQuestions.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '100px 0', opacity: 0.5 }}>
                        <Search size={48} style={{ marginBottom: '1.5rem' }} />
                        <h3>No questions match your find.</h3>
                        <p>Try searching for broader keywords like 'team' or 'future'.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InterviewVault;
