import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { subjects } from '../data/subjects';
import { ArrowLeft, BookOpen, HelpCircle, Check, X, AlertCircle } from 'lucide-react';

const SubjectDetail = () => {
    const { id } = useParams();
    const subject = subjects.find(s => s.id === id);
    const [activeTab, setActiveTab] = useState('concepts');
    const [userAnswers, setUserAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    if (!subject) return <div>Subject not found</div>;

    const handleAnswer = (qIndex, oIndex) => {
        if (showResults) return;
        setUserAnswers({ ...userAnswers, [qIndex]: oIndex });
    };

    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh' }}>
            <div className="container">
                {/* Header */}
                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem' }}>
                    <ArrowLeft size={20} /> Back to Dashboard
                </Link>

                <div style={{ marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{subject.title}</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>{subject.description}</p>
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-glass)', marginBottom: '3rem' }}>
                    <button
                        onClick={() => setActiveTab('concepts')}
                        style={{
                            padding: '1rem 2rem',
                            background: 'none',
                            border: 'none',
                            borderBottom: activeTab === 'concepts' ? '2px solid var(--primary)' : '2px solid transparent',
                            color: activeTab === 'concepts' ? 'var(--primary)' : 'var(--text-muted)',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}
                    >
                        <BookOpen size={20} /> Concepts
                    </button>
                    <button
                        onClick={() => setActiveTab('mcqs')}
                        style={{
                            padding: '1rem 2rem',
                            background: 'none',
                            border: 'none',
                            borderBottom: activeTab === 'mcqs' ? '2px solid var(--primary)' : '2px solid transparent',
                            color: activeTab === 'mcqs' ? 'var(--primary)' : 'var(--text-muted)',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}
                    >
                        <HelpCircle size={20} /> MCQs
                    </button>
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    {activeTab === 'concepts' ? (
                        <motion.div
                            key="concepts"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            style={{ display: 'grid', gap: '2rem' }}
                        >
                            {subject.concepts.map((concept, index) => (
                                <div key={index} className="glass-card" style={{ padding: '2.5rem' }}>
                                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>{concept.title}</h3>
                                    <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-main)' }}>
                                        {concept.content}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="mcqs"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            style={{ display: 'grid', gap: '2rem' }}
                        >
                            {subject.mcqs.map((q, qIndex) => (
                                <div key={qIndex} className="glass-card" style={{ padding: '2.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>{qIndex + 1}. {q.question}</h3>
                                    <div style={{ display: 'grid', gap: '1rem' }}>
                                        {q.options.map((option, oIndex) => (
                                            <button
                                                key={oIndex}
                                                onClick={() => handleAnswer(qIndex, oIndex)}
                                                style={{
                                                    padding: '1.25rem',
                                                    textAlign: 'left',
                                                    borderRadius: '12px',
                                                    border: '1px solid var(--border-glass)',
                                                    background: userAnswers[qIndex] === oIndex
                                                        ? (showResults ? (oIndex === q.answer ? 'rgba(0, 230, 118, 0.1)' : 'rgba(255, 82, 82, 0.1)') : 'rgba(0, 212, 255, 0.1)')
                                                        : 'rgba(255, 255, 255, 0.02)',
                                                    borderColor: userAnswers[qIndex] === oIndex
                                                        ? (showResults ? (oIndex === q.answer ? 'var(--success)' : 'var(--error)') : 'var(--primary)')
                                                        : (showResults && oIndex === q.answer ? 'var(--success)' : 'var(--border-glass)'),
                                                    color: 'var(--text-main)',
                                                    cursor: showResults ? 'default' : 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    transition: 'all 0.2s'
                                                }}
                                            >
                                                <span>{option}</span>
                                                {showResults && oIndex === q.answer && <Check size={20} color="var(--success)" />}
                                                {showResults && userAnswers[qIndex] === oIndex && oIndex !== q.answer && <X size={20} color="var(--error)" />}
                                            </button>
                                        ))}
                                    </div>

                                    {showResults && (
                                        <div style={{ marginTop: '2rem', padding: '1.5rem', borderRadius: '12px', background: 'rgba(0, 212, 255, 0.05)', border: '1px solid rgba(0, 212, 255, 0.1)' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: '600' }}>
                                                <AlertCircle size={18} /> Explanation
                                            </div>
                                            <p style={{ color: 'var(--text-muted)' }}>{q.explanation}</p>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {!showResults && Object.keys(userAnswers).length > 0 && (
                                <button
                                    className="btn-primary"
                                    onClick={() => setShowResults(true)}
                                    style={{ width: 'fit-content', margin: '2rem auto' }}
                                >
                                    Check Answers
                                </button>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SubjectDetail;
