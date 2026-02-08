import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, HelpCircle, Star, Plus, Trash2, ChevronRight, Bookmark, Search, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import { getData, toggleImportant, deleteItem } from '../data/dataManager';
import AddContentModal from '../components/AddContentModal';

const SubjectDetail = () => {
    const { id } = useParams();
    const [subject, setSubject] = useState(null);
    const [activeTab, setActiveTab] = useState('concepts');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const data = getData();
        const foundSubject = data.find(s => s.id === id);
        setSubject(foundSubject);
    }, [id]);

    const handleRefresh = () => {
        const data = getData();
        const foundSubject = data.find(s => s.id === id);
        setSubject(foundSubject);
    };

    const handleToggle = (type, index) => {
        toggleImportant(id, type, index);
        handleRefresh();
    };

    const handleDelete = (type, index) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            deleteItem(id, type, index);
            handleRefresh();
        }
    };

    if (!subject) return <div style={{ padding: '100px', textAlign: 'center' }}>Subject not found.</div>;

    const filteredItems = (subject[activeTab] || []).filter(item => {
        const title = activeTab === 'concepts' ? item.title : item.question;
        return title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div style={{ paddingTop: '140px', minHeight: '100vh', paddingBottom: '120px' }}>
            <div className="bg-mesh"></div>
            <div className="container">

                {/* Header Section */}
                <div style={{ marginBottom: '4rem' }}>
                    <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '2.5rem', fontWeight: '700' }}>
                        <ArrowLeft size={16} /> Back to Dashboard
                    </Link>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)', marginBottom: '1.25rem' }}>
                                <Sparkles size={18} className="glow-text" />
                                <span style={{ fontWeight: '800', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Study Module</span>
                            </div>
                            <h1 style={{ fontSize: '4rem', fontWeight: '900', letterSpacing: '-0.03em', marginBottom: '1rem' }}>{subject.title}</h1>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', lineHeight: '1.6' }}>{subject.description}</p>
                        </motion.div>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn-primary"
                            style={{ padding: '16px 28px', borderRadius: '16px', boxShadow: '0 15px 35px rgba(14, 165, 233, 0.2)' }}
                        >
                            <Plus size={20} /> Add to Module
                        </button>
                    </div>
                </div>

                {/* Toolbar */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '3rem',
                    background: 'rgba(255,255,255,0.02)',
                    padding: '8px',
                    borderRadius: '20px',
                    border: '1px solid var(--border-glass)',
                    flexWrap: 'wrap',
                    gap: '1.5rem'
                }}>
                    <div style={{ display: 'flex', gap: '6px' }}>
                        {[
                            { id: 'concepts', label: 'Theory Notes', icon: BookOpen, count: subject.concepts.length },
                            { id: 'mcqs', label: 'Practice MCQs', icon: HelpCircle, count: subject.mcqs.length }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    padding: '12px 24px',
                                    borderRadius: '14px',
                                    border: 'none',
                                    background: activeTab === tab.id ? 'var(--bg-card)' : 'transparent',
                                    color: activeTab === tab.id ? 'var(--primary)' : 'var(--text-muted)',
                                    fontWeight: '800',
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    transition: '0.3s'
                                }}
                            >
                                <tab.icon size={16} /> {tab.label}
                                <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '10px', background: activeTab === tab.id ? 'rgba(14, 165, 233, 0.1)' : 'rgba(255,255,255,0.05)' }}>{tab.count}</span>
                            </button>
                        ))}
                    </div>

                    <div style={{ position: 'relative', flex: 1, maxWidth: '350px' }}>
                        <Search size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            placeholder={`Search in ${activeTab}...`}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '14px 16px 14px 44px',
                                borderRadius: '14px',
                                background: 'transparent',
                                border: '1px solid transparent',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                    </div>
                </div>

                {/* Content Area */}
                <motion.div
                    layout
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100%, 1fr))', gap: '1.5rem' }}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ delay: index * 0.05 }}
                                className="glass-card"
                                style={{
                                    padding: '2.5rem',
                                    border: '1px solid',
                                    borderColor: item.important ? 'rgba(245, 158, 11, 0.3)' : 'var(--border-glass)',
                                    background: item.important ? 'rgba(245, 158, 11, 0.02)' : 'var(--bg-card)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {item.important && (
                                    <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--warning)' }} />
                                )}

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{
                                            padding: '8px',
                                            borderRadius: '10px',
                                            background: activeTab === 'concepts' ? 'rgba(14, 165, 233, 0.1)' : 'rgba(139, 92, 246, 0.1)',
                                            color: activeTab === 'concepts' ? 'var(--primary)' : 'var(--secondary)'
                                        }}>
                                            {activeTab === 'concepts' ? <Bookmark size={18} /> : <Clock size={18} />}
                                        </div>
                                        <span style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                            {activeTab === 'concepts' ? 'Theory / Definition' : 'Quick Assessment'}
                                        </span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '12px' }}>
                                        <button
                                            onClick={() => handleToggle(activeTab, index)}
                                            style={{ background: 'none', border: 'none', color: item.important ? 'var(--warning)' : 'var(--text-muted)', cursor: 'pointer', transition: '0.3s' }}
                                        >
                                            <Star size={20} fill={item.important ? 'currentColor' : 'none'} />
                                        </button>
                                        {item.isPersonal && (
                                            <button
                                                onClick={() => handleDelete(activeTab, index)}
                                                style={{ background: 'none', border: 'none', color: 'var(--error)', opacity: 0.4, cursor: 'pointer' }}
                                                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                                                onMouseOut={(e) => e.currentTarget.style.opacity = '0.4'}
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.3' }}>
                                    {activeTab === 'concepts' ? item.title : item.question}
                                </h3>

                                {activeTab === 'concepts' ? (
                                    <p style={{ color: 'var(--text-main)', opacity: 0.85, fontSize: '1.1rem', lineHeight: '1.9', maxWidth: '850px', fontWeight: '400' }}>
                                        {item.content}
                                    </p>
                                ) : (
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                                        {item.options.map((opt, i) => (
                                            <div key={i} style={{
                                                padding: '16px 20px',
                                                borderRadius: '14px',
                                                border: '1px solid var(--border-glass)',
                                                background: 'rgba(255,255,255,0.01)',
                                                fontSize: '1rem',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}>
                                                {opt}
                                                {i === item.answer && <CheckCircle2 size={16} color="var(--success)" />}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredItems.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '100px 0', opacity: 0.5 }}>
                        <BookOpen size={48} style={{ marginBottom: '1.5rem' }} />
                        <h3 style={{ fontSize: '1.5rem' }}>No items found in this category.</h3>
                    </div>
                )}
            </div>

            <AddContentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                subjectId={id}
                onAdded={handleRefresh}
            />
        </div>
    );
};

export default SubjectDetail;
