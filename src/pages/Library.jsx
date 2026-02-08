import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bookmark, Star, BookOpen, HelpCircle, ArrowRight, Trash2, Search, Zap, Clock, User, Sparkles, ChevronRight } from 'lucide-react';
import { getData, toggleImportant, deleteItem } from '../data/dataManager';

const Library = () => {
    const [allData, setAllData] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setAllData(getData());
    }, []);

    const importantConcepts = [];
    const importantMCQs = [];
    const personalItems = [];

    allData.forEach(subject => {
        subject.concepts.forEach((concept, index) => {
            const item = { ...concept, subjectId: subject.id, subjectTitle: subject.title, index, type: 'concepts' };
            if (concept.important) importantConcepts.push(item);
            if (concept.isPersonal) personalItems.push(item);
        });
        subject.mcqs.forEach((mcq, index) => {
            const item = { ...mcq, subjectId: subject.id, subjectTitle: subject.title, index, type: 'mcqs' };
            if (mcq.important) importantMCQs.push(item);
            if (mcq.isPersonal) personalItems.push(item);
        });
    });

    const allSaved = [...new Set([...importantConcepts, ...importantMCQs, ...personalItems])];

    const filterBySearch = (items) => {
        return items.filter(item => {
            const title = item.type === 'concepts' ? item.title : item.question;
            const content = item.type === 'concepts' ? (item.content || '') : '';
            return (title + content).toLowerCase().includes(searchQuery.toLowerCase());
        });
    };

    const displayAll = filterBySearch(allSaved);
    const displayConcepts = filterBySearch(importantConcepts);
    const displayMCQs = filterBySearch(importantMCQs);
    const displayPersonal = filterBySearch(personalItems);

    const handleToggleImportant = (subjectId, type, index) => {
        const newData = toggleImportant(subjectId, type, index);
        if (newData) setAllData(newData);
    };

    const handleDelete = (subjectId, type, index) => {
        if (window.confirm('Remove from your vault?')) {
            const newData = deleteItem(subjectId, type, index);
            if (newData) setAllData(newData);
        }
    };

    return (
        <div style={{ paddingTop: '140px', minHeight: '100vh', paddingBottom: '160px' }}>
            <div className="bg-mesh"></div>
            <div className="container">

                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)', marginBottom: '1.25rem' }}>
                            <Star size={18} className="glow-text" />
                            <span style={{ fontWeight: '800', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Your Archive</span>
                        </div>
                        <h1 style={{ fontSize: '4rem', fontWeight: '900', letterSpacing: '-0.03em', marginBottom: '1rem' }}>Personal <span className="glow-text">Vault</span></h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '500px', lineHeight: '1.6' }}>
                            Your curated set of critical technical notes and difficult practice questions.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ display: 'flex', gap: '15px' }}>
                        <div className="glass-card" style={{ padding: '1.5rem 2rem', textAlign: 'center', minWidth: '150px' }}>
                            <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--warning)' }}>{importantConcepts.length + importantMCQs.length}</div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '800' }}>Starred Total</div>
                        </div>
                        <div className="glass-card" style={{ padding: '1.5rem 2rem', textAlign: 'center', minWidth: '150px' }}>
                            <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary)' }}>{personalItems.length}</div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '800' }}>Personalized</div>
                        </div>
                    </motion.div>
                </div>

                {/* Navbar Toolbar */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '3.5rem',
                    flexWrap: 'wrap',
                    gap: '1.5rem',
                    background: 'rgba(255,255,255,0.02)',
                    padding: '8px',
                    borderRadius: '20px',
                    border: '1px solid var(--border-glass)'
                }}>
                    <div style={{ display: 'flex', gap: '4px' }}>
                        {[
                            { id: 'all', label: 'All Saved', icon: Zap },
                            { id: 'concepts', label: 'Notes', icon: BookOpen },
                            { id: 'mcqs', label: 'MCQs', icon: HelpCircle },
                            { id: 'personal', label: 'My Additions', icon: User }
                        ].map(f => (
                            <button
                                key={f.id}
                                onClick={() => setActiveFilter(f.id)}
                                style={{
                                    padding: '12px 24px', borderRadius: '14px', border: 'none',
                                    background: activeFilter === f.id ? 'var(--bg-card)' : 'transparent',
                                    color: activeFilter === f.id ? 'var(--primary)' : 'var(--text-muted)',
                                    fontWeight: '800', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', transition: '0.3s'
                                }}
                            >
                                <f.icon size={16} /> {f.label}
                            </button>
                        ))}
                    </div>

                    <div style={{ position: 'relative', flex: 1, maxWidth: '350px' }}>
                        <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Filter your vault..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%', padding: '14px 16px 14px 48px', borderRadius: '14px',
                                background: 'transparent', border: '1px solid transparent',
                                color: 'white', fontSize: '0.95rem', outline: 'none'
                            }}
                        />
                    </div>
                </div>

                {/* Content Grid */}
                <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '2rem' }}>
                    <AnimatePresence mode="popLayout">
                        {(activeFilter === 'all' ? displayAll :
                            activeFilter === 'concepts' ? displayConcepts :
                                activeFilter === 'mcqs' ? displayMCQs :
                                    displayPersonal).map((item) => (
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            key={`${item.type}-${item.subjectId}-${item.index}`}
                                            className="glass-card"
                                            style={{
                                                padding: '2rem',
                                                borderColor: item.important ? 'var(--warning)' : 'var(--border-glass)',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                height: '100%'
                                            }}
                                        >
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.type === 'concepts' ? 'var(--primary)' : 'var(--secondary)' }}></div>
                                                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.subjectTitle}</span>
                                                </div>
                                                <div style={{ display: 'flex', gap: '10px' }}>
                                                    <button
                                                        onClick={() => handleToggleImportant(item.subjectId, item.type, item.index)}
                                                        style={{ background: 'none', border: 'none', color: item.important ? 'var(--warning)' : 'var(--text-muted)', cursor: 'pointer' }}
                                                    >
                                                        <Star size={20} fill={item.important ? 'currentColor' : 'none'} />
                                                    </button>
                                                    {(item.isPersonal || item.important) && (
                                                        <button
                                                            onClick={() => handleDelete(item.subjectId, item.type, item.index)}
                                                            style={{ background: 'none', border: 'none', color: 'var(--error)', opacity: 0.3, cursor: 'pointer' }}
                                                            onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                                                            onMouseOut={(e) => e.currentTarget.style.opacity = '0.3'}
                                                        >
                                                            <Trash2 size={20} />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.3' }}>
                                                {item.type === 'concepts' ? item.title : item.question}
                                            </h3>

                                            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Link to={`/subject/${item.subjectId}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '800' }}>
                                                    Open Module <ChevronRight size={16} />
                                                </Link>
                                                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '6px 14px', borderRadius: '30px', fontWeight: '800', textTransform: 'uppercase' }}>
                                                    {item.type === 'concepts' ? 'Note' : 'MCQ'}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {((activeFilter === 'all' && displayAll.length === 0) ||
                    (activeFilter === 'concepts' && displayConcepts.length === 0) ||
                    (activeFilter === 'mcqs' && displayMCQs.length === 0) ||
                    (activeFilter === 'personal' && displayPersonal.length === 0)) && (
                        <div style={{ textAlign: 'center', padding: '120px 0', opacity: 0.3 }}>
                            <Bookmark size={64} style={{ marginBottom: '2rem' }} />
                            <h3 style={{ fontSize: '1.5rem' }}>No items found in your vault.</h3>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Library;
