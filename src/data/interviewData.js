export const hrQuestions = [
    {
        id: 1,
        question: "Tell me about yourself.",
        tips: ["Focus on your recent achievements", "Keep it under 2 minutes", "Connect your background to the job role"],
        modelAnswer: "I am a CSE student with a passion for building scalable web applications. Recently, I built a Placement Revision Portal that helped my peers master core CS concepts. My technical stack includes React and Node.js, and I've solved over 300+ DSA problems. I'm now looking to apply my technical skills at a forward-thinking company like yours.",
        starMethod: null
    },
    {
        id: 2,
        question: "What are your strengths and weaknesses?",
        tips: ["Be honest about weaknesses but show improvement", "Align strengths with company values"],
        modelAnswer: "My greatest strength is my persistence in problem-solving; I don't give up until I find an optimized solution. As for a weakness, I used to struggle with public speaking, but I've been actively taking part in college debates and presentations to build my confidence.",
        starMethod: {
            situation: "During a team project, we had a major bug 2 hours before submission.",
            task: "I had to identify and fix the memory leak while the team stayed calm.",
            action: "I used DevTools to profile the app, found the redundant hook, and refactored the code.",
            result: "We submitted on time and received an 'A' grade."
        }
    },
    {
        id: 3,
        question: "Why should we hire you?",
        tips: ["Highlight your unique selling point", "Show your enthusiasm for the role"],
        modelAnswer: "You should hire me because I combine technical proficiency with a strong proactive mindset. I don't just wait for instructions; I identify gaps (like I did with my revision project) and build solutions. I am ready to hit the ground running and contribute to your team's success from day one.",
        starMethod: null
    }
];

export const companySheets = [
    {
        id: 'big-tech',
        name: 'Amazon / Google / Meta',
        level: 'Top Tier (FAANG)',
        color: '#3b82f6',
        description: 'Focus heavily on Algorithm optimization and scalable system design.',
        mustKnow: ['Advanced DSA (Graphs, DP)', 'System Design Basics', 'Scalability Concepts', 'Clean Code'],
        strategy: 'Focus on Time/Space complexity. For every solution, provide an optimized version. Practice LeetCode Medium/Hard.'
    },
    {
        id: 'service-based',
        name: 'TCS / Infosys / Wipro',
        level: 'Entry Level (Mass Recruditers)',
        color: '#10b981',
        description: 'Focus on fundamentals, aptitude, and verbal communication.',
        mustKnow: ['Logical Reasoning', 'Quantitative Aptitude', 'OOPs Basics', 'Java/C++ Fundamentals'],
        strategy: 'Solve past technical papers. Focus on speed and accuracy in Aptitude rounds. Keep your communication clear and polite.'
    },
    {
        id: 'startups',
        name: 'Next-Gen Startups',
        level: 'Aggressive Growth',
        color: '#f59e0b',
        description: 'Focus on project depth, tech stack mastery, and problem-solving agility.',
        mustKnow: ['MERN/MEAN Stack', 'Git/GitHub Flow', 'Personal Projects', 'Real-world Bug Fixing'],
        strategy: 'Be ready to discuss your projects in extreme detail. Showing you can "Get things done" is more important than pure theory.'
    }
];
