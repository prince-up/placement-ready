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
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [activeSlideMode, setActiveSlideMode] = useState('project');

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

    const premiumSlides = useMemo(() => ([
        {
            title: 'Online Learning Management System (AstraLMS)',
            questions: [
                {
                    title: 'Part 1 - Basic',
                    items: [
                        'What problem does AstraLMS solve?',
                        'Why MongoDB over SQL?',
                        'Explain your folder structure (routes, controllers, models, middleware, server.js).',
                        'How does JWT work?',
                        'Authentication vs authorization?',
                        'How do you protect routes?',
                        'What is middleware?',
                        'How does Socket.IO work?',
                        'What happens when user disconnects?',
                        'Where do you store JWT?'
                    ]
                },
                {
                    title: 'Part 2 - Intermediate',
                    items: [
                        'How do you handle multiple students at the same time?',
                        'How do you keep score consistent?',
                        'WebSocket vs HTTP?',
                        'What if socket drops?',
                        'How do you prevent cheating?',
                        'How do you validate input?',
                        'Explain the Node.js event loop.',
                        'How do you handle concurrent DB writes?',
                        'What schema changes help scalability?',
                        'How do you implement pagination?'
                    ]
                },
                {
                    title: 'Part 3 - Advanced',
                    items: [
                        'How would you scale WebSocket?',
                        'How do you prevent memory leaks?',
                        'How do you avoid race conditions?',
                        'Stateless vs stateful auth?',
                        'JWT structure?',
                        'What if a token is stolen?',
                        'How do refresh tokens work?',
                        'How would you build a real-time leaderboard?',
                        'Indexing strategies for performance?',
                        'How would you handle 10,000 users?'
                    ]
                },
                {
                    title: 'Part 4 - Killer (General)',
                    items: [
                        'How would you break into microservices?',
                        'Where are your bottlenecks?',
                        'Security vulnerabilities you must fix?',
                        'What makes it production ready?',
                        'Explain CAP theorem in distributed systems.',
                        'Why does WebSocket run over TCP?',
                        'Process vs thread?',
                        'Node.js concurrency model?',
                        'What if MongoDB crashes?',
                        'How do you apply rate limiting?'
                    ]
                },
                {
                    title: 'Bonus',
                    items: [
                        'Biggest mistake you made?',
                        'What would you improve next?',
                        'Most challenging part?',
                        'If not MongoDB, what would you use?',
                        'How would you handle 1 lakh users?'
                    ]
                }
            ],
            notes: [
                {
                    title: 'Online assessment system',
                    items: [
                        'Project purpose: This is full online test assessment platform.',
                        'User student can take quiz.',
                        'Admin can create, update edit, delete quizzes.',
                        'Student can submit answer.',
                        'Result are stored and shown to user.',
                        'This solve the real-world need of online test and evaluation.'
                    ]
                },
                {
                    title: 'Technology',
                    items: [
                        'Node.js, express js, MongoDB, socket.io',
                        'Frontend: React, tailwind',
                        'JWT -> JSON WEB TOKEN',
                        'bcrypt - For password hashing -> Authentication and security'
                    ]
                },
                {
                    title: 'Backend architecture',
                    items: [
                        'client -> HTTP request -> backend -> mongoDB'
                    ]
                },
                {
                    title: 'Authentication',
                    items: [
                        'user signup',
                        'login -> generate JWT',
                        'protect routes with JWT middleware',
                        'Just allow the server to verify identity without session'
                    ]
                },
                {
                    title: 'Quiz main menu',
                    items: [
                        'Create quiz',
                        'Get quiz',
                        'Submit answer',
                        'Get result'
                    ]
                },
                {
                    title: 'API design',
                    items: [
                        'Post /api/signup',
                        'Post /api/login',
                        'Get /api/quiz',
                        'Post /api/quiz',
                        'Post /api/submit-quiz',
                        'Get /api/result'
                    ]
                },
                {
                    title: 'Status codes',
                    items: [
                        '200, 401, 400, 404'
                    ]
                },
                {
                    title: 'Backend problems',
                    items: [
                        'Handling authentication securely -> password must be hashed (bcrypt)',
                        'token must be signed and verified',
                        'protected routes must check token validity'
                    ]
                },
                {
                    title: 'Realtime and websocket',
                    items: [
                        'Realtime? web socket or http polling?',
                        'Frontend calculation? yes?',
                        'socket-id direct express se attach nhi hota',
                        'websocket work on top of http (it upgrades HTTP connection to persistent websocket connection)',
                        'maintain persistent connection',
                        'bi-directional communication',
                        'no need to refresh page',
                        'How does socket connection initialize',
                        'Where do you emit event',
                        'How do you handle disconnect',
                        'What happen if student refresh',
                        'Did you use rooms?',
                        'Every new client that connections get a unique socket, that socket is like a private communication channel',
                        'emit sends event to server',
                        'server processes it',
                        'server respond with another event',
                        'UI updates instantly'
                    ]
                },
                {
                    title: 'CORS, rooms, namespace, disconnect',
                    items: [
                        'CORS: allow cross-origin websocket communication',
                        'Frontend and backend run on different port',
                        'Rooms: rooms allow separate quiz session',
                        'multiple students in same quiz',
                        'broadcasting to specific group',
                        'rooms = session isolation',
                        'namespace separate admin socket, student socket, analytic socket',
                        'disconnect handled',
                        'cleaning memory',
                        'update session',
                        'prevent memory leak'
                    ]
                },
                {
                    title: 'JWT token',
                    items: [
                        'JWT -> JSON WEB TOKEN',
                        'public/private cryptography',
                        'from public cryptography must data encrypt that data only decrypt my with only your private key',
                        'Just also work on private cryptography',
                        'JWT - fully protected',
                        'jwt -> access-token api',
                        'stateless / stateful',
                        'stateless -> JWT',
                        'stateful -> database store at any site (place)',
                        'encryption algorithm => utf'
                    ]
                },
                {
                    title: 'JWT components',
                    items: [
                        'header: which algo you are using',
                        'info: payload',
                        'signature: data mapped key',
                        'JWT - made by 3 component and string format',
                        'JSON web token use on open method of authentication (claim security btw two parties)'
                    ]
                },
                {
                    title: 'Refresh token and flow',
                    items: [
                        'token are basically expire within 15 minute and after request that generate new one with mechanism it called refresh token',
                        'login (username/password)',
                        'server validates credential',
                        'issue JWT token',
                        'API request (JWT token)',
                        'validate token access'
                    ]
                },
                {
                    title: 'Authentication vs authorization',
                    items: [
                        'Authentication for login and signup -> any',
                        'Authorization: resources access like teacher portal you want admin user',
                        'uses jwt',
                        '-> authentication, authorization, communication',
                        'database'
                    ]
                }
            ]
        },
        {
            title: 'DeployFlow - CI/CD Automation System (Prince CV 2)',
            questions: [
                {
                    title: 'Part 1 - Basic',
                    items: [
                        'What is CI/CD?',
                        'What is Jenkins?',
                        'What is a Jenkins pipeline?',
                        'How does a webhook work?',
                        'How did you trigger Jenkins?',
                        'What happens when build fails?',
                        'What is async/await?',
                        'Why Node.js for this project?'
                    ]
                },
                {
                    title: 'Part 2 - Intermediate',
                    items: [
                        'How did you authenticate with Jenkins?',
                        'What happens if Jenkins is down?',
                        'How do you handle async pipelines?',
                        'How would you scale this system?',
                        'How do you track build logs?',
                        'What is idempotency and why it matters here?',
                        'How do you prevent duplicate triggers?',
                        'What is Docker role in CI/CD?',
                        'Build vs deploy?',
                        'Webhook internal flow end-to-end?'
                    ]
                },
                {
                    title: 'Part 3 - Advanced',
                    items: [
                        'What is HTTP upgrade for WebSocket?',
                        'Why use a job queue like BullMQ?',
                        'How do you handle backpressure?',
                        'How do you handle duplicate webhooks?',
                        'How do you verify GitHub webhook signature?',
                        'How would you add RBAC?',
                        'How would you containerize the system?',
                        'How do you secure tokens?',
                        'How do you apply load balancing?',
                        'How do you design logging and monitoring?'
                    ]
                },
                {
                    title: 'Part 4 - Killer (General)',
                    items: [
                        'How would you break into microservices?',
                        'Where are your bottlenecks?',
                        'Security vulnerabilities you must fix?',
                        'What makes it production ready?',
                        'Explain CAP theorem in distributed systems.',
                        'Why does WebSocket run over TCP?',
                        'Process vs thread?',
                        'Node.js concurrency model?',
                        'What if MongoDB crashes?',
                        'How do you apply rate limiting?'
                    ]
                },
                {
                    title: 'Bonus',
                    items: [
                        'Biggest mistake you made?',
                        'What would you improve next?',
                        'Most challenging part?',
                        'If not MongoDB, what would you use?',
                        'How would you handle 1 lakh users?'
                    ]
                }
            ],
            notes: [
                {
                    title: 'Problem statement',
                    items: [
                        'Developers manually trigger Jenkins pipelines and monitor builds separately, which is inefficient and lacks visibility.',
                        'DeployFlow provides a centralized dashboard to trigger, monitor, and track CI/CD pipelines integrated with GitHub.'
                    ]
                },
                {
                    title: 'System architecture',
                    items: [
                        'Frontend: React + Tailwind',
                        'Backend: Node.js + Express',
                        'Integrations: Jenkins REST API + GitHub webhooks',
                        'Storage (optional): MongoDB for logs/history',
                        'Flow: frontend -> backend -> Jenkins API; GitHub webhook triggers backend'
                    ]
                },
                {
                    title: 'Backend deep understanding',
                    items: [
                        'Secure APIs for triggering pipelines',
                        'Jenkins API integration using API token',
                        'Async handling for build status and polling',
                        'Error handling middleware and retries',
                        'Authentication on protected routes (if implemented)'
                    ]
                },
                {
                    title: 'Hardest backend problem',
                    items: [
                        'Jenkins jobs execute asynchronously, so tracking build status was challenging.',
                        'Used async/await with structured API calls and error handling for reliable status updates.',
                        'Fallback messaging when Jenkins is down or slow.'
                    ]
                },
                {
                    title: 'DevOps concepts to know',
                    items: [
                        'CI, CD, pipeline, Jenkinsfile, webhook, build artifact',
                        'Docker role in build/test environment (if used)',
                        'Secure trigger using API tokens + auth middleware'
                    ]
                },
                {
                    title: 'Security and scaling',
                    items: [
                        'Secure pipeline trigger with API tokens and authenticated users only',
                        'Scale: add job queue (Redis/BullMQ), cache recent statuses',
                        'Horizontal scaling with load balancer'
                    ]
                },
                {
                    title: 'Compare projects',
                    items: [
                        'AstraLMS: real-time system complexity (JWT + Socket)',
                        'DeployFlow: external tool integration + DevOps complexity',
                        'Do not claim features you did not implement (queue, Redis, Docker prod)'
                    ]
                }
            ]
        }
    ]), []);

    const canViewPremium = Boolean(user?.email && user.email.toLowerCase() === PREMIUM_EMAIL);
    const premiumStats = useMemo(() => {
        const totalSections = premiumSlides.reduce((sum, slide) => sum + slide.notes.length, 0);
        const totalItems = premiumSlides.reduce(
            (sum, slide) => sum + slide.notes.reduce((noteSum, note) => noteSum + note.items.length, 0),
            0
        );
        return { totalSections, totalItems };
    }, [premiumSlides]);

    const activeSlide = premiumSlides[activeSlideIndex];
    const handleSlideChange = (index) => {
        setActiveSlideIndex(index);
    };
    const slideThemes = useMemo(() => ([
        {
            accent: '#10b981',
            soft: 'rgba(16, 185, 129, 0.14)',
            glow: 'rgba(16, 185, 129, 0.28)'
        },
        {
            accent: '#38bdf8',
            soft: 'rgba(56, 189, 248, 0.16)',
            glow: 'rgba(56, 189, 248, 0.28)'
        }
    ]), []);
    const activeTheme = slideThemes[activeSlideIndex] || slideThemes[0];
    const handlePrevSlide = () => {
        setActiveSlideIndex((prev) => (prev - 1 + premiumSlides.length) % premiumSlides.length);
    };
    const handleNextSlide = () => {
        setActiveSlideIndex((prev) => (prev + 1) % premiumSlides.length);
    };

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
                        border: '1px solid rgba(148, 163, 184, 0.3)',
                        borderRadius: '22px',
                        padding: isMobile ? '1.4rem' : '2.2rem',
                        boxShadow: '0 30px 80px rgba(15, 23, 42, 0.14)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: `radial-gradient(circle at 85% 10%, ${activeTheme.soft}, transparent 55%)`,
                            pointerEvents: 'none'
                        }} />
                        <div style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            alignItems: isMobile ? 'flex-start' : 'center',
                            justifyContent: 'space-between',
                            gap: '1.25rem',
                            marginBottom: '1rem'
                        }}>
                            <div>
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '6px 12px',
                                    borderRadius: '999px',
                                    background: 'rgba(255, 255, 255, 0.75)',
                                    border: `1px solid ${activeTheme.glow}`,
                                    fontSize: '0.7rem',
                                    fontWeight: '900',
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    color: activeTheme.accent,
                                    marginBottom: '0.6rem'
                                }}>
                                    Interview Slides
                                </div>
                                <div style={{
                                    fontWeight: '950',
                                    color: '#0f172a',
                                    fontSize: isMobile ? '1.35rem' : '1.8rem',
                                    letterSpacing: '-0.02em'
                                }}>
                                    Project Deep Dive
                                </div>
                                <div style={{
                                    color: '#475569',
                                    fontSize: isMobile ? '0.9rem' : '0.95rem',
                                    marginTop: '0.35rem'
                                }}>
                                    Switch between projects and review the key points in one focused view.
                                </div>
                            </div>
                            <div style={{
                                display: 'flex',
                                gap: '0.75rem',
                                flexWrap: 'wrap'
                            }}>
                                <div style={{
                                    padding: '8px 12px',
                                    borderRadius: '999px',
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    border: '1px solid rgba(148, 163, 184, 0.3)',
                                    color: '#0f172a',
                                    fontWeight: '800',
                                    fontSize: '0.8rem'
                                }}>
                                    Slide {activeSlideIndex + 1} of {premiumSlides.length}
                                </div>
                                <div style={{
                                    padding: '8px 12px',
                                    borderRadius: '999px',
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    border: '1px solid rgba(148, 163, 184, 0.3)',
                                    color: '#475569',
                                    fontWeight: '700',
                                    fontSize: '0.8rem'
                                }}>
                                    {premiumStats.totalSections} sections
                                </div>
                                <div style={{
                                    padding: '8px 12px',
                                    borderRadius: '999px',
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    border: '1px solid rgba(148, 163, 184, 0.3)',
                                    color: '#475569',
                                    fontWeight: '700',
                                    fontSize: '0.8rem'
                                }}>
                                    {premiumStats.totalItems} points
                                </div>
                            </div>
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
                            <div style={{
                                marginTop: '0.75rem',
                                display: 'grid',
                                gap: isMobile ? '1rem' : '1.25rem',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.75rem',
                                    alignItems: 'center'
                                }}>
                                    <div style={{
                                        padding: '6px 12px',
                                        borderRadius: '999px',
                                        background: 'rgba(16, 185, 129, 0.12)',
                                        border: '1px solid rgba(16, 185, 129, 0.2)',
                                        color: 'var(--primary)',
                                        fontWeight: '900',
                                        fontSize: '0.75rem',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase'
                                    }}>
                                        Access Granted
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.75rem',
                                    marginTop: '0.5rem',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '0.6rem',
                                        padding: '6px',
                                        borderRadius: '999px',
                                        background: 'rgba(255, 255, 255, 0.85)',
                                        border: '1px solid rgba(148, 163, 184, 0.3)'
                                    }}>
                                        {premiumSlides.map((slide, index) => (
                                            <button
                                                key={slide.title}
                                                onClick={() => handleSlideChange(index)}
                                                type="button"
                                                style={{
                                                    padding: '10px 18px',
                                                    borderRadius: '999px',
                                                    border: activeSlideIndex === index
                                                        ? `1px solid ${activeTheme.glow}`
                                                        : '1px solid transparent',
                                                    background: activeSlideIndex === index
                                                        ? `linear-gradient(135deg, ${activeTheme.soft}, rgba(255, 255, 255, 0.85))`
                                                        : 'rgba(255, 255, 255, 0.2)',
                                                    color: activeSlideIndex === index
                                                        ? '#0f172a'
                                                        : '#475569',
                                                    fontWeight: '800',
                                                    fontSize: '0.85rem',
                                                    cursor: 'pointer',
                                                    boxShadow: activeSlideIndex === index
                                                        ? `0 10px 22px rgba(15, 23, 42, 0.12)`
                                                        : 'none'
                                                }}
                                            >
                                                {slide.title}
                                            </button>
                                        ))}
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        gap: '0.5rem'
                                    }}>
                                        <button
                                            type="button"
                                            onClick={handlePrevSlide}
                                            style={{
                                                padding: '10px 16px',
                                                borderRadius: '12px',
                                                border: '1px solid rgba(148, 163, 184, 0.35)',
                                                background: 'rgba(255, 255, 255, 0.85)',
                                                color: '#0f172a',
                                                fontWeight: '800',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            Prev
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleNextSlide}
                                            style={{
                                                padding: '10px 16px',
                                                borderRadius: '12px',
                                                border: `1px solid ${activeTheme.glow}`,
                                                background: `linear-gradient(135deg, ${activeTheme.soft}, rgba(255, 255, 255, 0.9))`,
                                                color: '#0f172a',
                                                fontWeight: '800',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.6rem',
                                    marginTop: '0.5rem'
                                }}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveSlideMode('project')}
                                        style={{
                                            padding: '8px 14px',
                                            borderRadius: '999px',
                                            border: activeSlideMode === 'project'
                                                ? `1px solid ${activeTheme.glow}`
                                                : '1px solid rgba(148, 163, 184, 0.35)',
                                            background: activeSlideMode === 'project'
                                                ? `linear-gradient(135deg, ${activeTheme.soft}, rgba(255, 255, 255, 0.9))`
                                                : 'rgba(255, 255, 255, 0.7)',
                                            color: activeSlideMode === 'project'
                                                ? '#0f172a'
                                                : '#475569',
                                            fontWeight: '800',
                                            fontSize: '0.8rem',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Project Slide
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setActiveSlideMode('questions')}
                                        style={{
                                            padding: '8px 14px',
                                            borderRadius: '999px',
                                            border: activeSlideMode === 'questions'
                                                ? `1px solid ${activeTheme.glow}`
                                                : '1px solid rgba(148, 163, 184, 0.35)',
                                            background: activeSlideMode === 'questions'
                                                ? `linear-gradient(135deg, ${activeTheme.soft}, rgba(255, 255, 255, 0.9))`
                                                : 'rgba(255, 255, 255, 0.7)',
                                            color: activeSlideMode === 'questions'
                                                ? '#0f172a'
                                                : '#475569',
                                            fontWeight: '800',
                                            fontSize: '0.8rem',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Questions Slide
                                    </button>
                                </div>
                                <div style={{
                                    height: '6px',
                                    borderRadius: '999px',
                                    background: 'rgba(148, 163, 184, 0.25)',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        height: '100%',
                                        width: `${((activeSlideIndex + 1) / premiumSlides.length) * 100}%`,
                                        background: `linear-gradient(90deg, ${activeTheme.accent}, rgba(255, 255, 255, 0.7))`,
                                        transition: 'width 0.35s ease'
                                    }} />
                                </div>
                                {activeSlideMode === 'project' ? (
                                    <div
                                        key={`${activeSlide.title}-project`}
                                        style={{
                                            padding: isMobile ? '1.1rem' : '1.6rem',
                                            borderRadius: '18px',
                                            border: `1px solid ${activeTheme.glow}`,
                                            background: `linear-gradient(135deg, rgba(255, 255, 255, 0.65),
                                             ${activeTheme.soft})`,
                                            marginTop: '1rem',
                                            opacity: 1,
                                            transform: 'translateY(0)',
                                            transition: 'opacity 0.3s ease, transform 0.3s ease'
                                        }}
                                    >
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            gap: '1rem',
                                            marginBottom: '1rem'
                                        }}>
                                            <div style={{
                                                fontWeight: '900',
                                                color: '#0f172a',
                                                fontSize: isMobile ? '1rem' : '1.1rem'
                                            }}>
                                                {activeSlide.title}
                                            </div>
                                            <div style={{
                                                padding: '6px 12px',
                                                borderRadius: '999px',
                                                background: 'rgba(255, 255, 255, 0.9)',
                                                border: '1px solid rgba(148, 163, 184, 0.3)',
                                                color: '#475569',
                                                fontSize: '0.75rem',
                                                fontWeight: '700'
                                            }}>
                                                {activeSlide.notes.length} sections in this slide
                                            </div>
                                        </div>
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(260px, 1fr))',
                                            gap: isMobile ? '1rem' : '1.25rem'
                                        }}>
                                            {activeSlide.notes.map((section) => (
                                                <div
                                                    key={section.title}
                                                    style={{
                                                        padding: isMobile ? '1rem' : '1.25rem',
                                                        borderRadius: '14px',
                                                        border: '1px solid rgba(15, 23, 42, 0.08)',
                                                        background: 'rgba(255, 255, 255, 0.92)',
                                                        boxShadow: '0 18px 35px rgba(15, 23, 42, 0.12)'
                                                    }}
                                                >
                                                    <div style={{
                                                        fontWeight: '900',
                                                        color: '#0f172a',
                                                        marginBottom: '0.65rem',
                                                        fontSize: isMobile ? '0.95rem' : '1rem'
                                                    }}>
                                                        {section.title}
                                                    </div>
                                                    <ul style={{
                                                        margin: 0,
                                                        paddingLeft: '1.25rem',
                                                        color: '#334155',
                                                        fontSize: isMobile ? '0.85rem' : '0.95rem',
                                                        lineHeight: '1.7'
                                                    }}>
                                                        {section.items.map((item, index) => (
                                                            <li key={`${section.title}-${index}`}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        key={`${activeSlide.title}-questions`}
                                        style={{
                                            padding: isMobile ? '1.1rem' : '1.6rem',
                                            borderRadius: '18px',
                                            border: `1px solid ${activeTheme.glow}`,
                                            background: `linear-gradient(135deg, rgba(255, 255, 255, 0.7), ${activeTheme.soft})`,
                                            marginTop: '1rem',
                                            display: 'grid',
                                            gap: '0.75rem'
                                        }}
                                    >
                                        <div style={{
                                            fontWeight: '900',
                                            color: '#0f172a',
                                            fontSize: isMobile ? '1rem' : '1.1rem'
                                        }}>
                                            Interview Questions
                                        </div>
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(260px, 1fr))',
                                            gap: isMobile ? '1rem' : '1.25rem'
                                        }}>
                                            {activeSlide.questions.map((section) => (
                                                <div
                                                    key={`${activeSlide.title}-questions-${section.title}`}
                                                    style={{
                                                        padding: isMobile ? '1rem' : '1.25rem',
                                                        borderRadius: '14px',
                                                        border: '1px solid rgba(15, 23, 42, 0.08)',
                                                        background: 'rgba(255, 255, 255, 0.94)',
                                                        boxShadow: '0 18px 35px rgba(15, 23, 42, 0.12)'
                                                    }}
                                                >
                                                    <div style={{
                                                        fontWeight: '900',
                                                        color: '#0f172a',
                                                        marginBottom: '0.65rem',
                                                        fontSize: isMobile ? '0.95rem' : '1rem'
                                                    }}>
                                                        {section.title}
                                                    </div>
                                                    <ul style={{
                                                        margin: 0,
                                                        paddingLeft: '1.25rem',
                                                        color: '#334155',
                                                        fontSize: isMobile ? '0.85rem' : '0.95rem',
                                                        lineHeight: '1.7'
                                                    }}>
                                                        {section.items.map((item, index) => (
                                                            <li key={`${section.title}-${index}`}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BuyPremium;
