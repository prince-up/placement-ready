import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ customItems }) => {
    const location = useLocation();

    // If custom items are provided, use them. Otherwise, generate from path.
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Mapping for readable names
    const routeNameMap = {
        'library': 'Knowledge Vault',
        'interview-vault': 'HR Archive',
        'company-sheets': 'Company Briefs',
        'buy-premium': 'Premium Access',
        'auth': 'Profile',
        'subject': 'Curriculum'
    };

    // If we have custom items (e.g., from SubjectDetail with specific title), use those
    // Format: [{ label: 'Home', path: '/' }, { label: 'OS', path: '/subject/os' }]

    let items = [];

    if (customItems) {
        items = customItems;
    } else {
        items = [{ label: 'Home', path: '/' }];
        let currentPath = '';

        pathnames.forEach((value, index) => {
            currentPath += `/${value}`;
            const isLast = index === pathnames.length - 1;

            // Skip "subject" segment if it's just a prefix, handled by next segment logic usually, 
            // but for simple generative generation we might keep it or clean it.
            // Actually, for /subject/1, we might want "Home > Curriculum > [Subject Name]"
            // But without the subject name data here, we fall back to ID or Route Map.

            let label = routeNameMap[value] || value.charAt(0).toUpperCase() + value.slice(1);

            // Special handling for cleaner URLs if needed
            if (value.length > 20) label = value.substring(0, 20) + '...';

            items.push({
                label: label,
                path: currentPath,
                isLast
            });
        });
    }

    return (
        <nav aria-label="breadcrumb" style={{ marginBottom: '1.5rem' }}>
            <ol style={{
                display: 'flex',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '6px'
            }}>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={item.path || index} style={{ display: 'flex', alignItems: 'center' }}>
                            {index > 0 && (
                                <ChevronRight
                                    size={14}
                                    style={{ margin: '0 6px', color: 'var(--text-muted)', opacity: 0.5 }}
                                />
                            )}

                            {item.label === 'Home' ? (
                                <Link to="/" style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)', transition: '0.2s', opacity: 0.7 }}>
                                    <Home size={16} />
                                </Link>
                            ) : isLast ? (
                                <span style={{
                                    fontSize: '0.85rem',
                                    fontWeight: '700',
                                    color: 'var(--primary)',
                                    background: 'rgba(16, 185, 129, 0.1)',
                                    padding: '2px 8px',
                                    borderRadius: '4px'
                                }}>
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    to={item.path}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'var(--text-muted)',
                                        fontSize: '0.85rem',
                                        fontWeight: '500',
                                        transition: '0.2s'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--text-main)'}
                                    onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
