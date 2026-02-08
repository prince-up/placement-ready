import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bookmark, Star, BookOpen, HelpCircle, ArrowRight, Trash2, Search, Filter, Zap, Clock, User, Library as LibraryIcon } from 'lucide-react';
import { getData, toggleImportant, deleteItem } from '../data/dataManager';

const Library = () => {
    const [allData, setAllData] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Force refresh data on mount
        const data = getData();
        setAllData(data);
    }, []);

    const importantConcepts = [];
    const importantMCQs = [];
    const personalItems = [];

    allData.forEach(subject => {
        subject.concepts.forEach((concept, index) => {
            const item = { ...concept, subjectId: subject.id, subjectTitle: subject.title, index, type: 'concepts' };
            if (concept.important) {
                importantConcepts.push(item);
            }
            if (concept.isPersonal) {
                personalItems.push(item);
            }
        });
        subject.mcqs.forEach((mcq, index) => {
            const item = { ...mcq, subjectId: subject.id, subjectTitle: subject.title, index, type: 'mcqs' };
            if (mcq.important) {
                importantMCQs.push(item);
            }
            if (mcq.isPersonal) {
                personalItems.push(item);
            }
        });
    });

    // Create a unique combined list for "All Saved" to avoid duplicates (e.g., if personal AND important)
    const allSaved = [...new Set([...importantConcepts, ...importantMCQs, ...personalItems])];

    // Sort all lists so newest is first (based on index in the original subject array which unshifts)
    // Actually, because we unshift in dataManager, index 0 is newest.
    // So the loop order above naturally puts them in unshift order? 
    // No, index 0 is processed first, so unshift order is maintained.

    const filterBySearch = (items) => {
        return items.filter(item => {
            const title = item.type === 'concepts' ? item.title : item.question;
            const content = item.type === 'concepts' ? (item.content || '') : '';
            return (title + content).toLowerCase().includes(searchQuery.toLowerCase());
        });
    };

    const displayConcepts = filterBySearch(importantConcepts);
    const displayMCQs = filterBySearch(importantMCQs);
    const displayPersonal = filterBySearch(personalItems);
    const displayAll = filterBySearch(allSaved);

    const handleToggleImportant = (subjectId, type, index) => {
        const newData = toggleImportant(subjectId, type, index);
        if (newData) setAllData(newData);
    };

    const handleDelete = (subjectId, type, index) => {
        if (window.confirm('Delete this item from your library and subject?')) {
            const newData = deleteItem(subjectId, type, index);
            if (newData) setAllData(newData);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div style={{ paddingTop: '140px', minHeight: '100vh', paddingBottom: '160px' }}>
            <div className="bg-mesh"></div>
            <div className="container" style={{ maxWidth: '1200px' }}>

                {/* Dynamic Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)', marginBottom: '1.25rem' }}>
                            <LibraryIcon size={18} />
                            <span style={{ fontWeight: '800', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Personal Vault</span>
                        </div>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '1rem' }}>Your <span className="glow-text">Study Lab</span></h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '500px', lineHeight: '1.6' }}>
                            Collect, revise, and master your personalized technical curriculum.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ display: 'flex', gap: '12px' }}>
                        <div className="glass-card" style={{ padding: '1rem 1.5rem', textAlign: 'center', minWidth: '100px', background: 'rgba(245, 158, 11, 0.05)', borderColor: 'rgba(245,158,11,0.2)' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--warning)' }}>{importantConcepts.length + importantMCQs.length}</div>
                            <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>Starred</div>
                        </div>
                        <div className="glass-card" style={{ padding: '1rem 1.5rem', textAlign: 'center', minWidth: '100px', background: 'rgba(14, 165, 233, 0.05)', borderColor: 'rgba(14,165,233,0.2)' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)' }}>{personalItems.length}</div>
                            <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>Personal</div>
                        </div>
                    </motion.div>
                </div>

                {/* Navbar within page */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
                    <div style={{ background: 'var(--bg-glass)', padding: '6px', borderRadius: '16px', display: 'flex', gap: '4px', border: '1px solid var(--border-glass)' }}>
                        {[
                            { id: 'all', label: 'All Saved', icon: Zap },
                            { id: 'concepts', label: 'Starred Notes', icon: BookOpen },
                            { id: 'mcqs', label: 'Starred MCQs', icon: HelpCircle },
                            { id: 'personal', label: 'My Additions', icon: User }
                        ].map(f => (
                            <button
                                key={f.id}
                                onClick={() => setActiveFilter(f.id)}
                                style={{
                                    padding: '10px 18px', borderRadius: '12px', border: 'none',
                                    background: activeFilter === f.id ? 'var(--bg-card)' : 'transparent',
                                    color: activeFilter === f.id ? 'var(--primary)' : 'var(--text-muted)',
                                    fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: '0.3s'
                                }}
                            >
                                <f.icon size={14} /> {f.label}
                            </button>
                        ))}
                    </div>

                    <div style={{ position: 'relative', flex: 1, maxWidth: '350px' }}>
                        <Search size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Find in vault..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{ width: '100%', padding: '12px 16px 12px 42px', borderRadius: '14px', background: 'var(--bg-glass)', border: '1px solid var(--border-glass)', color: 'white', outline: 'none', fontSize: '0.9rem' }}
                        />
                    </div>
                </div>

                {/* Content Grid */}
                <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
                    <AnimatePresence mode="popLayout">
                        {(activeFilter === 'all' ? displayAll :
                            activeFilter === 'concepts' ? displayConcepts :
                                activeFilter === 'mcqs' ? displayMCQs :
                                    displayPersonal).map((item) => (
                                        <motion.div
                                            layout
                                            variants={itemVariants}
                                            key={`${item.type}-${item.subjectId}-${item.index}`}
                                            className="glass-card"
                                            style={{
                                                padding: '2rem',
                                                borderColor: item.important ? 'var(--warning)' : 'var(--border-glass)',
                                                background: item.important ? 'rgba(245, 158, 11, 0.02)' : 'var(--bg-card)',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                height: '100%'
                                            }}
                                        >
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.type === 'concepts' ? 'var(--primary)' : 'var(--secondary)' }}></div>
                                                    <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '800', textTransform: 'uppercase' }}>{item.subjectTitle}</span>
                                                </div>
                                                <div style={{ display: 'flex', gap: '8px' }}>
                                                    <button
                                                        onClick={() => handleToggleImportant(item.subjectId, item.type, item.index)}
                                                        style={{ background: 'none', border: 'none', color: item.important ? 'var(--warning)' : 'var(--text-muted)', cursor: 'pointer', display: 'flex' }}
                                                    >
                                                        <Star size={18} fill={item.important ? 'currentColor' : 'none'} />
                                                    </button>
                                                    {item.isPersonal && (
                                                        <button
                                                            onClick={() => handleDelete(item.subjectId, item.type, item.index)}
                                                            style={{ background: 'none', border: 'none', color: 'var(--error)', opacity: 0.3, cursor: 'pointer', display: 'flex' }}
                                                            onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                                                            onMouseOut={(e) => e.currentTarget.style.opacity = '0.3'}
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', lineHeight: '1.4' }}>
                                                {item.type === 'concepts' ? item.title : item.question}
                                            </h3>

                                            {item.type === 'concepts' && (
                                                <p style={{
                                                    color: 'var(--text-muted)',
                                                    fontSize: '0.9rem',
                                                    lineHeight: '1.6',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: '4',
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    marginBottom: '2rem'
                                                }}>
                                                    {item.content}
                                                </p>
                                            )}

                                            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Link to={`/subject/${item.subjectId}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '800' }}>
                                                    {item.type === 'concepts' ? 'Open Full Note' : 'Go to Quiz'} <ArrowRight size={14} />
                                                </Link>
                                                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '20px' }}>
                                                    {item.type === 'concepts' ? 'Theory' : 'Practice'}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                    </AnimatePresence>
                </motion.div>

                {/* Comprehensive Empty State */}
                {((activeFilter === 'all' && displayAll.length === 0) ||
                    (activeFilter === 'concepts' && displayConcepts.length === 0) ||
                    (activeFilter === 'mcqs' && displayMCQs.length === 0) ||
                    (activeFilter === 'personal' && displayPersonal.length === 0)) && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            style={{ textAlign: 'center', padding: '120px 2rem', background: 'rgba(255,255,255,0.01)', borderRadius: '32px', border: '2px dashed var(--border-glass)' }}
                        >
                            <LibraryIcon size={56} style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', opacity: 0.3 }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Your Vault is Empty</h3>
                            <p style={{ color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto 2rem' }}>
                                Start exploring subjects and click the star icon on any topic or MCQ to save it here for quick revision.
                            </p>
                            <Link to="/" className="btn-primary" style={{ display: 'inline-flex' }}>Browse Subjects</Link>
                        </motion.div>
                    )}
            </div>
        </div>
    );
};

export default Library;
