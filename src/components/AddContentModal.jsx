import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, HelpCircle, Save, CheckCircle2, Sparkles } from 'lucide-react';
import { addConcept, addMCQ } from '../data/dataManager';

const AddContentModal = ({ isOpen, onClose, subjectId, onAdded }) => {
    const [type, setType] = useState('concept');
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        question: '',
        options: ['', '', '', ''],
        answer: 0,
        explanation: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = type === 'concept'
            ? addConcept(subjectId, { title: formData.title, content: formData.content, important: false })
            : addMCQ(subjectId, { question: formData.question, options: formData.options, answer: parseInt(formData.answer), explanation: formData.explanation, important: false });

        if (success) {
            onAdded();
            onClose();
            // Reset form
            setFormData({ title: '', content: '', question: '', options: ['', '', '', ''], answer: 0, explanation: '' });
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(255, 255, 255, 0.9)',
                            backdropFilter: 'blur(8px)',
                            zIndex: 4000
                        }}
                    />

                    {/* Modal Content - Pushed UP slightly to avoid taskbar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: -20 }} // Negative y offset to pull it UP
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        style={{
                            position: 'fixed',
                            top: '45%', // Lowered from 50% to move it UP
                            left: '50%',
                            translate: '-50% -50%',
                            width: 'min(92%, 580px)',
                            maxHeight: '75vh', // Tighter height to force scroll away from taskbar
                            background: 'var(--bg-dark)',
                            border: '1px solid rgba(0,0,0,0.1)',
                            borderRadius: '24px',
                            zIndex: 4001,
                            boxShadow: '0 50px 100px rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            padding: '1rem 1.75rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottom: '1px solid rgba(0,0,0,0.05)',
                            background: 'rgba(0,0,0,0.02)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Sparkles size={18} className="glow-text" />
                                <h2 style={{ fontSize: '1.1rem', fontWeight: '800' }}>
                                    Build Your <span className="glow-text">Revision</span>
                                </h2>
                            </div>
                            <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '6px', borderRadius: '8px' }}>
                                <X size={18} />
                            </button>
                        </div>

                        {/* Switcher */}
                        <div style={{ padding: '1rem 1.75rem 0.5rem' }}>
                            <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.03)', padding: '4px', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                                <button
                                    onClick={() => setType('concept')}
                                    style={{
                                        flex: 1, padding: '8px', borderRadius: '8px', border: 'none',
                                        background: type === 'concept' ? 'var(--bg-card)' : 'transparent',
                                        color: type === 'concept' ? 'var(--primary)' : 'var(--text-muted)',
                                        cursor: 'pointer', fontWeight: '800', fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
                                    }}
                                >
                                    <BookOpen size={14} /> Quick Note
                                </button>
                                <button
                                    onClick={() => setType('mcq')}
                                    style={{
                                        flex: 1, padding: '8px', borderRadius: '8px', border: 'none',
                                        background: type === 'mcq' ? 'var(--bg-card)' : 'transparent',
                                        color: type === 'mcq' ? 'var(--primary)' : 'var(--text-muted)',
                                        cursor: 'pointer', fontWeight: '800', fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
                                    }}
                                >
                                    <HelpCircle size={14} /> Practice MCQ
                                </button>
                            </div>
                        </div>

                        {/* Scrollable Body */}
                        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 1.75rem' }}>
                            <form id="add-form-new" onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
                                {type === 'concept' ? (
                                    <>
                                        <div style={{ display: 'grid', gap: '6px' }}>
                                            <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700' }}>TITLE</label>
                                            <input
                                                required
                                                value={formData.title}
                                                onChange={e => setFormData({ ...formData, title: e.target.value })}
                                                placeholder="e.g., Dijkstra's Algorithm"
                                                style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: 'rgba(0,0,0,0.01)', border: '1px solid rgba(0,0,0,0.05)', color: 'var(--text-main)', outline: 'none', fontSize: '0.9rem' }}
                                            />
                                        </div>
                                        <div style={{ display: 'grid', gap: '6px' }}>
                                            <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700' }}>CONTENT</label>
                                            <textarea
                                                required
                                                rows={4}
                                                value={formData.content}
                                                onChange={e => setFormData({ ...formData, content: e.target.value })}
                                                placeholder="Enter key points to remember..."
                                                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', background: 'rgba(0,0,0,0.01)', border: '1px solid rgba(0,0,0,0.05)', color: 'var(--text-main)', outline: 'none', fontSize: '0.9rem', lineHeight: '1.5' }}
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div style={{ display: 'grid', gap: '6px' }}>
                                            <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700' }}>QUESTION</label>
                                            <input
                                                required
                                                value={formData.question}
                                                onChange={e => setFormData({ ...formData, question: e.target.value })}
                                                placeholder="Enter question prompt..."
                                                style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-glass)', color: 'white', outline: 'none', fontSize: '0.9rem' }}
                                            />
                                        </div>
                                        <div style={{ display: 'grid', gap: '8px' }}>
                                            <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700' }}>OPTIONS (PICK ONE CORRECT)</label>
                                            {formData.options.map((opt, i) => (
                                                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                                    <button
                                                        type="button"
                                                        onClick={() => setFormData({ ...formData, answer: i })}
                                                        style={{
                                                            background: 'none', border: 'none', cursor: 'pointer', padding: '0',
                                                            color: formData.answer === i ? 'var(--success)' : 'rgba(255,255,255,0.1)'
                                                        }}
                                                    >
                                                        <CheckCircle2 size={20} fill={formData.answer === i ? 'rgba(16, 185, 129, 0.1)' : 'none'} />
                                                    </button>
                                                    <input
                                                        required
                                                        value={opt}
                                                        onChange={e => {
                                                            const o = [...formData.options];
                                                            o[i] = e.target.value;
                                                            setFormData({ ...formData, options: o });
                                                        }}
                                                        placeholder={`Option ${i + 1}`}
                                                        style={{
                                                            flex: 1, padding: '8px 12px', borderRadius: '8px',
                                                            background: formData.answer === i ? 'rgba(16, 185, 129, 0.03)' : 'rgba(255,255,255,0.01)',
                                                            border: '1px solid',
                                                            borderColor: formData.answer === i ? 'var(--success)' : 'var(--border-glass)',
                                                            color: 'white', outline: 'none', fontSize: '0.85rem'
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </form>
                        </div>

                        {/* HIGH VISIBILITY FOOTER */}
                        <div style={{
                            padding: '1.25rem 1.75rem',
                            borderTop: '1px solid var(--border-glass)',
                            background: 'var(--bg-glass)',
                            display: 'flex',
                            gap: '0.75rem'
                        }}>
                            <button
                                onClick={onClose}
                                style={{
                                    flex: 1, padding: '10px', borderRadius: '12px', border: '1px solid var(--border-glass)',
                                    background: 'transparent', color: 'var(--text-muted)', fontWeight: '700', cursor: 'pointer', fontSize: '0.85rem'
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                form="add-form-new"
                                className="btn-primary"
                                style={{ flex: 2, padding: '10px', justifyContent: 'center', fontSize: '0.85rem' }}
                            >
                                <Save size={16} /> Add to Personal Vault
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default AddContentModal;
