import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, BookOpen, HelpCircle, Star, Plus, Trash2, ChevronRight, Bookmark, Search, Clock, CheckCircle2, Sparkles, Terminal, Code2, Menu, X, Smartphone, Globe, Cpu, Database, Network, Layout } from 'lucide-react';
import { getData, toggleImportant, deleteItem, markItemRead, isItemRead, getReadCount } from '../data/dataManager';
import AddContentModal from '../components/AddContentModal';
import Breadcrumbs from '../components/Breadcrumbs';

const SubjectDetail = () => {
    const { id } = useParams();
    const [subject, setSubject] = useState(null);
    const [activeTab, setActiveTab] = useState('concepts');
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
    const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1024);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const [progressTick, setProgressTick] = useState(0);

    const READ_DELAY_MS = 12000;
    const NEXT_DELAY_MS = 800;

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 1024;
            setIsMobile(mobile);
            if (!mobile) setIsSidebarOpen(true);
            else setIsSidebarOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleProgressUpdate = () => setProgressTick(prev => prev + 1);
        window.addEventListener('progress-updated', handleProgressUpdate);
        return () => window.removeEventListener('progress-updated', handleProgressUpdate);
    }, []);

    useEffect(() => {
        const data = getData();
        const foundSubject = data.find(s => s.id === id);
        setSubject(foundSubject);
        setSelectedItemIndex(0);
        setSelectedOptionIndex(null);
        setIsAnswerRevealed(false);
    }, [id, activeTab]);

    useEffect(() => {
        setSelectedOptionIndex(null);
        setIsAnswerRevealed(false);
        // Auto-scroll sidebar to active item
        const activeItemEl = document.getElementById(`sidebar-item-${selectedItemIndex}`);
        if (activeItemEl) {
            activeItemEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [selectedItemIndex]);


    const handleRefresh = () => {
        const data = getData();
        const foundSubject = data.find(s => s.id === id);
        setSubject(foundSubject);
        const currentItems = (foundSubject && foundSubject[activeTab]) || [];
        if (selectedItemIndex >= currentItems.length) {
            setSelectedItemIndex(0);
        }
    };

    const handleToggle = (e) => {
        e.stopPropagation();
        if (subject && filteredItems[selectedItemIndex]) {
            const originalIndex = subject[activeTab].findIndex(item =>
                (activeTab === 'concepts' ? item.title : item.question) ===
                (activeTab === 'concepts' ? filteredItems[selectedItemIndex].title : filteredItems[selectedItemIndex].question)
            );
            if (originalIndex !== -1) {
                toggleImportant(id, activeTab, originalIndex);
                handleRefresh();
            }
        }
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            if (subject && filteredItems[selectedItemIndex]) {
                const originalIndex = subject[activeTab].findIndex(item =>
                    (activeTab === 'concepts' ? item.title : item.question) ===
                    (activeTab === 'concepts' ? filteredItems[selectedItemIndex].title : filteredItems[selectedItemIndex].question)
                );
                if (originalIndex !== -1) {
                    deleteItem(id, activeTab, originalIndex);
                    handleRefresh();
                }
            }
        }
    };

    const handleMarkRead = () => {
        if (!currentItem || !currentKey) return;
        markItemRead(id, activeTab, currentKey);
        setProgressTick(prev => prev + 1);
        if (selectedItemIndex < filteredItems.length - 1) {
            setTimeout(() => {
                setSelectedItemIndex(prev => Math.min(prev + 1, filteredItems.length - 1));
            }, NEXT_DELAY_MS);
        }
    };

    const items = (() => {
        const rawItems = subject ? (subject[activeTab] || []) : [];
        if (activeTab !== 'mcqs') return rawItems;
        const worksheetOrder = ['Worksheet 1', 'Worksheet 2', 'Worksheet 3', 'Worksheet 4'];
        return rawItems
            .map((item, index) => ({ ...item, __index: index }))
            .sort((a, b) => {
                const aIdx = a.worksheet ? worksheetOrder.indexOf(a.worksheet) : worksheetOrder.length;
                const bIdx = b.worksheet ? worksheetOrder.indexOf(b.worksheet) : worksheetOrder.length;
                if (aIdx !== bIdx) return aIdx - bIdx;
                return a.__index - b.__index;
            })
            .map(({ __index, ...item }) => item);
    })();
    const filteredItems = items.filter(item => {
        const title = activeTab === 'concepts' ? item.title : item.question;
        return title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const currentItem = filteredItems[selectedItemIndex] || filteredItems[0];

    const getItemKey = (item) => (activeTab === 'concepts' ? item.title : item.question);
    const currentKey = currentItem ? getItemKey(currentItem) : null;
    const isCurrentRead = currentKey ? isItemRead(id, activeTab, currentKey) : false;
    const totalCount = subject ? (subject[activeTab] || []).length : 0;
    const readCount = useMemo(
        () => (subject ? getReadCount(id, activeTab, subject[activeTab] || []) : 0),
        [subject, id, activeTab, progressTick]
    );

    // Auto-advance feature removed - users now have full manual control
    // Items are only marked as read when clicking the "Mark Read" button

    if (!subject) {
        return <div style={{ padding: '160px', textAlign: 'center' }}><Sparkles className="animate-float" /> Loading Subject...</div>;
    }

    const Diagram = ({ type }) => {
        if (type === 'OSI_STACK') {
            const layers = [
                { name: 'Application', color: '#10b981', desc: 'User interface & interaction' },
                { name: 'Presentation', color: '#0ea5e9', desc: 'Data encryption & formatting' },
                { name: 'Session', color: '#6366f1', desc: 'Connection persistence' },
                { name: 'Transport', color: '#8b5cf6', desc: 'End-to-end delivery' },
                { name: 'Network', color: '#ec4899', desc: 'Routing & path selection' },
                { name: 'Data Link', color: '#f59e0b', desc: 'Physical addressing (MAC)' },
                { name: 'Physical', color: '#64748b', desc: 'Binary transmission' },
            ];
            return (
                <div style={{ margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {layers.map((l, i) => (
                        <motion.div
                            key={i}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                background: `${l.color}10`,
                                border: `1px solid ${l.color}40`,
                                padding: '12px 20px',
                                borderRadius: '8px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <span style={{ fontWeight: '900', color: l.color }}>{l.name}</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{l.desc}</span>
                        </motion.div>
                    ))}
                </div>
            );
        }

        if (type === 'DB_ARCH') {
            return (
                <div style={{ margin: '2rem 0', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ padding: '20px', border: '2px solid var(--primary)', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.05)', textAlign: 'center' }}>
                        <Smartphone size={24} color="var(--primary)" />
                        <div style={{ fontWeight: '900', marginTop: '8px' }}>CLIENT</div>
                    </div>
                    <ArrowLeft size={24} style={{ transform: 'rotate(180deg)', opacity: 0.3 }} />
                    <div style={{ padding: '20px', border: '2px solid #0ea5e9', borderRadius: '12px', background: 'rgba(14, 165, 233, 0.05)', textAlign: 'center' }}>
                        <Cpu size={24} color="#0ea5e9" />
                        <div style={{ fontWeight: '900', marginTop: '8px' }}>DBMS ENGINE</div>
                    </div>
                    <ArrowLeft size={24} style={{ transform: 'rotate(180deg)', opacity: 0.3 }} />
                    <div style={{ padding: '20px', border: '2px solid #f59e0b', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.05)', textAlign: 'center' }}>
                        <Database size={24} color="#f59e0b" />
                        <div style={{ fontWeight: '900', marginTop: '8px' }}>STORAGE</div>
                    </div>
                </div>
            );
        }

        if (type === 'OOP_PILLARS') {
            const pillars = [
                { title: 'Encapsulation', icon: Layout, color: '#ec4899', text: 'Bundling data & methods' },
                { title: 'Abstraction', icon: Code2, color: '#8b5cf6', text: 'Hiding complexity' },
                { title: 'Inheritance', icon: Network, color: '#3b82f6', text: 'Parent-child relationships' },
                { title: 'Polymorphism', icon: Globe, color: '#10b981', text: 'Multiple forms' },
            ];
            return (
                <div style={{ margin: '2rem 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {pillars.map((p, i) => (
                        <div key={i} style={{ padding: '1.5rem', borderRadius: '12px', background: `${p.color}10`, border: `1px solid ${p.color}30`, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '8px' }}>
                            <p.icon size={24} color={p.color} />
                            <div style={{ fontWeight: '900', color: p.color, fontSize: '0.9rem' }}>{p.title}</div>
                            <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>{p.text}</div>
                        </div>
                    ))}
                </div>
            );
        }

        if (type === 'PROCESS_STATES') {
            return (
                <div style={{ margin: '2rem 0', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center', padding: '1rem', background: 'rgba(0,0,0,0.02)', borderRadius: '12px' }}>
                    {['New', 'Ready', 'Running', 'Terminated'].map((s, i) => (
                        <React.Fragment key={s}>
                            {i > 0 && <ArrowRight size={16} style={{ opacity: 0.3 }} />}
                            <div style={{ padding: '8px 16px', borderRadius: '20px', background: 'var(--bg-dark)', border: '1px solid rgba(0,0,0,0.1)', fontWeight: '800', fontSize: '0.8rem', color: 'var(--primary)' }}>
                                {s}
                            </div>
                        </React.Fragment>
                    ))}
                    <div style={{ width: '100%', textAlign: 'center', fontSize: '0.7rem', opacity: 0.5, marginTop: '8px' }}>
                        (Waiting state connects Running ↔ Ready)
                    </div>
                </div>
            );
        }

        if (type === 'SORTING_VISUAL') {
            return (
                <div style={{ margin: '2rem 0', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '4px', height: '150px', background: 'rgba(0,0,0,0.02)', borderRadius: '12px', padding: '20px' }}>
                    {[40, 70, 30, 85, 55, 20, 95, 60, 45, 75].map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: i * 0.05 }}
                            style={{
                                width: '20px',
                                background: h > 80 ? '#10b981' : h < 40 ? '#f59e0b' : '#3b82f6',
                                borderRadius: '4px 4px 0 0',
                                opacity: 0.8
                            }}
                        />
                    ))}
                </div>
            );
        }

        return null;
    };

    const renderContent = (content) => {
        const lines = content.split('\n');
        const elements = [];
        let listItems = [];

        const flushList = (keySuffix) => {
            if (listItems.length) {
                elements.push(
                    <ul key={`list-${keySuffix}`} style={{ margin: '0 0 1.5rem 1.2rem', lineHeight: 1.7 }}>
                        {listItems}
                    </ul>
                );
                listItems = [];
            }
        };

        lines.forEach((line, index) => {
            const trimmed = line.trim();
            if (!trimmed) {
                flushList(index);
                return;
            }

            if (/^[-•]\s+/.test(trimmed)) {
                listItems.push(
                    <li key={`li-${index}`} style={{ marginBottom: '0.4rem', color: 'var(--text-main)', opacity: 0.85 }}>
                        {trimmed.replace(/^[-•]\s+/, '')}
                    </li>
                );
                return;
            }

            flushList(index);

            const labelMatch = trimmed.match(/^([A-Za-z ]+):\s*(.*)$/);

            if (trimmed.startsWith('[DIAGRAM:')) {
                const type = trimmed.match(/\[DIAGRAM:(.*)\]/)[1];
                elements.push(<Diagram key={`diag-${index}`} type={type} />);
            } else if (trimmed.startsWith('EX:') || trimmed.startsWith('Code:')) {
                const code = trimmed.replace(/^(EX:|Code:)\s*/, '');
                elements.push(
                    <div key={`code-${index}`} style={{
                        background: 'rgba(0,0,0,0.02)',
                        border: '1px solid rgba(0,0,0,0.05)',
                        borderRadius: '8px',
                        padding: '1rem',
                        margin: '1rem 0',
                        fontFamily: 'monospace',
                        fontSize: '0.9rem',
                        color: 'var(--primary)',
                        whiteSpace: 'pre-wrap',
                        borderLeft: '4px solid var(--primary)'
                    }}>
                        {code}
                    </div>
                );
            } else if (labelMatch) {
                const label = labelMatch[1];
                const rest = labelMatch[2];
                elements.push(
                    <p key={`p-${index}`} style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>
                        <strong style={{ color: 'var(--primary)', fontWeight: '800' }}>{label}:</strong> {rest}
                    </p>
                );
            } else {
                elements.push(
                    <p key={`p-${index}`} style={{ marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                        {trimmed}
                    </p>
                );
            }
        });

        flushList('end');
        return elements;
    };

    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-dark)' }}>

            {/* Header / Sub-Nav */}
            <header style={{
                height: isMobile ? 'auto' : '70px',
                background: 'rgba(255, 255, 255, 0.95)',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'stretch' : 'center',
                padding: isMobile ? '1rem' : '0 2rem',
                justifyContent: 'space-between',
                position: 'sticky',
                top: '80px',
                zIndex: 200,
                gap: '1rem'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button onClick={() => isMobile && setIsSidebarOpen(!isSidebarOpen)} style={{
                        display: isMobile ? 'flex' : 'none',
                        background: 'rgba(0,0,0,0.05)',
                        border: 'none',
                        color: 'var(--text-main)',
                        padding: '8px',
                        borderRadius: '8px'
                    }}>
                        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                    <Link to="/" style={{ color: 'var(--text-muted)' }}><ArrowLeft size={20} /></Link>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontWeight: '800', fontSize: '0.9rem', color: 'var(--text-main)' }}>{subject.title}</span>
                        <span style={{ fontSize: '0.65rem', color: 'var(--primary)', fontWeight: '900', letterSpacing: '0.05em' }}>DOCS V1.2</span>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: isMobile ? 'center' : 'flex-end', flexWrap: 'wrap' }}>
                    <div style={{
                        display: 'flex',
                        background: 'rgba(0,0,0,0.03)',
                        padding: '4px',
                        borderRadius: '10px',
                        margin: isMobile ? '0 auto' : '0'
                    }}>
                        <button
                            onClick={() => setActiveTab('concepts')}
                            style={{
                                padding: '8px 20px', borderRadius: '8px', border: 'none',
                                background: activeTab === 'concepts' ? 'var(--primary)' : 'transparent',
                                color: activeTab === 'concepts' ? 'white' : 'var(--text-muted)',
                                fontWeight: '800', fontSize: '0.8rem', cursor: 'pointer', transition: '0.2s'
                            }}
                        >Notes</button>
                        <button
                            onClick={() => setActiveTab('mcqs')}
                            style={{
                                padding: '8px 20px', borderRadius: '8px', border: 'none',
                                background: activeTab === 'mcqs' ? 'var(--primary)' : 'transparent',
                                color: activeTab === 'mcqs' ? 'white' : 'var(--text-muted)',
                                fontWeight: '800', fontSize: '0.8rem', cursor: 'pointer', transition: '0.2s'
                            }}
                        >Practice</button>
                    </div>
                    <div style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
                        Read {readCount}/{totalCount}
                    </div>
                </div>
            </header>

            <div style={{ display: 'flex', flex: 1, position: 'relative' }}>

                {/* Sidebar Overlay for Mobile */}
                {isMobile && isSidebarOpen && (
                    <div
                        onClick={() => setIsSidebarOpen(false)}
                        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', zIndex: 140 }}
                    />
                )}

                {/* Sidebar */}
                <aside style={{
                    width: isMobile ? '300px' : '320px',
                    borderRight: '1px solid rgba(0,0,0,0.05)',
                    position: isMobile ? 'fixed' : 'sticky',
                    top: isMobile ? '0' : '150px',
                    left: isMobile && !isSidebarOpen ? '-320px' : '0',
                    height: isMobile ? '100vh' : 'calc(100vh - 150px)',
                    zIndex: 150,
                    background: isMobile ? '#ffffff' : 'transparent',
                    transition: '0.3s ease-out',
                    overflowY: 'auto',
                    padding: '1.5rem 1rem'
                }}>
                    {isMobile && (
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                            <button onClick={() => setIsSidebarOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)' }}>
                                <X size={24} />
                            </button>
                        </div>
                    )}

                    <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                        <Search size={14} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }} />
                        <input
                            type="text"
                            placeholder="Jump to topic..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%', padding: '10px 12px 10px 36px', borderRadius: '8px',
                                background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)',
                                color: 'var(--text-main)', fontSize: '0.85rem'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {filteredItems.map((item, index) => {
                            const itemKey = activeTab === 'concepts' ? item.title : item.question;
                            const isRead = isItemRead(id, activeTab, itemKey);
                            return (
                                <button
                                    key={index}
                                    id={`sidebar-item-${index}`}
                                    onClick={() => {
                                        setSelectedItemIndex(index);
                                        if (isMobile) setIsSidebarOpen(false);
                                    }}
                                    style={{
                                        width: '100%', padding: '10px 14px', borderRadius: '8px', border: 'none',
                                        background: selectedItemIndex === index ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
                                        color: selectedItemIndex === index ? 'var(--primary)' : 'var(--text-muted)',
                                        textAlign: 'left', fontSize: '0.85rem', fontWeight: selectedItemIndex === index ? '800' : '600',
                                        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px'
                                    }}
                                >
                                    <span style={{ opacity: 0.3, fontSize: '0.7rem' }}>{(index + 1).toString().padStart(2, '0')}</span>
                                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
                                        {activeTab === 'concepts' ? item.title : item.question}
                                    </span>
                                    {isRead && <CheckCircle2 size={14} color="var(--primary)" />}
                                </button>
                            );
                        })}
                    </div>
                </aside>

                {/* Main Content */}
                <main style={{
                    flex: 1,
                    padding: isMobile ? '2rem 1rem' : '3rem 4rem',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    width: '100%'
                }}>
                    <Breadcrumbs customItems={[
                        { label: 'Home', path: '/' },
                        { label: 'Curriculum', path: '/#subjects' },
                        { label: subject.title, path: null }
                    ]} />

                    <AnimatePresence mode="wait">
                        {currentItem ? (
                            <motion.div
                                key={`${activeTab}-${selectedItemIndex}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div style={{ marginBottom: '2.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', gap: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)', padding: '8px', borderRadius: '8px' }}>
                                                {activeTab === 'concepts' ? <BookOpen size={18} /> : <HelpCircle size={18} />}
                                            </div>
                                            <span style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                                                {activeTab === 'concepts' ? 'TECHNICAL TUTORIAL' : 'PRACTICE SET'}
                                            </span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <button onClick={handleToggle} style={{ background: 'none', border: 'none', color: currentItem.important ? 'var(--warning)' : 'rgba(0,0,0,0.2)', cursor: 'pointer' }}>
                                                <Star size={20} fill={currentItem.important ? 'currentColor' : 'none'} />
                                            </button>
                                            <button
                                                onClick={handleMarkRead}
                                                disabled={isCurrentRead}
                                                style={{
                                                    background: isCurrentRead ? 'rgba(16, 185, 129, 0.12)' : 'var(--primary)',
                                                    border: 'none',
                                                    color: isCurrentRead ? 'var(--primary)' : 'white',
                                                    padding: '6px 12px',
                                                    borderRadius: '8px',
                                                    fontWeight: '800',
                                                    fontSize: '0.7rem',
                                                    cursor: isCurrentRead ? 'default' : 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px'
                                                }}
                                            >
                                                {isCurrentRead ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                                                {isCurrentRead ? 'Read' : 'Mark Read'}
                                            </button>
                                        </div>
                                    </div>
                                    <h1 style={{ fontSize: isMobile ? '1.8rem' : '2.8rem', fontWeight: '900', color: 'var(--text-main)', lineHeight: '1.2' }}>
                                        {activeTab === 'concepts' ? currentItem.title : currentItem.question}
                                    </h1>
                                </div>

                                <div style={{
                                    background: 'rgba(0,0,0,0.01)',
                                    padding: isMobile ? '1.5rem' : '2.5rem',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    marginBottom: '3rem'
                                }}>
                                    {activeTab === 'concepts' ? (
                                        <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-main)' }}>
                                            {renderContent(currentItem.content)}
                                        </div>
                                    ) : (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            {currentItem.options.map((opt, i) => {
                                                const isCorrect = isAnswerRevealed && i === currentItem.answer;
                                                const isSelected = selectedOptionIndex === i;
                                                return (
                                                    <button
                                                        key={i}
                                                        disabled={isAnswerRevealed}
                                                        onClick={() => { setSelectedOptionIndex(i); setIsAnswerRevealed(true); }}
                                                        style={{
                                                            padding: '1.2rem', borderRadius: '12px', textAlign: 'left',
                                                            background: isCorrect ? 'rgba(16, 185, 129, 0.1)' : isSelected ? 'rgba(239, 68, 68, 0.1)' : 'rgba(0,0,0,0.02)',
                                                            border: `1px solid ${isCorrect ? 'var(--primary)' : isSelected ? 'var(--error)' : 'rgba(0,0,0,0.05)'}`,
                                                            color: 'var(--text-main)', cursor: isAnswerRevealed ? 'default' : 'pointer',
                                                            fontSize: '0.95rem', display: 'flex', gap: '12px', transition: '0.2s'
                                                        }}
                                                    >
                                                        <span style={{ opacity: 0.4 }}>{String.fromCharCode(65 + i)}</span>
                                                        {opt}
                                                    </button>
                                                );
                                            })}
                                            {isAnswerRevealed && (
                                                <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(16, 185, 129, 0.05)', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)', fontWeight: '800', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                                                        <Sparkles size={16} /> Explanation
                                                    </div>
                                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{currentItem.explanation}</p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Pagination */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                                    <button
                                        disabled={selectedItemIndex === 0}
                                        onClick={() => setSelectedItemIndex(prev => prev - 1)}
                                        style={{ flex: 1, padding: '12px', borderRadius: '10px', background: 'rgba(0,0,0,0.03)', color: 'var(--text-main)', border: 'none', fontWeight: '800', opacity: selectedItemIndex === 0 ? 0.3 : 1 }}
                                    ><ArrowLeft size={18} style={{ verticalAlign: 'middle' }} /> {isMobile ? '' : ' Previous'}</button>
                                    <button
                                        disabled={selectedItemIndex === filteredItems.length - 1}
                                        onClick={() => setSelectedItemIndex(prev => prev + 1)}
                                        style={{ flex: 1, padding: '12px', borderRadius: '10px', background: 'var(--primary)', color: 'white', border: 'none', fontWeight: '800', opacity: selectedItemIndex === filteredItems.length - 1 ? 0.3 : 1 }}
                                    >{isMobile ? '' : 'Next '} <ArrowRight size={18} style={{ verticalAlign: 'middle' }} /></button>
                                </div>
                            </motion.div>
                        ) : (
                            <div style={{ textAlign: 'center', opacity: 0.3, padding: '100px 0' }}>
                                <BookOpen size={64} style={{ marginBottom: '1rem' }} />
                                <h3>No content in this module.</h3>
                            </div>
                        )}
                    </AnimatePresence>
                </main>
            </div>

            <AddContentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} subjectId={id} onAdded={handleRefresh} />
        </div>
    );
};

export default SubjectDetail;
