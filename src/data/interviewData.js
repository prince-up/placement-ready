export const hrSections = [
    {
        id: 'intro',
        title: 'Introduction',
        icon: 'UserCheck',
        description: 'The absolute essentials to make a great first impression.',
        questions: [
            {
                id: 1,
                question: "Tell me about yourself.",
                tips: ["Focus on recent achievements", "Skills aligned with CV", "Projects (1-2 lines)", "Career goal"],
                modelAnswer: "I am a proactive software engineering student with expertise in React and Node.js. My core strength lies in translating complex requirements into efficient code, as seen in my recent 'Placement Revision Portal' project which helped my peers streamline their study process. I'm now eager to join your team to solve real-world engineering challenges.",
                starMethod: null,
                isImportant: true
            },
            {
                id: 2,
                question: "Walk me through your CV.",
                tips: ["Keep it chronological", "Highlight quantified impact", "Explain technology choices"],
                modelAnswer: "Starting with my academics, I maintained a robust GPA while focusing on Core CS subjects. My projects demonstrate a progression from basic static sites to dynamic full-stack applications like my current Revision Vault. I've also focused on competitive programming to sharpen my logic.",
                starMethod: null,
                isImportant: true
            },
            {
                id: 3,
                question: "Why should we hire you?",
                tips: ["Show confidence & self-awareness", "Align with role specific fit"],
                modelAnswer: "You should hire me because I don't just write code; I build solutions based on user needs. My technical agility allows me to pick up new stacks quickly, and my problem-solving mindset ensures that I stay focused until the task is complete and optimized.",
                starMethod: null,
                isImportant: true
            }
        ]
    },
    {
        id: 'self',
        title: 'Self-Awareness',
        icon: 'Search',
        description: 'Understanding your strengths, weaknesses, and mindset.',
        questions: [
            {
                id: 4,
                question: "What are your strengths?",
                tips: ["Technical + Behavioral mix", "Problem solving/Consistency/Teamwork"],
                modelAnswer: "My primary strength is adaptability. In a rapidly changing tech environment, I can transition between frontend and backend or learn a new framework like Framer Motion within days. Combine this with my persistent problem-solving nature, and I can deliver results consistently.",
                isImportant: true
            },
            {
                id: 5,
                question: "What are your weaknesses?",
                tips: ["Avoid 'Perfectionism' trap", "Show an improvement mindset"],
                modelAnswer: "I previously found it challenging to delegate tasks in team projects because I wanted everything to be precise. However, I've realized that trusting teammates is crucial for scalability. I now use Trello/Notion to track team progress, which has made our collaborations much more efficient.",
                isImportant: true
            },
            {
                id: 6,
                question: "How do you handle pressure or deadlines?",
                tips: ["Mention prioritization", "Stay calm and methodical"],
                modelAnswer: "I handle pressure by breaking down large tasks into smaller, manageable chunks. I use the Eisenhower Matrix to prioritize what's urgent. This prevents me from feeling overwhelmed and keeps the quality of work high even under tight deadlines."
            },
            {
                id: 7,
                question: "Describe a challenging situation and how you handled it.",
                tips: ["Explain the problem clearly", "Highlight your logical action"],
                modelAnswer: "During our final year project, our database became extremely slow as we added more data. I took the initiative to learn indexing and query optimization, which reduced fetch times by 60%.",
                starMethod: {
                    situation: "Late-stage database latency issues.",
                    task: "Needed to optimize performance before demo.",
                    action: "Researched and implemented proper indexing/sharding.",
                    result: "Demo was smooth with fast load times."
                },
                isImportant: true
            }
        ]
    },
    {
        id: 'goals',
        title: 'Career Goals',
        icon: 'Target',
        description: 'Your motivation and long-term vision.',
        questions: [
            {
                id: 8,
                question: "Why do you want this job / role?",
                tips: ["Research company stack", "Explain why you're a perfect fit"],
                modelAnswer: "I've been following your company's work in AI-driven education. As someone who built a Revision Portal, I believe my passion for educational tech and my React skills align perfectly with your current project requirements."
            },
            {
                id: 9,
                question: "Why do you want to join our company?",
                tips: ["Show genuine interest", "Mention company culture or recent news"],
                modelAnswer: "I am impressed by your company's culture of innovation and your recent expansion into cloud services. I want to work in an environment where my contributions are valued and where I can learn from some of the best engineers in the industry.",
                isImportant: true
            },
            {
                id: 10,
                question: "Where do you see yourself in 5 years?",
                tips: ["Be ambitious but realistic", "Focus on growth and mastery"],
                modelAnswer: "In five years, I see myself as a Senior Software Engineer or Technical Architect, leading teams and contributing to large-scale architecture. I want to be known as a subject matter expert in my core tech stack.",
                isImportant: true
            }
        ]
    },
    {
        id: 'team',
        title: 'Teamwork & Behavior',
        icon: 'Users',
        description: 'How you interact with others in a professional environment.',
        questions: [
            {
                id: 13,
                question: "Are you a team player or individual contributor?",
                tips: ["Focus on the team value", "Show flexibility"],
                modelAnswer: "I am primarily a team player because I believe diverse perspectives lead to better code. However, I am also comfortable taking full ownership of a module and working independently when the situation demands it."
            },
            {
                id: 14,
                question: "Tell me about a conflict in a team and how you resolved it.",
                tips: ["Focus on 'resolution', not the drama", "Show empathy and professional maturity"],
                modelAnswer: "Once, a teammate and I disagreed on the choice of a state management library. Instead of arguing, I created a quick benchmark of both options. We reviewed the data together, and chose the one that performed better. It turned a conflict into a data-driven decision.",
                isImportant: true
            }
        ]
    },
    {
        id: 'trick',
        title: 'SITUATIONAL / TRICK',
        icon: 'Zap',
        description: 'Handling unexpected scenarios and curveballs.',
        questions: [
            {
                id: 18,
                question: "If you are not selected, what will you do?",
                tips: ["Stay positive", "Show persistence"],
                modelAnswer: "I would ask for feedback to understand my gaps. Then, I'd go back, work on those areas, and re-apply later. A rejection is just an opportunity to improve for the next attempt."
            },
            {
                id: 20,
                question: "Will you relocate?",
                tips: ["Say yes if true", "Show enthusiasm for new environments"],
                modelAnswer: "Yes, I am fully open to relocation. I believe working in different cities provides great exposure and I am excited about the opportunity to join your office.",
                isImportant: true
            }
        ]
    },
    {
        id: 'redflag',
        title: 'Red-Flag Checks',
        icon: 'AlertTriangle',
        description: 'Addressing gaps, low marks, and tough critiques.',
        questions: [
            {
                id: 24,
                question: "Why should we NOT hire you?",
                tips: ["Testing your confidence", "Turn it into a positive challenge"],
                modelAnswer: "You should not hire me if you are looking for someone who just follows orders blindly. I am someone who asks 'why' and looks for optimizations. If you want a proactive developer who challenges the status quo, then I am your person."
            },
            {
                id: 26,
                question: "Why is your percentage not very high?",
                tips: ["Be calm and honest", "Highlight practical skills over theory"],
                modelAnswer: "While my score might not be the highest, my practical implementation skills are superior. I prioritized building projects and solving real-world coding problems, which I believe is more valuable in a production environment."
            }
        ]
    },
    {
        id: 'ending',
        title: 'The Closing',
        icon: 'CheckCircle',
        description: 'The final smart questions to ask the interviewer.',
        questions: [
            {
                id: 33,
                question: "Do you have any questions for us?",
                tips: ["NEVER say No", "Ask about growth/culture/training"],
                modelAnswer: "I'd love to know what the typical career progression looks like for this role? Also, what kind of internal mentorship or training programs does the company offer to junior developers?",
                isImportant: true
            }
        ]
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
