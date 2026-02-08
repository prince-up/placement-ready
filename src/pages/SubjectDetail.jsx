import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, BookOpen, HelpCircle, Star, Plus, Trash2, ChevronRight, Bookmark, Search, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import { getData, toggleImportant, deleteItem } from '../data/dataManager';
import AddContentModal from '../components/AddContentModal';

const SubjectDetail = () => {
    const { id } = useParams();
    const [subject, setSubject] = useState(null);
    const [activeTab, setActiveTab] = useState('concepts');
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const data = getData();
        const foundSubject = data.find(s => s.id === id);
        setSubject(foundSubject);
        setSelectedItemIndex(0); // Reset selected item when subject or tab changes
    }, [id, activeTab]); // Added activeTab to dependency array

    const handleRefresh = () => {
        const data = getData();
        const foundSubject = data.find(s => s.id === id);
        setSubject(foundSubject);
        // Keep selectedItemIndex if possible, otherwise reset to 0
        const currentItems = (foundSubject && foundSubject[activeTab]) || [];
        if (selectedItemIndex >= currentItems.length) {
            setSelectedItemIndex(0);
        }
    };

    // handleToggle and handleDelete will now operate on the currently selected item
    const handleToggle = () => {
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

    if (!subject) return <div style={{ padding: '100px', textAlign: 'center' }}>Subject not found.</div>;

    const items = subject[activeTab] || [];
    const filteredItems = items.filter(item => {
        const title = activeTab === 'concepts' ? item.title : item.question;
        return title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const currentItem = filteredItems[selectedItemIndex] || filteredItems[0];

    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="bg-mesh"></div>

            {/* Top Navigation Bar (GFG/W3 Style) */}
            <div style={{
                height: '60px',
                background: 'rgba(5, 6, 10, 0.8)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid var(--border-glass)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 2rem',
                justifyContent: 'space-between',
                position: 'sticky',
                top: '80px',
                zIndex: 100
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <Link to="/" style={{ color: 'var(--text-muted)', display: 'flex' }}><ArrowLeft size={18} /></Link>
                    <div style={{ width: '1px', height: '20px', background: 'var(--border-glass)' }}></div>
                    <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>{subject.title}</span>
                    <ChevronRight size={14} color="var(--text-muted)" />
                    <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.9rem' }}>
                        {activeTab === 'concepts' ? 'Tutorial' : 'Practice'}
                    </span>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                        onClick={() => setActiveTab('concepts')}
                        style={{
                            padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                            background: activeTab === 'concepts' ? 'var(--primary)' : 'transparent',
                            color: activeTab === 'concepts' ? 'white' : 'var(--text-muted)',
                            fontWeight: '700', fontSize: '0.8rem', transition: '0.3s'
                        }}
                    >
                        Notes
                    </button>
                    <button
                        onClick={() => setActiveTab('mcqs')}
                        style={{
                            padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                            background: activeTab === 'mcqs' ? 'var(--primary)' : 'transparent',
                            color: activeTab === 'mcqs' ? 'white' : 'var(--text-muted)',
                            fontWeight: '700', fontSize: '0.8rem', transition: '0.3s'
                        }}
                    >
                        MCQs
                    </button>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', color: 'white', padding: '8px 12px', borderRadius: '8px', cursor: 'pointer' }}
                    >
                        <Plus size={16} />
                    </button>
                </div>
            </div>

            <div style={{ display: 'flex', flex: 1 }}>

                {/* Left Sidebar (W3Schools Style) */}
                <aside style={{
                    width: '300px',
                    borderRight: '1px solid var(--border-glass)',
                    height: 'calc(100vh - 140px)',
                    position: 'sticky',
                    top: '140px',
                    overflowY: 'auto',
                    padding: '1.5rem 0',
                    background: 'rgba(255,255,255,0.01)'
                }}>
                    <div style={{ padding: '0 1.5rem', marginBottom: '1.5rem' }}>
                        <div style={{ position: 'relative' }}>
                            <Search size={14} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input
                                type="text"
                                placeholder="Search topic..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    width: '100%', padding: '10px 12px 10px 36px', borderRadius: '10px',
                                    background: 'var(--bg-glass)', border: '1px solid var(--border-glass)',
                                    color: 'white', fontSize: '0.8rem', outline: 'none'
                                }}
                            />
                        </div>
                    </div>

                    {filteredItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedItemIndex(index)}
                            style={{
                                width: '100%',
                                padding: '12px 1.5rem',
                                border: 'none',
                                background: selectedItemIndex === index ? 'rgba(14, 165, 233, 0.1)' : 'transparent',
                                color: selectedItemIndex === index ? 'var(--primary)' : 'var(--text-main)',
                                textAlign: 'left',
                                fontSize: '0.85rem',
                                fontWeight: selectedItemIndex === index ? '700' : '500',
                                cursor: 'pointer',
                                borderLeft: '3px solid',
                                borderColor: selectedItemIndex === index ? 'var(--primary)' : 'transparent',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                transition: '0.2s'
                            }}
                        >
                            <span style={{ minWidth: '20px', fontSize: '0.7rem', opacity: 0.5 }}>{index + 1}.</span>
                            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {activeTab === 'concepts' ? item.title : item.question}
                            </span>
                            {item.important && <Star size={10} fill="var(--warning)" color="var(--warning)" style={{ marginLeft: 'auto' }} />}
                        </button>
                    ))}
                    {filteredItems.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '2rem 1.5rem', opacity: 0.5, fontSize: '0.9rem' }}>
                            No items found.
                        </div>
                    )}
                </aside>

                {/* Main Content Area (GFG Style) */}
                <main style={{ flex: 1, padding: '3rem 5rem', maxWidth: '1000px', margin: '0 auto' }}>
                    <AnimatePresence mode="wait">
                        {currentItem ? (
                            <motion.div
                                key={`${activeTab}-${selectedItemIndex}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div style={{ marginBottom: '3rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                                        <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(14, 165, 233, 0.1)', color: 'var(--primary)' }}>
                                            {activeTab === 'concepts' ? <BookOpen size={20} /> : <HelpCircle size={20} />}
                                        </div>
                                        <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                                            {activeTab === 'concepts' ? 'Learning Module' : 'Skill Assessment'}
                                        </span>
                                    </div>
                                    <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '2rem', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                                        {activeTab === 'concepts' ? currentItem.title : currentItem.question}
                                    </h1>
                                    <div style={{ display: 'flex', gap: '12px' }}>
                                        <button
                                            onClick={handleToggle}
                                            style={{ padding: '8px 16px', borderRadius: '10px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)', color: currentItem.important ? 'var(--warning)' : 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', fontSize: '0.8rem' }}
                                        >
                                            <Star size={16} fill={currentItem.important ? 'currentColor' : 'none'} />
                                            {currentItem.important ? 'Saved to Vault' : 'Mark for Revision'}
                                        </button>
                                        {currentItem.isPersonal && (
                                            <button
                                                onClick={handleDelete}
                                                style={{ padding: '8px 16px', borderRadius: '10px', border: '1px solid var(--border-glass)', background: 'var(--bg-card)', color: 'var(--error)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', fontSize: '0.8rem' }}
                                            >
                                                <Trash2 size={16} /> Delete
                                            </button>
                                        )}
                                        <div className="badge" style={{ padding: '8px 16px', background: 'rgba(56, 189, 248, 0.05)', borderRadius: '10px' }}>
                                            Difficulty: Easy
                                        </div>
                                    </div>
                                </div>

                                <div style={{
                                    background: 'rgba(255,255,255,0.015)',
                                    border: '1px solid var(--border-glass)',
                                    borderRadius: '32px',
                                    padding: '4rem',
                                    minHeight: '500px',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
                                }}>
                                    {activeTab === 'concepts' ? (
                                        <div style={{ color: 'var(--text-main)', fontSize: '1.2rem', lineHeight: '2.1' }}>
                                            {currentItem.content.split('\n').map((line, i) => (
                                                <p key={i} style={{ marginBottom: '1.5rem', opacity: 0.9 }}>{line}</p>
                                            ))}

                                            {/* Artificial "GFG Code Block" Example */}
                                            <div style={{ marginTop: '4rem' }}>
                                                <div style={{
                                                    background: 'rgb(13, 17, 23)',
                                                    borderRadius: '16px',
                                                    overflow: 'hidden',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                                                }}>
                                                    <div style={{
                                                        background: 'rgba(255,255,255,0.03)',
                                                        padding: '12px 24px',
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        borderBottom: '1px solid rgba(255,255,255,0.08)'
                                                    }}>
                                                        <div style={{ display: 'flex', gap: '8px' }}>
                                                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
                                                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                                                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
                                                        </div>
                                                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Technical Architecture</span>
                                                    </div>
                                                    <pre style={{ padding: '24px', fontSize: '1rem', color: '#e2e8f0', fontFamily: 'monospace', overflowX: 'auto', lineHeight: '1.6' }}>
                                                        <code style={{ color: 'var(--primary)' }}>{"// Implementation Protocol"}</code>{"\n"}
                                                        <code style={{ color: 'var(--secondary)' }}>{"void"}</code>{" solve() {"}{"\n"}
                                                        {"    "}<code style={{ color: 'var(--text-muted)' }}>{"// Optimized execution flow"}</code>{"\n"}
                                                        {"    cout << "}<code style={{ color: 'var(--accent)' }}>{`"Precision approach evaluated"`}</code>{" << endl;"}{"\n"}
                                                        {"}"}
                                                    </pre>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                                            <div style={{ marginBottom: '2rem', padding: '1rem', borderLeft: '4px solid var(--primary)', background: 'rgba(14, 165, 233, 0.03)' }}>
                                                <p style={{ fontSize: '1.1rem', fontWeight: '500', opacity: 0.9 }}>Question Analysis: {currentItem.question}</p>
                                            </div>
                                            {currentItem.options.map((opt, i) => (
                                                <button key={i} style={{
                                                    padding: '28px 36px',
                                                    borderRadius: '20px',
                                                    border: '1px solid var(--border-glass)',
                                                    background: 'rgba(255,255,255,0.02)',
                                                    fontSize: '1.15rem',
                                                    color: 'var(--text-main)',
                                                    textAlign: 'left',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    transition: '0.3s'
                                                }} onMouseOver={(e) => {
                                                    e.currentTarget.style.borderColor = 'var(--primary)';
                                                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                                                }} onMouseOut={(e) => {
                                                    e.currentTarget.style.borderColor = 'var(--border-glass)';
                                                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                                                }}>
                                                    <div style={{ display: 'flex', gap: '20px' }}>
                                                        <span style={{ color: 'var(--primary)', fontWeight: '900', opacity: 0.5 }}>0{i + 1}</span>
                                                        {opt}
                                                    </div>
                                                </button>
                                            ))}
                                            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(16, 185, 129, 0.05)', borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <CheckCircle2 size={20} color="var(--success)" />
                                                <div>
                                                    <span style={{ fontWeight: '800', color: 'var(--success)', fontSize: '0.9rem' }}>Correct Answer: Option {String.fromCharCode(65 + currentItem.answer)}</span>
                                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>Explanation: This is the standard definition according to {subject.title} core principles.</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem' }}>
                                    <button
                                        disabled={selectedItemIndex === 0}
                                        onClick={() => setSelectedItemIndex(prev => prev - 1)}
                                        style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', opacity: selectedItemIndex === 0 ? 0.3 : 1 }}
                                    >
                                        <ArrowLeft size={18} /> Previous Topic
                                    </button>
                                    <button
                                        disabled={selectedItemIndex === filteredItems.length - 1}
                                        onClick={() => setSelectedItemIndex(prev => prev + 1)}
                                        style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: 'var(--primary)', fontWeight: '800', cursor: 'pointer', opacity: selectedItemIndex === filteredItems.length - 1 ? 0.3 : 1 }}
                                    >
                                        Next Topic <ArrowRight size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '100px 0', opacity: 0.5 }}>
                                <BookOpen size={48} style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.5rem' }}>No items found. Select a topic from the sidebar.</h3>
                            </div>
                        )}
                    </AnimatePresence>
                </main>
            </div>

            <AddContentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                subjectId={id}
                onAdded={handleRefresh}
            />
        </div>
    );
};

export default SubjectDetail;
