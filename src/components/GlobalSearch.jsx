import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Using useNavigate instead of useHistory or redirect
import { Search, Command, BookOpen, Hash, FileText, CornerDownLeft, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getData } from '../data/dataManager';
import { hrSections, companySheets } from '../data/interviewData';

const GlobalSearch = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef(null);
    const containerRef = useRef(null);
    const navigate = useNavigate();

    // Toggle with keyboard shortcut
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Focus input when opened
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
            document.body.style.overflow = 'hidden';
            setQuery('');
            setResults([]);
        } else {
            document.body.style.overflow = 'unset';
            setSelectedIndex(0);
        }
    }, [isOpen]);

    // Handle Search Logic
    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const lowerQuery = query.toLowerCase();
        const searchResults = [];

        // 1. Static Pages
        const staticPages = [
            { title: 'Home', path: '/', type: 'Page', icon: Hash },
            { title: 'Library (Vault)', path: '/library', type: 'Page', icon: BookOpen },
            { title: 'Interview Archive', path: '/interview-vault', type: 'Page', icon: FileText },
            { title: 'Company Resource Sheets', path: '/company-sheets', type: 'Page', icon: FileText },
            { title: 'Buy Premium', path: '/buy-premium', type: 'Page', icon: Hash },
        ];

        staticPages.forEach(page => {
            if (page.title.toLowerCase().includes(lowerQuery)) {
                searchResults.push(page);
            }
        });

        // 2. Subjects & Concepts
        const subjects = getData();
        subjects.forEach(sub => {
            // Subject match
            if (sub.title.toLowerCase().includes(lowerQuery)) {
                searchResults.push({
                    title: sub.title,
                    path: `/subject/${sub.id}`,
                    type: 'Subject',
                    icon: BookOpen
                });
            }
            // Concepts match
            sub.concepts?.forEach(con => {
                if (con.title.toLowerCase().includes(lowerQuery)) {
                    searchResults.push({
                        title: con.title,
                        subtitle: sub.title,
                        path: `/subject/${sub.id}`, // Note: deep linking might require state passing or hash headers
                        type: 'Concept',
                        icon: FileText
                    });
                }
            });
        });

        // 3. HR Questions
        hrSections.forEach(section => {
            section.questions.forEach((q, idx) => {
                if (q.question.toLowerCase().includes(lowerQuery)) {
                    searchResults.push({
                        title: q.question,
                        subtitle: `HR: ${section.title}`,
                        path: '/interview-vault',
                        type: 'Interview',
                        icon: FileText,
                        // Could pass state to expand this specific question
                    });
                }
            });
        });

        // 4. Company Sheets
        companySheets.forEach(sheet => {
            if (sheet.name.toLowerCase().includes(lowerQuery)) {
                searchResults.push({
                    title: sheet.name,
                    subtitle: 'Company Strategy',
                    path: '/company-sheets',
                    type: 'Company',
                    icon: FileText
                });
            }
        });

        setResults(searchResults.slice(0, 10)); // Limit to 10 results
        setSelectedIndex(0);
    }, [query]);

    // Keyboard Navigation
    const handleNavigation = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex(prev => (prev + 1) % results.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (results[selectedIndex]) {
                handleSelect(results[selectedIndex]);
            }
        }
    };

    const handleSelect = (item) => {
        setIsOpen(false);
        navigate(item.path);
    };

    // Close when clicking outside
    const handleBackdropClick = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="cmd-palette-backdrop"
                    onClick={handleBackdropClick}
                    style={{
                        position: 'fixed', inset: 0,
                        background: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(4px)',
                        zIndex: 9999,
                        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                        paddingTop: '15vh'
                    }}
                >
                    <motion.div
                        ref={containerRef}
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.1 }}
                        style={{
                            width: '90%', maxWidth: '600px',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-glass)',
                            borderRadius: '12px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
                            overflow: 'hidden',
                            display: 'flex', flexDirection: 'column',
                            maxHeight: '60vh'
                        }}
                    >
                        {/* Input Area */}
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '12px',
                            padding: '16px 20px', borderBottom: '1px solid var(--border-glass)'
                        }}>
                            <Search size={20} color="var(--text-muted)" />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search documentation, interview questions..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={handleNavigation}
                                style={{
                                    flex: 1, background: 'transparent', border: 'none',
                                    outline: 'none', fontSize: '1rem', color: 'var(--text-main)',
                                    fontWeight: '500'
                                }}
                            />
                            <div style={{
                                display: 'flex', alignItems: 'center', gap: '6px',
                                fontSize: '0.75rem', color: 'var(--text-muted)',
                                background: 'rgba(0,0,0,0.05)', padding: '4px 8px', borderRadius: '4px'
                            }}>
                                <span style={{ fontSize: '10px' }}>ESC</span>
                            </div>
                        </div>

                        {/* Results list */}
                        <div style={{ padding: '8px', overflowY: 'auto', flex: 1 }}>
                            {results.length === 0 && query.length > 0 && (
                                <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                    No results found for "{query}"
                                </div>
                            )}

                            {results.length === 0 && query.length === 0 && (
                                <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', opacity: 0.7 }}>
                                    Type to search...
                                </div>
                            )}

                            {results.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleSelect(item)}
                                    onMouseEnter={() => setSelectedIndex(index)}
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                        padding: '12px 16px', borderRadius: '8px',
                                        cursor: 'pointer',
                                        background: selectedIndex === index ? 'var(--primary)' : 'transparent',
                                        color: selectedIndex === index ? 'white' : 'var(--text-main)',
                                        transition: 'background 0.1s'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <item.icon size={18} style={{ opacity: selectedIndex === index ? 1 : 0.5 }} />
                                        <div>
                                            <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>{item.title}</div>
                                            {item.subtitle && (
                                                <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>{item.subtitle}</div>
                                            )}
                                        </div>
                                    </div>
                                    {selectedIndex === index && <CornerDownLeft size={16} />}
                                </div>
                            ))}
                        </div>

                        <div style={{
                            padding: '8px 16px', background: 'rgba(0,0,0,0.02)', borderTop: '1px solid var(--border-glass)',
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-muted)'
                        }}>
                            <div>
                                <span style={{ fontWeight: '700' }}>Tip:</span> Use arrow keys to navigate
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                Syllablink Search
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default GlobalSearch;
