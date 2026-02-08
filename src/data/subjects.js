export const subjects = [
  {
    id: 'os',
    title: 'Operating Systems',
    icon: 'Terminal',
    description: 'Process management, memory allocation, storage, and I/O.',
    concepts: [
      {
        title: 'CPU Scheduling',
        content: 'CPU scheduling is the process of deciding which process gets the CPU for execution while another process is on hold. Common algorithms include FCFS, SJF, Priority Scheduling, and Round Robin.'
      },
      {
        title: 'Deadlocks',
        content: 'A deadlock is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource held by some other process. Conditions: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait.'
      },
      {
        title: 'Memory Management',
        content: 'Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory. Segmentation is another scheme where logical address space is a collection of segments.'
      }
    ],
    mcqs: [
      {
        question: 'Which of the following is NOT a condition for deadlock?',
        options: ['Mutual Exclusion', 'Hold and Wait', 'No Preemption', 'Process Preemption'],
        answer: 3,
        explanation: 'The four necessary conditions for deadlock are Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait.'
      },
      {
        question: 'What is a "Thrashing" in Operating Systems?',
        options: ['High CPU utilization', 'Excessive swapping of pages', 'Process termination', 'Disk failure'],
        answer: 1,
        explanation: 'Thrashing occurs when the system spends more time swapping pages in and out than executing processes.'
      }
    ]
  },
  {
    id: 'dbms',
    title: 'Database Management',
    icon: 'Database',
    description: 'Relational models, SQL, Normalization, and Transactions.',
    concepts: [
      {
        title: 'Normalization',
        content: 'Normalization is the process of organizing data in a database to reduce data redundancy and improve data integrity. Main forms: 1NF, 2NF, 3NF, BCNF.'
      },
      {
        title: 'ACID Properties',
        content: 'Atomicity, Consistency, Isolation, and Durability ensure that database transactions are processed reliably.'
      }
    ],
    mcqs: [
      {
        question: 'Which normal form deals with Transitive Dependency?',
        options: ['1NF', '2NF', '3NF', 'BCNF'],
        answer: 2,
        explanation: '3NF requires that all non-key attributes are not transitively dependent on the primary key.'
      }
    ]
  },
  {
    id: 'oops',
    title: 'OOPs Concepts',
    icon: 'Code',
    description: 'Classes, Objects, Inheritance, Polymorphism, and Encapsulation.',
    concepts: [
      {
        title: 'Polymorphism',
        content: 'Polymorphism allows objects of different classes to be treated as objects of a common superclass. Types: Compile-time (Overloading) and Runtime (Overriding).'
      },
      {
        title: 'Encapsulation',
        content: 'Encapsulation is the bundling of data and the methods that act on that data into a single unit (class), restricting direct access to some components.'
      }
    ],
    mcqs: [
      {
        question: 'Which feature of OOPs allows a class to derive properties from another class?',
        options: ['Encapsulation', 'Abstraction', 'Inheritance', 'Polymorphism'],
        answer: 2,
        explanation: 'Inheritance is the mechanism by which one class acquires the properties and behaviors of another class.'
      }
    ]
  },
  {
    id: 'cn',
    title: 'Computer Networks',
    icon: 'Radio',
    description: 'OSI Model, TCP/IP, Routing, and Network Security.',
    concepts: [
      {
        title: 'OSI Model',
        content: 'Open Systems Interconnection model defines 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.'
      },
      {
        title: 'TCP vs UDP',
        content: 'TCP (Transmission Control Protocol) is connection-oriented and reliable. UDP (User Datagram Protocol) is connectionless and faster but unreliable.'
      }
    ],
    mcqs: [
      {
        question: 'At which layer does the IP protocol operate?',
        options: ['Data Link', 'Transport', 'Network', 'Session'],
        answer: 2,
        explanation: 'IP (Internet Protocol) operates at the Network layer of the OSI model.'
      }
    ]
  }
];
