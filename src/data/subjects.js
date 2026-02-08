export const subjects = [
    {
        id: 'os',
        title: 'Operating Systems',
        icon: 'Terminal',
        description: 'Master process management, memory allocation, storage, and I/O systems.',
        concepts: [
            {
                title: 'CPU Scheduling Algorithms',
                content: 'CPU scheduling is the process of deciding which process gets the CPU for execution while another process is on hold. Common algorithms include: \n\n• **FCFS**: First-Come, First-Served.\n• **SJF**: Shortest Job First (Provably optimal for minimizing waiting time).\n• **Round Robin**: Time-slicing approach for fair sharing.\n• **Priority Scheduling**: Based on priority values (can lead to starvation).'
            },
            {
                title: 'Deadlock Conditions & Prevention',
                content: 'A deadlock is a state where processes are blocked because each is holding a resource and waiting for another. The four Coffman conditions are: \n\n1. **Mutual Exclusion**: Non-sharable resources.\n2. **Hold and Wait**: Process holds one resource while waiting for another.\n3. **No Preemption**: Resources cannot be taken away.\n4. **Circular Wait**: A chain of processes exists where each waits for a resource held by the next.'
            },
            {
                title: 'Virtual Memory & Paging',
                content: 'Virtual memory allows execution of processes that are not completely in memory. \n\n• **Paging**: Breaking physical memory into fixed-sized blocks (frames) and logical memory into blocks (pages). \n• **Segmentation**: Memory management scheme that supports user view of memory (segments like main, stack, object).'
            }
        ],
        mcqs: [
            {
                question: 'Which scheduling algorithm is designed specifically for time-sharing systems?',
                options: ['FCFS', 'SJF', 'Round Robin', 'LJF'],
                answer: 2,
                explanation: 'Round Robin is designed for time-sharing systems, providing a fixed time quantum to each process.'
            },
            {
                question: 'What is the "Banker\'s Algorithm" used for?',
                options: ['Deadlock Recovery', 'Deadlock Prevention', 'Deadlock Avoidance', 'Deadlock Detection'],
                answer: 2,
                explanation: 'The Banker\'s algorithm is used for deadlock avoidance by simulating resource allocation for safety.'
            }
        ]
    },
    {
        id: 'dbms',
        title: 'Database Management',
        icon: 'Database',
        description: 'Relational data models, SQL optimization, Normalization, and Transactions.',
        concepts: [
            {
                title: 'Normalization (1NF to BCNF)',
                content: 'Normalization is the process of minimizing redundancy and dependency by organizing fields and table of a database. \n\n• **1NF**: Atomic values.\n• **2NF**: No partial dependency (non-prime attributes must depend on the whole key).\n• **3NF**: No transitive dependency.\n• **BCNF**: For every functional dependency X → Y, X is a superkey.'
            },
            {
                title: 'ACID Properties',
                content: 'To ensure data integrity, a database transaction must follow: \n\n• **Atomicity**: All or nothing.\n• **Consistency**: Transaction takes DB from one valid state to another.\n• **Isolation**: Concurrent transactions don\'t interfere.\n• **Durability**: Once committed, changes are permanent.'
            }
        ],
        mcqs: [
            {
                question: 'Which normal form is considered "stronger" than 3NF?',
                options: ['1NF', '2NF', 'BCNF', '4NF'],
                answer: 2,
                explanation: 'BCNF (Boyce-Codd Normal Form) is a slightly stronger version of 3NF that handles overlapping candidate keys.'
            }
        ]
    },
    {
        id: 'oops',
        title: 'OOPs Concepts',
        icon: 'Code',
        description: 'Advanced Classes, Objects, Inheritance, Polymorphism, and Solid Principles.',
        concepts: [
            {
                title: 'The Four Pillars of OOPs',
                content: '1. **Encapsulation**: Wrapping data and methods into a single unit.\n2. **Abstraction**: Hiding internal details and showing only functionality.\n3. **Inheritance**: Acquiring properties of a parent class.\n4. **Polymorphism**: Ability of a message to be displayed in more than one form (Overloading & Overriding).'
            },
            {
                title: 'SOLID Principles',
                content: 'A guide for better object-oriented design:\n\n• **S**: Single Responsibility.\n• **O**: Open/Closed (Open for extension, closed for modification).\n• **L**: Liskov Substitution.\n• **I**: Interface Segregation.\n• **D**: Dependency Inversion.'
            }
        ],
        mcqs: [
            {
                question: 'Which principle states that subclasses should be substitutable for their base classes?',
                options: ['Dependency Inversion', 'Liskov Substitution', 'Interface Segregation', 'Single Responsibility'],
                answer: 1,
                explanation: 'Liskov Substitution Principle (LSP) ensures that a derived class can stand in for its base class without breaking the program.'
            }
        ]
    },
    {
        id: 'cn',
        title: 'Computer Networks',
        icon: 'Wifi',
        description: 'OSI Layers, TCP/IP Suite, HTTP/HTTPS, and Network Security fundamentals.',
        concepts: [
            {
                title: 'OSI Reference Model',
                content: 'Seven layers: \n1. **Physical**: Bits over wire.\n2. **Data Link**: Frames, MAC addresses.\n3. **Network**: Packets, IP addresses, Routing.\n4. **Transport**: Segments, TCP/UDP, Port numbers.\n5. **Session**: Session management.\n6. **Presentation**: Data encryption/formatting.\n7. **Application**: HTTP, FTP, SMTP.'
            }
        ],
        mcqs: [
            {
                question: 'Which protocol is used to map an IP address to a MAC address?',
                options: ['DNS', 'ARP', 'DHCP', 'NAT'],
                answer: 1,
                explanation: 'ARP (Address Resolution Protocol) maps a logical IP address to a physical MAC address.'
            }
        ]
    },
    {
        id: 'dsa',
        title: 'Data Structures',
        icon: 'Binary',
        description: 'Arrays, Linked Lists, Trees, Graphs, and algorithm complexity analysis.',
        concepts: [
            {
                title: 'Big O Notation',
                content: 'Used to describe the performance or complexity of an algorithm.\n\n• **O(1)**: Constant time.\n• **O(log n)**: Logarithmic time (Binary Search).\n• **O(n)**: Linear time.\n• **O(n log n)**: Linearithmic time (Merge Sort).\n• **O(n²)**: Quadratic time (Nested loops).'
            }
        ],
        mcqs: [
            {
                question: 'Which data structure follows the LIFO principle?',
                options: ['Queue', 'Stack', 'Linked List', 'Array'],
                answer: 1,
                explanation: 'Stack follows Last-In-First-Out (LIFO), whereas Queue follows First-In-First-Out (FIFO).'
            }
        ]
    },
    {
        id: 'sd',
        title: 'System Design',
        icon: 'Layout',
        description: 'Scalability, Load Balancing, Caching, and Microservices architecture.',
        concepts: [
            {
                title: 'Scalability: Vertical vs Horizontal',
                content: '• **Vertical**: Increasing capacity of a single machine (CPU/RAM).\n• **Horizontal**: Adding more machines to the network to share load.'
            }
        ],
        mcqs: [
            {
                question: 'What is the main purpose of a Load Balancer?',
                options: ['Encrypting traffic', 'Distributing traffic', 'Caching data', 'Storing logs'],
                answer: 1,
                explanation: 'A Load Balancer distributes incoming network traffic across multiple servers to ensure reliability and performance.'
            }
        ]
    },
    {
        id: 'web',
        title: 'Web Development',
        icon: 'Globe',
        description: 'HTML/CSS, JS Engines, React internals, and web security (CORS, XSS).',
        concepts: [
            {
                title: 'The DOM & Virtual DOM',
                content: 'The DOM is a tree representation of the UI. React uses a **Virtual DOM** to minimize expensive DOM operations by diffing changes and patching only the differences.'
            }
        ],
        mcqs: [
            {
                question: 'Which of the following is NOT a valid HTTP status code for successful requests?',
                options: ['200 OK', '201 Created', '204 No Content', '304 Not Modified'],
                answer: 3,
                explanation: '304 Not Modified is a redirection/caching status code, not a 2xx success code.'
            }
        ]
    },
    {
        id: 'cd',
        title: 'Compiler Design',
        icon: 'Cpu',
        description: 'Lexical analysis, Parsing, Code generation, and Optimization techniques.',
        concepts: [
            {
                title: 'Phases of a Compiler',
                content: '1. Lexical Analysis\n2. Syntax Analysis (Parsing)\n3. Semantic Analysis\n4. Intermediate Code Gen\n5. Code Optimization\n6. Code Generation.'
            }
        ],
        mcqs: [
            {
                question: 'Which phase of the compiler is also called Scanning?',
                options: ['Lexical Analysis', 'Syntax Analysis', 'Semantic Analysis', 'Code Generation'],
                answer: 0,
                explanation: 'Lexical analysis is the first phase where the source code is scanned and converted into tokens.'
            }
        ]
    },
    {
        id: 'se',
        title: 'Software Engineering',
        icon: 'Code2',
        description: 'SDLC models, Agile methodologies, Testing strategies, and UML diagrams.',
        concepts: [
            {
                title: 'Agile Methodology',
                content: 'Agile is an iterative approach to project management and software development that helps teams deliver value to their customers faster and with fewer headaches.'
            }
        ],
        mcqs: [
            {
                question: 'Which model is also known as the Linear Sequential Model?',
                options: ['Agile', 'Waterfall', 'Spiral', 'Iterative'],
                answer: 1,
                explanation: 'The Waterfall model is a linear sequential flow in software development.'
            }
        ]
    },
    {
        id: 'ai',
        title: 'Artificial Intelligence',
        icon: 'Brain',
        description: 'Search algorithms, Neural Networks, Machine Learning, and NLP basics.',
        concepts: [
            {
                title: 'Turing Test',
                content: 'Developed by Alan Turing in 1950, it is a test of a machine\'s ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human.'
            }
        ],
        mcqs: [
            {
                question: 'Which search algorithm is guaranteed to find the shortest path?',
                options: ['BFS', 'DFS', 'Best-First', 'A* Search'],
                answer: 0,
                explanation: 'Breadth-First Search (BFS) is guaranteed to find the shortest path in an unweighted graph.'
            }
        ]
    }
];
