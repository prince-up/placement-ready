import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, BookOpen, HelpCircle, Star, Plus, Trash2, ChevronRight, Bookmark, Search, Clock, CheckCircle2, Sparkles, Terminal, Code2, Menu, X } from 'lucide-react';
import { getData, toggleImportant, deleteItem } from '../data/dataManager';
import AddContentModal from '../components/AddContentModal';

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

    if (!subject) return <div style={{ padding: '160px', textAlign: 'center' }}><Sparkles className="animate-float" /> Loading Subject...</div>;

    const items = (() => {
        const rawItems = subject[activeTab] || [];
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
                    <li key={`li-${index}`} style={{ marginBottom: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>
                        {trimmed.replace(/^[-•]\s+/, '')}
                    </li>
                );
                return;
            }

            flushList(index);

            const labelMatch = trimmed.match(/^([A-Za-z ]+):\s*(.*)$/);
            if (labelMatch) {
                const label = labelMatch[1];
                const rest = labelMatch[2];
                elements.push(
                    <p key={`p-${index}`} style={{ marginBottom: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                        <strong style={{ color: 'var(--primary)', fontWeight: '800' }}>{label}:</strong> {rest}
                    </p>
                );
            } else {
                elements.push(
                    <p key={`p-${index}`} style={{ marginBottom: '1rem', color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem' }}>
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
                background: 'rgba(10, 11, 15, 0.95)',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'stretch' : 'center',
                padding: isMobile ? '1rem' : '0 2rem',
                justifyContent: 'space-between',
                position: 'sticky',
                top: '80px',
                zIndex: 100,
                gap: '1rem'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button onClick={() => isMobile && setIsSidebarOpen(!isSidebarOpen)} style={{
                        display: isMobile ? 'flex' : 'none',
                        background: 'rgba(255,255,255,0.05)',
                        border: 'none',
                        color: 'white',
                        padding: '8px',
                        borderRadius: '8px'
                    }}>
                        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                    <Link to="/" style={{ color: 'var(--text-muted)' }}><ArrowLeft size={20} /></Link>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontWeight: '800', fontSize: '0.9rem', color: 'white' }}>{subject.title}</span>
                        <span style={{ fontSize: '0.65rem', color: 'var(--primary)', fontWeight: '900', letterSpacing: '0.05em' }}>DOCS V1.2</span>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    background: 'rgba(255,255,255,0.03)',
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
                    borderRight: '1px solid rgba(255,255,255,0.05)',
                    position: isMobile ? 'fixed' : 'sticky',
                    top: isMobile ? '0' : '150px',
                    left: isMobile && !isSidebarOpen ? '-320px' : '0',
                    height: isMobile ? '100vh' : 'calc(100vh - 150px)',
                    zIndex: 150,
                    background: isMobile ? '#0a0b0f' : 'transparent',
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
                                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)',
                                color: 'white', fontSize: '0.85rem'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {filteredItems.map((item, index) => (
                            <button
                                key={index}
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
                            </button>
                        ))}
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
                                        <button onClick={handleToggle} style={{ background: 'none', border: 'none', color: currentItem.important ? 'var(--warning)' : 'rgba(255,255,255,0.2)', cursor: 'pointer' }}>
                                            <Star size={20} fill={currentItem.important ? 'currentColor' : 'none'} />
                                        </button>
                                    </div>
                                    <h1 style={{ fontSize: isMobile ? '1.8rem' : '2.8rem', fontWeight: '900', color: 'white', lineHeight: '1.2' }}>
                                        {activeTab === 'concepts' ? currentItem.title : currentItem.question}
                                    </h1>
                                </div>

                                <div style={{
                                    background: 'rgba(255,255,255,0.01)',
                                    padding: isMobile ? '1.5rem' : '2.5rem',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    marginBottom: '3rem'
                                }}>
                                    {activeTab === 'concepts' ? (
                                        <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.85)' }}>
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
                                                            background: isCorrect ? 'rgba(16, 185, 129, 0.1)' : isSelected ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255,255,255,0.02)',
                                                            border: `1px solid ${isCorrect ? 'var(--primary)' : isSelected ? 'var(--error)' : 'rgba(255,255,255,0.05)'}`,
                                                            color: 'white', cursor: isAnswerRevealed ? 'default' : 'pointer',
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
                                                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>{currentItem.explanation}</p>
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
                                        style={{ flex: 1, padding: '12px', borderRadius: '10px', background: 'rgba(255,255,255,0.03)', color: 'white', border: 'none', fontWeight: '800', opacity: selectedItemIndex === 0 ? 0.3 : 1 }}
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
