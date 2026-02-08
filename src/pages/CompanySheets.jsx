import React from 'react';
import { motion } from 'framer-motion';
import { companySheets } from '../data/interviewData';
import { Target, ShieldCheck, Briefcase, Zap, Rocket, ChevronRight, Check } from 'lucide-react';

const CompanySheets = () => {
    return (
        <div style={{ paddingTop: '140px', minHeight: '100vh', paddingBottom: '120px' }}>
            <div className="bg-mesh"></div>
            <div className="container" style={{ maxWidth: '1100px' }}>

                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '5rem', textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#8b5cf6', marginBottom: '1rem' }}>
                        <Briefcase size={20} />
                        <span style={{ fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Targeted Preparation</span>
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '800' }}>Company-Specific <span className="glow-text">Cheat Sheets</span></h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginTop: '1rem', maxWidth: '700px', margin: '1rem auto 0' }}>
                        Strategic roadmaps tailored for different industry segments and hiring standards.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                    {companySheets.map((sheet, index) => (
                        <motion.div
                            key={sheet.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className="glass-card"
                            style={{
                                padding: '2.5rem',
                                border: '1px solid var(--border-glass)',
                                background: `linear-gradient(135deg, ${sheet.id === 'big-tech' ? 'rgba(59, 130, 246, 0.03)' : sheet.id === 'startups' ? 'rgba(245, 158, 11, 0.03)' : 'rgba(16, 185, 129, 0.03)'}, transparent)`,
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <div style={{
                                display: 'inline-flex', padding: '6px 12px', borderRadius: '8px',
                                background: `${sheet.color}15`, color: sheet.color,
                                fontSize: '0.7rem', fontWeight: '900', textTransform: 'uppercase',
                                letterSpacing: '0.05em', marginBottom: '1.25rem', width: 'fit-content'
                            }}>
                                {sheet.level}
                            </div>

                            <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '0.75rem' }}>{sheet.name}</h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>{sheet.description}</p>

                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
                                <h4 style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Target size={14} /> Critical Focus Topics
                                </h4>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                    {sheet.mustKnow.map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: sheet.color }}></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ marginTop: 'auto', background: 'rgba(255,255,255,0.02)', padding: '1.25rem', borderRadius: '14px', border: '1px solid var(--border-glass)' }}>
                                <h4 style={{ fontSize: '0.75rem', fontWeight: '900', color: sheet.color, textTransform: 'uppercase', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <Zap size={12} fill={sheet.color} /> Winning Strategy
                                </h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{sheet.strategy}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Guide */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} style={{ marginTop: '5rem', textAlign: 'center', background: 'var(--bg-card)', padding: '3rem', borderRadius: '24px', border: '1px solid var(--border-glass)' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Need a personalized roadmap?</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Our expert algorithm can generate a study plan based on your target company list.</p>
                    <button className="btn-primary" style={{ padding: '14px 28px' }}>Join Cohort Program <ChevronRight size={18} /></button>
                </motion.div>
            </div>
        </div>
    );
};

export default CompanySheets;
