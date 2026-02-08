import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';

const SubjectCard = ({ subject, index }) => {
    const Icon = LucideIcons[subject.icon] || LucideIcons.Book;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <Link to={`/subject/${subject.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="glass-card" style={{ padding: '2rem', height: '100%', cursor: 'pointer' }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '16px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.5rem',
                        border: '1px solid var(--border-glass)'
                    }}>
                        <Icon size={32} className="glow-text" style={{ color: 'var(--primary)' }} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{subject.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '1.5rem' }}>
                        {subject.description}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '600' }}>
                        Explore Module <LucideIcons.ArrowRight size={18} />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default SubjectCard;
