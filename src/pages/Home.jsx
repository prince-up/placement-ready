import React from 'react';
import Hero from '../components/Hero';
import SubjectCard from '../components/SubjectCard';
import { subjects } from '../data/subjects';

const Home = () => {
    return (
        <main>
            <Hero />
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Core Subjects</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Choose a subject to start your revision</p>
                    </div>
                    <div className="subject-grid">
                        {subjects.map((sub, index) => (
                            <SubjectCard key={sub.id} subject={sub} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
