import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Trash2, Download, Bell, Lock, AlertTriangle, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getData, resetData } from '../data/dataManager';

const SettingsModal = ({ isOpen, onClose }) => {
    const { user, signOut } = useAuth();
    const [activeTab, setActiveTab] = useState('profile');

    const handleExportData = () => {
        const data = getData();
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(data, null, 2))}`;
        const link = document.createElement('a');
        link.href = jsonString;
        link.download = `syllablink_export_${new Date().toISOString().slice(0, 10)}.json`;
        link.click();
    };

    const handleClearData = () => {
        if (window.confirm('Are you sure you want to delete all local progress? This cannot be undone.')) {
            resetData();
            window.location.reload();
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
                            backdropFilter: 'blur(4px)', zIndex: 1000
                        }}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        style={{
                            position: 'fixed',
                            top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '90%', maxWidth: '700px',
                            background: 'var(--bg-card)',
                            backgroundColor: 'var(--bg-dark)', // Use solid dark background to fix transparency issue
                            backdropFilter: 'blur(24px)', // Increase blur
                            WebkitBackdropFilter: 'blur(24px)',
                            border: '1px solid var(--border-glass)',
                            borderRadius: '16px',
                            zIndex: 1001,
                            overflow: 'hidden',
                            display: 'flex',
                            height: '500px',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' // Darker shadow
                        }}
                    >
                        {/* Sidebar */}
                        <div style={{ width: '200px', background: 'rgba(0,0,0,0.02)', borderRight: '1px solid var(--border-glass)', padding: '1.5rem 1rem' }}>
                            <h2 style={{ fontSize: '0.85rem', fontWeight: '900', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
                                Settings
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                {[
                                    { id: 'profile', label: 'Profile', icon: User },
                                    { id: 'data', label: 'Data & Export', icon: Download },
                                    { id: 'danger', label: 'Danger Zone', icon: AlertTriangle }
                                ].map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '10px',
                                            padding: '10px 12px', borderRadius: '8px', border: 'none',
                                            background: activeTab === tab.id ? 'var(--primary)' : 'transparent',
                                            color: activeTab === tab.id ? 'white' : 'var(--text-muted)',
                                            fontSize: '0.85rem', fontWeight: activeTab === tab.id ? '700' : '500',
                                            cursor: 'pointer', textAlign: 'left'
                                        }}
                                    >
                                        <tab.icon size={16} />
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Content */}
                        <div style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)' }}>
                                    {activeTab === 'profile' && 'Profile Settings'}
                                    {activeTab === 'data' && 'Manage Data'}
                                    {activeTab === 'danger' && 'Danger Zone'}
                                </h2>
                                <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                                    <X size={24} />
                                </button>
                            </div>

                            {activeTab === 'profile' && (
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: '900', color: 'var(--primary)' }}>
                                            {user?.email?.[0]?.toUpperCase() || 'U'}
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '4px' }}>
                                                {user?.email || 'Guest User'}
                                            </div>
                                            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                                {user ? 'Authenticated via Supabase' : 'Local Session Only'}
                                            </div>
                                        </div>
                                    </div>

                                    {!user && (
                                        <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.05)', borderRadius: '10px', border: '1px solid rgba(16, 185, 129, 0.15)', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                                            <CheckCircle size={16} color="var(--primary)" style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                                            Sign in to sync your progress across devices.
                                        </div>
                                    )}

                                    {user && (
                                        <button onClick={() => { signOut(); onClose(); }} style={{ marginTop: '1rem', padding: '10px 20px', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)', color: 'var(--text-main)', fontWeight: '700', cursor: 'pointer' }}>
                                            Sign Out
                                        </button>
                                    )}
                                </div>
                            )}

                            {activeTab === 'data' && (
                                <div>
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Export Data</h3>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                                            Download a JSON copy of all your notes, bookmarks, and progress.
                                        </p>
                                        <button onClick={handleExportData} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', borderRadius: '8px', background: 'var(--bg-card)', border: '1px solid var(--border-glass)', color: 'var(--text-main)', fontWeight: '600', cursor: 'pointer' }}>
                                            <Download size={16} /> Download JSON
                                        </button>
                                    </div>

                                    <div>
                                        <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Data Privacy</h3>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                            Your personalized notes are stored locally on your device unless synced. We do not sell your personal data.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'danger' && (
                                <div>
                                    <div style={{ padding: '1.5rem', background: 'rgba(239, 68, 68, 0.05)', borderRadius: '12px', border: '1px solid rgba(239, 68, 68, 0.15)' }}>
                                        <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#ef4444', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <AlertTriangle size={18} /> Reset All Progress
                                        </h3>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '1.5rem', opacity: 0.8 }}>
                                            This will permanently delete your local history, bookmarks, and custom notes.
                                        </p>
                                        <button onClick={handleClearData} style={{ padding: '10px 20px', borderRadius: '8px', background: '#ef4444', color: 'white', border: 'none', fontWeight: '700', cursor: 'pointer' }}>
                                            Delete Everything
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default SettingsModal;
