import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getData, toggleImportant, deleteItem } from '../data/dataManager';
import { ArrowLeft, BookOpen, HelpCircle, Check, X, AlertCircle, Plus, Star, Trash2 } from 'lucide-react';
import AddContentModal from '../components/AddContentModal';

const SubjectDetail = () => {
    const { id } = useParams();
    const [allData, setAllData] = useState([]);
    const [activeTab, setActiveTab] = useState('concepts');
    const [userAnswers, setUserAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setAllData(getData());
    }, []);

    const subject = allData.find(s => s.id === id);

    if (!subject) return (
        <div style={{ paddingTop: '150px', textAlign: 'center' }}>
            <h2 className="glow-text">Subject Loading or Not Found</h2>
            <Link to="/" className="btn-primary" style={{ marginTop: '20px' }}>Go Home</Link>
        </div>
    );

    const score = Object.keys(userAnswers).reduce((acc, qIdx) => {
        return acc + (userAnswers[qIdx] === subject.mcqs[qIdx].answer ? 1 : 0);
    }, 0);

    const handleAnswer = (qIndex, oIndex) => {
        if (showResults) return;
        setUserAnswers({ ...userAnswers, [qIndex]: oIndex });
    };

    const handleToggleImportant = (type, index) => {
        const newData = toggleImportant(id, type, index);
        if (newData) setAllData(newData);
    };

    const handleDelete = (type, index) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            const newData = deleteItem(id, type, index);
            if (newData) setAllData(newData);
        }
    };

    const refreshData = () => {
        setAllData(getData());
    };

    return (
        <div style={{ paddingTop: '140px', minHeight: '100vh' }}>
            <div className="bg-mesh"></div>
            <div className="container" style={{ maxWidth: '1000px' }}>
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ marginBottom: '4rem' }}
                >
                    <Link to="/" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginBottom: '1.5rem',
                        transition: 'var(--transition)'
                    }}>
                        <ArrowLeft size={16} /> Dashboard
                    </Link>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                        <div>
                            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>{subject.title}</h1>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px' }}>{subject.description}</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {activeTab === 'mcqs' && showResults && (
                                <div className="glass-card" style={{ padding: '0.75rem 1.5rem', background: 'rgba(16, 185, 129, 0.05)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--success)', fontWeight: '800', textTransform: 'uppercase', marginBottom: '2px' }}>Score</div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: '800' }}>{score} / {subject.mcqs.length}</div>
                                </div>
                            )}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="btn-primary"
                                style={{ padding: '12px 20px', fontSize: '0.9rem' }}
                            >
                                <Plus size={18} /> Add Content
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Navigation Tabs */}
                <div style={{
                    display: 'flex',
                    gap: '6px',
                    background: 'rgba(255,255,255,0.03)',
                    padding: '6px',
                    borderRadius: '14px',
                    marginBottom: '3.5rem',
                    width: 'fit-content',
                    border: '1px solid var(--border-glass)'
                }}>
                    {['concepts', 'mcqs'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab);
                                if (tab === 'concepts') setShowResults(false);
                            }}
                            style={{
                                padding: '10px 24px',
                                background: activeTab === tab ? 'var(--bg-card)' : 'transparent',
                                border: '1px solid',
                                borderColor: activeTab === tab ? 'var(--border-glass)' : 'transparent',
                                borderRadius: '10px',
                                color: activeTab === tab ? 'var(--primary)' : 'var(--text-muted)',
                                fontSize: '0.9rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                transition: 'var(--transition)',
                                textTransform: 'capitalize'
                            }}
                        >
                            {tab === 'concepts' ? <BookOpen size={16} /> : <HelpCircle size={16} />}
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    {activeTab === 'concepts' ? (
                        <motion.div
                            key="concepts"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            style={{ display: 'grid', gap: '2rem', paddingBottom: '120px' }}
                        >
                            {subject.concepts.length === 0 && <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No notes added yet.</p>}
                            {subject.concepts.map((concept, index) => (
                                <div
                                    key={index}
                                    className="glass-card"
                                    style={{
                                        padding: '2.5rem',
                                        borderColor: concept.important ? 'var(--warning)' : 'var(--border-glass)',
                                        background: concept.important ? 'rgba(245, 158, 11, 0.03)' : 'var(--bg-card)',
                                        position: 'relative'
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{ width: '4px', height: '24px', background: concept.important ? 'var(--warning)' : 'var(--primary)', borderRadius: '2px' }}></div>
                                            {concept.title}
                                            {concept.important && <span className="badge" style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning)', borderColor: 'rgba(245, 158, 11, 0.2)' }}>Important</span>}
                                        </h3>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <button
                                                onClick={() => handleToggleImportant('concepts', index)}
                                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: concept.important ? 'var(--warning)' : 'var(--text-muted)', padding: '5px' }}
                                                title="Mark as Important"
                                            >
                                                <Star size={20} fill={concept.important ? 'var(--warning)' : 'none'} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete('concepts', index)}
                                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--error)', opacity: 0.4, padding: '5px', transition: '0.3s' }}
                                                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                                                onMouseOut={(e) => e.currentTarget.style.opacity = '0.4'}
                                                title="Delete Note"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                    <div style={{
                                        fontSize: '1.05rem',
                                        lineHeight: '1.8',
                                        color: 'rgba(248, 250, 252, 0.85)',
                                        whiteSpace: 'pre-wrap'
                                    }}>
                                        {concept.content}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="mcqs"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            style={{ display: 'grid', gap: '2rem', paddingBottom: '120px' }}
                        >
                            {subject.mcqs.length === 0 && <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No MCQs added yet.</p>}
                            {subject.mcqs.map((q, qIndex) => (
                                <div
                                    key={qIndex}
                                    className="glass-card"
                                    style={{
                                        padding: '2.5rem',
                                        borderColor: q.important ? 'var(--warning)' : 'var(--border-glass)',
                                        background: q.important ? 'rgba(245, 158, 11, 0.03)' : 'var(--bg-card)'
                                    }}
                                >
                                    <div style={{ display: 'flex', gap: '24px' }}>
                                        <div style={{
                                            fontSize: '0.85rem',
                                            fontWeight: '800',
                                            color: q.important ? 'var(--warning)' : 'var(--primary)',
                                            background: q.important ? 'rgba(245, 158, 11, 0.1)' : 'rgba(14, 165, 233, 0.1)',
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            border: '1px solid',
                                            borderColor: q.important ? 'rgba(245, 158, 11, 0.2)' : 'rgba(14, 165, 233, 0.2)'
                                        }}>
                                            {qIndex + 1}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                                                <h3 style={{ fontSize: '1.25rem', lineHeight: '1.5' }}>{q.question}</h3>
                                                <div style={{ display: 'flex', gap: '8px' }}>
                                                    <button
                                                        onClick={() => handleToggleImportant('mcqs', qIndex)}
                                                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: q.important ? 'var(--warning)' : 'var(--text-muted)', padding: '5px' }}
                                                        title="Mark as Important"
                                                    >
                                                        <Star size={20} fill={q.important ? 'var(--warning)' : 'none'} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete('mcqs', qIndex)}
                                                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--error)', opacity: 0.4, padding: '5px', transition: '0.3s' }}
                                                        onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                                                        onMouseOut={(e) => e.currentTarget.style.opacity = '0.4'}
                                                        title="Delete MCQ"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </div>
                                            <div style={{ display: 'grid', gap: '0.85rem' }}>
                                                {q.options.map((option, oIndex) => {
                                                    const isSelected = userAnswers[qIndex] === oIndex;
                                                    const isCorrect = oIndex === q.answer;
                                                    let borderColor = 'var(--border-glass)';
                                                    let bgColor = 'rgba(255, 255, 255, 0.01)';
                                                    if (showResults) {
                                                        if (isCorrect) {
                                                            borderColor = 'var(--success)';
                                                            bgColor = 'rgba(16, 185, 129, 0.08)';
                                                        } else if (isSelected) {
                                                            borderColor = 'var(--error)';
                                                            bgColor = 'rgba(239, 68, 68, 0.08)';
                                                        }
                                                    } else if (isSelected) {
                                                        borderColor = 'var(--primary)';
                                                        bgColor = 'rgba(14, 165, 233, 0.08)';
                                                    }
                                                    return (
                                                        <button
                                                            key={oIndex}
                                                            onClick={() => handleAnswer(qIndex, oIndex)}
                                                            disabled={showResults}
                                                            style={{
                                                                padding: '1.25rem 1.5rem',
                                                                textAlign: 'left',
                                                                borderRadius: '12px',
                                                                border: '1px solid',
                                                                borderColor,
                                                                background: bgColor,
                                                                color: isSelected && !showResults ? 'var(--primary)' : 'var(--text-main)',
                                                                cursor: showResults ? 'default' : 'pointer',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'space-between',
                                                                transition: 'var(--transition)',
                                                                fontSize: '0.95rem'
                                                            }}
                                                        >
                                                            <span>{option}</span>
                                                            {showResults && isCorrect && <Check size={18} color="var(--success)" />}
                                                            {showResults && isSelected && !isCorrect && <X size={18} color="var(--error)" />}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                            <AnimatePresence>
                                                {showResults && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        style={{ overflow: 'hidden' }}
                                                    >
                                                        <div style={{ marginTop: '2.5rem', padding: '1.75rem', borderRadius: '12px', background: 'rgba(14, 165, 233, 0.03)', border: '1px solid rgba(14, 165, 233, 0.1)' }}>
                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', marginBottom: '0.75rem', fontWeight: '800', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                                                                <AlertCircle size={14} /> Explanation
                                                            </div>
                                                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>{q.explanation}</p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                                {!showResults && Object.keys(userAnswers).length > 0 && (
                                    <button className="btn-primary" onClick={() => { setShowResults(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Check Score</button>
                                )}
                                {showResults && <button onClick={() => { setUserAnswers({}); setShowResults(false); }} className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--border-glass)' }}>Reset Quiz</button>}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <AddContentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                subjectId={id}
                onAdded={refreshData}
            />
        </div>
    );
};

export default SubjectDetail;
