import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bookmark, Star, BookOpen, HelpCircle, ArrowRight, Trash2, Search, Zap, Clock, User, Sparkles, ChevronRight, Filter, SortAsc, LayoutList, Menu, X, Award } from 'lucide-react';
import { getData, toggleImportant, deleteItem, getProgressSummary, getDailyReadTracker } from '../data/dataManager';

const Library = () => {
    const [allData, setAllData] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1024);
    const [progressSummary, setProgressSummary] = useState(() => getProgressSummary());
    const [dailyTracker, setDailyTracker] = useState(() => getDailyReadTracker(7));

    useEffect(() => {
        setAllData(getData());
        const handleResize = () => {
            const mobile = window.innerWidth < 1024;
            setIsMobile(mobile);
            if (!mobile) setIsSidebarOpen(true);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleProgressUpdate = () => {
            setProgressSummary(getProgressSummary());
            setDailyTracker(getDailyReadTracker(7));
        };
        window.addEventListener('progress-updated', handleProgressUpdate);
        return () => window.removeEventListener('progress-updated', handleProgressUpdate);
    }, []);

    const importantConcepts = [];
    const importantMCQs = [];
    const personalItems = [];

    allData.forEach(subject => {
        subject.concepts.forEach((concept, index) => {
            const item = { ...concept, subjectId: subject.id, subjectTitle: subject.title, index, type: 'concepts' };
            if (concept.important) importantConcepts.push(item);
            if (concept.isPersonal) personalItems.push(item);
        });
        subject.mcqs.forEach((mcq, index) => {
            const item = { ...mcq, subjectId: subject.id, subjectTitle: subject.title, index, type: 'mcqs' };
            if (mcq.important) importantMCQs.push(item);
            if (mcq.isPersonal) personalItems.push(item);
        });
    });

    const allSaved = [...new Set([...importantConcepts, ...importantMCQs, ...personalItems])];

    const filterBySearch = (items) => {
        return items.filter(item => {
            const title = item.type === 'concepts' ? item.title : item.question;
            const content = item.type === 'concepts' ? (item.content || '') : '';
            return (title + (item.subjectTitle || '') + content).toLowerCase().includes(searchQuery.toLowerCase());
        });
    };

    const displayAll = filterBySearch(allSaved);
    const displayConcepts = filterBySearch(importantConcepts);
    const displayMCQs = filterBySearch(importantMCQs);
    const displayPersonal = filterBySearch(personalItems);

    const activeItems = activeFilter === 'all' ? displayAll :
        activeFilter === 'concepts' ? displayConcepts :
            activeFilter === 'mcqs' ? displayMCQs : displayPersonal;

    const handleToggleImportant = (e, subjectId, type, index) => {
        e.preventDefault();
        e.stopPropagation();
        const newData = toggleImportant(subjectId, type, index);
        if (newData) setAllData(newData);
    };

    const handleDelete = (e, subjectId, type, index) => {
        e.preventDefault();
        e.stopPropagation();
        if (window.confirm('Remove this resource?')) {
            const newData = deleteItem(subjectId, type, index);
            if (newData) setAllData(newData);
        }
    };

    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', background: 'var(--bg-dark)' }}>

            {/* Mobile Header / Toggle */}
            {isMobile && (
                <div style={{
                    position: 'fixed', top: '80px', left: 0, right: 0,
                    height: '50px', background: 'rgba(255,255,255,0.95)',
                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                    zIndex: 90, display: 'flex', alignItems: 'center', padding: '0 1rem', justifyContent: 'space-between'
                }}>
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} style={{ background: 'none', border: 'none', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: '800' }}>
                        <Filter size={18} color="var(--primary)" /> Filters
                    </button>
                    <span style={{ fontSize: '0.75rem', fontWeight: '900', color: 'var(--text-muted)' }}>{activeItems.length} ITEMS</span>
                </div>
            )}

            {/* Sidebar Navigation */}
            <aside style={{
                width: isMobile ? '280px' : '320px',
                borderRight: '1px solid rgba(0,0,0,0.05)',
                position: isMobile ? 'fixed' : 'sticky',
                top: isMobile ? '0' : '80px',
                left: isMobile && !isSidebarOpen ? '-280px' : '0',
                bottom: 0,
                height: isMobile ? '100vh' : 'calc(100vh - 80px)',
                padding: '2rem 1.5rem',
                background: isMobile ? '#ffffff' : 'rgba(0, 0, 0, 0.02)',
                zIndex: 140,
                transition: '0.3s ease-out',
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem'
            }}>
                {isMobile && (
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button onClick={() => setIsSidebarOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-main)' }}><X size={24} /></button>
                    </div>
                )}
                <div>
                    <h2 style={{ fontSize: '0.7rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <LayoutList size={14} /> Knowledge Archive
                    </h2>
                    <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                        <Search size={14} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }} />
                        <input
                            type="text"
                            placeholder="Search Vault..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%', padding: '10px 12px 10px 36px', borderRadius: '8px',
                                background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)',
                                color: 'var(--text-main)', fontSize: '0.85rem'
                            }}
                        />
                    </div>

                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {[
                            { id: 'all', label: 'Entire Library', count: allSaved.length, icon: Zap },
                            { id: 'concepts', label: 'Study Master', count: importantConcepts.length, icon: BookOpen },
                            { id: 'mcqs', label: 'Practice Star', count: importantMCQs.length, icon: HelpCircle },
                            { id: 'personal', label: 'Personal Units', count: personalItems.length, icon: User }
                        ].map(f => (
                            <button
                                key={f.id}
                                onClick={() => { setActiveFilter(f.id); if (isMobile) setIsSidebarOpen(false); }}
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                    padding: '10px 14px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                                    background: activeFilter === f.id ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
                                    color: activeFilter === f.id ? 'var(--primary)' : 'var(--text-muted)',
                                    fontWeight: activeFilter === f.id ? '800' : '600', fontSize: '0.85rem',
                                    transition: '0.2s'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <f.icon size={16} />
                                    <span>{f.label}</span>
                                </div>
                                <span style={{ fontSize: '0.7rem', opacity: 0.3 }}>{f.count}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{
                flex: 1,
                marginLeft: isMobile ? '0' : '0',
                padding: isMobile ? '6rem 1rem 2rem' : '3rem 4rem',
                width: '100%'
            }}>
                <div style={{ maxWidth: '1050px', margin: '0 auto' }}>

                    {!isMobile && (
                        <div style={{ marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: '800', marginBottom: '1rem' }}>
                                <Link to="/" style={{ color: 'inherit' }}>ROOT</Link>
                                <ChevronRight size={12} />
                                <span style={{ color: 'var(--primary)' }}>VAULT</span>
                            </div>
                            <h1 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-main)' }}>Knowledge Archive</h1>
                        </div>
                    )}

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))',
                        gap: '1.5rem',
                        marginBottom: '2.5rem'
                    }}>
                        <div style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                            <div style={{ fontSize: '0.75rem', fontWeight: '900', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary)' }}>Daily Streak</div>
                            <div style={{ fontSize: '2rem', fontWeight: '900', marginTop: '0.5rem', color: 'var(--text-main)' }}>{progressSummary.streak} days</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Any read today keeps it alive.</div>
                        </div>
                        <div style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(14, 165, 233, 0.08)', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
                            <div style={{ fontSize: '0.75rem', fontWeight: '900', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0ea5e9' }}>Coins Earned</div>
                            <div style={{ fontSize: '2rem', fontWeight: '900', marginTop: '0.5rem', color: 'var(--text-main)' }}>{progressSummary.coins}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>1 read = 1 coin.</div>
                        </div>
                        <div style={{ padding: '1.5rem', borderRadius: '16px', background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                            <div style={{ fontSize: '0.75rem', fontWeight: '900', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#f59e0b' }}>Total Reads</div>
                            <div style={{ fontSize: '2rem', fontWeight: '900', marginTop: '0.5rem', color: 'var(--text-main)' }}>{progressSummary.totalReads}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Track your study momentum.</div>
                        </div>
                    </div>

                    <div style={{
                        background: 'rgba(255,255,255,0.02)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.06)',
                        padding: '1.5rem',
                        marginBottom: '2rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem' }}>
                            <div style={{ fontSize: '0.85rem', fontWeight: '900', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Weekly Reading Tracker</div>
                            <div style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--primary)' }}>Green = streak day</div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', gap: '10px' }}>
                            {dailyTracker.map((day) => (
                                <div key={day.date} style={{
                                    padding: '12px 8px',
                                    borderRadius: '12px',
                                    background: day.hasRead ? 'rgba(16, 185, 129, 0.18)' : 'rgba(0,0,0,0.04)',
                                    border: day.hasRead ? '1px solid rgba(16, 185, 129, 0.35)' : '1px solid rgba(0,0,0,0.05)',
                                    textAlign: 'center',
                                    fontWeight: '900',
                                    color: day.hasRead ? 'var(--primary)' : 'var(--text-muted)'
                                }}>
                                    <div style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{day.label}</div>
                                    <div style={{ fontSize: '0.8rem' }}>{day.hasRead ? 'Read' : 'Rest'}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.01)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>

                        {/* Headers Concept for desktop */}
                        {!isMobile && (
                            <div style={{
                                display: 'grid', gridTemplateColumns: '40px 1fr 180px 100px',
                                padding: '12px 24px', background: 'rgba(255,255,255,0.02)',
                                borderBottom: '1px solid rgba(255,255,255,0.05)',
                                fontSize: '0.7rem', fontWeight: '900', color: 'var(--text-muted)', textTransform: 'uppercase'
                            }}>
                                <div>#</div>
                                <div>Topic / Resource</div>
                                <div>Section</div>
                                <div style={{ textAlign: 'right' }}>Action</div>
                            </div>
                        )}

                        <AnimatePresence mode="popLayout">
                            {activeItems.map((item, idx) => (
                                <motion.div
                                    key={`${item.type}-${item.subjectId}-${item.index}`}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: isMobile ? '1fr' : '40px 1fr 180px 100px',
                                        padding: isMobile ? '1.5rem' : '1.5rem 1.5rem',
                                        borderBottom: '1px solid rgba(0,0,0,0.03)',
                                        alignItems: 'center',
                                        gap: isMobile ? '1rem' : '0'
                                    }}
                                >
                                    {!isMobile && <span style={{ fontSize: '0.75rem', opacity: 0.3 }}>{idx + 1}</span>}

                                    <div>
                                        <Link to={`/subject/${item.subjectId}`} style={{ color: 'white', fontWeight: '700', fontSize: '1rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            {item.type === 'concepts' ? <BookOpen size={16} color="var(--primary)" /> : <HelpCircle size={16} color="var(--secondary)" />}
                                            {item.type === 'concepts' ? item.title : item.question}
                                        </Link>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <Bookmark size={10} /> {item.subjectTitle}
                                        </div>
                                    </div>

                                    {!isMobile && (
                                        <div style={{ fontSize: '0.7rem', fontWeight: '900', textTransform: 'uppercase', opacity: 0.5 }}>
                                            {item.type === 'concepts' ? 'Technical Note' : 'Practice Unit'}
                                        </div>
                                    )}

                                    <div style={{ display: 'flex', justifyContent: isMobile ? 'flex-start' : 'flex-end', gap: '1rem' }}>
                                        <button onClick={(e) => handleToggleImportant(e, item.subjectId, item.type, item.index)} style={{ background: 'none', border: 'none', color: item.important ? 'var(--warning)' : 'rgba(0,0,0,0.1)', cursor: 'pointer' }}>
                                            <Star size={18} fill={item.important ? 'currentColor' : 'none'} />
                                        </button>
                                        <button onClick={(e) => handleDelete(e, item.subjectId, item.type, item.index)} style={{ background: 'none', border: 'none', color: 'rgba(239, 68, 68, 0.4)', cursor: 'pointer' }}>
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {activeItems.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '100px 0', opacity: 0.3 }}>
                                <Bookmark size={48} style={{ marginBottom: '1rem' }} />
                                <h3>Nothing archived here yet.</h3>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Library;
