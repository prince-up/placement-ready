import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, ArrowLeft, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div style={{
            minHeight: '100vh',
            background: 'var(--bg-dark)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    background: 'rgba(0,0,0,0.02)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    padding: '3rem',
                    borderRadius: '24px',
                    maxWidth: '500px',
                    width: '100%'
                }}
            >
                <div style={{
                    fontSize: '8rem',
                    fontWeight: '900',
                    color: 'var(--primary)',
                    lineHeight: 1,
                    marginBottom: '1rem',
                    opacity: 0.2
                }}>
                    404
                </div>
                <h1 style={{
                    fontSize: '2rem',
                    fontWeight: '900',
                    color: 'var(--text-main)',
                    marginBottom: '1rem'
                }}>
                    Page Not Found
                </h1>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    color: 'var(--text-muted)',
                    marginBottom: '2rem'
                }}>
                    <FileQuestion size={20} />
                    <span>The unit you are looking for has been moved or does not exist.</span>
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Link to="/" className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Home size={18} /> Return Home
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFound;
