import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

const FeedbackModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [type, setType] = useState('bug'); // bug, content, other

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct mailto link
        const subject = `[Syllablink Feedback] - ${type.toUpperCase()}`;
        const body = `From: ${email}\n\nMessage:\n${message}`;
        window.location.href = `mailto:hello@syllablink.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
                            backdropFilter: 'blur(4px)', zIndex: 1000
                        }}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        style={{
                            position: 'fixed',
                            top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '90%', maxWidth: '500px',
                            background: 'var(--bg-card)',
                            backgroundColor: 'var(--bg-dark)',
                            backdropFilter: 'blur(24px)',
                            WebkitBackdropFilter: 'blur(24px)',
                            border: '1px solid var(--border-glass)',
                            borderRadius: '16px',
                            zIndex: 1001,
                            padding: '2rem',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <MessageSquare size={24} color="var(--primary)" /> Feedback
                            </h2>
                            <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Type</label>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    {['bug', 'content', 'other'].map(t => (
                                        <button
                                            key={t}
                                            type="button"
                                            onClick={() => setType(t)}
                                            style={{
                                                flex: 1, padding: '8px', borderRadius: '8px', border: '1px solid var(--border-glass)',
                                                background: type === t ? 'var(--primary)' : 'rgba(0,0,0,0.03)',
                                                color: type === t ? 'white' : 'var(--text-muted)',
                                                fontWeight: '600', fontSize: '0.85rem', textTransform: 'capitalize', cursor: 'pointer'
                                            }}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Email (Optional)</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    style={{
                                        width: '100%', padding: '12px', borderRadius: '8px',
                                        background: 'rgba(0,0,0,0.02)', border: '1px solid var(--border-glass)',
                                        color: 'var(--text-main)', outline: 'none'
                                    }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Message</label>
                                <textarea
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Describe the bug or feature request..."
                                    rows={5}
                                    style={{
                                        width: '100%', padding: '12px', borderRadius: '8px',
                                        background: 'rgba(0,0,0,0.02)', border: '1px solid var(--border-glass)',
                                        color: 'var(--text-main)', outline: 'none', resize: 'vertical',
                                        fontFamily: 'inherit'
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                style={{
                                    marginTop: '1rem', padding: '12px', borderRadius: '10px',
                                    background: 'var(--primary)', color: 'white', fontWeight: '800', border: 'none',
                                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
                                }}
                            >
                                <Send size={18} /> Send Feedback
                            </button>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default FeedbackModal;
