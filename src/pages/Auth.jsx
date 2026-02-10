import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getProgressSummary } from '../data/dataManager';

const Auth = () => {
    const navigate = useNavigate();
    const { user, loading, signIn, signUp, signOut, isSupabaseReady } = useAuth();
    const [mode, setMode] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [summary, setSummary] = useState(() => getProgressSummary());

    useEffect(() => {
        const handleProgressUpdate = () => setSummary(getProgressSummary());
        window.addEventListener('progress-updated', handleProgressUpdate);
        return () => window.removeEventListener('progress-updated', handleProgressUpdate);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (!email || !password) {
            setError('Email and password are required.');
            return;
        }

        const action = mode === 'login' ? signIn : signUp;
        const { error: authError } = await action({ email, password });
        if (authError) {
            setError(authError.message || 'Authentication failed.');
            return;
        }

        if (mode === 'signup') {
            setMessage('Signup successful. Check your email if confirmation is required.');
        } else {
            navigate('/');
        }
    };

    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', background: 'radial-gradient(circle at top, rgba(16,185,129,0.08), transparent 55%), var(--bg-dark)' }}>
            <div style={{ maxWidth: '640px', margin: '0 auto', padding: '2rem' }}>
                <div style={{
                    background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(15,23,42,0.05))',
                    border: '1px solid var(--border-glass)',
                    borderRadius: '20px',
                    padding: '2.8rem',
                    boxShadow: '0 30px 80px rgba(15, 23, 42, 0.12)'
                }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ fontWeight: '900', fontSize: '2rem', color: 'var(--text-main)' }}>
                            {user ? 'Your Profile' : mode === 'login' ? 'Welcome back' : 'Create your account'}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                            {user
                                ? 'Your progress syncs across devices when you sign in.'
                                : 'Progress is saved per account when you sign in.'}
                        </div>
                    </div>

                    {!isSupabaseReady && (
                        <div style={{ marginBottom: '1rem', padding: '0.75rem 1rem', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.1)', color: 'var(--text-main)', fontSize: '0.85rem' }}>
                            Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.
                        </div>
                    )}

                    {!user && (
                        <div style={{ display: 'flex', gap: '10px', marginBottom: '1.5rem', background: 'rgba(15, 23, 42, 0.06)', padding: '6px', borderRadius: '14px' }}>
                            <button
                                onClick={() => setMode('login')}
                                style={{
                                    flex: 1,
                                    padding: '12px',
                                    borderRadius: '12px',
                                    border: 'none',
                                    background: mode === 'login' ? 'var(--primary)' : 'rgba(0,0,0,0.05)',
                                    color: mode === 'login' ? 'white' : 'var(--text-muted)',
                                    fontWeight: '900',
                                    letterSpacing: '0.02em'
                                }}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setMode('signup')}
                                style={{
                                    flex: 1,
                                    padding: '12px',
                                    borderRadius: '12px',
                                    border: 'none',
                                    background: mode === 'signup' ? 'var(--primary)' : 'rgba(0,0,0,0.05)',
                                    color: mode === 'signup' ? 'white' : 'var(--text-muted)',
                                    fontWeight: '900',
                                    letterSpacing: '0.02em'
                                }}
                            >
                                Sign Up
                            </button>
                        </div>
                    )}

                    {!user ? (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--border-glass)', background: 'rgba(255,255,255,0.6)', color: 'var(--text-main)' }}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--border-glass)', background: 'rgba(255,255,255,0.6)', color: 'var(--text-main)' }}
                            />

                        {error && (
                            <div style={{ padding: '0.75rem 1rem', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.12)', color: 'var(--text-main)', fontSize: '0.85rem' }}>
                                {error}
                            </div>
                        )}

                        {message && (
                            <div style={{ padding: '0.75rem 1rem', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.12)', color: 'var(--text-main)', fontSize: '0.85rem' }}>
                                {message}
                            </div>
                        )}

                            <button
                                type="submit"
                                disabled={loading || !isSupabaseReady}
                                style={{
                                    padding: '14px',
                                    borderRadius: '12px',
                                    border: 'none',
                                    background: 'linear-gradient(135deg, #10b981, #34d399)',
                                    color: 'white',
                                    fontWeight: '900',
                                    opacity: loading || !isSupabaseReady ? 0.6 : 1,
                                    cursor: loading || !isSupabaseReady ? 'default' : 'pointer'
                                }}
                            >
                                {mode === 'login' ? 'Login' : 'Create account'}
                            </button>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                <div>• Sync streaks and coins across devices.</div>
                                <div>• Personal progress is private to your account.</div>
                                <div>• Secure email sign-in with Supabase.</div>
                            </div>
                        </form>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            <div style={{ padding: '1rem 1.2rem', borderRadius: '14px', background: 'rgba(15, 23, 42, 0.06)', border: '1px solid rgba(0,0,0,0.05)' }}>
                                <div style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: '900' }}>Signed in as</div>
                                <div style={{ fontSize: '1rem', fontWeight: '900', color: 'var(--text-main)' }}>{user.email}</div>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '10px' }}>
                                <div style={{ padding: '0.9rem', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)', textAlign: 'center' }}>
                                    <div style={{ fontSize: '1rem', fontWeight: '900' }}>{summary.streak}</div>
                                    <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)' }}>Streak</div>
                                </div>
                                <div style={{ padding: '0.9rem', borderRadius: '12px', background: 'rgba(14, 165, 233, 0.08)', border: '1px solid rgba(14, 165, 233, 0.2)', textAlign: 'center' }}>
                                    <div style={{ fontSize: '1rem', fontWeight: '900' }}>{summary.coins}</div>
                                    <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0ea5e9' }}>Coins</div>
                                </div>
                                <div style={{ padding: '0.9rem', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.2)', textAlign: 'center' }}>
                                    <div style={{ fontSize: '1rem', fontWeight: '900' }}>{summary.totalReads}</div>
                                    <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#f59e0b' }}>Reads</div>
                                </div>
                            </div>
                            <button
                                onClick={() => signOut()}
                                style={{
                                    padding: '12px',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(239, 68, 68, 0.25)',
                                    background: 'rgba(239, 68, 68, 0.08)',
                                    color: '#ef4444',
                                    fontWeight: '900',
                                    cursor: 'pointer'
                                }}
                            >
                                Log out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Auth;
