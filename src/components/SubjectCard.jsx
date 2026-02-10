import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { getReadCount } from '../data/dataManager';

const SubjectCard = ({ subject, index }) => {
    const Icon = LucideIcons[subject.icon] || LucideIcons.Book;
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [readCounts, setReadCounts] = useState({ concepts: 0, mcqs: 0 });

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleProgressUpdate = () => {
            setReadCounts({
                concepts: getReadCount(subject.id, 'concepts', subject.concepts || []),
                mcqs: getReadCount(subject.id, 'mcqs', subject.mcqs || [])
            });
        };
        window.addEventListener('progress-updated', handleProgressUpdate);
        return () => window.removeEventListener('progress-updated', handleProgressUpdate);
    }, [subject]);

    useEffect(() => {
        setReadCounts({
            concepts: getReadCount(subject.id, 'concepts', subject.concepts || []),
            mcqs: getReadCount(subject.id, 'mcqs', subject.mcqs || [])
        });
    }, [subject]);

    const getColors = (id) => {
        const colors = {
            os: { shadow: 'rgba(56, 189, 248, 0.4)', text: '#38bdf8' },
            dbms: { shadow: 'rgba(232, 121, 249, 0.4)', text: '#e879f9' },
            oops: { shadow: 'rgba(74, 222, 128, 0.4)', text: '#4ade80' },
            cn: { shadow: 'rgba(251, 146, 60, 0.4)', text: '#fb923c' },
            dsa: { shadow: 'rgba(129, 140, 248, 0.4)', text: '#818cf8' },
            sd: { shadow: 'rgba(248, 113, 113, 0.4)', text: '#f87171' },
            web: { shadow: 'rgba(45, 212, 191, 0.4)', text: '#2dd4bf' },
            cd: { shadow: 'rgba(167, 139, 250, 0.4)', text: '#a78bfa' },
            se: { shadow: 'rgba(251, 113, 133, 0.4)', text: '#fb7185' },
            ai: { shadow: 'rgba(250, 204, 21, 0.4)', text: '#facc15' },
            algo: { shadow: 'rgba(244, 63, 94, 0.4)', text: '#f43f5e' },
            hr: { shadow: 'rgba(20, 184, 166, 0.4)', text: '#14b8a6' }
        };
        return colors[id] || { shadow: 'rgba(16, 185, 129, 0.4)', text: 'var(--primary)' };
    };

    const c = getColors(subject.id);

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={!isMobile ? { y: -8 } : {}}
            transition={{ delay: index * 0.04, duration: 0.3 }}
            style={{ height: '100%' }}
        >
            <Link to={`/subject/${subject.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div style={{
                    padding: isMobile ? '1.5rem' : '2.5rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    background: 'rgba(0, 0, 0, 0.01)',
                    borderRadius: '16px',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    overflow: 'hidden',
                    transition: '0.2s',
                    cursor: 'pointer'
                }}>
                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: 'rgba(0, 0, 0, 0.02)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(0, 0, 0, 0.05)',
                            color: c.text
                        }}>
                            <Icon size={22} strokeWidth={2} />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <div style={{ fontSize: '0.65rem', fontWeight: '900', color: c.text, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                                Engineering Core
                            </div>
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: '900',
                                letterSpacing: '-0.02em',
                                marginBottom: '0.8rem',
                                color: 'var(--text-main)',
                                lineHeight: '1.2'
                            }}>
                                {subject.title}
                            </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', fontWeight: '500' }}>
                                {subject.description}
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: 'auto', position: 'relative', zIndex: 2 }}>
                        <div style={{
                            display: 'flex',
                            gap: '1.5rem',
                            padding: '1.2rem 0',
                            borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                            marginBottom: '1.2rem'
                        }}>
                            <div>
                                <div style={{ fontSize: '1rem', fontWeight: '900', color: 'var(--text-main)' }}>
                                    {readCounts.concepts}/{subject.concepts.length}
                                </div>
                                <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Notes Read</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '1rem', fontWeight: '900', color: 'var(--text-main)' }}>
                                    {readCounts.mcqs}/{subject.mcqs.length}
                                </div>
                                <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>MCQs Done</div>
                            </div>
                        </div>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '0.85rem',
                            fontWeight: '800',
                            color: 'var(--primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            Enter Archive <LucideIcons.ChevronRight size={14} />
                        </div>
                    </div>

                    {/* Gradient Accent */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '100px',
                        height: '100px',
                        background: `radial-gradient(circle at top right, ${c.shadow}, transparent 70%)`,
                        opacity: 0.1,
                        zIndex: 1
                    }}></div>
                </div>
            </Link>
        </motion.div>
    );
};

export default SubjectCard;
