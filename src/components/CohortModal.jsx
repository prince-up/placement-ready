import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ShieldCheck, Zap, Rocket, MessageSquare, CreditCard, Smartphone, ChevronRight, Copy, Check } from 'lucide-react';

const CohortModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState('offer'); // offer, payment, verification
    const [copied, setCopied] = useState(false);

    const price = "₹150";
    const duration = "4 Weeks";
    const phone = "7986614646";

    const features = [
        "Personalized Placement Roadmap",
        "1-on-1 Mock Interview Sessions",
        "Unlimited Revision Vault Storage",
        "Company-Specific Question Bank",
        "Daily Doubt Solving Support",
        "Priority Access to HR Rounds"
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
                            background: 'rgba(5, 6, 10, 0.9)',
                            backdropFilter: 'blur(10px)',
                            zIndex: 5000
                        }}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: '-50%', y: '-40%' }}
                        animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
                        exit={{ opacity: 0, scale: 0.9, x: '-50%', y: '-40%' }}
                        style={{
                            position: 'fixed',
                            top: '50%', left: '50%',
                            width: 'min(95%, 650px)',
                            maxHeight: '90vh',
                            background: 'var(--bg-dark)',
                            border: '1px solid var(--border-glass)',
                            borderRadius: '32px',
                            zIndex: 5001,
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 50px 100px rgba(0,0,0,0.8)'
                        }}
                    >
                        {/* Header */}
                        <div style={{ padding: '1.5rem 2.5rem', borderBottom: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Rocket size={20} className="glow-text" />
                                <h2 style={{ fontSize: '1.25rem', fontWeight: '800' }}>
                                    {step === 'offer' ? 'Premium Cohort Program' : step === 'payment' ? 'Complete Payment' : 'Verify Enrollment'}
                                </h2>
                            </div>
                            <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: 'var(--text-muted)', padding: '8px', borderRadius: '12px', cursor: 'pointer' }}>
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content Body */}
                        <div style={{ flex: 1, overflowY: 'auto', padding: '2.5rem' }}>
                            {step === 'offer' && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                                        <div style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '0.5rem' }} className="glow-text">{price}</div>
                                        <div style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>For {duration} Intensive Program</div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
                                        {features.map((f, i) => (
                                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                                                <div style={{ color: 'var(--success)', display: 'flex' }}><CheckCircle size={18} /></div>
                                                {f}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="glass-card" style={{ padding: '1.5rem', background: 'rgba(14, 165, 233, 0.03)', border: '1px solid rgba(14, 165, 233, 0.1)' }}>
                                        <div style={{ display: 'flex', gap: '15px' }}>
                                            <ShieldCheck size={24} color="var(--primary)" />
                                            <div>
                                                <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Placement Guarantee Support</h4>
                                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Get personalized attention and resources specifically designed for your target companies.</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 'payment' && (
                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Choose Payment Method</h3>
                                        <p style={{ color: 'var(--text-muted)' }}>Securely pay <span style={{ color: 'white', fontWeight: '700' }}>{price}</span> to unlock premium features.</p>
                                    </div>

                                    <div style={{ display: 'grid', gap: '1rem' }}>
                                        {[
                                            { name: 'UPI (GPay, PhonePe, Paytm)', icon: Smartphone },
                                            { name: 'Debit / Credit Card', icon: CreditCard }
                                        ].map((m, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setStep('verification')}
                                                style={{
                                                    width: '100%', padding: '1.5rem', borderRadius: '16px',
                                                    background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-glass)',
                                                    display: 'flex', alignItems: 'center', gap: '20px', color: 'white',
                                                    cursor: 'pointer', textAlign: 'left', transition: '0.3s'
                                                }}
                                                onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                                                onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-glass)'}
                                            >
                                                <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                                                    <m.icon size={24} />
                                                </div>
                                                <span style={{ fontSize: '1.1rem', fontWeight: '700' }}>{m.name}</span>
                                                <ChevronRight size={20} style={{ marginLeft: 'auto', opacity: 0.3 }} />
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {step === 'verification' && (
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center' }}>
                                    <div style={{
                                        width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)',
                                        color: 'var(--success)', display: 'flex', alignItems: 'center',
                                        justifyContent: 'center', margin: '0 auto 2.5rem'
                                    }}>
                                        <Check size={40} />
                                    </div>
                                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Payment Initiated</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '3rem' }}>
                                        To verify your payment and open the **Premium Portal**, please send an SMS from your registered mobile number:
                                    </p>

                                    <div style={{
                                        background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '24px',
                                        border: '1px solid var(--border-glass)', display: 'inline-block', minWidth: '300px'
                                    }}>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Send Verification SMS To</div>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                                            <div style={{ fontSize: '2rem', fontWeight: '900', color: 'white' }}>{phone}</div>
                                            <button
                                                onClick={handleCopy}
                                                style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: 'var(--primary)', padding: '10px', borderRadius: '10px', cursor: 'pointer' }}
                                            >
                                                {copied ? <Check size={18} /> : <Copy size={18} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                        Our automation team will verify and activate your premium status within <span style={{ color: 'white' }}>10-15 minutes</span>.
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Footer Buttons */}
                        <div style={{ padding: '2rem 2.5rem', borderTop: '1px solid var(--border-glass)', background: 'var(--bg-dark)', display: 'flex', gap: '12px' }}>
                            {step !== 'verification' && (
                                <>
                                    <button
                                        onClick={step === 'offer' ? onClose : () => setStep('offer')}
                                        style={{ flex: 1, padding: '14px', borderRadius: '14px', border: '1px solid var(--border-glass)', background: 'transparent', color: 'var(--text-muted)', fontWeight: '700', cursor: 'pointer' }}
                                    >
                                        {step === 'offer' ? 'Maybe Later' : 'Back'}
                                    </button>
                                    <button
                                        onClick={step === 'offer' ? () => setStep('payment') : () => setStep('verification')}
                                        className="btn-primary"
                                        style={{ flex: 2, justifyContent: 'center', padding: '14px' }}
                                    >
                                        {step === 'offer' ? 'Get Premium Access' : 'Confirm & Proceed'} <ChevronRight size={20} />
                                    </button>
                                </>
                            )}
                            {step === 'verification' && (
                                <button
                                    onClick={onClose}
                                    className="btn-primary"
                                    style={{ flex: 1, justifyContent: 'center', padding: '14px' }}
                                >
                                    Done, I've Sent the SMS
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
