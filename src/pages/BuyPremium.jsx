import React, { useMemo, useState, useEffect } from 'react';
import qrPremium from '../assets/qr-premium.jpeg';

const BUY_AMOUNT = '150';
const APPROVAL_NUMBER = '7986614646';
const QR_SRC = qrPremium;

const BuyPremium = () => {
    const [name, setName] = useState('');
    const [utr, setUtr] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 900);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const message = useMemo(() => {
        const parts = [
            'Premium Approval Request',
            `Name: ${name || 'N/A'}`,
            `Amount: INR ${BUY_AMOUNT}`,
            `Payment UTR/Txn ID: ${utr || 'N/A'}`,
            'Plan: ready to launch ',
            'Requested via Syllablink'
        ];
        return parts.join('\n');
    }, [name, utr]);

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${APPROVAL_NUMBER}?text=${encodedMessage}`;
    const smsLink = `sms:${APPROVAL_NUMBER}?&body=${encodedMessage}`;

    return (
        <main style={{
            paddingTop: isMobile ? '120px' : '140px',
            paddingBottom: isMobile ? '60px' : '90px',
            background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.06) 0%, var(--bg-dark) 40%)',
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute',
                inset: '0',
                background: 'radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.08), transparent 55%)',
                pointerEvents: 'none'
            }} />
            <div className="container" style={{ maxWidth: '1040px', position: 'relative', zIndex: 1 }}>
                <div style={{ marginBottom: isMobile ? '1.5rem' : '2.5rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 12px',
                        borderRadius: '999px',
                        background: 'rgba(16, 185, 129, 0.12)',
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        fontSize: '0.75rem',
                        fontWeight: '900',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--primary)',
                        marginBottom: '1rem'
                    }}>
                        Premium Access
                    </div>
                    <h1 style={{
                        fontSize: isMobile ? '2rem' : '2.8rem',
                        fontWeight: '950',
                        color: 'var(--text-main)',
                        marginBottom: '0.75rem',
                        letterSpacing: '-0.03em'
                    }}>
                        Buy Premium (Cohort 2026)
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.95rem' : '1.05rem', lineHeight: '1.7', maxWidth: '720px' }}>
                        Scan the QR and complete the payment. Then send your UTR/transaction ID using WhatsApp or SMS for approval.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1.05fr 0.95fr',
                    gap: isMobile ? '1.5rem' : '2.5rem'
                }}>
                    <div style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-glass)',
                        borderRadius: '18px',
                        padding: isMobile ? '1.25rem' : '1.75rem',
                        boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '1rem'
                        }}>
                            <div style={{ fontWeight: '900', color: 'var(--text-main)' }}>Pay via UPI QR</div>
                            <div style={{ fontWeight: '900', color: 'var(--primary)' }}>INR {BUY_AMOUNT}</div>
                        </div>
                        <img
                            src={QR_SRC}
                            alt="UPI QR for premium"
                            style={{ width: '100%', borderRadius: '14px', border: '1px solid var(--border-glass)' }}
                        />
                        <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                            Using QR image from src/assets/qr-premium.jpeg.
                        </div>
                        <div style={{
                            marginTop: '1rem',
                            padding: '0.75rem 1rem',
                            borderRadius: '12px',
                            background: 'rgba(16, 185, 129, 0.06)',
                            border: '1px dashed rgba(16, 185, 129, 0.2)',
                            color: 'var(--text-muted)',
                            fontSize: '0.85rem'
                        }}>
                            Steps: 1) Scan QR  2) Pay INR {BUY_AMOUNT}  3) Send UTR for approval
                        </div>
                    </div>

                    <div style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-glass)',
                        borderRadius: '18px',
                        padding: isMobile ? '1.25rem' : '1.75rem',
                        boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)'
                    }}>
                        <div style={{ fontWeight: '900', color: 'var(--text-main)', marginBottom: '1rem' }}>Send approval request</div>

                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                            Your name
                        </label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            style={{
                                width: '100%',
                                padding: '12px 14px',
                                borderRadius: '10px',
                                border: '1px solid var(--border-glass)',
                                background: 'var(--bg-dark)',
                                color: 'var(--text-main)',
                                marginBottom: '1rem'
                            }}
                        />

                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                            Payment UTR / Transaction ID
                        </label>
                        <input
                            value={utr}
                            onChange={(e) => setUtr(e.target.value)}
                            placeholder="Enter UTR / Txn ID"
                            style={{
                                width: '100%',
                                padding: '12px 14px',
                                borderRadius: '10px',
                                border: '1px solid var(--border-glass)',
                                background: 'var(--bg-dark)',
                                color: 'var(--text-main)',
                                marginBottom: '1.5rem'
                            }}
                        />

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    padding: '12px 18px',
                                    borderRadius: '10px',
                                    background: 'var(--primary)',
                                    color: 'white',
                                    fontWeight: '900',
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flex: isMobile ? '1 1 100%' : '1 1 auto'
                                }}
                            >
                                Send WhatsApp Request
                            </a>
                            <a
                                href={smsLink}
                                style={{
                                    padding: '12px 18px',
                                    borderRadius: '10px',
                                    background: 'var(--bg-dark)',
                                    color: 'var(--text-main)',
                                    fontWeight: '900',
                                    textDecoration: 'none',
                                    border: '1px solid var(--border-glass)',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flex: isMobile ? '1 1 100%' : '1 1 auto'
                                }}
                            >
                                Send SMS Request
                            </a>
                        </div>

                        <div style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                            After payment, send the request. Approval will be shared via your message.
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BuyPremium;
