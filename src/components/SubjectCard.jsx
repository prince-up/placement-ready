import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';

const SubjectCard = ({ subject, index }) => {
    const Icon = LucideIcons[subject.icon] || LucideIcons.Book;

    // Assign unique colors based on subject ID for better visual distinction
    const getColors = (id) => {
        const colors = {
            os: { shadow: 'rgba(56, 189, 248, 0.2)', iconBg: 'rgba(56, 189, 248, 0.1)', text: '#38bdf8' },
            dbms: { shadow: 'rgba(232, 121, 249, 0.2)', iconBg: 'rgba(232, 121, 249, 0.1)', text: '#e879f9' },
            oops: { shadow: 'rgba(74, 222, 128, 0.2)', iconBg: 'rgba(74, 222, 128, 0.1)', text: '#4ade80' },
            cn: { shadow: 'rgba(251, 146, 60, 0.2)', iconBg: 'rgba(251, 146, 60, 0.1)', text: '#fb923c' },
            dsa: { shadow: 'rgba(129, 140, 248, 0.2)', iconBg: 'rgba(129, 140, 248, 0.1)', text: '#818cf8' },
            sd: { shadow: 'rgba(248, 113, 113, 0.2)', iconBg: 'rgba(248, 113, 113, 0.1)', text: '#f87171' },
            web: { shadow: 'rgba(45, 212, 191, 0.2)', iconBg: 'rgba(45, 212, 191, 0.1)', text: '#2dd4bf' },
            cd: { shadow: 'rgba(167, 139, 250, 0.2)', iconBg: 'rgba(167, 139, 250, 0.1)', text: '#a78bfa' },
            se: { shadow: 'rgba(251, 113, 133, 0.2)', iconBg: 'rgba(251, 113, 133, 0.1)', text: '#fb7185' },
            ai: { shadow: 'rgba(250, 204, 21, 0.2)', iconBg: 'rgba(250, 204, 21, 0.1)', text: '#facc15' }
        };
        return colors[id] || { shadow: 'rgba(14, 165, 233, 0.2)', iconBg: 'rgba(14, 165, 233, 0.1)', text: 'var(--primary)' };
    };

    const c = getColors(subject.id);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            style={{ height: '100%' }}
        >
            <Link to={`/subject/${subject.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div className="glass-card" style={{
                    padding: '3rem 2.5rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
                }}>
                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <div style={{
                            width: '72px',
                            height: '72px',
                            borderRadius: '24px',
                            background: c.iconBg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '2.5rem',
                            border: `1px solid ${c.shadow}`,
                            color: c.text,
                            boxShadow: `0 12px 24px -5px ${c.shadow}`
                        }}>
                            <Icon size={36} strokeWidth={1.5} />
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: c.text }}></div>
                                <span style={{
                                    fontSize: '0.7rem',
                                    fontWeight: '900',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.2em',
                                    color: 'var(--text-muted)'
                                }}>
                                    Core Engineering
                                </span>
                            </div>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '900', letterSpacing: '-0.03em', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
                                {subject.title}
                            </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', opacity: 0.8 }}>
                                {subject.description}
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: 'auto', position: 'relative', zIndex: 2 }}>
                        <div style={{ display: 'flex', gap: '3rem', marginBottom: '2rem', padding: '1.5rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                            <div>
                                <div style={{ fontSize: '1.4rem', fontWeight: '900', color: 'white' }}>{subject.concepts.length}</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Modules</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.4rem', fontWeight: '900', color: 'white' }}>{subject.mcqs.length}</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Questions</div>
                            </div>
                        </div>

                        <div className="btn-secondary" style={{
                            width: '100%',
                            justifyContent: 'space-between',
                            padding: '14px 24px',
                            borderRadius: '16px',
                            background: 'rgba(255,255,255,0.02)',
                            fontSize: '0.9rem',
                            borderColor: 'transparent'
                        }}>
                            <span style={{ fontWeight: '800' }}>Explore Subject</span>
                            <LucideIcons.ArrowRight size={20} />
                        </div>
                    </div>

                    {/* Background Accent */}
                    <div style={{
                        position: 'absolute',
                        bottom: '-10%',
                        right: '-10%',
                        width: '200px',
                        height: '200px',
                        background: c.shadow,
                        filter: 'blur(80px)',
                        borderRadius: '50%',
                        opacity: 0.25,
                        zIndex: 1
                    }}></div>
                </div>
            </Link>
        </motion.div>
    );
};

export default SubjectCard;
