import React, { useMemo, useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
const BUY_AMOUNT = '150';
const APPROVAL_NUMBER = '7986614646';
const UPI_ID = 'py562535-1@oksbi';
const PREMIUM_EMAIL = 'princeyadav76001@gmail.com';

const BuyPremium = () => {
    const { user, loading } = useAuth();
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

    const premiumNotes = useMemo(() => ([
        'online assessment system:',
        '',
        'Project purpose:',
        'This is full online test assessment platform,',
        '- user student can take quiz.',
        '- Admin can create, update edit, delete quizzes',
        '- student can submit answer',
        '- Result are stored and shown to user.',
        'This solve the real-world need of online test and evaluation',
        '',
        'Technology:',
        'Node.js, express js, MongoDB, socket.io',
        'Frontend: React, tailwind',
        'JWT -> JSON WEB TOKEN',
        'bcrypt - For password hashing -> Authentication and security',
        '',
        'Backend architecture:',
        'client -> HTTP request -> backend -> mongoDB',
        '',
        'authentication:',
        '- user signup',
        '- login -> generate JWT',
        '- protect routes with JWT middleware',
        'Just allow the server to verify identity without session',
        '',
        'quiz man menu:',
        '+ Create quiz',
        '+ Get quiz',
        '+ Submit answer',
        '+ Get result',
        '',
        'Rest API express',
        'Socket.io for real time communication',
        '',
        'API design:',
        'Post /api/signup',
        'Post /api/login',
        'Get /api/quiz',
        'Post /api/quiz',
        'Post /api/submit-quiz',
        'Get /api/result',
        '',
        'StatusCode: 200, 401, 400, 404',
        '',
        'Backend problem:',
        '1) Handling authentication securely -> password must be hashed (bcrypt)',
        '2) token must be signed and verified',
        '3) protected routes must check token validity',
        '',
        'New logic of question:',
        'a) Realtime? web socket or http polling?',
        'b) Frontend calculation? yes?',
        'socket-id direct express se attach nhi hota',
        'websocket work on top of http (it upgrades HTTP connection to persistent websocket connection)',
        '',
        'websocket:',
        '- maintain persistent connection',
        '- bi-directional communication',
        '- no need to refresh page',
        '',
        'How does socket connection initialize',
        'Where do you emit event',
        'How do you handle disconnect',
        'What happen if student refresh',
        'Did you use rooms?',
        '',
        'Every new client that connections get a unique socket,',
        'that socket is like a private communication channel',
        '1) emit sends event to server',
        '2) server processes it',
        '3) server respond with another event',
        '4) UI updates instantly',
        '',
        'CORS: allow cross-origin websocket communication',
        'Frontend and backend run on different port',
        '',
        'Rooms: rooms allow separate quiz session',
        '- multiple students in same quiz',
        '- broadcasting to specific group',
        'rooms = session isolation',
        '',
        'namespace: namespace separate admin socket, student socket, analytic socket',
        '',
        'Disconnect:',
        '- disconnect handled',
        '- cleaning memory',
        '- update session',
        '- prevent memory leak'
    ]), []);

    const canViewPremium = Boolean(user?.email && user.email.toLowerCase() === PREMIUM_EMAIL);

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
                        Pay using the UPI ID below. Then send your UTR/transaction ID using WhatsApp or SMS for approval.
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
                            <div style={{ fontWeight: '900', color: 'var(--text-main)' }}>Pay via UPI ID</div>
                            <div style={{ fontWeight: '900', color: 'var(--primary)' }}>INR {BUY_AMOUNT}</div>
                        </div>
                        <div style={{
                            padding: '1rem',
                            borderRadius: '14px',
                            border: '1px solid var(--border-glass)',
                            background: 'rgba(15, 23, 42, 0.35)',
                            fontSize: isMobile ? '1rem' : '1.1rem',
                            fontWeight: '900',
                            letterSpacing: '0.02em',
                            color: 'var(--text-main)',
                            textAlign: 'center'
                        }}>
                            {UPI_ID}
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
                            Steps: 1) Pay INR {BUY_AMOUNT} to {UPI_ID}  2) Send UTR for approval
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
            <section style={{ marginTop: isMobile ? '2rem' : '3rem', position: 'relative', zIndex: 1 }}>
                <div className="container" style={{ maxWidth: '1040px' }}>
                    <div style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-glass)',
                        borderRadius: '18px',
                        padding: isMobile ? '1.25rem' : '1.75rem',
                        boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)'
                    }}>
                        <div style={{ fontWeight: '900', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                            Premium Notes (MERN)
                        </div>
                        {loading && (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                Checking access...
                            </div>
                        )}
                        {!loading && !user && (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                Sign in to view these notes.
                            </div>
                        )}
                        {!loading && user && !canViewPremium && (
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                This content is restricted to the owner account.
                            </div>
                        )}
                        {!loading && user && canViewPremium && (
                            <pre style={{
                                marginTop: '0.75rem',
                                padding: isMobile ? '1rem' : '1.25rem',
                                borderRadius: '14px',
                                border: '1px solid var(--border-glass)',
                                background: 'rgba(15, 23, 42, 0.35)',
                                color: 'var(--text-main)',
                                fontSize: isMobile ? '0.85rem' : '0.95rem',
                                lineHeight: '1.7',
                                whiteSpace: 'pre-wrap'
                            }}>
                                {premiumNotes.join('\n')}
                            </pre>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BuyPremium;
