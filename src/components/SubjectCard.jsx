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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            transition={{ delay: index * 0.05 }}
            style={{ height: '100%' }}
        >
            <Link to={`/subject/${subject.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div className="glass-card" style={{
                    padding: '2.5rem',
                    height: '100%',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid var(--border-glass)',
                    background: `linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%)`
                }}>
                    {/* Glowing background hint */}
                    <div style={{
                        position: 'absolute',
                        top: '-20%',
                        right: '-20%',
                        width: '150px',
                        height: '150px',
                        background: c.shadow,
                        filter: 'blur(60px)',
                        borderRadius: '50%',
                        zIndex: 0,
                        opacity: 0.4
                    }} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '18px',
                            background: c.iconBg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '2rem',
                            border: `1px solid ${c.shadow}`,
                            color: c.text,
                            boxShadow: `0 8px 16px ${c.shadow}`
                        }}>
                            <Icon size={32} />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <span style={{
                                fontSize: '0.65rem',
                                fontWeight: '900',
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                color: 'var(--text-muted)',
                                marginBottom: '0.5rem',
                                display: 'block'
                            }}>
                                Engineering Core
                            </span>
                            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
                                {subject.title}
                            </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', height: '3.2rem', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}>
                                {subject.description}
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: 'auto', position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem', padding: '1rem 0', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--text-main)' }}>{subject.concepts.length}</span>
                                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '800', textTransform: 'uppercase' }}>Notes</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--text-main)' }}>{subject.mcqs.length}</span>
                                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '800', textTransform: 'uppercase' }}>MCQs</span>
                            </div>
                        </div>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '12px 16px',
                            background: 'rgba(255,255,255,0.02)',
                            borderRadius: '12px',
                            border: '1px solid var(--border-glass)',
                            transition: 'tasks 0.3s'
                        }}>
                            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: c.text }}>Explore Module</span>
                            <LucideIcons.ArrowUpRight size={18} style={{ color: c.text }} />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default SubjectCard;
