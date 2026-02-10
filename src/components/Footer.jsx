import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Github, Linkedin, Twitter, Mail, ChevronRight, Zap } from 'lucide-react';

const Footer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <footer style={{
            padding: isMobile ? '60px 0 40px' : '80px 0 50px',
            borderTop: '1px solid var(--border-glass)',
            marginTop: isMobile ? '60px' : '80px',
            background: 'var(--bg-card)',
            position: 'relative',
            zIndex: 1
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: isMobile ? '3rem' : '4rem',
                    marginBottom: isMobile ? '40px' : '80px'
                }}>

                    {/* Branding */}
                    <div style={{ maxWidth: isMobile ? '100%' : '300px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
                            <div style={{
                                width: '28px', height: '28px', borderRadius: '6px',
                                background: 'var(--primary)', display: 'flex',
                                alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 0 10px rgba(16, 185, 129, 0.3)'
                            }}>
                                <Zap size={14} fill="white" color="white" />
                            </div>
                            <span style={{ fontSize: '1.1rem', fontWeight: '950', letterSpacing: '-0.03em', color: 'var(--text-main)' }}>
                                Sylla<span style={{ color: 'var(--primary)' }}>blink</span>
                            </span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                            The definitive link between comprehensive engineering syllabi and technical career excellence.
                        </p>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            {[
                                { Icon: Github, href: 'https://github.com/' },
                                { Icon: Linkedin, href: 'https://www.linkedin.com/' },
                                { Icon: Twitter, href: 'https://twitter.com/' },
                                { Icon: Mail, href: 'mailto:hello@syllablink.com' }
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        width: '36px', height: '36px', borderRadius: '8px',
                                        background: 'var(--bg-card)', border: '1px solid var(--border-glass)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'var(--text-muted)', transition: '0.2s'
                                    }}
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    {['Platform', 'Archive'].map((title, idx) => (
                        <div key={title}>
                            <h4 style={{ fontSize: '0.75rem', fontWeight: '900', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
                                {title}
                            </h4>
                            <div style={{ display: 'grid', gap: '0.8rem' }}>
                                {(idx === 0
                                    ? [
                                        { label: 'Library', to: '/library' },
                                        { label: 'Interview Lab', to: '/interview-vault' },
                                        { label: 'Cheat Sheets', to: '/company-sheets' }
                                    ]
                                    : [
                                        { label: 'Core Track', to: '/subject/os' },
                                        { label: 'Adv Mock', to: '/subject/dsa' },
                                        { label: 'System Design', to: '/subject/sd' }
                                    ]
                                ).map(link => (
                                    <Link key={link.label} to={link.to} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <ChevronRight size={12} /> {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Status */}
                    {!isMobile && (
                        <div style={{ padding: '1.5rem', background: 'rgba(16, 185, 129, 0.02)', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', marginBottom: '0.75rem' }}>
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                                <span style={{ fontSize: '0.65rem', fontWeight: '900', textTransform: 'uppercase' }}>Preparation Active</span>
                            </div>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                                Systems online. Real-time interview metrics and curriculum synchronization active.
                            </p>
                        </div>
                    )}
                </div>

                <div style={{
                    paddingTop: '30px',
                    borderTop: '1px solid var(--border-glass)',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: isMobile ? 'flex-start' : 'center',
                    gap: '20px',
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem'
                }}>
                    <p>© 2026 Syllablink. Engineered for the next generation.</p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="https://www.termsfeed.com/privacy-policy/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
                        <a href="https://owasp.org/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Security</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
