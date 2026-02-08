import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Github, Linkedin, Twitter, Mail, ExternalLink, ChevronRight } from 'lucide-react';

const Footer = () => {

    return (
        <footer style={{
            padding: '120px 0 60px',
            borderTop: '1px solid var(--border-glass)',
            marginTop: '150px',
            background: 'linear-gradient(to bottom, transparent, rgba(14, 165, 233, 0.05))',
            position: 'relative',
            zIndex: 1
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
                opacity: 0.5
            }} />

            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '5rem',
                    marginBottom: '80px',
                    textAlign: 'left'
                }}>

                    {/* Brand Column */}
                    <div style={{ maxWidth: '320px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
                            <div style={{
                                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                padding: '10px',
                                borderRadius: '12px',
                                display: 'flex',
                                boxShadow: '0 8px 20px rgba(14, 165, 233, 0.3)'
                            }}>
                                <GraduationCap size={24} color="white" />
                            </div>
                            <span style={{ fontSize: '1.5rem', fontWeight: '900', letterSpacing: '-0.02em' }}>
                                Placement<span className="glow-text">Ready</span>
                            </span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                            The ultimate engineering companion. Master your technical foundation and communication skills to ace your dream interview.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            {[
                                { icon: Github, url: "https://github.com/prince-up" },
                                { icon: Linkedin, url: "https://www.linkedin.com/in/prince-yadav-4t/" },
                                { icon: Twitter, url: "https://x.com/prince__up" },
                                { icon: Mail, url: "mailto:princeyadav76001@gmail.com" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        width: '42px',
                                        height: '42px',
                                        borderRadius: '12px',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid var(--border-glass)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--text-muted)',
                                        transition: '0.3s'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.color = 'var(--primary)';
                                        e.currentTarget.style.borderColor = 'var(--primary)';
                                        e.currentTarget.style.background = 'rgba(14, 165, 233, 0.05)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.color = 'var(--text-muted)';
                                        e.currentTarget.style.borderColor = 'var(--border-glass)';
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                    }}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            Platform
                        </h4>
                        <div style={{ display: 'grid', gap: '1.2rem' }}>
                            {[
                                { name: 'Dashboard', path: '/' },
                                { name: 'Personal Vault', path: '/library' },
                                { name: 'HR Interview Lab', path: '/interview-vault' },
                                { name: 'Company Sheets', path: '/company-sheets' }
                            ].map(link => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    style={{
                                        color: 'var(--text-muted)',
                                        textDecoration: 'none',
                                        fontSize: '0.95rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        transition: '0.2s'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.color = 'var(--primary)';
                                        e.currentTarget.style.transform = 'translateX(5px)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.color = 'var(--text-muted)';
                                        e.currentTarget.style.transform = 'translateX(0)';
                                    }}
                                >
                                    <ChevronRight size={14} /> {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '2rem' }}>Core Modules</h4>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {['Operating Systems', 'Database Systems', 'OOPs Concepts', 'Networking'].map(item => (
                                <div
                                    key={item}
                                    style={{
                                        color: 'var(--text-muted)',
                                        fontSize: '0.95rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--border-glass)' }}></div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Credits/Status */}
                    <div className="glass-card" style={{ padding: '2rem', background: 'rgba(16, 185, 129, 0.02)', borderColor: 'rgba(16, 185, 129, 0.1)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#10b981', marginBottom: '1rem' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
                            <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase' }}>System Live</span>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                            Daily updates in progress. Preparation mode active. Good luck with your placements!
                        </p>
                    </div>
                </div>

                <div style={{
                    paddingTop: '40px',
                    borderTop: '1px solid var(--border-glass)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem'
                }}>
                    <p>© 2026 <span style={{ fontWeight: '700', color: 'var(--text-main)' }}>PlacementReady</span>. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
