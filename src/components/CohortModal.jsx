import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ShieldCheck, Zap, Rocket, MessageSquare, CreditCard, Smartphone, ChevronRight, Copy, Check, Sparkles } from 'lucide-react';

const CohortModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState('offer'); // offer, payment, verification
    const [copied, setCopied] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const price = "₹150";
    const duration = "4 Weeks";
    const phone = "7986614646";

    const features = [
        "Placement Roadmap",
        "Mock Intervew",
        "Revision Vault",
        "Question Bank",
        "Doubt Solving",
        "HR Support"
    ];

    const handleCopy = () => {
        navigator.clipboard.writeText(phone);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

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
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(255, 255, 255, 0.9)',
                            backdropFilter: 'blur(10px)',
                            zIndex: 5000
                        }}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
                        animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
                        exit={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
                        style={{
                            position: 'fixed',
                            top: isMobile ? '50%' : '50%',
                            left: '50%',
                            width: isMobile ? '95%' : 'max(450px, 40%)',
                            maxWidth: '650px',
                            background: 'var(--bg-dark)',
                            border: '1px solid rgba(0,0,0,0.1)',
                            borderRadius: '16px',
                            zIndex: 5001,
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 40px 100px rgba(0,0,0,0.2)'
                        }}
                    >
                        {/* Header */}
                        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Rocket size={16} color="var(--primary)" />
                                <h2 style={{ fontSize: '0.9rem', fontWeight: '900', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    {step === 'offer' ? 'Premium Track' : 'Enrollment'}
                                </h2>
                            </div>
                            <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                                <X size={18} />
                            </button>
                        </div>

                        {/* Content */}
                        <div style={{ padding: isMobile ? '1.5rem' : '2.5rem', flex: 1, overflowY: 'auto' }}>
                            {step === 'offer' && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                        <div style={{ fontSize: '3rem', fontWeight: '950', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>{price}</div>
                                        <div style={{ fontSize: '0.65rem', color: 'var(--primary)', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                                            One-time fee • {duration} Mentorship
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                                        {features.map((f, i) => (
                                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '700' }}>
                                                <CheckCircle size={14} color="#10b981" /> {f}
                                            </div>
                                        ))}
                                    </div>

                                    <div style={{ background: 'rgba(56, 189, 248, 0.03)', border: '1px solid rgba(56, 189, 248, 0.1)', padding: '1.25rem', borderRadius: '12px' }}>
                                        <h4 style={{ fontSize: '0.8rem', fontWeight: '900', color: 'white', marginBottom: '0.25rem' }}>Strategic Acceleration</h4>
                                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>Priority access to company-specific mock drills and personalized feedback loops.</p>
                                    </div>
                                </motion.div>
                            )}

                            {step === 'payment' && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '900', color: 'white', marginBottom: '1.5rem' }}>Select Verification Method</h3>
                                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                                        {['UPI Direct', 'Card / Netbanking'].map((method, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setStep('verification')}
                                                style={{
                                                    padding: '1.25rem', borderRadius: '12px', background: 'rgba(255,255,255,0.02)',
                                                    border: '1px solid rgba(255,255,255,0.05)', color: 'white', textAlign: 'left',
                                                    cursor: 'pointer', transition: '0.2s'
                                                }}
                                            >
                                                <div style={{ fontWeight: '800', fontSize: '0.9rem' }}>{method}</div>
                                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>Instant activation path</div>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {step === 'verification' && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center' }}>
                                    <div style={{ width: '48px', height: '48px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Sparkles size={24} color="#10b981" />
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '900', color: 'white', marginBottom: '0.75rem' }}>Next Step: Verify</h3>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.5' }}>
                                        Send a screenshot or payment confirmation to our support channel for instant enrollment.
                                    </p>

                                    <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--primary)', borderRadius: '12px', display: 'inline-block', width: '100%' }}>
                                        <div style={{ fontSize: '0.6rem', fontWeight: '900', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Official Support</div>
                                        <div style={{ fontSize: '1.75rem', fontWeight: '950', color: 'var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                                            {phone}
                                            <button onClick={handleCopy} style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer' }}>
                                                {copied ? <Check size={18} /> : <Copy size={18} />}
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Footer */}
                        <div style={{ padding: '1.25rem 1.5rem', background: 'rgba(0,0,0,0.02)', display: 'flex', gap: '12px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                            {step !== 'verification' ? (
                                <>
                                    <button
                                        onClick={step === 'offer' ? onClose : () => setStep('offer')}
                                        style={{ flex: 1, padding: '10px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-muted)', fontWeight: '800', fontSize: '0.8rem', cursor: 'pointer' }}
                                    >
                                        {step === 'offer' ? 'Dismiss' : 'Back'}
                                    </button>
                                    <button
                                        onClick={step === 'offer' ? () => setStep('payment') : () => setStep('verification')}
                                        style={{ flex: 2, padding: '10px', borderRadius: '8px', background: 'var(--primary)', border: 'none', color: 'white', fontWeight: '900', fontSize: '0.8rem', cursor: 'pointer' }}
                                    >
                                        {step === 'offer' ? 'Secure Entrance' : 'Proceed'}
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={onClose}
                                    style={{ flex: 1, padding: '10px', borderRadius: '8px', background: 'var(--primary)', border: 'none', color: 'white', fontWeight: '900', fontSize: '0.8rem', cursor: 'pointer' }}
                                >
                                    Return to Archive
                                </button>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CohortModal;
