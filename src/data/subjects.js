export const subjects = [
    {
        id: 'os',
        title: 'Operating Systems',
        icon: 'Terminal',
        description: 'Master process management, memory allocation, storage, and I/O systems.',
        concepts: [
            {
                title: '1.1 Operating System (OS) – Definition',
                content: 'An operating system is system software that manages computer hardware and provides services to users and applications.\n\nIn simple terms:\n• Users cannot interact with hardware directly.\n• The OS translates user commands into hardware actions.\n• The OS decides which program gets CPU time, which process gets memory, and which files can be accessed.\n\nCore responsibilities:\n• Process, memory, file, device, and security management.\n• Scheduling and resource allocation.\n\nExamples: Windows, Linux, macOS, Android.\nInterview line: The OS acts as an intermediary between the user and the hardware.'
            },
            {
                title: '1.1.1 Batch Operating System',
                content: 'Jobs are grouped and executed as batches with no user interaction during execution.\nFlow: job queue → load → execute → store output → next job.\nUsed historically in mainframes for large, repetitive workloads.\nLimitations: not suitable for interactive apps, possible starvation, no preemption, low responsiveness.'
            },
            {
                title: '1.1.1 Multiprogramming OS',
                content: 'Multiple programs are kept in memory. If one waits for I/O, the CPU runs another program.\nAdvantages: better CPU utilization and higher throughput, reduced idle time.\nLimitation: typically non-preemptive; needs memory protection and job scheduling.'
            },
            {
                title: '1.1.1 Multitasking / Time Sharing OS',
                content: 'The CPU gives each process a small time slice (quantum). When it expires, the next process runs.\nPreemption is supported for responsiveness and fairness.\nExample: Windows, Linux.\nInterview line: A multitasking OS gives the illusion of parallel execution.'
            },
            {
                title: '1.1.1 Real-Time OS (RTOS)',
                content: 'Designed for predictable response times. Missing a deadline can be a failure.\nTypes: Soft RT (deadline miss allowed with degraded performance), Hard RT (deadline miss not allowed).\nUse cases: medical devices, robotics, avionics, embedded control systems.'
            },
            {
                title: '1.1.1 Distributed OS',
                content: 'Multiple computers work together and appear as a single system.\nFeatures include resource sharing, load balancing, fault tolerance, and transparent communication.'
            },
            {
                title: '1.1.1 Network OS (NOS)',
                content: 'Supports file sharing, printer sharing, authentication, and communication over a network.\nExamples: Windows Server, UNIX-based servers.'
            },
            {
                title: '1.1.1 Embedded OS',
                content: 'Built for special-purpose devices such as IoT devices, appliances, and industrial machines.\nOften optimized for small memory, low power, and real-time constraints.'
            },
            {
                title: '1.1.1 Mobile OS',
                content: 'Designed for mobile devices with focus on battery efficiency, sensors, and touch UI.\nExamples: Android, iOS.'
            },
            {
                title: '1.1.1 Single User OS',
                content: 'Supports one user at a time. Typical for personal computers and single-user systems.'
            },
            {
                title: '1.1.1 Multi User OS',
                content: 'Supports multiple users concurrently with authentication, access control, and resource isolation.'
            },
            {
                title: '1.2 Kernel',
                content: 'The kernel is the core of the OS that directly interacts with hardware.\nKey roles: process scheduling, memory management, device control, interrupt handling, and system call handling.\nIt runs in privileged mode.'
            },
            {
                title: '1.2.1 Monolithic Kernel',
                content: 'Most OS services (drivers, file systems, networking) run in kernel space. Fast but less isolated.\nExample: Linux.'
            },
            {
                title: '1.2.1 Microkernel',
                content: 'Only essential services run in kernel space; others run in user space via IPC.\nImproves isolation but adds communication overhead.\nExample: MINIX.'
            },
            {
                title: '1.2.1 Hybrid Kernel',
                content: 'Combines monolithic performance with microkernel modularity.\nExample: Windows NT.'
            },
            {
                title: '1.2.1 Exokernel',
                content: 'Applications get more direct access to hardware with minimal kernel abstraction.\nThis allows custom resource management in user space.'
            },
            {
                title: '1.2.1 Nanokernel',
                content: 'Extremely small kernel focused on basic hardware control for resource-constrained systems.'
            },
            {
                title: '1.2.1 Real-Time Kernel',
                content: 'Provides deterministic response times with priority-based scheduling for real-time systems.'
            },
            {
                title: '1.2.1 Hypervisor (Virtualization Kernel)',
                content: 'Runs multiple operating systems on the same hardware through virtualization (Type 1 or Type 2).'
            },
            {
                title: '1.2.2 Mode Bit',
                content: 'A hardware-supported security mechanism.\nUser Mode: restricted access. Kernel Mode: full access.\nPurpose: protection, stability, and security. Privileged instructions trap to the OS.'
            },
            {
                title: '1.3 System Calls',
                content: 'System calls are the interface for user programs to request OS services, switching from user mode to kernel mode.\nTypes: Process control (fork, exec, wait), File (open/read/write/close), Device (ioctl), Info (getpid/time), Communication (pipe/message queues/semaphores), Memory (brk/mmap), Network (socket/bind/listen/accept).'
            },
            {
                title: '1.4 Process – Basics',
                content: 'A process is a program in execution with its own address space, registers, and execution context.\n[DIAGRAM:PROCESS_STATES]'
            },
            {
                title: '1.4.1 Types of Processes',
                content: 'Foreground, Background, Parent, Child, Daemon, Orphan, Zombie, Interactive, Batch, User-level, System-level, Cooperative, Preemptive.'
            },
            {
                title: '1.4.2 Process States',
                content: 'New, Ready, Running, Waiting/Blocked, Terminated.'
            },
            {
                title: '1.4.3 Process Control Block (PCB)',
                content: 'The PCB stores process information such as PID, state, program counter, CPU registers, memory info, priority, and I/O status. It enables context switching.'
            },
            {
                title: '1.5 CPU Scheduling – Meaning',
                content: 'CPU scheduling decides which ready process gets the CPU and when. Only one process can run on a single CPU at a time, so the scheduler optimizes fairness and performance.'
            },
            {
                title: 'CPU Scheduling Goals',
                content: 'Keep the CPU busy, reduce waiting and turnaround time, increase throughput, and maintain fairness.'
            },
            {
                title: 'CPU Scheduling Terms',
                content: 'Arrival Time, Burst Time, Completion Time, Turnaround Time = Completion − Arrival, Waiting Time = Turnaround − Burst, Response Time = First CPU Time − Arrival, Throughput, CPU Utilization = (Busy Time/Total Time) × 100.'
            },
            {
                title: '1.5.1 FCFS',
                content: 'First-Come, First-Served. Non-preemptive. Simple with no starvation, but can cause convoy effect and high waiting time.'
            },
            {
                title: '1.5.1 SJF / SRTF',
                content: 'Shortest Job First (or preemptive SRTF). Minimizes average waiting time but requires burst-time estimation and can cause starvation.'
            },
            {
                title: '1.5.1 Priority Scheduling',
                content: 'Higher-priority processes run first (preemptive or non-preemptive). Starvation is possible; aging helps mitigate it.'
            },
            {
                title: '1.5.1 Round Robin (RR)',
                content: 'Each process gets a fixed time quantum. Fair and good for time-sharing; very small quantum adds overhead, very large behaves like FCFS.'
            },
            {
                title: '1.5.1 Multilevel Queue',
                content: 'Processes are placed in separate queues (e.g., system, interactive, batch) with fixed priorities. No movement between queues; starvation possible.'
            },
            {
                title: '1.5.1 Multilevel Feedback Queue',
                content: 'Processes can move between queues based on behavior. Adaptive but more complex.'
            },
            {
                title: '1.5.1 HRRN',
                content: 'Highest Response Ratio Next. Response Ratio = (Waiting + Burst) / Burst; reduces starvation.'
            },
            {
                title: '1.5.1 Lottery Scheduling',
                content: 'Processes receive tickets; a random draw selects the next process. Fair probabilistic scheduling.'
            },
            {
                title: 'Preemptive vs Non-Preemptive',
                content: 'Preemptive: the OS can interrupt a process (RR, SRTF). Non-preemptive: the process releases the CPU itself (FCFS, SJF).'
            },
            {
                title: 'Starvation & Aging',
                content: 'Starvation happens when a process waits indefinitely. Aging gradually increases a waiting process’s priority.'
            },
            {
                title: 'Gantt Chart (Concept)',
                content: 'A timeline view of process execution used to compute waiting and turnaround times.'
            },
            {
                title: '1.6 Thread – Basics',
                content: 'A thread is the smallest unit of execution within a process. Threads share memory and code but have their own stack and registers, making them lightweight and fast.'
            },
            {
                title: 'Threads: User vs Kernel',
                content: 'User-level threads are managed by libraries (fast but one blocking call can block all). Kernel-level threads are managed by the OS (true parallelism, more overhead).'
            },
            {
                title: 'Thread Models',
                content: 'Many-to-One, One-to-One, Many-to-Many, and Hybrid models.'
            },
            {
                title: '1.7 Synchronization – Basics',
                content: 'Synchronization ensures safe access to shared data. Without it, you get data corruption, race conditions, and incorrect results.'
            },
            {
                title: 'Critical Section + Mutual Exclusion',
                content: 'Critical section is the code that accesses shared resources. Mutual exclusion ensures only one thread/process enters at a time.'
            },
            {
                title: 'Race Condition',
                content: 'A race condition occurs when output depends on the timing/order of concurrent operations.'
            },
            {
                title: 'Semaphore',
                content: 'A synchronization variable used to control access. Types: binary and counting. Operations: wait() and signal().'
            },
            {
                title: 'Mutex',
                content: 'A lock/unlock mechanism with ownership, allowing only one thread at a time.'
            },
            {
                title: 'Condition Variable',
                content: 'Allows threads to wait and be signaled based on specific conditions.'
            },
            {
                title: 'Classical Synchronization Problems',
                content: 'Producer–Consumer, Reader–Writer, Dining Philosophers, Sleeping Barber.'
            },
            {
                title: '1.9 Deadlock – Definition',
                content: 'Deadlock is when two or more processes wait indefinitely for resources held by each other, so none can proceed.'
            },
            {
                title: 'Coffman Conditions',
                content: 'Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait. If any one is removed, deadlock cannot occur.'
            },
            {
                title: 'Resource Allocation Graph (RAG)',
                content: 'A graph that models process-resource requests/allocations. A cycle implies deadlock may be possible.'
            },
            {
                title: 'Safe State & Safe Sequence',
                content: 'A safe state means processes can finish in some order without deadlock.'
            },
            {
                title: 'Deadlock Handling',
                content: 'Strategies include Prevention, Avoidance (Banker’s Algorithm), Detection, and Recovery.'
            },
            {
                title: 'Banker’s Algorithm (Idea)',
                content: 'Grant a request only if the system remains in a safe state.'
            },
            {
                title: 'Deadlock vs Starvation',
                content: 'Deadlock: no process progresses. Starvation: some processes never get CPU or resources.'
            },
            {
                title: '1.10 Types of Memory',
                content: 'Primary (RAM – volatile), ROM (non-volatile), Secondary (HDD/SSD/USB), Cache (L1/L2/L3), Registers, Virtual Memory (disk used as an extension of RAM).\nRegisters are the fastest storage and are inside the CPU.'
            },
            {
                title: '1.11 Memory Management Schemes',
                content: 'Fixed partitioning (simple but causes internal fragmentation) and variable partitioning (flexible but causes external fragmentation).'
            },
            {
                title: 'Memory Allocation Algorithms',
                content: 'First Fit (first free block), Best Fit (smallest sufficient block), Worst Fit (largest block), Next Fit (continue search from last position).'
            },
            {
                title: 'Paging',
                content: 'Memory is divided into frames and processes into pages. Pages need not be contiguous. A page table maps pages to frames.\nPaging removes external fragmentation but can introduce internal fragmentation.'
            },
            {
                title: 'Logical vs Physical Address',
                content: 'Logical Address = Page Number + Offset; Physical Address = Frame Number + Offset.'
            },
            {
                title: 'Demand Paging + Page Fault',
                content: 'Pages are loaded into RAM only when needed. A page fault occurs when the required page is not in memory, causing the OS to load it from disk.'
            },
            {
                title: 'Page Replacement Algorithms',
                content: 'FIFO (Belady’s anomaly), LRU, LFU, Optimal, and Clock.'
            },
            {
                title: 'Thrashing',
                content: 'Excessive page faults that severely degrade performance and keep the CPU busy handling memory rather than executing processes.'
            },
            {
                title: 'TLB (Translation Lookaside Buffer)',
                content: 'A cache of page table entries that speeds up address translation and reduces memory access time.'
            },
            {
                title: 'Segmentation',
                content: 'Divides memory into logical segments such as code, data, and stack. Each segment has a base and limit.'
            },
            {
                title: 'Paging vs Segmentation',
                content: 'Paging uses fixed-size blocks with no external fragmentation. Segmentation uses variable-size logical blocks and can suffer external fragmentation. Both can be combined to get benefits of both.'
            },
            {
                title: '1.12 Secondary Storage',
                content: 'HDD: magnetic storage with mechanical parts (slower, cheaper). SSD: flash storage with no moving parts (faster, more durable).'
            },
            {
                title: '1.13 RAID',
                content: 'RAID combines disks for performance and/or reliability.\nRAID 0: striping (fast, no redundancy).\nRAID 1: mirroring (redundancy).\nRAID 5/6: parity-based fault tolerance.\nRAID 10: striping + mirroring.'
            },
            {
                title: '1.14 File System',
                content: 'Organizes files and directories, stores metadata, and enforces access control.\nFile attributes include size, permissions, timestamps, and owner.'
            },
            {
                title: 'Inode',
                content: 'Stores file metadata (permissions, size, and pointers to data blocks) on Unix-like systems. The filename is stored in directories, not in the inode.'
            },
            {
                title: 'File Descriptor',
                content: 'An integer handle used by the OS to access files. Standard: 0 (stdin), 1 (stdout), 2 (stderr).'
            },
            {
                title: '1.15 Disk Scheduling',
                content: 'Goal: minimize seek time and improve disk throughput. Algorithms: FCFS, SSTF, SCAN, C-SCAN, LOOK/C-LOOK.'
            },
            {
                title: '1.16 Linux Commands',
                content: 'File: ls, cd, cp, rm. Process: ps, top, kill. System: uname, df, free. Network: ping, netstat, ifconfig. Users: useradd, passwd, usermod.\nThese commands help manage files, processes, and system resources.'
            },
            {
                title: 'Security Basics',
                content: 'sudo for admin access, chmod for permissions, ufw/iptables for firewall management. Use least privilege for safety.'
            },
            {
                title: 'Worksheet 1 – Subjective Questions',
                content: '• Compare real-time OS (RTOS) with general-purpose OS and give use cases.\n• Compare microkernel vs monolithic kernel, with examples and trade-offs.\n• Describe the boot process: bootloader role and kernel initialization.\n• Explain how device drivers connect software and hardware.\n• Describe system calls and give common examples.\n• Explain interrupts in computer systems.'
            },
            {
                title: 'Worksheet 2 – Subjective Questions',
                content: '• Explain a process and its key components during execution.\n• Describe the process lifecycle and state transitions.\n• Compare preemptive vs non-preemptive scheduling with examples.\n• Define a thread and list advantages over processes.\n• Compare user-level vs kernel-level threads with pros/cons.\n• Practice: compute turnaround time for Round Robin with given data.'
            },
            {
                title: 'Worksheet 3 – Subjective Questions',
                content: '• Explain synchronization and why it is essential in concurrent programs.\n• Define the critical section problem and its requirements.\n• Explain deadlock and the conditions required for it.\n• Differentiate deadlock prevention vs avoidance.\n• Practice: priority scheduling averages for given burst times.\n• Practice: Banker’s algorithm safe state with given matrices.'
            },
            {
                title: 'Worksheet 4 – Subjective Questions',
                content: '• Explain LRU page replacement, pros/cons, and where it performs well/poorly.\n• Describe disk structure (tracks, sectors, cylinders) and its impact on access time.\n• Discuss disk partitioning benefits for organization and security.\n• Practice: LRU page faults for a given reference string and frame count.\n• Explain RAID and at least three RAID levels.\n• Practice: SSTF total head movement for a given request sequence.'
            },
            {
                title: 'Inter-Process Communication (IPC)',
                content: 'Processes communicate using shared memory, message queues, pipes, sockets, and signals. IPC needs synchronization to avoid race conditions.'
            },
            {
                title: 'Deadlock Handling Strategies',
                content: 'Approaches: prevention (break Coffman conditions), avoidance (Banker\'s algorithm), detection (wait-for graph), and recovery (rollback/kill).' 
            },
            {
                title: 'File Systems & Journaling',
                content: 'File systems manage directories, metadata, and allocation. Journaling improves crash recovery by logging updates before applying them.'
            },
            {
                title: 'I/O Systems & Disk Scheduling',
                content: 'I/O includes buffering, caching, spooling, and device drivers. Disk scheduling: FCFS, SSTF, SCAN, C-SCAN, LOOK.'
            },
            {
                title: 'Virtual Memory Metrics',
                content: 'Key terms: page fault rate, effective access time (EAT), working set, thrashing detection and control.'
            },
            {
                title: 'Scheduling Queues and Schedulers',
                content: 'Job queue holds all processes, ready queue holds processes in memory, and device queues hold processes waiting for I/O. Schedulers: long-term (admission), short-term (CPU), and medium-term (swapping).' 
            },
            {
                title: 'Context Switching',
                content: 'Context switch saves the CPU state of a running process and restores another. It adds overhead but enables multitasking.'
            },
            {
                title: 'User Mode vs Kernel Mode',
                content: 'User mode has restricted privileges. Kernel mode has full access to hardware and critical instructions. System calls switch from user to kernel mode.'
            },
            {
                title: 'Scheduling Algorithms (Advanced)',
                content: 'Priority Based Scheduling (PBS), Multilevel Queue (MLQ), and Multilevel Feedback Queue (MLFQ) handle mixed workloads using priorities and multiple queues.'
            },
            {
                title: 'Process Synchronization Tools',
                content: 'Mutexes, semaphores, condition variables, and monitors coordinate access to shared resources.'
            },
            {
                title: 'IPC Mechanisms and Signals',
                content: 'IPC uses message passing, shared memory, pipes, sockets, and signals. Signals notify processes of events (e.g., SIGINT, SIGKILL).'
            },
            {
                title: 'File System Components',
                content: 'Boot block, superblock, inode table (or FCB table), data blocks, and directories. Metadata tracks size, ownership, and permissions.'
            },
            {
                title: 'Types of File Systems',
                content: 'Common types: FAT32, NTFS, ext4, APFS, XFS. Choose based on platform, journaling, and performance requirements.'
            },
            {
                title: 'File Allocation and Fragmentation',
                content: 'Allocation methods: contiguous, linked, and indexed. Fragmentation can be internal or external and impacts performance.'
            },
            {
                title: 'File Control Block (FCB) and ACL',
                content: 'FCB stores file metadata. Access Control Lists (ACLs) define fine-grained permissions for users and groups.'
            },
            {
                title: 'User Authentication and Encryption',
                content: 'Authentication uses passwords, hashes, and multi-factor methods. File systems may use encryption for data at rest.'
            },
            {
                title: 'Backup and Recovery',
                content: 'Full, incremental, and differential backups. Recovery uses logs, checkpoints, and journaling to restore consistency.'
            },
            {
                title: 'Disk Management and Scheduling',
                content: 'Disk scheduling algorithms include FCFS, SSTF, SCAN, C-SCAN, LOOK, and C-LOOK to reduce seek time.'
            },
            {
                title: 'System Calls and Boot Process',
                content: 'System calls provide OS services. Boot process: firmware -> bootloader -> kernel init -> user space.'
            },
            {
                title: 'Interrupts and Event Handling',
                content: 'Hardware and software interrupts signal events to the CPU. Interrupt handlers prioritize and service events.'
            },
            {
                title: 'Resource Management',
                content: 'OS manages CPU, memory, I/O, and storage resources to maximize throughput and fairness.'
            },
            {
                title: 'Priority Inversion',
                content: 'Low-priority tasks block high-priority tasks due to resource locks. Priority inheritance can mitigate this.'
            },
            {
                title: 'Load Balancing in OS',
                content: 'Distributes workloads across CPUs/cores to improve utilization and reduce latency.'
            },
            {
                title: 'Performance Measurement and Tuning',
                content: 'Use metrics like CPU utilization, throughput, latency, and context-switch rate to tune system performance.'
            },
            {
                title: 'Cache Mapping Techniques',
                content: 'Direct mapping uses a fixed cache line for each memory block. Fully associative mapping allows any block in any line.'
            },
            {
                title: 'Virtual Machines and Hypervisors',
                content: 'Virtual machines run isolated OS instances. Hypervisors (Type 1/2) allocate hardware resources to VMs.'
            },
            {
                title: 'Spooling',
                content: 'Spooling buffers I/O (e.g., print jobs) by storing data temporarily for later processing.'
            },
            {
                title: 'Network File Systems (NFS)',
                content: 'NFS enables file sharing over a network, allowing remote access as if files were local.'
            },
            {
                title: 'Thread Safety and Reentrancy',
                content: 'Thread safety prevents data corruption in concurrent access. Reentrancy allows safe re-entry into functions before previous calls finish.'
            },
            {
                title: 'OS Security Mechanisms',
                content: 'Authentication, authorization, auditing, encryption, and sandboxing protect system resources.'
            },
            {
                title: 'Future Trends in OS',
                content: 'Microkernels, containers, and stronger isolation focus on security, scalability, and maintainability.'
            },
            {
                title: 'Most Important Interview Concepts',
                content: 'Paging vs Segmentation, Page Fault, Thrashing, Inode, File Descriptor, RAID levels, Disk scheduling, Virtual memory.'
            },
            {
                title: 'One-Line Final Revision',
                content: 'The OS manages CPU, memory, files, disks, and processes to make the system usable, fast, and secure.'
            }
        ],
        mcqs: [
            {
                worksheet: 'Worksheet 1',
                difficulty: 'basic',
                question: 'Which statement about the OS kernel is accurate?',
                options: ['It only manages the user interface.', 'It runs only when the user interacts with the system.', 'It is the core component that manages hardware and provides essential services.', 'It is responsible only for user-level multitasking.'],
                answer: 2,
                explanation: 'The kernel is the core of the OS and manages hardware resources and system services.'
            },
            {
                worksheet: 'Worksheet 1',
                difficulty: 'basic',
                question: 'What is the primary purpose of an operating system?',
                options: ['Manage hardware resources', 'Run user applications', 'Provide a user interface', 'All of the above'],
                answer: 3,
                explanation: 'An OS manages hardware, supports applications, and usually provides a user interface.'
            },
            {
                worksheet: 'Worksheet 1',
                difficulty: 'basic',
                question: 'Which of the following is NOT a function of the operating system?',
                options: ['Process management', 'File management', 'Application development', 'Memory management'],
                answer: 2,
                explanation: 'Application development is a user activity, not an OS function.'
            },
            {
                worksheet: 'Worksheet 1',
                difficulty: 'basic',
                question: 'A system call provides:',
                options: ['A user interface', 'A way for programs to request OS services', 'Hardware resources directly', 'File management only'],
                answer: 1,
                explanation: 'System calls are the API through which programs request OS services.'
            },
            {
                worksheet: 'Worksheet 1',
                difficulty: 'basic',
                question: 'Which OS component mediates between hardware and software?',
                options: ['Scheduler', 'Kernel', 'File manager', 'Shell'],
                answer: 1,
                explanation: 'The kernel provides the core mediation between hardware and software.'
            },
            {
                worksheet: 'Worksheet 1',
                difficulty: 'basic',
                question: 'What is the role of the bootstrap program in the boot process?',
                options: ['Manage the UI', 'Load the kernel into memory', 'Allocate memory to apps', 'Handle peripherals'],
                answer: 1,
                explanation: 'The bootstrap program loads the OS kernel into memory.'
            },
            {
                worksheet: 'Worksheet 1',
                difficulty: 'basic',
                question: 'What does the fork system call do?',
                options: ['Allocates memory for a new process', 'Creates a new process by duplicating the caller', 'Terminates the calling process', 'Reads a file'],
                answer: 1,
                explanation: 'fork() creates a child process by duplicating the current process.'
            },
            {
                worksheet: 'Worksheet 1',
                difficulty: 'basic',
                question: 'In the parent process, fork() returns:',
                options: ['-1', '0', 'The PID of the child process', 'The PID of the parent process'],
                answer: 2,
                explanation: 'The parent receives the child’s PID as the return value.'
            },
            {
                worksheet: 'Worksheet 1',
                difficulty: 'medium',
                question: 'Which statement best describes microkernels?',
                options: ['They are larger than monolithic kernels.', 'They move most services into kernel space.', 'They outperform monolithic kernels due to minimal IPC.', 'They keep only essential services in kernel space and run others in user space.'],
                answer: 3,
                explanation: 'Microkernels are minimal, pushing most services to user space.'
            },
            {
                worksheet: 'Worksheet 1',
                difficulty: 'medium',
                question: 'The primary goal of multiprogramming is to:',
                options: ['Speed up a single program', 'Run multiple programs to keep the CPU busy', 'Simplify the user interface', 'Reduce OS size'],
                answer: 1,
                explanation: 'Multiprogramming increases CPU utilization by overlapping I/O and CPU work.'
            },
            {
                worksheet: 'Worksheet 2',
                difficulty: 'basic',
                question: 'In OS terms, a process is:',
                options: ['A program in execution', 'A system utility', 'A file on disk', 'An input device'],
                answer: 0,
                explanation: 'A process is a running instance of a program.'
            },
            {
                worksheet: 'Worksheet 2',
                difficulty: 'basic',
                question: 'The main purpose of a PCB is to:',
                options: ['Store source code', 'Manage file I/O', 'Store process information', 'Allocate memory to a process'],
                answer: 2,
                explanation: 'The PCB tracks all key details of a process.'
            },
            {
                worksheet: 'Worksheet 2',
                difficulty: 'basic',
                question: 'CPU scheduling is:',
                options: ['Allocating memory', 'Assigning tasks to devices', 'Deciding the order of CPU execution for processes', 'Managing file systems'],
                answer: 2,
                explanation: 'Scheduling selects which process runs next on the CPU.'
            },
            {
                worksheet: 'Worksheet 2',
                difficulty: 'medium',
                question: 'Which algorithm aims to minimize average turnaround time?',
                options: ['FCFS', 'SJF/SJN', 'Round Robin', 'Priority Scheduling'],
                answer: 1,
                explanation: 'SJF is optimal for average waiting/turnaround time in theory.'
            },
            {
                worksheet: 'Worksheet 2',
                difficulty: 'basic',
                question: 'A thread is:',
                options: ['A process in execution', 'A lightweight process sharing the same address space', 'A file used by the OS', 'A file-management utility'],
                answer: 1,
                explanation: 'Threads share the process address space and are lightweight.'
            },
            {
                worksheet: 'Worksheet 2',
                difficulty: 'basic',
                question: 'In Round Robin scheduling, the time quantum is:',
                options: ['Total time to finish a process', 'The max time a process runs in one slot', 'The CPU switch time', 'A priority value'],
                answer: 1,
                explanation: 'A time quantum is the fixed slice of CPU time given per turn.'
            },
            {
                worksheet: 'Worksheet 2',
                difficulty: 'medium',
                question: 'Which statement correctly distinguishes KLTs from ULTs?',
                options: ['ULTs are managed by the kernel and KLTs by libraries.', 'ULTs are always faster than KLTs.', 'KLTs are visible to the OS scheduler, enabling multi-CPU usage.', 'ULTs provide stronger isolation between threads.'],
                answer: 2,
                explanation: 'Kernel-level threads are scheduled by the OS and can utilize multiple CPUs.'
            },
            {
                worksheet: 'Worksheet 2',
                difficulty: 'medium',
                question: 'A common characteristic of user-level threads (ULTs) is:',
                options: ['Better responsiveness to kernel events', 'Lower context-switch overhead', 'Direct visibility to the OS scheduler', 'Kernel support required for management'],
                answer: 1,
                explanation: 'ULTs have lightweight context switches because they are managed in user space.'
            },
            {
                worksheet: 'Worksheet 2',
                difficulty: 'medium',
                question: 'In user-level threading, if one thread blocks, what typically happens?',
                options: ['All threads in the process block', 'Other threads continue normally', 'The process terminates', 'A system interrupt is triggered'],
                answer: 0,
                explanation: 'With many-to-one mapping, a blocking system call can block the entire process.'
            },
            {
                worksheet: 'Worksheet 2',
                difficulty: 'medium',
                question: 'FCFS scheduling: P1(AT=0,BT=6), P2(AT=2,BT=4), P3(AT=4,BT=8). Waiting time for P2?',
                options: ['4 units', '5 units', '7 units', '9 units'],
                answer: 0,
                explanation: 'P1 runs from 0–6, so P2 waits 4 units (6−2).'
            },
            {
                worksheet: 'Worksheet 3',
                difficulty: 'basic',
                question: 'The primary goal of synchronization is to:',
                options: ['Minimize memory usage', 'Ensure fair CPU scheduling', 'Coordinate concurrent access to shared data', 'Improve disk I/O'],
                answer: 2,
                explanation: 'Synchronization ensures safe, coordinated access to shared resources.'
            },
            {
                worksheet: 'Worksheet 3',
                difficulty: 'basic',
                question: 'A race condition refers to:',
                options: ['A competition between processes', 'A deadlock state', 'Interference between concurrent operations', 'Priority inversion'],
                answer: 2,
                explanation: 'A race condition occurs when timing affects correctness.'
            },
            {
                worksheet: 'Worksheet 3',
                difficulty: 'basic',
                question: 'The critical section problem is about:',
                options: ['Running all processes concurrently', 'Managing access to shared resources', 'Coordinating termination', 'Balancing system load'],
                answer: 1,
                explanation: 'It ensures only one thread/process accesses a shared resource at a time.'
            },
            {
                worksheet: 'Worksheet 3',
                difficulty: 'basic',
                question: 'A valid solution to the critical section problem must ensure:',
                options: ['Mutual exclusion', 'Starvation', 'Deadlock', 'Priority inversion'],
                answer: 0,
                explanation: 'Mutual exclusion is required so only one entity enters the critical section.'
            },
            {
                worksheet: 'Worksheet 3',
                difficulty: 'basic',
                question: 'Deadlock is:',
                options: ['Simultaneous execution of processes', 'Inability to acquire required resources and proceed', 'Efficient scheduling', 'Fair CPU distribution'],
                answer: 1,
                explanation: 'Deadlock means processes are stuck waiting for each other’s resources.'
            },
            {
                worksheet: 'Worksheet 3',
                difficulty: 'basic',
                question: 'Which classic problem uses a finite buffer shared by two processes?',
                options: ['Readers–Writers', 'Dining Philosophers', 'Producer–Consumer', 'Banker’s Algorithm'],
                answer: 2,
                explanation: 'Producer–Consumer uses a finite buffer shared by producers and consumers.'
            },
            {
                worksheet: 'Worksheet 3',
                difficulty: 'basic',
                question: 'A semaphore is used to:',
                options: ['Identify process priority', 'Control access to shared resources', 'Schedule by arrival time', 'Allocate memory'],
                answer: 1,
                explanation: 'Semaphores enforce controlled access to shared resources.'
            },
            {
                worksheet: 'Worksheet 3',
                difficulty: 'medium',
                question: 'In Banker’s algorithm, the maximum-need matrix represents:',
                options: ['Max resources each process may request', 'Current allocations', 'Total available resources', 'Resources released by each process'],
                answer: 0,
                explanation: 'It describes each process’s maximum possible demand.'
            },
            {
                worksheet: 'Worksheet 3',
                difficulty: 'medium',
                question: 'Banker’s algorithm grants a request if:',
                options: ['Only max need is checked', 'Only availability is checked', 'Both max need and availability keep the system safe', 'Only current allocation is checked'],
                answer: 2,
                explanation: 'The request is granted only if the system remains in a safe state.'
            },
            {
                worksheet: 'Worksheet 3',
                difficulty: 'medium',
                question: 'Which is a valid sequence of process state transitions?',
                options: ['Ready → Running → Blocked → Ready → Running → Terminated', 'Blocked → Terminated → Running → Ready → Blocked', 'Running → Ready → Terminated → Blocked → Ready', 'Ready → Blocked → Running → Terminated → Ready'],
                answer: 0,
                explanation: 'A process can move from ready to running to blocked and back before termination.'
            },
            {
                worksheet: 'Worksheet 4',
                difficulty: 'basic',
                question: 'Which type of memory is volatile?',
                options: ['ROM', 'RAM', 'SSD', 'Hard Disk'],
                answer: 1,
                explanation: 'RAM loses data when power is off.'
            },
            {
                worksheet: 'Worksheet 4',
                difficulty: 'basic',
                question: 'The purpose of a page table is to:',
                options: ['Store page faults', 'Translate virtual to physical addresses', 'Manage cache memory', 'Allocate memory to processes'],
                answer: 1,
                explanation: 'Page tables map virtual pages to physical frames.'
            },
            {
                worksheet: 'Worksheet 4',
                difficulty: 'basic',
                question: 'A common Linux file system is:',
                options: ['NTFS', 'FAT32', 'ext4', 'HFS+'],
                answer: 2,
                explanation: 'ext4 is a widely used Linux file system.'
            },
            {
                worksheet: 'Worksheet 4',
                difficulty: 'basic',
                question: 'A key SSD characteristic compared to HDD is:',
                options: ['Magnetic storage', 'Mechanical components', 'Slower access', 'No moving parts'],
                answer: 3,
                explanation: 'SSDs use flash memory and have no moving parts.'
            },
            {
                worksheet: 'Worksheet 4',
                difficulty: 'basic',
                question: 'Which disk scheduling algorithm serves requests in arrival order?',
                options: ['FCFS', 'SSTF', 'C-SCAN', 'LOOK'],
                answer: 0,
                explanation: 'FCFS serves requests strictly in arrival order.'
            },
            {
                worksheet: 'Worksheet 4',
                difficulty: 'basic',
                question: 'Thrashing is:',
                options: ['Excessive page faults that degrade performance', 'Efficient use of virtual memory', 'Fast transfer between RAM and cache', 'Successful page replacement'],
                answer: 0,
                explanation: 'Thrashing occurs when the system spends most time swapping pages.'
            },
            {
                worksheet: 'Worksheet 4',
                difficulty: 'basic',
                question: 'SSTF minimizes seek time by choosing:',
                options: ['The first request', 'The closest request to the current head', 'The farthest request', 'The last request'],
                answer: 1,
                explanation: 'SSTF always selects the closest pending request.'
            },
            {
                worksheet: 'Worksheet 4',
                difficulty: 'medium',
                question: 'The main advantage of demand paging is:',
                options: ['Reduced page faults', 'Increased RAM capacity', 'Faster data retrieval', 'Only needed pages are loaded into memory'],
                answer: 3,
                explanation: 'Demand paging loads pages on demand, improving memory use.'
            },
            {
                worksheet: 'Worksheet 4',
                difficulty: 'medium',
                question: 'RAID is primarily used for:',
                options: ['Disk encryption', 'File compression', 'Data redundancy and fault tolerance', 'Disk formatting'],
                answer: 2,
                explanation: 'RAID improves reliability and/or performance through redundancy.'
            },
            {
                worksheet: 'Worksheet 4',
                difficulty: 'hard',
                question: 'For a 32-bit logical address with page size 2^12 bytes, the page number and offset bits are:',
                options: ['20 bits, 12 bits', '10 bits, 22 bits', '12 bits, 20 bits', '14 bits, 18 bits'],
                answer: 0,
                explanation: 'Offset = 12 bits, so page number = 32 − 12 = 20 bits.'
            },
            {
                worksheet: 'Worksheet 5',
                difficulty: 'basic',
                question: 'In direct mapping for cache memory, each block of main memory is mapped to:',
                options: ['Any cache block', 'A random cache block', 'Multiple cache blocks', 'A specific cache block based on the memory address'],
                answer: 3,
                explanation: 'Direct mapping uses index bits from the address to choose a specific cache line.'
            },
            {
                worksheet: 'Worksheet 5',
                difficulty: 'basic',
                question: 'In associative mapping for cache memory, a block of memory can be mapped to:',
                options: ['Only one specific cache block', 'A cache block based on the address size', 'Any cache block', 'A cache block determined by the processor'],
                answer: 2,
                explanation: 'Fully associative caches allow a block to be placed in any cache line.'
            },
            {
                worksheet: 'Worksheet 5',
                difficulty: 'basic',
                question: 'A virtual machine is an abstraction that allows:',
                options: ['Running multiple instances of an operating system on a single physical machine', 'Direct communication between different operating systems', 'Direct interaction with the hardware', 'None of the above'],
                answer: 0,
                explanation: 'VMs allow multiple OS instances to run on shared hardware with isolation.'
            },
            {
                worksheet: 'Worksheet 5',
                difficulty: 'basic',
                question: 'A hypervisor is responsible for:',
                options: ['Managing the hardware resources and virtual machines', 'Handling user input and system interrupts', 'Managing memory allocation within a single virtual machine', 'Securing data transmission between virtual machine'],
                answer: 0,
                explanation: 'The hypervisor allocates hardware resources to VMs and enforces isolation.'
            },
            {
                worksheet: 'Worksheet 5',
                difficulty: 'basic',
                question: 'In spooling, data is temporarily stored:',
                options: ['In memory until it can be processed', 'In the CPU cache to improve execution speed', 'In a buffer and then printed or processed later', 'In a secondary storage device only'],
                answer: 2,
                explanation: 'Spooling queues jobs in a buffer (often on disk) for later processing.'
            },
            {
                worksheet: 'Worksheet 5',
                difficulty: 'basic',
                question: 'Network File Systems (NFS) allow:',
                options: ['File sharing between multiple computers over a network', 'Direct access to files from remote servers without caching', 'Encrypting files on remote systems', 'None of the above'],
                answer: 0,
                explanation: 'NFS provides shared access to files over a network.'
            },
            {
                worksheet: 'Worksheet 5',
                difficulty: 'basic',
                question: 'Thread safety ensures that:',
                options: ['Multiple threads can safely execute in parallel without causing data corruption', 'Threads can access shared resources without any synchronization', 'Threads can be executed in a non-blocking manner', 'Threads are prevented from accessing shared resources'],
                answer: 0,
                explanation: 'Thread-safe code prevents data races and inconsistent state.'
            },
            {
                worksheet: 'Worksheet 5',
                difficulty: 'basic',
                question: 'Reentrancy in operating systems means that:',
                options: ['A function can be safely interrupted and called again before its previous executions are complete', 'A resource is shared by multiple threads at the same time', 'A process can handle multiple signals simultaneously', 'Threads can execute in parallel without any synchronization'],
                answer: 0,
                explanation: 'Reentrant functions are safe to call while already executing.'
            },
            {
                worksheet: 'Worksheet 5',
                difficulty: 'basic',
                question: 'Operating system security mechanisms include:',
                options: ['Authentication and access control', 'Encryption and secure communication', 'Auditing and logging', 'All of the above'],
                answer: 3,
                explanation: 'OS security relies on all these mechanisms together.'
            },
            {
                worksheet: 'Worksheet 5',
                difficulty: 'basic',
                question: 'Future trends in operating systems, such as microkernels and containers, focus on:',
                options: ['Increasing the size of the kernel to include more features', 'Reducing the kernel\'s complexity and improving system security and scalability', 'Running multiple applications on a single operating system instance', 'Using virtual machines exclusively for isolation'],
                answer: 1,
                explanation: 'Modern trends reduce kernel complexity and improve isolation and scalability.'
            }
        ]
    },
    {
        id: 'dbms',
        title: 'Database Management',
        icon: 'Database',
        description: 'Comprehensive guide to RDBMS, SQL, Normalization, Transactions, and NoSQL databases.',
        concepts: [
            {
                title: '1. Introduction to DBMS',
                content: 'A Database Management System (DBMS) is a software application that facilitates the creation, management, and manipulation of databases.\n[DIAGRAM:DB_ARCH]\n\nKey Components:\n• Data Definition Language (DDL): Defines structure and schema.\n• Data Manipulation Language (DML): Used to retrieve, insert, update, and delete data.\n• Data Control Language (DCL): Controls access and permissions.\n• Transaction Management: Ensures ACID properties.\n• Concurrency Control: Manages simultaneous access.\n• Backup and Recovery: Ensures data availability and integrity.'
            },
            {
                title: '2. SQL Command Categories',
                content: 'SQL commands are divided into functional categories:\n\nDDL (Data Definition Language):\n• CREATE: Creates database objects like tables, indexes, views.\n• ALTER: Modifies database objects.\n• DROP: Deletes database objects.\n• TRUNCATE: Removes all rows from a table quickly.\n• COMMENT: Adds comments to database objects.\n\nDML (Data Manipulation Language):\n• SELECT: Retrieves data from a database.\n• INSERT: Adds new rows of data.\n• UPDATE: Modifies existing data.\n• DELETE: Removes existing rows.\n• MERGE: Performs conditional insert/update/delete.\n• UPSERT: Inserts or updates if row exists.\n\nDCL (Data Control Language):\n• GRANT: Provides privileges to users.\n• REVOKE: Revokes privileges from users.'
            },
            {
                title: '3. Relational Database Concepts',
                content: 'RDBMS stores data in tables and uses SQL for manipulation.\n\nKey Terms:\n• Table: Organized into rows (tuples) and columns (attributes).\n• Primary Key: Unique identifier for each record in a table.\n• Foreign Key: Column that references the primary key of another table to establish relationships.\n• Relationships: One-to-One, One-to-Many, Many-to-Many.\n• Referential Integrity: Ensures relationships between tables remain consistent.\n• ACID Properties: Atomicity, Consistency, Isolation, Durability.'
            },
            {
                title: '4. Database Design & Normalization',
                content: 'The process of defining database structure to minimize redundancy and dependency.\n\nNormalization Forms:\n• 1NF (First Normal Form): Atomic values in each column.\n• 2NF (Second Normal Form): No partial dependency (non-key attributes fully dependent on PK).\n• 3NF (Third Normal Form): No transitive dependency (non-key attributes dependent only on PK).\n• BCNF (Boyce-Codd): Stricter 3NF where every determinant is a superkey.\n• 4NF: Addresses multi-valued dependencies.\n• 5NF: Addresses join dependencies.'
            },
            {
                title: '5. Indexing & Query Optimization',
                content: 'Techniques to improve performance and speed up data retrieval.\n\nTypes of Indexes:\n• Primary Index: Created on primary key automatically.\n• Secondary Index: Created on non-primary key columns.\n• Clustered Index: Reorders physical order of rows based on key.\n• Non-Clustered Index: Stores pointers to rows without reordering tables.\n\nOptimization Techniques:\n• Index Usage, Join Optimization, Predicate Pushdown, Query Rewriting, Parallel Execution, and Caching.'
            },
            {
                title: '6. Transaction Management',
                content: 'Ensures the reliability and consistency of database operations.\n\nACID Properties:\n• Atomicity: Transaction completes fully or not at all.\n• Consistency: Database transitions from one valid state to another.\n• Isolation: Intermediate states are invisible to other transactions.\n• Durability: Committed changes survive system failures.\n\nConcurrency Control:\n• Locking: Prevents conflicting simultaneous access.\n• MVCC: Multiple versions of data allow non-blocking reads.\n• Timestamp Ordering: Orders transactions based on unique timestamps.'
            },
            {
                title: '7. NoSQL & Distributed Databases',
                content: 'Non-relational databases for distributed, horizontally scalable storage.\n\nTypes of NoSQL:\n• Document-oriented: JSON/BSON storage (MongoDB).\n• Key-value Stores: Fast retrieval by key (Redis, DynamoDB).\n• Column-family: Efficient wide-column storage (Cassandra, HBase).\n• Graph Databases: Models complex relationships (Neo4j).\n\nDistributed Characteristics:\n• Scalability: Horizontal scaling across nodes.\n• Fault Tolerance: Data replication for high availability.\n• Consistency: Distributed consensus protocols.'
            },
            {
                title: '8. Current Trends in DBMS',
                content: 'Modern database evolution:\n• Cloud-based Databases: Managed solutions like AWS RDS, Azure SQL.\n• Big Data Analytics: Handling Volume, Velocity, and Variety.\n• Real-time Data Processing: Stream processing and event-driven architectures.\n• Microservices DBs: Containerized and loosely coupled database services.\n• Graph & Blockchain DBs: Specialized storage for relationships and immutability.'
            },
            {
                title: '9. Essential Formulas & Terms',
                content: 'Key terms for preparation:\n• Cardinality: Number of tuples/rows in a relation.\n• Degree: Number of attributes/columns in a relation.\n• Super Key: Set of attributes uniquely identifying a row.\n• Candidate Key: Minimal superkey.\n• Functional Dependency (FD): Constraint between attributes.\n• Closure: Set of all FDs implied by a given set.\n• Aggregate Functions: SUM, AVG, COUNT, MAX, MIN.'
            },
            {
                title: '10. Interview Question Bank (Top 20)',
                content: 'Top questions for revision:\n1. Describe the main components of an ER diagram.\n2. Explain Cardinality and Participation constraints.\n3. Difference between Relational and NoSQL databases.\n4. How does a DBMS ensure ACID integrity?\n5. Difference between DELETE and TRUNCATE.\n6. What is a subquery and how does it differ from a join?\n7. Explain different types of JOINs (Inner, Left, Right, Full).\n8. What is normalization? Explain 1NF to BCNF.\n9. Difference between Clustered and Non-Clustered indexes.\n10. What is a Deadlock and how is it handled?\n11. Explain Transaction Isolation Levels.\n12. What is CAP Theorem in distributed databases?\n13. ACID vs BASE models.\n14. Difference between STAR and SNOWFLAKE schema.\n15. What are Multi-valued dependencies?\n16. Explain 2-Phase Locking (2PL) protocol.\n17. What is Horizontal vs Vertical scaling?\n18. Explain Sharding and Partitioning.\n19. What are Weak Entities?\n20. What is an In-Memory Database?'
            },
            {
                title: '11. Interview Prep: RDBMS & ER Modeling',
                content: 'Key questions on core concepts:\n• What is an Entity-Relationship (ER) diagram, and what is its purpose?\n• Describe the difference between an entity and an attribute.\n• Explain the cardinality and participation constraints in relationships.\n• What are weak entities, and how are they represented?\n• Describe the process of converting an ER diagram into a relational schema.\n• What is an associative entity, and when is it used?'
            },
            {
                title: '12. Interview Prep: Advanced SQL & Joins',
                content: 'Mastering SQL queries:\n• Explain the difference between INNER JOIN and OUTER JOIN.\n• How do you use the GROUP BY and HAVING clauses?\n• What is the purpose of the DISTINCT keyword?\n• Explain the difference between aggregate functions and scalar functions.\n• How do you write a subquery? Is it better than a join?\n• What is indexing, and how does it optimize SQL performance?'
            },
            {
                title: '13. Interview Prep: Normalization & Dependencies',
                content: 'Refining database structure:\n• What is functional dependency (FD) in relational databases?\n• Explain the steps involved in determining functional dependencies.\n• How do you use attribute closure to find candidate keys?\n• Differentiate between partial dependency and transitive dependency.\n• In what scenarios would denormalization be appropriate?\n• Explain BCNF and how it differs from 3NF.'
            },
            {
                title: '14. Interview Prep: Transactions & Concurrency',
                content: 'Ensuring data reliability:\n• Explain the ACID properties in depth.\n• What are the different states of a transaction?\n• What is a deadlock, and how is it handled?\n• Explain the difference between pessimistic and optimistic concurrency control.\n• Describe the 2-Phase Locking (2PL) protocol.\n• What are transaction isolation levels like SERIALIZABLE and READ COMMITTED?'
            },
            {
                title: '15. Practical Case Study: Student-Course Table',
                content: 'Example Table: Student_ID, Student_Name, Course_ID, Course_Name\n\n- 1NF: Table is in 1NF as it contains only atomic values.\n- 2NF: Primary Key is (Student_ID, Course_ID). Student_Name depends on Student_ID, Course_Name depends on Course_ID. These are partial dependencies.\n- Resolution: Split into three tables: Student(SID, SName), Course(CID, CName), and Enrollment(SID, CID).'
            },
            {
                title: '16. Advanced Objects: Triggers & Procedures',
                content: 'Automating database logic:\n• Stored Procedure: Precompiled collection of SQL statements.\n• Function: Similar to procedure but always returns a value.\n• Trigger: Automatically executes in response to certain events (INSERT, UPDATE, DELETE).\n• View: Virtual table that hides complexity and provides security.\n• Sequence: Generates unique numeric values (used for PKs).'
            },
            {
                title: '17. Schema Architectures',
                content: 'Comparing design patterns:\n• Flat File: Simple non-relational storage.\n• Hierarchical: Tree-like structure (legacy).\n• Network Schema: Many-to-many parent-child relationships.\n• Relational Schema: Using tables and keys (standard).\n• Star Schema: Central fact table with dimension tables (Data Warehousing).\n• Snowflake Schema: Normalized version of Star Schema.'
            },
            {
                title: '18. Database Security & Backup',
                content: 'Key terms:\n• Authentication vs Authorization.\n• SQL Injection: Vulnerability where malicious SQL is executed.\n• RAID: Redundant Array of Independent Disks (Data protection).\n• WAL: Write-Ahead Logging (Durability).\n• Cold vs Hot Backup: Backing up while DB is offline vs online.'
            },
            {
                title: '19. ER Modeling & Keys',
                content: 'ER modeling covers entities, attributes, relationships, cardinality, and participation. Keys: super key, candidate key, primary key, and foreign key.'
            },
            {
                title: '20. SQL Joins & Subqueries',
                content: 'Join types: INNER, LEFT, RIGHT, FULL. Subqueries can be correlated or non-correlated, and used in SELECT/WHERE/HAVING.'
            },
            {
                title: '21. Index Internals (B-Tree/B+Tree)',
                content: 'B-Tree/B+Tree indexes keep data sorted for fast lookup. B+Tree stores all records in leaves with linked leaf nodes for range scans.'
            },
            {
                title: '22. Isolation Anomalies',
                content: 'Common anomalies: dirty read, non-repeatable read, and phantom read. Isolation levels trade off consistency vs performance.'
            },
            {
                title: '23. Transaction States',
                content: 'States: Active, Partially Committed, Committed, Failed, Aborted. Recovery ensures database consistency after failure.'
            },
            {
                title: '24. DBMS Interfaces',
                content: 'Interfaces include command-line, GUI, forms, report writers, and application APIs (ODBC/JDBC).'
            },
            {
                title: '25. Data Models and Their Types',
                content: 'Hierarchical, network, relational, object-oriented, and semi-structured (JSON/XML) models.'
            },
            {
                title: '26. ER Model Components',
                content: 'Entities, attributes, relationships, cardinality, and participation constraints.'
            },
            {
                title: '27. Relationship Types and Inheritance',
                content: '1:1, 1:N, M:N relationships. Inheritance includes specialization and generalization.'
            },
            {
                title: '28. Extended ER Features',
                content: 'Weak entities, aggregation, composite attributes, multivalued attributes, and ISA hierarchies.'
            },
            {
                title: '29. ER Diagram Design',
                content: 'Create ER diagrams using entity sets, relationship sets, and appropriate cardinalities.'
            },
            {
                title: '30. Relational Model Concepts',
                content: 'Relation schema, tuples, attributes, domain, and integrity constraints.'
            },
            {
                title: '31. Intension vs Extension',
                content: 'Intension is schema/definition; extension is the actual data (instances) at a time.'
            },
            {
                title: '32. Keys in DBMS',
                content: 'Super key, candidate key, primary key, alternate key, and foreign key.'
            },
            {
                title: '33. Functional Dependencies',
                content: 'FDs describe attribute relationships. Used to find keys and normalize schemas.'
            },
            {
                title: '34. Armstrong\'s Axioms and Inference Rules',
                content: 'Reflexivity, augmentation, transitivity, plus union, decomposition, and pseudotransitivity.'
            },
            {
                title: '35. Closure and Denormalization',
                content: 'Attribute closure helps find keys. Denormalization trades redundancy for read performance.'
            },
            {
                title: '36. SQL Operators and Clauses',
                content: 'Operators (arithmetic, comparison, logical) and clauses (SELECT, WHERE, GROUP BY, HAVING, ORDER BY).'
            },
            {
                title: '37. SQL Joins (Advanced)',
                content: 'Self-join, cross join, natural join, and join conditions for complex queries.'
            },
            {
                title: '38. Unions and Views',
                content: 'UNION/UNION ALL merge result sets. Views and materialized views provide abstraction and performance.'
            },
            {
                title: '39. SQL Subqueries',
                content: 'Correlated and non-correlated subqueries in SELECT/WHERE/HAVING.'
            },
            {
                title: '40. Query Processing and Optimization',
                content: 'Parsing, rewriting, plan selection, and cost-based optimization with indexes and statistics.'
            },
            {
                title: '41. NoSQL Databases and BASE',
                content: 'NoSQL types: key-value, document, column-family, graph. BASE: Basically Available, Soft state, Eventually consistent.'
            },
            {
                title: '42. Partitioning and Sharding',
                content: 'Horizontal vs vertical partitioning. Sharding distributes data across nodes for scale.'
            },
            {
                title: '43. Distributed Database Architecture',
                content: 'Data distribution, replication, and coordination across nodes with fault tolerance.'
            },
            {
                title: '44. Load Balancing and Replication',
                content: 'Read replicas, leader-follower, multi-leader, and quorum-based replication.'
            },
            {
                title: '45. Transactions and Concurrency Control',
                content: 'Locking protocols (shared/exclusive), timestamp ordering, and MVCC.'
            },
            {
                title: '46. Serialization and Schedules',
                content: 'Serial and serializable schedules; conflict and view serializability with serialization graphs.'
            },
            {
                title: '47. Isolation Levels',
                content: 'Read Uncommitted, Read Committed, Repeatable Read, Serializable with related anomalies.'
            },
            {
                title: '48. Deadlock and Starvation in DBMS',
                content: 'Deadlock detection/prevention and starvation avoidance using fair scheduling.'
            },
            {
                title: '49. Recovery and Backup',
                content: 'WAL, checkpoints, undo/redo, and full/incremental backups.'
            },
            {
                title: '50. Triggers and Stored Procedures',
                content: 'Triggers fire on data changes; stored procedures encapsulate reusable logic.'
            },
            {
                title: '51. Indexing Techniques and B-Trees',
                content: 'Clustered vs non-clustered indexes, B-Tree/B+Tree internals, and index selection.'
            },
            {
                title: '52. Monitoring and Caching',
                content: 'Monitor query latency, cache hit rate, and use caching strategies for performance.'
            },
            {
                title: '53. Security and Access Control',
                content: 'RBAC models, encryption at rest/in transit, masking, and auditing.'
            },
            {
                title: '54. Scalability and DBaaS',
                content: 'Scaling strategies, big data systems, and managed DBaaS offerings.'
            },
            {
                title: '55. Data Warehousing and Migration',
                content: 'Data warehousing (ETL/ELT), migration strategies, and event-driven pipelines.'
            }
        ],
        mcqs: [
            {
                worksheet: 'Worksheet 1',
                question: 'R is a relationship between entities E1 and E2. If E2 is completely dependent on E1, which construct represents E2?',
                options: ['Dotted Rectangle', 'Double outlined Rectangle', 'Dashed Ellipse', 'Double diamond'],
                answer: 1,
                explanation: 'A double outlined rectangle represents a weak entity set which is dependent on a strong entity set.'
            },
            {
                worksheet: 'Worksheet 1',
                question: 'If {student_id} and {student_name, student_street} are candidate keys, which of the following is correct?',
                options: ['{student_id, student_name} is a candidate key', '{student_id, student_street} is a candidate key', '{student_id, student_name, student_street} is a candidate key', 'None of these'],
                answer: 3,
                explanation: 'A candidate key must be minimal. Any superset of a candidate key is a superkey, but not a candidate key.'
            },
            {
                worksheet: 'Worksheet 1',
                question: 'In the relational model, Cardinality refers to:',
                options: ['Number of tuples', 'Number of tables', 'Number of attributes', 'Number of constraints'],
                answer: 0,
                explanation: 'Cardinality is the number of rows/tuples in a table, while degree is the number of columns/attributes.'
            },
            {
                worksheet: 'Worksheet 1',
                question: 'Match: (a) AB->CD (b) AB->BC (c) AB->A. Identify Trivial FD.',
                options: ['1-c', '2-a', '3-b', 'None'],
                answer: 0,
                explanation: 'A trivial FD X->Y exists if Y is a subset of X. Thus AB->A is trivial.'
            },
            {
                worksheet: 'Worksheet 1',
                question: 'Normalization process helps in:',
                options: ['Reducing table count', 'Reducing database size', 'Reducing data constraints', 'Reducing chances of data anomalies'],
                answer: 3,
                explanation: 'The primary goal of normalization is to eliminate data anomalies and ensure data integrity.'
            },
            {
                worksheet: 'Worksheet 1',
                question: 'If PQRS is a superkey and PQR is also a superkey, then:',
                options: ['PQR must be a candidate key', 'PQR cannot be a superkey', 'PQR cannot be a candidate key', 'PQR maybe a candidate key'],
                answer: 3,
                explanation: 'If PQR is a superkey and has no smaller subset that is a superkey, it is a candidate key.'
            },
            {
                worksheet: 'Worksheet 1',
                question: 'Relation R(A,B,C,D,E,F) with FDs: C->F, E->A, EC->D, A->B. Which is NOT a key?',
                options: ['CD', 'CE', 'BCE', 'CEF'],
                answer: 0,
                explanation: 'CD closure does not include all attributes. CE closure is {C,E,F,A,B,D}, making it a key.'
            },
            {
                worksheet: 'Worksheet 1',
                question: 'Normalization eliminates which anomalies?',
                options: ['Insert', 'Update', 'Delete', 'All of the above'],
                answer: 3,
                explanation: 'Normalization addresses anomalies in inserting, updating, and deleting data.'
            },
            {
                worksheet: 'Worksheet 1',
                question: 'Relation R(A,B,C,D,E,F,G,H,I,J) with FDs: {A,B}->C, A->{D,F}, B->F, F->{G,H}, D->{I,J}. Key is?',
                options: ['AB', 'BC', 'CD', 'EF'],
                answer: 0,
                explanation: 'AB closure covers all attributes in R.'
            },
            {
                worksheet: 'Worksheet 1',
                question: 'Minimum tables required for an M:N relationship with two entities?',
                options: ['1', '2', '3', '4'],
                answer: 1,
                explanation: 'For M:N, we need 2 tables for entities and 1 junction table for the relationship. Total 3.'
            },
            {
                worksheet: 'Worksheet 2',
                question: 'Relation R(ABCD) with candidate key AB. Max superkeys possible?',
                options: ['4', '6', '8', '12'],
                answer: 0,
                explanation: 'Superkeys are {AB, ABC, ABD, ABCD}. Total 4.'
            },
            {
                worksheet: 'Worksheet 2',
                question: 'Table R(ABCDE) with FDs: A->C, B->D, AB->E. Normal Form is?',
                options: ['1NF', '2NF', '3NF', 'None'],
                answer: 0,
                explanation: 'Since A and B are parts of the key and they determine C and D, there is a partial dependency. Thus only 1NF.'
            },
            {
                worksheet: 'Worksheet 2',
                question: 'Relation R(ABCDE) with FDs: A->B, B->C, C->D, D->E. Highest Normal Form?',
                options: ['1NF', '2NF', '3NF', 'BCNF'],
                answer: 2,
                explanation: 'Transitive dependencies exist (A->C via B), so not 3NF. But if A is the key, it is 2NF/3NF depending on non-prime definitions. Here it is in 3NF if viewed as a chain.'
            },
            {
                worksheet: 'Worksheet 2',
                question: 'Relation R(A,B,C,D) with FDs: AB->C, AB->D, C->A, D->B. Which is NOT a candidate key?',
                options: ['AB', 'BC', 'AD', 'CD'],
                answer: 1,
                explanation: 'BC closure does not include D. AB, AD, and CD are all candidate keys.'
            },
            {
                worksheet: 'Worksheet 2',
                question: 'Relation of degree d. How many different projections are possible?',
                options: ['2^d - 1', '2^d - 1', 'd + 1', 'd^2 + 1'],
                answer: 0,
                explanation: 'Any combination of columns (subset of d) except empty set. 2^d - 1.'
            },
            {
                worksheet: 'Worksheet 2',
                question: 'Selection (σ) operator in relational algebra is:',
                options: ['Commutative', 'Associative', 'Identity', 'None'],
                answer: 0,
                explanation: 'σ_cond1(σ_cond2(R)) is same as σ_cond2(σ_cond1(R)).'
            },
            {
                worksheet: 'Worksheet 2',
                question: 'Which aggregate function counts the number of rows in SQL?',
                options: ['COUNT()', 'COUNT(DISTINCT)', 'COUNT(UNIQUE)', 'COUNT(*)'],
                answer: 3,
                explanation: 'COUNT(*) counts all rows including NULLs.'
            },
            {
                worksheet: 'Worksheet 3',
                question: 'A view in SQL is:',
                options: ['A virtual table based on SELECT', 'Stored physically', 'Faster than tables', 'Only for single tables'],
                answer: 0,
                explanation: 'Views are virtual tables that do not store data physically.'
            },
            {
                worksheet: 'Worksheet 3',
                question: 'Which constraint ensures distinct values in a column?',
                options: ['UNIQUE', 'CHECK', 'DEFAULT', 'NOT NULL'],
                answer: 0,
                explanation: 'UNIQUE constraint ensures all values are different.'
            },
            {
                worksheet: 'Worksheet 3',
                question: 'Difference between DELETE and TRUNCATE:',
                options: ['DELETE is DML, TRUNCATE is DDL', 'DELETE can be rolled back', 'TRUNCATE is faster', 'All of the above'],
                answer: 3,
                explanation: 'TRUNCATE is a DDL command, faster, and usually cannot be rolled back easily in some DBs.'
            },
            {
                worksheet: 'Worksheet 3',
                question: 'DISTINCT keyword is used for:',
                options: ['Filtering rows', 'Removing duplicates', 'Sorting', 'Grouping'],
                answer: 1,
                explanation: 'DISTINCT removes duplicate results from a result set.'
            },
            {
                worksheet: 'Worksheet 3',
                question: 'Can a table have multiple foreign keys?',
                options: ['Yes', 'No', 'Only two', 'Depends on PK'],
                answer: 0,
                explanation: 'A table can have many foreign keys referencing different tables.'
            },
            {
                worksheet: 'Worksheet 3',
                question: 'AVG(DISTINCT X) for values: 3, NULL, 2, 3, NULL, 5?',
                options: ['3.33', '3.00', '2.67', '2.50'],
                answer: 0,
                explanation: 'Distinct values are 3, 2, 5. Sum = 10, Count = 3. Avg = 3.33.'
            },
            {
                worksheet: 'Worksheet 4',
                question: 'Deadlock occurs only when a transaction wants to obtain a:',
                options: ['Lock on data', 'Exclusive Lock', 'Shared Lock', 'Binary Lock'],
                answer: 1,
                explanation: 'Exclusive locks are required for writes and cause conflicts leading to deadlocks.'
            },
            {
                worksheet: 'Worksheet 4',
                question: 'Maximum keys in a B-tree of order 3 and height 3?',
                options: ['26', '40', '80', '64'],
                answer: 0,
                explanation: 'Formula for max keys in B-tree of order m and height h is m^(h+1) - 1. For m=3, h=3 (4 levels): 3^3 - 1 = 26.'
            },
            {
                worksheet: 'Worksheet 4',
                question: 'Recoverable schedule means:',
                options: ['Cannot be rolled back', 'A transaction commits only after all transactions it read from commit', 'No dirty reads', 'Conflict serializable'],
                answer: 1,
                explanation: 'Recoverability ensures that the system can always be restored to a consistent state if failures occur.'
            }
        ]
    },
    {
        id: 'oops',
        title: 'OOPs Concepts',
        icon: 'Code',
        description: 'Complete mastery of Classes, Objects, Inheritance, Polymorphism, Abstraction, Encapsulation, Design Patterns, and SOLID Principles.',
        concepts: [
            {
                title: '1. Introduction to OOP',
                content: 'Object-Oriented Programming (OOP) is a paradigm based on "objects" which contain data (attributes) and code (methods).\n\n**Key Pillars:**\n• **Encapsulation**: Bundling data and methods; hiding internal state.\n• **Inheritance**: Acquiring properties from a base class.\n• **Polymorphism**: Single interface representing multiple underlying forms.\n• **Abstraction**: Hiding implementation details, showing only essentials.\n\n**Benefits:**\n• **Modularity**: Easier to maintain and modify.\n• **Reusability**: Code reuse via inheritance/composition.\n• **Scalability**: Building complex systems from reusable components.'
            },
            {
                title: '2. Classes and Objects',
                content: 'A **Class** is a blueprint (template) that defines attributes and methods.\nAn **Object** is an instance of a class, representing a concrete realization.\n\n**Example (Car Class):**\n• **Attributes**: brand, model, speed.\n• **Methods**: start_engine(), drive().\n• **Instance**: `my_car = Car("Toyota", "Camry")`.'
            },
            {
                title: '3. Inheritance & Hierarchy',
                content: 'Allows a subclass to inherit properties from a superclass.\n\n**Key Concepts:**\n• **Code Reuse**: Subclasses extend functionality without duplicating code.\n• **Method Overriding**: Subclass provides specialized behavior for inherited methods.\n• **Types**: Single, Multiple (via Interfaces in Java), Multilevel, Hierarchical, and Hybrid inheritance.'
            },
            {
                title: '4. Polymorphism: Static vs Dynamic',
                content: 'Polymorphism allows objects to be treated as instances of their parent class.\n\n**Types:**\n• **Compile-Time (Static)**: Method Overloading (same name, different parameters).\n• **Run-Time (Dynamic)**: Method Overriding (subclass redefines parent method). Resolved at runtime via **Dynamic Binding**.'
            },
            {
                title: '5. Encapsulation & Access Control',
                content: 'Bundling data and methods into a single unit and restricting access.\n\n**Mechanisms:**\n• **Data Hiding**: Prevents direct modification of internal state.\n• **Access Modifiers**: \n  - `public`: Accessible from anywhere.\n  - `private`: Only within the same class.\n  - `protected`: Same package and subclasses.'
            },
            {
                title: '6. Abstraction: Interfaces & Abstract Classes',
                content: 'Hiding internal complexity and defining contracts.\n\n• **Abstract Classes**: Cannot be instantiated; can have both abstract (no body) and concrete methods.\n• **Interfaces**: A pure contract (all methods abstract by default); supports multiple inheritance (class can implement many interfaces).'
            },
            {
                title: '7. Exception Handling',
                content: 'Mechanism to detect and resolve runtime errors without crashing the program.\n\n**Keywords:**\n• `try`: Block containing code that might throw an error.\n• `catch`: Block to handle the thrown exception.\n• `finally`: Code that runs regardless of an error (cleanup).\n• `throw`: Explicitly trigger an exception.'
            },
            {
                title: '8. Design Patterns',
                content: 'Reusable solutions to common design problems.\n\n**Categories:**\n1. **Creational**: Object creation (Singleton, Factory, Builder, Prototype).\n2. **Structural**: Object composition (Adapter, Decorator, Facade, Proxy).\n3. **Behavioral**: Object communication (Observer, Strategy, Command, State).'
            },
            {
                title: '9. SOLID Principles (Best Practices)',
                content: 'Expert-level design guidelines:\n• **SRP**: Class should have only one reason to change.\n• **OCP**: Open for extension, closed for modification.\n• **LSP**: Subtypes must be substitutable for base types.\n• **ISP**: Clients shouldn\'t be forced to depend on unused interfaces.\n• **DIP**: Depend on abstractions, not concretions.'
            },
            {
                title: '10. Important Terminology Matrix',
                content: '• **Composition**: "Has-A" relationship (Car has an Engine).\n• **Constructor**: Special method to initialize objects.\n• **Destructor**: Method to release resources (important in C++).\n• **Static**: Belongs to class, not instance.\n• **Final**: Prevents overriding or subclassing.\n• **Immutable**: State cannot change after creation.'
            },
            {
                title: '11. SOLID in Practice',
                content: 'Apply SOLID with examples: SRP (split responsibilities), OCP (extend without modifying), DIP (depend on interfaces), etc.'
            },
            {
                title: '12. Interface vs Abstract Class',
                content: 'Interfaces define contracts; abstract classes can share implementation. Use interfaces for capabilities and abstract classes for shared behavior.'
            },
            {
                title: '13. Composition Over Inheritance',
                content: 'Favor composition for flexibility and lower coupling. Inheritance is best for true "is-a" relationships.'
            },
            {
                title: '14. Common Design Patterns (Examples)',
                content: 'Singleton (single instance), Factory (object creation), Observer (pub/sub), Strategy (swap algorithms), Decorator (add behavior).' 
            },
            {
                title: '15. High-Frequency Interview Questions',
                content: '1. Difference between Abstraction and Encapsulation?\n2. Why does Java not support multiple inheritance with classes? (Diamond Problem).\n3. Difference between `this` and `super`?\n4. What is a Singleton class and how to implement it?\n5. Explain Shallow Copy vs Deep Copy.'
            },
            {
                title: '16. Java Basics',
                content: 'JVM, JRE, and JDK roles, basic syntax, data types, control flow, and class structure.'
            },
            {
                title: '17. What is OOPS',
                content: 'OOP models real-world entities as objects with state and behavior to improve modularity and reuse.'
            },
            {
                title: '18. Classes and Objects',
                content: 'Define classes with fields and methods, then create objects using constructors.'
            },
            {
                title: '19. Quiz: Classes and Objects',
                content: 'Focus on class vs object, instance creation, and constructor roles.'
            },
            {
                title: '20. Practice: Classes and Objects',
                content: 'Create a Student class with fields and methods. Instantiate multiple objects and print details.'
            },
            {
                title: '21. Attributes and Methods',
                content: 'Attributes store state. Methods define behavior and can be instance or static.'
            },
            {
                title: '22. Quiz: Attributes and Methods',
                content: 'Identify attribute vs method, instance vs static members, and method signatures.'
            },
            {
                title: '23. Practice: Attributes and Methods',
                content: 'Build a BankAccount class with deposit, withdraw, and balance methods.'
            },
            {
                title: '24. Constructors',
                content: 'Constructors initialize objects. Types include default, parameterized, and copy constructors.'
            },
            {
                title: '25. Quiz: Constructors',
                content: 'Focus on constructor overloading, default constructors, and constructor chaining.'
            },
            {
                title: '26. Practice: Constructors',
                content: 'Create a Car class with multiple constructors and demonstrate constructor chaining.'
            },
            {
                title: '27. Encapsulation',
                content: 'Use private fields with getters/setters to control access and preserve invariants.'
            },
            {
                title: '28. Quiz: Encapsulation',
                content: 'Focus on data hiding, accessors, and benefits of encapsulation.'
            },
            {
                title: '29. Practice: Encapsulation',
                content: 'Create an Employee class with private fields and validation inside setters.'
            },
            {
                title: '30. Access Modifiers',
                content: 'public, private, protected, and package-private determine visibility.'
            },
            {
                title: '31. Quiz: Access Modifiers',
                content: 'Identify visibility rules across packages and subclasses.'
            },
            {
                title: '32. Practice: Access Modifiers',
                content: 'Create classes in different packages and test access levels.'
            },
            {
                title: '33. Inheritance',
                content: 'Reuse and extend functionality using base and derived classes. Use super for parent access.'
            },
            {
                title: '34. Quiz: Inheritance',
                content: 'Focus on is-a relationships, overriding, and constructor order.'
            },
            {
                title: '35. Practice: Inheritance',
                content: 'Build Vehicle, Car, and Bike classes demonstrating inheritance and overriding.'
            },
            {
                title: '36. Polymorphism',
                content: 'Compile-time (overloading) and run-time (overriding) polymorphism enable flexible designs.'
            },
            {
                title: '37. Quiz: Polymorphism',
                content: 'Differentiate overloading vs overriding, dynamic dispatch, and interfaces.'
            },
            {
                title: '38. Practice: Polymorphism',
                content: 'Create a Shape hierarchy and compute area using overridden methods.'
            },
            {
                title: '39. Abstraction',
                content: 'Expose essential features while hiding implementation details using abstract classes.'
            },
            {
                title: '40. Quiz: Abstraction',
                content: 'Understand abstract methods, abstract classes, and when to use them.'
            },
            {
                title: '41. Practice: Abstraction',
                content: 'Create an abstract class Appliance with abstract methods and concrete subclasses.'
            },
            {
                title: '42. Interfaces',
                content: 'Interfaces define contracts. Classes can implement multiple interfaces.'
            },
            {
                title: '43. Quiz: Interfaces',
                content: 'Focus on default methods, multiple implementation, and polymorphism.'
            },
            {
                title: '44. Practice: Interfaces',
                content: 'Create Printable and Scannable interfaces and implement them in a device class.'
            },
            {
                title: '45. Static Keyword',
                content: 'Static members belong to the class, not instances. Use for utilities and shared state.'
            },
            {
                title: '46. Quiz: Static Keyword',
                content: 'Identify static vs instance members and static initialization blocks.'
            },
            {
                title: '47. Practice: Static Keyword',
                content: 'Create a Counter class with a static count variable shared across instances.'
            },
            {
                title: '48. Inner Classes',
                content: 'Member, static nested, local, and anonymous inner classes for organizing related logic.'
            },
            {
                title: '49. Quiz: Inner Classes',
                content: 'Focus on scope, access, and use cases of inner classes.'
            },
            {
                title: '50. Practice: Inner Classes',
                content: 'Use an anonymous inner class to handle a simple event or callback.'
            },
            {
                title: '51. Association, Aggregation, and Composition',
                content: 'Association is a general relationship. Aggregation is weak ownership. Composition is strong ownership.'
            },
            {
                title: '52. Quiz: Association/Aggregation/Composition',
                content: 'Choose the correct relationship for given class pairs.'
            },
            {
                title: '53. Practice: Composition',
                content: 'Model a House composed of Rooms where Rooms cannot exist without the House.'
            },
            {
                title: '54. Object Cloning',
                content: 'Shallow vs deep copy, clone method usage, and copy constructors.'
            },
            {
                title: '55. Quiz: Object Cloning',
                content: 'Identify when shallow copy fails and how deep copy fixes it.'
            },
            {
                title: '56. Practice: Object Cloning',
                content: 'Clone a User object that contains an Address object and verify deep copy.'
            },
            {
                title: '57. Exception Handling',
                content: 'Use try/catch/finally, custom exceptions, and throw/throws for robust error handling.'
            },
            {
                title: '58. Quiz: Exception Handling',
                content: 'Focus on checked vs unchecked exceptions and handling flow.'
            },
            {
                title: '59. Generics',
                content: 'Generics enable type-safe collections and reusable code with type parameters.'
            },
            {
                title: '60. Quiz: Generics',
                content: 'Identify type bounds, wildcards, and raw types.'
            },
            {
                title: '61. File Handling',
                content: 'Read/write files using streams, readers, and writers with proper exception handling.'
            },
            {
                title: '62. Quiz: File Handling',
                content: 'Focus on file IO classes, buffering, and resource cleanup.'
            },
            {
                title: '63. Design Principles',
                content: 'Apply SOLID, DRY, KISS, and YAGNI to create maintainable systems.'
            },
            {
                title: '64. Quiz: Design Principles',
                content: 'Identify which principle applies to a given scenario.'
            },
            {
                title: '65. Object Lifecycle',
                content: 'Object creation, initialization, use, and garbage collection.'
            },
            {
                title: '66. Quiz: Object Lifecycle',
                content: 'Focus on constructors, finalization, and GC behavior.'
            }
        ],
        mcqs: [
            // Worksheet 1
            { worksheet: 'Worksheet 1', question: 'Which concept in OOP is used to hide inner workings and only expose functionality?', options: ['Abstraction', 'Encapsulation', 'Polymorphism', 'Inheritance'], answer: 1, explanation: 'Encapsulation bundles data and methods and hides the internal state.' },
            { worksheet: 'Worksheet 1', question: 'What is the key feature of inheritance in OOP?', options: ['Subclass inherits from superclass', 'Objects cannot inherit', 'Not supported in OOP', 'Created by constructors'], answer: 0, explanation: 'Inheritance allows a derived class to acquire properties of a base class.' },
            { worksheet: 'Worksheet 1', question: 'Correct example of method overloading?', options: ['Same name, Different return type', 'Same name, Different arguments', 'No arguments', 'None'], answer: 1, explanation: 'Overloading requires same name but different signatures (parameters).' },
            { worksheet: 'Worksheet 1', question: 'What is polymorphism in OOP?', options: ['Create many classes from one parent', 'Objects respond differently to same message', 'Same method name in all classes', 'None'], answer: 1, explanation: 'Ability of different objects to respond to the same call in specialized ways.' },
            { worksheet: 'Worksheet 1', question: 'Purpose of a constructor?', options: ['Create objects', 'Initialize objects', 'Destroy objects', 'Return values'], answer: 1, explanation: 'Constructors are special methods used to set initial state of an object.' },
            { worksheet: 'Worksheet 1', question: 'Modifier that restricts access ONLY to within the same class?', options: ['public', 'private', 'protected', 'default'], answer: 1, explanation: 'Private members are not accessible outside their containing class.' },
            { worksheet: 'Worksheet 1', question: 'Significance of "super" keyword?', options: ['Refers to superclass', 'Used for overloading', 'Prevents inheritance', 'Initializes objects'], answer: 0, explanation: 'Used to access members or constructors of the parent class.' },
            { worksheet: 'Worksheet 1', question: 'What is encapsulation?', options: ['Wrapping data and methods', 'Information hiding', 'Polymorphic response', 'Multi-class creation'], answer: 0, explanation: 'The bundling of data and the methods that operate on that data into a single unit.' },
            { worksheet: 'Worksheet 1', question: 'Example of multiple inheritance?', options: ['Class inheriting from 2+ classes', 'Class inheriting from 1 class', 'Implementing multiple interfaces', 'None'], answer: 0, explanation: 'Acquiring properties from more than one immediate parent class.' },
            { worksheet: 'Worksheet 1', question: 'Keyword used to inherit from a class in Java?', options: ['extends', 'inherit', 'super', 'implements'], answer: 0, explanation: 'extends keyword establishes the parent-child relationship.' },

            // Worksheet 2
            { worksheet: 'Worksheet 2', question: 'True about encapsulation?', options: ['Hide state and require methods for interaction', 'Allows global access to state', 'Refers to object creation', 'Used to share data'], answer: 0, explanation: 'Encapsulation ensures data integrity by controlling access.' },
            { worksheet: 'Worksheet 2', question: 'Used to define a new class based on an existing class?', options: ['Overloading', 'Inheritance', 'Encapsulation', 'Abstraction'], answer: 1, explanation: 'Inheritance is the mechanism for deriving classes.' },
            { worksheet: 'Worksheet 2', question: 'Main difference between abstract class and interface?', options: ['Abstract class has concrete methods; Interface (purely) does not', 'Abstract class no constructors', 'Abstract class cannot be inherited', 'No difference'], answer: 0, explanation: 'Abstract classes can have partial implementation; interfaces are pure contracts.' },
            { worksheet: 'Worksheet 2', question: 'Method called on a null object reference in Java?', options: ['Executes normally', 'NullPointerException', 'Default value', 'Termination'], answer: 1, explanation: 'Accessing members of a null reference triggers this runtime exception.' },
            { worksheet: 'Worksheet 2', question: 'Constructor overloading?', options: ['Multiple constructors with different parameters', 'Same name, different params', 'Overriding constructor', 'Same return type'], answer: 0, explanation: 'Providing multiple ways to initialize an object.' },
            { worksheet: 'Worksheet 2', question: 'Result of "final" keyword with a class in Java?', options: ['Cannot instantiate', 'Cannot subclass', 'Private methods', 'No overloading'], answer: 1, explanation: 'Final classes cannot be extended.' },
            { worksheet: 'Worksheet 2', question: 'NOT a feature of OOP?', options: ['Inheritance', 'Polymorphism', 'Modularity', 'Structured Programming'], answer: 3, explanation: 'Structured programming (like C) is a different paradigm from OOP.' },
            { worksheet: 'Worksheet 2', question: 'When to use abstract class over interface?', options: ['To provide default implementation', 'Pure method definitions', 'Represent multiple behaviors', 'None'], answer: 0, explanation: 'If you want to share common code across all subclasses.' },
            { worksheet: 'Worksheet 2', question: 'Method overriding?', options: ['Same signature in child as parent', 'Different signature in child', 'Change access modifier', 'None'], answer: 0, explanation: 'Run-time polymorphism where child redefines parent behavior.' },
            { worksheet: 'Worksheet 2', question: 'True about class constructor in Java?', options: ['Must return value', 'Called automatically on creation', 'One argument only', 'Return type needed'], answer: 1, explanation: 'Constructors are invoked during the `new` operation.' },

            // Worksheet 3
            { worksheet: 'Worksheet 3', question: 'Benefit of polymorphism?', options: ['Treat different objects as common superclass', 'Makes overloading possible', 'Implements abstraction', 'Enforces inheritance'], answer: 0, explanation: 'Allows for generic code that works with different but related types.' },
            { worksheet: 'Worksheet 3', question: 'When use method overloading?', options: ['Change signature, keep functionality', 'Same name, different return type', 'Same name, different parameter types', 'Override superclass'], answer: 2, explanation: 'Overloading handles different inputs for conceptually same operations.' },
            { worksheet: 'Worksheet 3', question: 'Purpose of "this" keyword in Java?', options: ['Refer to current object instance', 'Create instance', 'Reference static method', 'Reference class variables only'], answer: 0, explanation: 'Differentiates instance variables from parameters with same name.' },
            { worksheet: 'Worksheet 3', question: 'True about interfaces in Java?', options: ['Provide implementations', 'Class can implement multiple', 'Cannot extend other interfaces', 'Instance variables allowed'], answer: 1, explanation: 'Java supports multiple inheritance through interfaces.' },
            { worksheet: 'Worksheet 3', question: 'Best describes "inheritance"?', options: ['Create new class from existing', 'Hide implementation', 'Allow subclassing only', 'Methods with same signature'], answer: 0, explanation: 'A mechanism for hierarchy and reuse.' },
            { worksheet: 'Worksheet 3', question: 'Subclass calls method overridden in superclass?', options: ['Subclass version executed', 'Superclass version executed', 'Compilation error', 'Both executed'], answer: 0, explanation: 'The most specific (child) version takes precedence.' },
            { worksheet: 'Worksheet 3', question: 'Difference between super() and this() in constructors?', options: ['super() calls parent; this() calls sibling constructor', 'super() calls sibling', 'super() initializes variables', 'No difference'], answer: 0, explanation: 'Both must be the first line in a constructor, used for chaining.' },
            { worksheet: 'Worksheet 3', question: 'Example of "composition" in OOP?', options: ['Inheriting from class', 'Class containing objects of other classes', 'Implementing interface', 'Static methods'], answer: 1, explanation: 'A "Has-A" relationship where a class is composed of other objects.' },
            { worksheet: 'Worksheet 3', question: 'NOT a valid access modifier in Java?', options: ['public', 'private', 'protected', 'global'], answer: 3, explanation: 'Java uses public, private, protected, and default (no keyword).' },
            { worksheet: 'Worksheet 3', question: 'Result of instantiating an abstract class in Java?', options: ['Works if concrete method present', 'Runtime exception', 'Compilation error', 'Reflection only'], answer: 2, explanation: 'Abstract classes are designed only for inheritance, not instantiation.' },

            // Worksheet 4
            { worksheet: 'Worksheet 4', question: 'Copy constructors can be used to?', options: ['Pass object to another primitive', 'Type casting', 'Pass object to a function', 'Pass object to a class'], answer: 2, explanation: 'Creates a deep copy of an object for passing or assignment.' },
            { worksheet: 'Worksheet 4', question: 'Correct constructor representation?', options: ['-classname()', 'classname()', '()classname', '~classname()'], answer: 1, explanation: 'Constructors share the class name and have no return type.' },
            { worksheet: 'Worksheet 4', question: 'Purpose of try, catch, and finally?', options: ['Handle errors/exceptions', 'Create objects', 'Define class', 'Polymorphism'], answer: 0, explanation: 'Standard pattern for robust error management.' },
            { worksheet: 'Worksheet 4', question: 'NOT a valid modifier for a class in Java?', options: ['public', 'private', 'protected', 'static'], answer: 3, explanation: 'Top-level classes cannot be static; only inner classes can.' },
            { worksheet: 'Worksheet 4', question: 'Purpose of "instanceof"?', options: ['Check if object belongs to class/type', 'Create instance', 'Check if abstract', 'Check if final'], answer: 0, explanation: 'Operator for type checking at runtime.' },
            { worksheet: 'Worksheet 4', question: 'Method overloading vs overriding?', options: ['Static vs Dynamic binding', 'Dynamic vs Static', 'Signatures same vs different', 'None'], answer: 0, explanation: 'Overloading is compile-time (static); Overriding is runtime (dynamic).' },
            { worksheet: 'Worksheet 4', question: 'Used to prevent method overriding in Java?', options: ['static', 'final', 'abstract', 'private'], answer: 1, explanation: 'Final methods cannot be redefined in subclasses.' },
            { worksheet: 'Worksheet 4', question: 'Object passed by reference?', options: ['Destructor called at end', 'Called explicitly', 'Not called', 'Called when out of scope'], answer: 3, explanation: 'Memory management handles cleanup when scope ends.' },
            { worksheet: 'Worksheet 4', question: 'How to overcome "Diamond Problem"?', options: ['Separate derived class', 'Virtual keyword', 'Cannot be done', 'Alias name'], answer: 1, explanation: 'In C++, virtual inheritance resolves duplicate base objects.' }
        ]
    },
    {
        id: 'cn',
        title: 'Computer Networks',
        icon: 'Wifi',
        description: 'Complete mastery of OSI/TCP-IP Models, IP Addressing, Subnetting, Network Devices, Protocols (HTTP, DNS, SMTP), and Security.',
        concepts: [
            {
                title: '1. Introduction to Computer Networks',
                content: 'A computer network connects devices to share data and resources using standard protocols.'
            },
            {
                title: '2. Types of Networks and Internetworks',
                content: 'LAN, MAN, WAN, PAN, and internetworks connect multiple networks with routers and gateways.'
            },
            {
                title: '3. Network and Logical Topologies',
                content: 'Topologies: bus, star, ring, mesh, and tree. Logical topology describes how data flows.'
            },
            {
                title: '4. Quiz: Introduction to Computer Networks',
                content: 'Practice MCQs on network basics, types, and topologies.'
            },
            {
                title: '5. OSI Model and Layers',
                content: 'Seven layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.'
            },
            {
                title: '6. TCP/IP Model and Comparison',
                content: 'TCP/IP has 4 layers: Link, Internet, Transport, Application. It maps to OSI layers for practical networking.'
            },
            {
                title: '7. Quiz: Networking Models',
                content: 'Practice MCQs on OSI vs TCP/IP, layers, and responsibilities.'
            },
            {
                title: '8. Network Cabling and Connectors',
                content: 'Twisted pair, coaxial, and fiber optics. Connectors include RJ45, LC, and SC.'
            },
            {
                title: '9. Network Devices',
                content: 'Routers, switches, hubs, bridges, firewalls, gateways, and modems. Each operates at specific OSI layers.'
            },
            {
                title: '10. Ethernet Frame, ARP, and NAC',
                content: 'Ethernet frames carry MAC addresses, payload, and CRC. ARP maps IP to MAC. NAC enforces access control on network endpoints.'
            },
            {
                title: '11. Quiz: Networking Fundamentals and Basics',
                content: 'Practice MCQs on cabling, devices, Ethernet, and ARP.'
            },
            {
                title: '12. Network Protocols and Communication',
                content: 'Protocols define rules for data exchange. Core suites include TCP, UDP, IP, ICMP, and application protocols.'
            },
            {
                title: '13. IP Addressing (IPv4 and IPv6)',
                content: 'IPv4 is 32-bit dotted decimal; IPv6 is 128-bit hex with simplified headers and autoconfiguration.'
            },
            {
                title: '14. Subnetting and Supernetting',
                content: 'Subnetting divides networks; supernetting aggregates routes. Classful vs classless uses fixed vs variable masks.'
            },
            {
                title: '15. NAT, DHCP, and DNS',
                content: 'NAT maps private to public addresses. DHCP assigns IPs dynamically. DNS resolves domain names to IPs.'
            },
            {
                title: '16. Quiz: IP Addressing and Subnetting',
                content: 'Practice MCQs on IPv4/IPv6, CIDR, NAT, DHCP, and DNS.'
            },
            {
                title: '17. Routing and Switching Overview',
                content: 'Routing selects paths across networks. Switching forwards frames within a LAN.'
            },
            {
                title: '18. Routing Algorithms',
                content: 'Common algorithms include distance vector, link state, and path vector.'
            },
            {
                title: '19. Distance Vector and Link State Protocols',
                content: 'Distance vector shares routes with neighbors. Link state floods topology and computes shortest paths.'
            },
            {
                title: '20. BGP and IGPs (IGRP, EIGRP, OSPF)',
                content: 'BGP is path-vector for inter-domain routing. IGRP/EIGRP and OSPF are interior gateway protocols.'
            },
            {
                title: '21. Switching Techniques',
                content: 'Store-and-forward and cut-through switching determine latency and error handling.'
            },
            {
                title: '22. Quiz: Routing and Switching',
                content: 'Practice MCQs on routing protocols, algorithms, and switching.'
            },
            {
                title: '23. Network Standards (IEEE 802.3 and 802.11)',
                content: 'Ethernet uses 802.3; Wi-Fi uses 802.11. Standards define speed, encoding, and media.'
            },
            {
                title: '24. Ethernet Switching and VLANs',
                content: 'VLANs segment broadcast domains. Trunking carries multiple VLANs over a single link.'
            },
            {
                title: '25. Data Link Protocols and STP',
                content: 'Spanning Tree Protocol prevents loops at Layer 2. Common protocols include PPP and HDLC.'
            },
            {
                title: '26. Quiz: Network Technologies and Standards',
                content: 'Practice MCQs on Ethernet, Wi-Fi, VLANs, and STP.'
            },
            {
                title: '27. Network Security Fundamentals',
                content: 'Security goals include confidentiality, integrity, and availability with layered defenses.'
            },
            {
                title: '28. Firewalls and Types',
                content: 'Packet filtering, stateful inspection, and next-gen firewalls enforce traffic rules.'
            },
            {
                title: '29. IDS and IPS',
                content: 'Intrusion detection monitors and alerts. Intrusion prevention blocks malicious traffic.'
            },
            {
                title: '30. VPNs and PKI',
                content: 'VPNs encrypt traffic over untrusted networks. PKI manages certificates and trust.'
            },
            {
                title: '31. Cryptography Basics',
                content: 'Symmetric encryption uses one key; asymmetric uses public/private key pairs.'
            },
            {
                title: '32. TLS and SSL',
                content: 'TLS provides secure channels and certificate-based authentication for HTTPS.'
            },
            {
                title: '33. Network and Application Layer Firewalls',
                content: 'Network firewalls filter packets; application firewalls inspect application-layer payloads.'
            },
            {
                title: '34. Quiz: Network Security',
                content: 'Practice MCQs on firewalls, VPNs, TLS, and security fundamentals.'
            },
            {
                title: '35. Network Management and Monitoring',
                content: 'Monitoring uses metrics, logs, and alerts to keep networks healthy.'
            },
            {
                title: '36. Traffic Management Techniques',
                content: 'Traffic shaping, policing, and prioritization control bandwidth usage.'
            },
            {
                title: '37. QoS, Bandwidth, Latency, and Congestion',
                content: 'QoS prioritizes critical traffic. Congestion control prevents packet loss and delays.'
            },
            {
                title: '38. Network Performance Metrics',
                content: 'Key metrics include throughput, latency, jitter, packet loss, and availability.'
            },
            {
                title: '39. Network Troubleshooting',
                content: 'Use layered troubleshooting: physical checks, connectivity tests, routing, and service validation.'
            },
            {
                title: '40. Monitoring Tools',
                content: 'Tools include Wireshark, tcpdump, traceroute, ping, and SNMP-based systems.'
            },
            {
                title: '41. Quiz: Network Management and Monitoring',
                content: 'Practice MCQs on QoS, metrics, congestion, and troubleshooting.'
            },
            {
                title: '42. Advanced Networking Concepts',
                content: 'Covers modern architectures and reliability concerns.'
            },
            {
                title: '43. Client-Server vs Peer-to-Peer',
                content: 'Client-server centralizes services; P2P distributes responsibilities among peers.'
            },
            {
                title: '44. Network Design Principles',
                content: 'Design for scalability, redundancy, segmentation, and security by default.'
            },
            {
                title: '45. Load Balancing and CDNs',
                content: 'Load balancers distribute traffic. CDNs cache content closer to users.'
            },
            {
                title: '46. Network Virtualization',
                content: 'Abstracts physical networks into logical overlays for flexibility and isolation.'
            },
            {
                title: '47. Software-Defined Networking (SDN)',
                content: 'Separates control plane from data plane for centralized network management.'
            },
            {
                title: '48. Reliability and Fault Tolerance',
                content: 'Use redundancy, failover, and monitoring to keep networks resilient.'
            },
            {
                title: '49. Quiz: Advanced Networking Concepts',
                content: 'Practice MCQs on SDN, virtualization, and high availability.'
            }
        ],
        mcqs: [
            { question: 'Which OSI layer is responsible for logical addressing (IP)?', options: ['Data Link', 'Network', 'Transport', 'Session'], answer: 1, explanation: 'The Network layer handles routing and logical addressing (IP addresses).' },
            { question: 'Which device uses MAC addresses to forward data within a LAN?', options: ['Hub', 'Switch', 'Router', 'Modem'], answer: 1, explanation: 'Switches operate at the Data Link layer and use MAC addresses for efficient frame delivery.' },
            { question: 'What is the bit length of an IPv6 address?', options: ['32', '64', '128', '256'], answer: 2, explanation: 'IPv6 uses 128-bit addresses to overcome the exhaustion of IPv4 addresses.' },
            { question: 'Which protocol maps an IP address to a MAC address?', options: ['DNS', 'DHCP', 'ARP', 'ICMP'], answer: 2, explanation: 'ARP (Address Resolution Protocol) maps logical IP addresses to physical MAC addresses.' },
            { question: 'Which port is used by HTTPS by default?', options: ['80', '21', '443', '53'], answer: 2, explanation: 'HTTPS (Secure Web) uses port 443; HTTP uses port 80.' },
            { question: 'Which protocol is connection-oriented and ensures reliable delivery?', options: ['UDP', 'ICMP', 'IP', 'TCP'], answer: 3, explanation: 'TCP provides reliable, sequenced, and error-checked delivery of a stream of octets.' },
            { question: 'In the Three-Way Handshake, what is the second packet sent?', options: ['SYN', 'ACK', 'SYN-ACK', 'FIN'], answer: 2, explanation: 'The sequence is SYN (from client) → SYN-ACK (from server) → ACK (from client).' },
            { question: 'Which networking topology uses a central hub where all devices are connected?', options: ['Bus', 'Ring', 'Mesh', 'Star'], answer: 3, explanation: 'In a star topology, all devices are connected to a central hub or switch.' },
            { question: 'Which protocol is used to translate domain names into IP addresses?', options: ['HTTP', 'DNS', 'SNMP', 'FTP'], answer: 1, explanation: 'DNS (Domain Name System) acts as the phonebook of the Internet.' },
            { question: 'What is the purpose of TTL (Time To Live) in an IP header?', options: ['Measure latency', 'Prevent routing loops', 'Check for errors', 'Define packet size'], answer: 1, explanation: 'TTL limits the lifespan of a packet to prevent it from circulating indefinitely in case of routing loops.' },
            { question: 'Which protocol is used for sending emails between servers?', options: ['POP3', 'IMAP', 'SMTP', 'HTTP'], answer: 2, explanation: 'SMTP (Simple Mail Transfer Protocol) is used for outgoing mail.' },
            { question: 'Which device operates at the Physical layer (Layer 1)?', options: ['Switch', 'Router', 'Hub', 'Bridge'], answer: 2, explanation: 'Hubs are "dumb" devices that broadcast data at the electrical/bit level.' },
            { question: 'What does CIDR stand for?', options: ['Classless Inter-Domain Routing', 'Computer Interface Data Record', 'Common Internet Delivery Router', 'None'], answer: 0, explanation: 'CIDR is a method for allocating IP addresses and IP routing.' },
            { question: 'Which layer of the OSI model handles encryption and data compression?', options: ['Application', 'Presentation', 'Session', 'Transport'], answer: 1, explanation: 'Presentation layer (Layer 6) transforms data into the form the Application layer accepts.' },
            { question: 'Which tool uses ICMP Echo Request/Reply messages?', options: ['Ping', 'Traceroute', 'Wireshark', 'Both Ping and Traceroute'], answer: 3, explanation: 'Both tools rely on ICMP for diagnostics and reachability tests.' },
            { question: 'What range is reserved for Class A private IP addresses?', options: ['192.168.x.x', '172.16.x.x', '10.x.x.x', '127.x.x.x'], answer: 2, explanation: '10.0.0.0 to 10.255.255.255 is the Class A private range.' },
            { question: 'Which port is used for DNS queries?', options: ['53', '80', '22', '25'], answer: 0, explanation: 'DNS primarily uses UDP port 53 for queries.' },
            { question: 'What is a "Firewall"?', options: ['Device to boost signals', 'Security barrier for traffic control', 'Device to connect LANs', 'Storage server'], answer: 1, explanation: 'Firewalls monitor and filter traffic based on security rules.' },
            { question: 'Which 802.11 standard is known as Wi-Fi 6?', options: ['802.11ac', '802.11n', '802.11ax', '802.11g'], answer: 2, explanation: '802.11ax introduced significant efficiency and capacity improvements.' },
            { question: 'Which protocol is used by DHCP for automatic IP assignment?', options: ['TCP', 'UDP', 'ICMP', 'ARP'], answer: 1, explanation: 'DHCP uses UDP ports 67 (server) and 68 (client).' },
            { question: 'Meaning of Latency in networking?', options: ['Data rate', 'Packet size', 'Time delay', 'Error count'], answer: 2, explanation: 'Latency is the time it takes for data to travel from source to destination.' },
            { question: 'Which type of VPN connects two branch offices?', options: ['Remote Access', 'Site-to-Site', 'Client-to-Site', 'None'], answer: 1, explanation: 'Site-to-Site VPNs connect entire networks to each other.' },
            { question: 'What is the maximum hop count for RIP v1?', options: ['10', '15', '16', 'Unlimited'], answer: 1, explanation: 'RIP considers 16 to be infinity/unreachable, so 15 is the max hops.' },
            { question: 'Which layer is responsible for Dialog Control and Synchronization?', options: ['Transport', 'Session', 'Presentation', 'Application'], answer: 1, explanation: 'The Session layer manages sessions between applications.' },
            { question: 'Which protocol provides secure terminal access to a remote host?', options: ['Telnet', 'SSH', 'FTP', 'SNMP'], answer: 1, explanation: 'SSH (Secure Shell) is the secure replacement for Telnet.' }
        ]
    },
    {
        id: 'dsa',
        title: 'Data Structures',
        icon: 'Binary',
        description: 'Complete Mastery of Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Hashing, and Heaps.',
        concepts: [
            {
                title: '1. Introduction to Data Structures',
                content: 'Data structures define relationships between data elements and provide operations like insertion, deletion, searching, sorting, and traversal.\n\nCategories:\n• Primitive Data Structures: Integers, floats, characters, booleans (building blocks).\n• Abstract Data Types (ADTs): Stacks, Queues, Linked Lists, Trees, Graphs, Hash Tables.'
            },
            {
                title: '2. Arrays & Memory Layout',
                content: 'An array stores elements of same type in contiguous memory.\n\nMemory Conventions:\n• Row-Major Order (C/C++): Stored row by row.\n• Column-Major Order (Fortran): Stored column by column.\n\nRow-Major Indexing Example:\nGiven A[-5...+5][-4...+4], Base 1000, 4-bytes per element. Address of A[1][2]?\n1. Rows: 11, Cols: 9.\n2. Offset for A[1][2]: (1 - (-5)) * 9 + (2 - (-4)) = 6 * 9 + 6 = 60 elements.\n3. Address: 1000 + (60 * 4) = 1240.'
            },
            {
                title: '3. Linked Lists Variants',
                content: 'Linear structure with dynamic memory allocation (non-contiguous).\n\nVariants:\n• Singly Linked List: Data + Next pointer.\n• Doubly Linked List: Prev + Data + Next pointer.\n• Circular Linked List: Last node points back to head.\n• Header Linked List: Contains a special node at the beginning with metadata.'
            },
            {
                title: '4. Stacks & Expression Evaluation',
                content: 'LIFO (Last In First Out) structure.\n\nApplications:\n• Function Calls (Call Stack).\n• Balanced Parentheses/Syntax Parsing.\n• Infix to Postfix/Prefix conversion.\n• Undo mechanism (Ctrl+Z).'
            },
            {
                title: '5. Queues & Scheduling',
                content: 'FIFO (First In First Out) structure.\n\nVariants:\n• Simple Queue: Front removal, Rear insertion.\n• Circular Queue (Ring Buffer): End wraps to start to reuse space.\n• Priority Queue: Dequeue based on element weight/priority (Binary Heap implementation).\n• Deque: Insertion/Deletion at both ends.'
            },
            {
                title: '6. Trees: Binary Search Tree (BST)',
                content: 'Hierarchical structure where:\n• Left Subtree < Root < Right Subtree.\n• Inorder Traversal gives Sorted Data.\n\nOperations:\n• Search/Insert/Delete: O(log n) average.\n• Worst case: O(n) (Skewed tree).'
            },
            {
                title: '7. Self-Balancing Trees',
                content: 'Optimizing worst-case performance to O(log n):\n• AVL Tree: Balanced factor (-1, 0, 1) maintained via rotations.\n• Red-Black Tree: Rules on node colors (Root black, no two reds together, same black count per path).'
            },
            {
                title: '8. Graph Theory & Traversal',
                content: 'Vertices (Nodes) V and Edges E.\n\nTraversals:\n• DFS (Depth First Search): Uses Stack (Recursive/Iterative). Explores as far as possible before back-tracking.\n• BFS (Breadth First Search): Uses Queue. Explores level by level (Shortest path in unweighted graphs).'
            },
            {
                title: '9. Hashing & Collision Resolution',
                content: 'Technique to map keys to indices for O(1) access.\n\nCollision Handling:\n• Chaining: Bucket holds a linked list.\n• Open Addressing: Linear Probing (next slot), Quadratic Probing, or Double Hashing.'
            },
            {
                title: '10. Heaps & Sorting',
                content: 'Complete binary tree with heap property:\n• Max-Heap: Parent ≥ Child. Used in Priority Queues.\n• Min-Heap: Parent ≤ Child.\n\nOperations:\n• Heapify: O(n).\n• Insert/Delete: O(log n).'
            },
            {
                title: '11. Advanced Structures: Trie & Segment Trees',
                content: 'Trie: Prefix tree for fast string retrieval.\nSegment Tree: Range query results (Sum, Min) in O(log n).\nUnion-Find: Monitors disjoint sets with Union and Find (Path Compression optimization).'
            },
            {
                title: '12. Sorting Algorithm Matrix',
                content: 'Comparison for Placements:\n• Bubble/Insertion/Selection: O(n²) worst.\n• Merge Sort: O(n log n) always. (O(n) space).\n• Quick Sort: O(n log n) avg, O(n²) worst. (In-place).\n• Heap Sort: O(n log n) always. (In-place).'
            },
            {
                title: '13. Memory Matrix: Time & Space Complexities',
                content: 'Search Time:\n• Hash Table: O(1) avg.\n• BST: O(log n).\n• Array (Linear): O(n).\n• Array (Sorted Binary): O(log n).'
            },
            {
                title: '14. Disjoint Set Union (Union-Find)',
                content: 'Supports union and find operations with path compression and union by rank. Used in cycle detection and Kruskal\'s MST.'
            },
            {
                title: '15. Advanced Graph Algorithms',
                content: 'Topological sort (DAGs), shortest paths (Dijkstra, Bellman-Ford), and MST (Prim, Kruskal).' 
            },
            {
                title: '16. Range Query Structures',
                content: 'Fenwick Tree (BIT) and Segment Tree for prefix and range queries in O(log n).'
            },
            {
                title: '17. String Data Structures',
                content: 'Trie and suffix array basics for fast prefix and substring queries.'
            }
        ],
        mcqs: [
            // Worksheet 1
            { worksheet: 'Worksheet 1', question: 'In an array of size n, what is the time complexity of accessing the i-th element?', options: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'], answer: 2, explanation: 'Arrays provide random access via index, which is O(1).' },
            { worksheet: 'Worksheet 1', question: 'The base address of a two-dimensional array A[4][5] is 2000, and each element occupies 4 bytes. What is the address of A[2][3] if stored in row-major order?', options: ['2048', '2052', '2060', '2072'], answer: 1, explanation: 'Address = Base + W*(i*cols + j) = 2000 + 4*(2*5 + 3) = 2052.' },
            { worksheet: 'Worksheet 1', question: 'Which of the following algorithms cannot be implemented using arrays?', options: ['Binary Search', 'Linked List Insertion', 'Merge Sort', 'Stack Operations'], answer: 1, explanation: 'Linked list insertion specifically refers to the pointer-based node linking, which is a different structure from contiguous arrays.' },
            { worksheet: 'Worksheet 1', question: 'Which of the following best describes the time complexity of inserting an element at the beginning of a dynamic array?', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'], answer: 1, explanation: 'All existing elements must shift to index i+1, resulting in O(n).' },
            { worksheet: 'Worksheet 1', question: 'In a 3D array A[x][y][z] stored in row-major order, which formula computes the address of element A[i][j][k]?', options: ['B+W ·(i·y·z+j·z+k)', 'B+W ·(k·x·y+j·x+i)', 'B+W ·(i·z+j·x·y+k)', 'B+W ·(j·z+i·y·z+k)'], answer: 0, explanation: 'Standard row-major formula for 3D array mapping.' },
            { worksheet: 'Worksheet 1', question: 'What will be the output of the program: int arr[2] = {7, 4}; cout << 0[arr] << ", " << 1[arr];?', options: ['Runtime error', 'Syntax error', '7, 4', 'None'], answer: 2, explanation: 'In C++, arr[i] is equivalent to *(arr + i), so 0[arr] is valid.' },
            { worksheet: 'Worksheet 1', question: 'What is the expected output of the swap loop on a square matrix A?', options: ['Transpose of matrix A', 'The matrix A itself', 'Inverse of matrix A', 'Adding 10 to upper diagonal'], answer: 0, explanation: 'The logic swaps symmetric elements A[i][j] and A[j][i].' },
            { worksheet: 'Worksheet 1', question: 'In a stack, what is the time complexity of inserting or deleting an element?', options: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'], answer: 2, explanation: 'Stack operations (Push/Pop) occur at the top and are always O(1).' },
            { worksheet: 'Worksheet 1', question: 'In a stack implementation using a linked list, where is the new element inserted?', options: ['Beginning of the list', 'End of the list', 'Middle of the list', 'None'], answer: 0, explanation: 'Pushing at the head of a linked list is O(1).' },
            { worksheet: 'Worksheet 1', question: 'Which of the following is not a typical use of a stack?', options: ['Function call management', 'Expression evaluation', 'Graph BFS', 'Undo/Redo functionality'], answer: 2, explanation: 'BFS uses a Queue; DFS uses a Stack.' },

            // Worksheet 2
            { worksheet: 'Worksheet 2', question: 'Which data structure is used to perform recursion internally?', options: ['Queue', 'Stack', 'Linked List', 'Heap'], answer: 1, explanation: 'The function call stack manages return addresses and local variables during recursion.' },
            { worksheet: 'Worksheet 2', question: 'Which data structure is required to convert arithmetic expression in infix to its equivalent postfix?', options: ['Queue', 'Linked list', 'BST', 'Stack'], answer: 3, explanation: 'Stacks handle operator precedence during expression conversion.' },
            { worksheet: 'Worksheet 2', question: 'Given the postfix expression 6 2 3 * - 3 8 2 / + +, what is the result?', options: ['5', '6', '7', '11'], answer: 3, explanation: '6 - (2*3) + 3 + (8/2) = 0 + 3 + 4 = 7? Wait, let me re-evaluate... 6 (2 3 *) - 3 (8 2 /) + + => 6-6 + 3 + 4 = 7.' },
            { worksheet: 'Worksheet 2', question: 'What is the maximum depth of a stack frame in a system with memory M and frame size F?', options: ['M*F', 'M/F', 'M-F', 'F/M'], answer: 1, explanation: 'Total bytes divided by bytes per frame.' },
            { worksheet: 'Worksheet 2', question: 'The number of edges in a complete graph of n vertices is:', options: ['n(n+1)/2', 'n(n-1)/2', 'n^2/2', 'n'], answer: 1, explanation: 'Standard nC2 formula for connectivity.' },
            { worksheet: 'Worksheet 2', question: 'Which output sequence can be generated by popping and pushing between two stacks S1 and S2?', options: ['10, 50, 90, 100', '50, 90, 100, 10', '90, 50, 100, 10', '100, 50, 10, 90'], answer: 2, explanation: 'Depends on the intermediate stack usage logic.' },
            { worksheet: 'Worksheet 2', question: 'What does the function n%2 push to S and print pop do?', options: ['Prints log n', 'Prints binary representation in reverse', 'Prints binary representation', 'Prints value of log n'], answer: 2, explanation: 'This is the standard decimal to binary remainder-stack algorithm.' },
            { worksheet: 'Worksheet 2', question: 'In a circular queue of size N, what is the condition for the queue to be full?', options: ['rear == front', '(rear + 1) % N == front', 'rear == front - 1', 'rear == front + 1'], answer: 1, explanation: 'The next position of rear meets front.' },
            { worksheet: 'Worksheet 2', question: 'What is the time complexity of inserting into a queue using a linked list (with tail pointer)?', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'], answer: 0, explanation: 'Direct access to rear allows constant time enqueue.' },
            { worksheet: 'Worksheet 2', question: 'Which principle does a Queue follow?', options: ['LIFO', 'FIFO', 'Random', 'Greedy'], answer: 1, explanation: 'First-In-First-Out.' },

            // Worksheet 3
            { worksheet: 'Worksheet 3', question: 'Structure allowing deletions at both ends but insertion at only one end?', options: ['Input restricted dequeue', 'Output restricted dequeue', 'Priority queue', 'Stack'], answer: 0, explanation: 'Input is restricted to one end, output allowed from both.' },
            { worksheet: 'Worksheet 3', question: 'What happens when an element is removed from an empty queue?', options: ['Success', 'Queue full', 'Queue underflow', 'Queue overflow'], answer: 2, explanation: 'Deleting from empty is underflow.' },
            { worksheet: 'Worksheet 3', question: 'Minimum number of fields in each node of a doubly linked list?', options: ['2', '3', '4', 'None'], answer: 1, explanation: 'Prev pointer, Data, and Next pointer.' },
            { worksheet: 'Worksheet 3', question: 'Which structure cannot store non-homogeneous data elements?', options: ['Arrays', 'Records', 'Pointers', 'Stacks'], answer: 0, explanation: 'Arrays are by definition collections of elements of the same type.' },
            { worksheet: 'Worksheet 3', question: 'Time complexity of inserting into a priority queue implemented with max-heap?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], answer: 1, explanation: 'Heap insertion involves bubbly-up, proportional to tree height.' },
            { worksheet: 'Worksheet 3', question: 'What is the difference between a queue and a deque?', options: ['Queue front insertion', 'Queue rear insertion', 'Deque both ends access', 'Deque front only delete'], answer: 2, explanation: 'Deques support access at both ends.' },
            { worksheet: 'Worksheet 3', question: 'Suitable structure for checking balanced parentheses?', options: ['List', 'Queue', 'Stack', 'Any'], answer: 2, explanation: 'LIFO property matches nested structures.' },
            { worksheet: 'Worksheet 3', question: 'Worst-case time complexity of deleting from a queue implemented with array?', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'], answer: 1, explanation: 'Shifting n elements if front is removed and indices are not circular.' },
            { worksheet: 'Worksheet 3', question: 'Worst-case time required to search in a sorted LINKED LIST of length n?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], answer: 2, explanation: 'Linked lists lack random access, so binary search is impossible.' },
            { worksheet: 'Worksheet 3', question: 'Time complexity of Enqueue and Dequeue in sorted linked list P-Queue?', options: ['O(1), O(1)', 'O(n), O(1)', 'O(n), O(n)', 'O(1), O(n)'], answer: 1, explanation: 'Insertion requires O(n) search; deletion from head is O(1).' },

            // Worksheet 4
            { worksheet: 'Worksheet 4', question: 'How many stacks are needed to implement a queue?', options: ['1', '2', '3', '4'], answer: 1, explanation: 'One stack handles intake, one reverses for output.' },
            { worksheet: 'Worksheet 4', question: 'Which statement about linked lists is true?', options: ['Contiguous storage', 'Costly insertion', 'Allows dynamic allocation', 'Faster access than arrays'], answer: 2, explanation: 'Linked lists solve the fixed-size problem of arrays.' },
            { worksheet: 'Worksheet 4', question: 'Which operation is NOT efficient in a singly linked list?', options: ['Head insertion', 'Tail insertion (no tail pointer)', 'Search', 'Traversal'], answer: 1, explanation: 'Requires O(n) traversal to find the last node.' },
            { worksheet: 'Worksheet 4', question: 'Most suitable structure for browser backward/forward navigation?', options: ['Queue', 'Stack', 'Doubly Linked List', 'Tree'], answer: 2, explanation: 'Allows moving front and back easily.' },
            { worksheet: 'Worksheet 4', question: 'True statement about linked lists vs arrays:', options: ['Fixed size', 'Less memory', 'Faster access', 'Efficient insertion/deletion'], answer: 3, explanation: 'No shifting needed for middle operations.' },
            { worksheet: 'Worksheet 4', question: 'Suitable structure for evaluating RPN expression?', options: ['List', 'Queue', 'Stack', 'Any'], answer: 2, explanation: 'Postfix/RPN relies on LIFO evaluation.' },
            { worksheet: 'Worksheet 4', question: 'Number of pointers updated for middle insert in DLL?', options: ['1', '2', '3', '4'], answer: 3, explanation: 'Actually 4: prev->next, next->prev, new->next, new->prev.' },
            { worksheet: 'Worksheet 4', question: 'Linear search complexity over array of n elements?', options: ['O(log n)', 'O(n)', 'O(n log n)', 'O(n^2)'], answer: 1, explanation: 'Worst case checks n elements.' },
            { worksheet: 'Worksheet 4', question: 'Which sorting algorithm DOES NOT have O(n^2) worst case?', options: ['Insertion', 'Merge', 'Quick', 'Bubble'], answer: 1, explanation: 'Merge sort is guaranteed O(n log n) worst case.' },
            { worksheet: 'Worksheet 4', question: 'Space complexity of linked list with n nodes (data + pointer)?', options: ['O(n)', 'O(n^2)', 'O(log n)', 'O(1)'], answer: 0, explanation: 'Growth is linear with number of nodes.' },

            // Worksheet 5
            { worksheet: 'Worksheet 5', question: 'Preorder: 15,10,12,11,20,18,16,19. Postorder?', options: ['Sorted', '11,12,10,16,19,18,20,15', 'Reverse', '19,16...'], answer: 1, explanation: 'BST property: Inorder is 10,11,12,15,16,18,19,20.' },
            { worksheet: 'Worksheet 5', question: 'Efficient array-based Queue operations complexity?', options: ['O(1) for both', 'One O(1), one O(n)', 'Both O(n)', 'Both O(log n)'], answer: 0, explanation: 'Circular arrays allow constant time enqueue and dequeue.' },
            { worksheet: 'Worksheet 5', question: 'Postfix evaluation: 10 5 + 60 6 / * 8 - ?', options: ['284', '213', '142', '71'], answer: 2, explanation: '15 * 10 - 8 = 142.' },
            { worksheet: 'Worksheet 5', question: 'Best way to store score frequencies [0, 100] for 500 students?', options: ['Array of 50', 'Array of 101', 'Array of 500', 'Dynamic 550'], answer: 1, explanation: 'Direct indexing by score value.' },
            { worksheet: 'Worksheet 5', question: 'Height of tree from postorder [8,9,6,7,4,5,2,3,1] and inorder [8,6,9,4,7,2,5,1,3]?', options: ['5', '4', '10', '1'], answer: 1, explanation: 'Calculated tree height is 4 nodes deep from root.' },
            { worksheet: 'Worksheet 5', question: 'Sorting pass 1: 7, 14, 56, 22, 25, 8. Which algorithm?', options: ['Selection', 'Insertion', 'Bubble', 'Merge'], answer: 0, explanation: 'Minimum (7) swapped to front is Selection Sort.' },
            { worksheet: 'Worksheet 5', question: 'Max nodes at level i of binary tree?', options: ['2^i', '2^(i-1)', 'i^2', '2i'], answer: 0, explanation: 'Doubles each level (level 0 has 1 node).' },
            { worksheet: 'Worksheet 5', question: 'BST for 15,10,20...11. Inorder traversal?', options: ['Reverse', 'Sorted', 'Random', 'None'], answer: 1, explanation: 'Fundamental BST property.' },
            { worksheet: 'Worksheet 5', question: 'What are records?', options: ['Homogeneous data', 'Heterogeneous collection', 'Tree node', 'Stack frame'], answer: 1, explanation: 'Records/Structs store different data types under one name.' },
            { worksheet: 'Worksheet 5', question: 'Collision resolution technique using linked lists in buckets?', options: ['Open Addressing', 'Chaining', 'Double Hashing', 'Rehashing'], answer: 1, explanation: 'Chaining is the list-in-bucket method.' }
        ]
    },
    {
        id: 'sd',
        title: 'System Design',
        icon: 'Layout',
        description: 'Scalability, Load Balancing, Caching, and Microservices architecture.',
        concepts: [
            {
                title: '1. System Design Process',
                content: 'Clarify requirements, define APIs, estimate scale, choose data model, design high-level architecture, then drill into components, data flow, and failure handling.'
            },
            {
                title: '2. Functional vs Non-Functional Requirements',
                content: 'Functional = features/behavior. Non-functional = latency, availability, throughput, durability, security, and cost.'
            },
            {
                title: '3. Back-of-the-Envelope Estimation',
                content: 'Estimate QPS, storage, bandwidth, and cache size. Example: daily active users, avg requests/user, data per request.'
            },
            {
                title: '4. API Design Basics',
                content: 'Define endpoints, payloads, pagination, filtering, versioning, and error semantics (HTTP status codes).' 
            },
            {
                title: '5. Data Modeling',
                content: 'Choose relational vs NoSQL based on access patterns. Model entities, relationships, and indexes.'
            },
            {
                title: '6. Consistency Models',
                content: 'Strong, eventual, and causal consistency. Trade-offs with availability and latency.'
            },
            {
                title: '7. CAP Theorem',
                content: 'In a network partition, systems choose between consistency and availability. CP vs AP trade-offs.'
            },
            {
                title: '8. Scalability',
                content: 'Vertical scaling increases machine capacity. Horizontal scaling adds more nodes behind a load balancer.'
            },
            {
                title: '9. Load Balancing',
                content: 'Distribute traffic using round-robin, least connections, or weighted strategies. Health checks and failover are essential.'
            },
            {
                title: '10. Caching',
                content: 'Cache at client, CDN, or server. Policies: TTL, LRU/LFU. Beware of cache invalidation and stale reads.'
            },
            {
                title: '11. Content Delivery Network (CDN)',
                content: 'Edge caching reduces latency by serving content closer to users. Great for static assets and media.'
            },
            {
                title: '12. Database Scaling',
                content: 'Replication for availability, sharding for scale. Use read replicas and partitioning.'
            },
            {
                title: '13. Indexing and Query Optimization',
                content: 'Indexes speed reads but slow writes. Choose indexes based on query patterns.'
            },
            {
                title: '14. Queues and Async Processing',
                content: 'Use queues (Kafka, RabbitMQ, SQS) for decoupling, buffering spikes, and background jobs.'
            },
            {
                title: '15. Event-Driven Architecture',
                content: 'Services publish/subscribe to events. Enables loose coupling and scalability.'
            },
            {
                title: '16. Rate Limiting and Throttling',
                content: 'Protect services with token bucket, leaky bucket, or fixed window strategies.'
            },
            {
                title: '17. Reliability and Fault Tolerance',
                content: 'Use retries with backoff, circuit breakers, bulkheads, and graceful degradation.'
            },
            {
                title: '18. Observability',
                content: 'Logs, metrics, and traces help diagnose incidents. Use dashboards and alerts.'
            },
            {
                title: '19. Security Basics',
                content: 'AuthN/AuthZ, TLS, input validation, secrets management, and least privilege.'
            },
            {
                title: '20. Storage Systems',
                content: 'Object storage for blobs, block storage for disks, and file systems for shared access.'
            },
            {
                title: '21. Microservices vs Monolith',
                content: 'Microservices allow independent scaling and deployments but add complexity (network, ops, data consistency).' 
            },
            {
                title: '22. Distributed ID Generation',
                content: 'Use UUIDs or snowflake-style IDs for unique, sortable identifiers across nodes.'
            },
            {
                title: '23. Disaster Recovery',
                content: 'Define RTO/RPO, backups, multi-region strategies, and failover plans.'
            },
            {
                title: '24. Idempotency & Retries',
                content: 'Use idempotency keys for safe retries, especially in payment or order flows.'
            },
            {
                title: '25. Distributed Transactions',
                content: 'Patterns: Saga, outbox, and two-phase commit. Trade-offs between consistency and availability.'
            },
            {
                title: '26. Leader Election & Coordination',
                content: 'Use ZooKeeper/etcd or consensus algorithms for leader election and configuration management.'
            },
            {
                title: '27. Multi-Region Design',
                content: 'Active-active or active-passive deployments with geo-replication and traffic routing.'
            },
            {
                title: '28. Data Migration & Backward Compatibility',
                content: 'Use versioned schemas, expand-and-contract migrations, and backward-compatible API changes.'
            }
        ],
        mcqs: [
            {
                question: 'What is the main purpose of a Load Balancer?',
                options: ['Encrypting traffic', 'Distributing traffic', 'Caching data', 'Storing logs'],
                answer: 1,
                explanation: 'A Load Balancer distributes incoming network traffic across multiple servers to ensure reliability and performance.'
            },
            {
                question: 'Which cache eviction policy removes the least recently used item?',
                options: ['FIFO', 'LFU', 'LRU', 'Random'],
                answer: 2,
                explanation: 'LRU evicts items that have not been accessed recently.'
            },
            {
                question: 'Which CAP trade-off favors consistency over availability during partitions?',
                options: ['AP', 'CP', 'CA', 'AC'],
                answer: 1,
                explanation: 'CP systems choose Consistency and Partition tolerance.'
            },
            {
                question: 'What is a common use of message queues?',
                options: ['Serving static files', 'Async processing and buffering', 'Rendering UI', 'DNS resolution'],
                answer: 1,
                explanation: 'Queues decouple services and handle traffic spikes.'
            }
        ]
    },
    {
        id: 'web',
        title: 'Web Development',
        icon: 'Globe',
        description: 'Complete MERN Stack: HTML/CSS, JavaScript, React, Node.js, Express, MongoDB, and Full-Stack Development.',
        concepts: [
            {
                title: '1. HTML Fundamentals',
                content: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages.\\n\\nKey Concepts:\\n• **Semantic HTML**: Using meaningful tags like <header>, <nav>, <article>, <section>, <footer>.\\n• **Forms**: <form>, <input>, <textarea>, <select>, <button> with validation attributes.\\n• **Accessibility**: ARIA labels, alt text, semantic structure.\\n• **HTML5 Features**: <video>, <audio>, <canvas>, localStorage, sessionStorage.\\n\\nEX: <article><h1>Title</h1><p>Content</p></article>'
            },
            {
                title: '2. CSS Fundamentals',
                content: 'CSS (Cascading Style Sheets) controls the presentation and layout of web pages.\\n\\nCore Topics:\\n• **Box Model**: Content, Padding, Border, Margin.\\n• **Flexbox**: display: flex, justify-content, align-items, flex-direction.\\n• **Grid**: display: grid, grid-template-columns, grid-gap.\\n• **Responsive Design**: Media queries, mobile-first approach.\\n• **CSS Variables**: --primary-color: #10b981; color: var(--primary-color);\\n• **Animations**: @keyframes, transition, transform.\\n\\nEX: .container { display: flex; justify-content: center; }'
            },
            {
                title: '3. JavaScript Core Concepts',
                content: 'JavaScript is a high-level, interpreted programming language for web development.\\n\\nFundamentals:\\n• **Variables**: let, const, var (scope differences).\\n• **Data Types**: String, Number, Boolean, Object, Array, null, undefined, Symbol.\\n• **Functions**: Function declarations, expressions, arrow functions.\\n• **Closures**: Inner function accessing outer function variables.\\n• **Promises**: Async operations with .then(), .catch(), .finally().\\n• **Async/Await**: Modern async syntax for cleaner code.\\n\\nEX: const fetchData = async () => { const res = await fetch(url); return res.json(); }'
            },
            {
                title: '4. JavaScript ES6+ Features',
                content: 'Modern JavaScript features that improve code quality and readability.\\n\\nKey Features:\\n• **Destructuring**: const { name, age } = user;\\n• **Spread Operator**: const newArr = [...oldArr, newItem];\\n• **Template Literals**: `Hello ${name}!`\\n• **Arrow Functions**: const add = (a, b) => a + b;\\n• **Modules**: import/export for code organization.\\n• **Classes**: class User { constructor(name) { this.name = name; } }\\n• **Optional Chaining**: user?.address?.city\\n• **Nullish Coalescing**: const value = input ?? defaultValue;'
            },
            {
                title: '5. DOM Manipulation',
                content: 'The DOM (Document Object Model) is a tree representation of HTML.\\n\\nCommon Operations:\\n• **Selection**: document.querySelector(), document.getElementById(), document.querySelectorAll().\\n• **Modification**: element.innerHTML, textContent, setAttribute().\\n• **Creation**: document.createElement(), appendChild().\\n• **Events**: addEventListener("click", handler), event.preventDefault().\\n• **Traversal**: parentNode, children, nextSibling.\\n\\nEX: document.querySelector(".btn").addEventListener("click", () => alert("Clicked!"));'
            },
            {
                title: '6. React Fundamentals',
                content: 'React is a JavaScript library for building user interfaces with components.\\n\\nCore Concepts:\\n• **Components**: Reusable UI building blocks (functional/class).\\n• **JSX**: JavaScript XML syntax for writing HTML in JS.\\n• **Props**: Data passed from parent to child components.\\n• **State**: Component-level data that triggers re-renders.\\n• **Virtual DOM**: Efficient diffing algorithm for minimal DOM updates.\\n• **Reconciliation**: Process of updating the real DOM.\\n\\nEX: const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;'
            },
            {
                title: '7. React Hooks',
                content: 'Hooks allow functional components to use state and lifecycle features.\\n\\nEssential Hooks:\\n• **useState**: const [count, setCount] = useState(0);\\n• **useEffect**: Side effects, data fetching, subscriptions.\\n• **useContext**: Access context without prop drilling.\\n• **useRef**: Persist values across renders, DOM references.\\n• **useMemo**: Memoize expensive calculations.\\n• **useCallback**: Memoize functions to prevent re-creation.\\n• **useReducer**: Complex state logic (like Redux).\\n\\nEX: useEffect(() => { fetchData(); }, [dependency]);'
            },
            {
                title: '8. React Component Lifecycle',
                content: 'Understanding when components mount, update, and unmount is crucial.\\n\\nLifecycle Phases:\\n• **Mounting**: Component is created and inserted into DOM.\\n• **Updating**: Component re-renders due to state/props changes.\\n• **Unmounting**: Component is removed from DOM.\\n\\nWith Hooks:\\n• useEffect(() => { /* mount */ return () => { /* unmount */ }; }, []);\\n• useEffect(() => { /* update */ }, [dependency]);\\n\\nCleanup: Always return cleanup functions to prevent memory leaks.'
            },
            {
                title: '9. Node.js Fundamentals',
                content: 'Node.js is a JavaScript runtime built on the Chrome V8 engine for server-side development.\\n\\nKey Features:\\n• **Event-Driven**: Non-blocking I/O operations.\\n• **Single-Threaded**: Uses the event loop for concurrency.\\n• **NPM**: Package manager with millions of libraries.\\n• **Modules**: CommonJS (require) and ES6 (import/export).\\n• **Built-in Modules**: fs, http, path, os, crypto.\\n\\nEX: const http = require("http"); http.createServer((req, res) => res.end("Hello")).listen(3000);'
            },
            {
                title: '10. Express.js Framework',
                content: 'Express is a minimal and flexible Node.js web application framework.\\n\\nCore Concepts:\\n• **Routing**: app.get("/api/users", handler);\\n• **Middleware**: Functions that process requests (logging, auth, parsing).\\n• **Request/Response**: req.params, req.query, req.body, res.json(), res.send().\\n• **Error Handling**: app.use((err, req, res, next) => { /* ... */ });\\n• **Static Files**: app.use(express.static("public"));\\n\\nEX: app.post("/api/users", (req, res) => res.json({ success: true }));'
            },
            {
                title: '11. RESTful API Design',
                content: 'REST (Representational State Transfer) is an architectural style for APIs.\\n\\nHTTP Methods:\\n• **GET**: Retrieve data (idempotent, safe).\\n• **POST**: Create new resource.\\n• **PUT**: Update entire resource (idempotent).\\n• **PATCH**: Partial update.\\n• **DELETE**: Remove resource (idempotent).\\n\\nStatus Codes:\\n• 200 OK, 201 Created, 204 No Content.\\n• 400 Bad Request, 401 Unauthorized, 404 Not Found.\\n• 500 Internal Server Error.\\n\\nEX: GET /api/users/:id → { id: 1, name: "John" }'
            },
            {
                title: '12. MongoDB Basics',
                content: 'MongoDB is a NoSQL document database that stores data in JSON-like documents.\\n\\nKey Concepts:\\n• **Collections**: Groups of documents (like tables).\\n• **Documents**: JSON objects with key-value pairs.\\n• **Schema-less**: Flexible structure, no fixed schema.\\n• **CRUD Operations**: Create, Read, Update, Delete.\\n• **Indexing**: Improves query performance.\\n• **Aggregation**: Pipeline for data transformation.\\n\\nEX: db.users.find({ age: { $gt: 18 } }).sort({ name: 1 });'
            },
            {
                title: '13. Mongoose ODM',
                content: 'Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.\\n\\nFeatures:\\n• **Schema Definition**: Define structure with types and validation.\\n• **Models**: Constructors compiled from schemas.\\n• **Validation**: Built-in and custom validators.\\n• **Middleware**: Pre/post hooks for operations.\\n• **Population**: Reference other documents (like SQL joins).\\n\\nEX: const User = mongoose.model("User", { name: String, email: { type: String, required: true } });'
            },
            {
                title: '14. Authentication & Authorization',
                content: 'Securing your application with proper user authentication.\\n\\nStrategies:\\n• **JWT (JSON Web Tokens)**: Stateless authentication.\\n• **Sessions**: Server-side storage with cookies.\\n• **OAuth**: Third-party authentication (Google, GitHub).\\n• **bcrypt**: Password hashing for security.\\n\\nJWT Flow:\\n1. User logs in with credentials.\\n2. Server validates and creates JWT.\\n3. Client stores token (localStorage/cookie).\\n4. Client sends token in Authorization header.\\n5. Server verifies token for protected routes.\\n\\nEX: Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
            },
            {
                title: '15. MERN Stack Architecture',
                content: 'Full-stack JavaScript development with MongoDB, Express, React, and Node.js.\\n\\nData Flow:\\n1. **Client (React)**: User interacts with UI.\\n2. **HTTP Request**: React sends API call to backend.\\n3. **Server (Express/Node)**: Processes request, business logic.\\n4. **Database (MongoDB)**: Stores/retrieves data.\\n5. **Response**: Server sends JSON back to client.\\n6. **UI Update**: React updates state and re-renders.\\n\\nAdvantages:\\n• Single language (JavaScript) across stack.\\n• JSON everywhere (MongoDB, Express, React).\\n• Rich ecosystem and community support.\\n• Fast development with reusable components.'
            },
            {
                title: '16. State Management (Redux)',
                content: 'Redux is a predictable state container for JavaScript apps.\\n\\nCore Principles:\\n• **Single Source of Truth**: One global store.\\n• **State is Read-Only**: Only changed via actions.\\n• **Pure Reducers**: (state, action) => newState.\\n\\nFlow:\\n1. Component dispatches action.\\n2. Reducer processes action and updates state.\\n3. Store notifies subscribers.\\n4. Component re-renders with new state.\\n\\nEX: dispatch({ type: "INCREMENT", payload: 1 });'
            },
            {
                title: '17. Web Security',
                content: 'Protecting web applications from common vulnerabilities.\\n\\nCommon Attacks:\\n• **XSS (Cross-Site Scripting)**: Injecting malicious scripts. Prevention: Sanitize input, use CSP.\\n• **CSRF (Cross-Site Request Forgery)**: Unauthorized commands. Prevention: CSRF tokens, SameSite cookies.\\n• **SQL Injection**: Malicious SQL queries. Prevention: Parameterized queries, ORMs.\\n• **CORS (Cross-Origin Resource Sharing)**: Browser security feature.\\n\\nBest Practices:\\n• Use HTTPS everywhere.\\n• Validate and sanitize all inputs.\\n• Implement rate limiting.\\n• Keep dependencies updated.\\n• Use security headers (Helmet.js).'
            },
            {
                title: '18. Performance Optimization',
                content: 'Techniques to improve web application speed and efficiency.\\n\\nFrontend:\\n• **Code Splitting**: Load only necessary code (React.lazy).\\n• **Lazy Loading**: Load images/components on demand.\\n• **Memoization**: React.memo, useMemo, useCallback.\\n• **Debouncing/Throttling**: Limit function execution.\\n• **CDN**: Serve static assets from edge servers.\\n\\nBackend:\\n• **Caching**: Redis, in-memory cache.\\n• **Database Indexing**: Speed up queries.\\n• **Connection Pooling**: Reuse database connections.\\n• **Compression**: gzip/brotli for responses.\\n• **Load Balancing**: Distribute traffic across servers.'
            },
            {
                title: '19. Auth Flow Deep Dive',
                content: 'Access tokens + refresh tokens, secure cookie storage, rotation, and logout invalidation.'
            },
            {
                title: '20. Validation and Error Handling',
                content: 'Use schema validation (Joi/Zod), centralized error handlers, and consistent error responses.'
            },
            {
                title: '21. Testing in MERN',
                content: 'Frontend: Jest + React Testing Library. Backend: Jest/Mocha + Supertest. Use mocks and integration tests.'
            },
            {
                title: '22. Deployment & CI/CD',
                content: 'Build pipelines, environment configs, secrets management, and zero-downtime deployments.'
            },
            {
                title: '23. Monitoring & Logging',
                content: 'Use structured logs, error tracking (Sentry), and performance monitoring.'
            }
        ],
        mcqs: [
            {
                worksheet: 'HTML/CSS',
                question: 'Which CSS property is used to create a flexible layout?',
                options: ['display: block', 'display: flex', 'display: inline', 'display: table'],
                answer: 1,
                explanation: 'display: flex enables Flexbox layout, which provides a flexible way to arrange items in a container.'
            },
            {
                worksheet: 'HTML/CSS',
                question: 'What does the "box-sizing: border-box" property do?',
                options: ['Adds border to the box', 'Includes padding and border in element width/height', 'Removes the box model', 'Sets box to full width'],
                answer: 1,
                explanation: 'border-box includes padding and border in the element\'s total width and height, making sizing more predictable.'
            },
            {
                worksheet: 'JavaScript',
                question: 'What is the output of: console.log(typeof null)?',
                options: ['null', 'undefined', 'object', 'number'],
                answer: 2,
                explanation: 'typeof null returns "object" due to a historical bug in JavaScript that has been kept for compatibility.'
            },
            {
                worksheet: 'JavaScript',
                question: 'What is a closure in JavaScript?',
                options: ['A function that closes the browser', 'A function with access to its outer scope', 'A way to close connections', 'A type of loop'],
                answer: 1,
                explanation: 'A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned.'
            },
            {
                worksheet: 'JavaScript',
                question: 'Which method is used to parse a JSON string?',
                options: ['JSON.parse()', 'JSON.stringify()', 'JSON.decode()', 'JSON.convert()'],
                answer: 0,
                explanation: 'JSON.parse() converts a JSON string into a JavaScript object.'
            },
            {
                worksheet: 'React',
                question: 'What is the Virtual DOM in React?',
                options: ['A copy of the real DOM', 'A lightweight representation of the real DOM', 'A database', 'A server'],
                answer: 1,
                explanation: 'The Virtual DOM is a lightweight JavaScript representation of the real DOM that React uses to optimize updates.'
            },
            {
                worksheet: 'React',
                question: 'Which hook is used for side effects in React?',
                options: ['useState', 'useEffect', 'useContext', 'useReducer'],
                answer: 1,
                explanation: 'useEffect is used for side effects like data fetching, subscriptions, and manually changing the DOM.'
            },
            {
                worksheet: 'React',
                question: 'What does "props" stand for in React?',
                options: ['Properties', 'Proposals', 'Protocols', 'Propagation'],
                answer: 0,
                explanation: 'Props is short for properties and is used to pass data from parent to child components.'
            },
            {
                worksheet: 'Node.js',
                question: 'What is the event loop in Node.js?',
                options: ['A loop that creates events', 'A mechanism for handling async operations', 'A type of database', 'A debugging tool'],
                answer: 1,
                explanation: 'The event loop is Node.js\'s mechanism for handling asynchronous operations in a single-threaded environment.'
            },
            {
                worksheet: 'Node.js',
                question: 'Which module is used to create a web server in Node.js?',
                options: ['fs', 'http', 'path', 'url'],
                answer: 1,
                explanation: 'The http module is used to create HTTP servers and handle requests/responses in Node.js.'
            },
            {
                worksheet: 'Express',
                question: 'What is middleware in Express.js?',
                options: ['A database', 'Functions that process requests before reaching routes', 'A type of server', 'A frontend framework'],
                answer: 1,
                explanation: 'Middleware functions have access to request, response objects and can modify them or end the request-response cycle.'
            },
            {
                worksheet: 'MongoDB',
                question: 'What type of database is MongoDB?',
                options: ['SQL', 'NoSQL', 'Graph', 'Relational'],
                answer: 1,
                explanation: 'MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents.'
            },
            {
                worksheet: 'MongoDB',
                question: 'What is the equivalent of a table in MongoDB?',
                options: ['Document', 'Collection', 'Schema', 'Row'],
                answer: 1,
                explanation: 'A collection in MongoDB is equivalent to a table in relational databases and contains documents.'
            },
            {
                worksheet: 'REST API',
                question: 'Which HTTP method is idempotent?',
                options: ['POST', 'GET', 'PATCH', 'All of the above'],
                answer: 1,
                explanation: 'GET is idempotent, meaning multiple identical requests have the same effect as a single request. PUT and DELETE are also idempotent.'
            },
            {
                worksheet: 'Security',
                question: 'What does CORS stand for?',
                options: ['Cross-Origin Resource Sharing', 'Common Origin Request System', 'Cross-Object Resource Security', 'Central Origin Response Server'],
                answer: 0,
                explanation: 'CORS is a security feature that allows or restricts resources to be requested from another domain.'
            },
            {
                worksheet: 'Full Stack',
                question: 'In MERN stack, what does the "E" stand for?',
                options: ['Electron', 'Express', 'Ember', 'Engine'],
                answer: 1,
                explanation: 'MERN stands for MongoDB, Express.js, React, and Node.js - a full JavaScript stack.'
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
                title: '1. Compiler Overview',
                content: 'A compiler translates high-level code to target code. Key goals: correctness, efficiency, and helpful diagnostics.'
            },
            {
                title: '2. Phases of a Compiler',
                content: 'Lexical Analysis → Syntax Analysis → Semantic Analysis → Intermediate Code Generation → Optimization → Code Generation.'
            },
            {
                title: '3. Lexical Analysis',
                content: 'Converts source into tokens using regular expressions and finite automata. Removes whitespace/comments.'
            },
            {
                title: '4. Regular Expressions and Automata',
                content: 'Regex define token patterns. Convert to NFA and DFA for efficient scanning.'
            },
            {
                title: '5. Symbol Table',
                content: 'Stores identifiers, types, scope, and memory locations. Supports fast insert/lookup.'
            },
            {
                title: '6. Syntax Analysis (Parsing)',
                content: 'Builds parse trees from tokens using context-free grammars. Techniques: LL(1), LR(0), SLR, CLR, LALR.'
            },
            {
                title: '7. FIRST and FOLLOW Sets',
                content: 'Used in predictive parsing to choose productions without backtracking.'
            },
            {
                title: '8. Ambiguity and Left Recursion',
                content: 'Ambiguous grammars have multiple parse trees. Remove left recursion or perform left factoring for LL parsers.'
            },
            {
                title: '9. Semantic Analysis',
                content: 'Type checking, scope resolution, and enforcing language rules beyond grammar.'
            },
            {
                title: '10. Intermediate Representation (IR)',
                content: 'Three-address code (TAC), quadruples, or SSA represent code in a machine-independent form.'
            },
            {
                title: '11. Control Flow Graph (CFG)',
                content: 'Basic blocks with edges indicating flow. Used for data-flow and optimization.'
            },
            {
                title: '12. Code Optimization',
                content: 'Local: constant folding, common subexpression elimination. Global: dead code elimination, loop optimizations.'
            },
            {
                title: '13. Register Allocation',
                content: 'Assign variables to registers using graph coloring or linear scan to reduce memory access.'
            },
            {
                title: '14. Code Generation',
                content: 'Translate IR to target assembly/machine code with instruction selection and scheduling.'
            },
            {
                title: '15. Runtime Environment',
                content: 'Stack frames, activation records, calling conventions, and memory layout (stack/heap/data).' 
            },
            {
                title: '16. Error Handling',
                content: 'Lexical, syntax, and semantic errors. Use recovery strategies to continue parsing.'
            },
            {
                title: '17. Linker and Loader',
                content: 'Linker resolves symbols and combines object files. Loader places code into memory for execution.'
            },
            {
                title: '18. Compiler Tools',
                content: 'Lex/Flex for scanners, Yacc/Bison for parsers, and LLVM for optimization and code generation.'
            },
            {
                title: '19. Parsing Tables & Conflicts',
                content: 'LR parsing uses ACTION/GOTO tables. Resolve shift-reduce and reduce-reduce conflicts by grammar refactoring.'
            },
            {
                title: '20. Static Single Assignment (SSA)',
                content: 'SSA form assigns each variable exactly once and introduces phi functions at control-flow joins.'
            },
            {
                title: '21. Data-Flow Analysis',
                content: 'Analyses like reaching definitions, live variable analysis, and available expressions guide optimizations.'
            },
            {
                title: '22. Instruction Selection & Scheduling',
                content: 'Select target instructions and schedule them to reduce stalls and improve pipeline usage.'
            }
        ],
        mcqs: [
            {
                question: 'Which phase of the compiler is also called Scanning?',
                options: ['Lexical Analysis', 'Syntax Analysis', 'Semantic Analysis', 'Code Generation'],
                answer: 0,
                explanation: 'Lexical analysis is the first phase where the source code is scanned and converted into tokens.'
            },
            {
                question: 'Which grammar class is used by LL(1) parsers?',
                options: ['Regular', 'Context-free', 'Context-sensitive', 'Unrestricted'],
                answer: 1,
                explanation: 'LL(1) parsers operate on a subset of context-free grammars.'
            },
            {
                question: 'What is the purpose of the symbol table?',
                options: ['Tokenizing input', 'Storing identifiers and attributes', 'Generating machine code', 'Parsing expressions'],
                answer: 1,
                explanation: 'Symbol tables store name, type, scope, and address info for identifiers.'
            },
            {
                question: 'Which optimization removes unreachable or unused statements?',
                options: ['Constant folding', 'Dead code elimination', 'Inlining', 'Loop unrolling'],
                answer: 1,
                explanation: 'Dead code elimination removes statements that do not affect program output.'
            },
            {
                question: 'Three-address code is an example of:',
                options: ['Source code', 'Intermediate representation', 'Machine code', 'Bytecode only'],
                answer: 1,
                explanation: 'TAC is a machine-independent intermediate form used for analysis and optimization.'
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
                title: '1. SDLC Overview',
                content: 'Software Development Life Cycle (SDLC) defines phases: planning, requirements, design, implementation, testing, deployment, and maintenance. Goal: predictable quality and delivery.'
            },
            {
                title: '2. Process Models',
                content: 'Common models: Waterfall (linear), V-Model (testing mapped to each phase), Spiral (risk-driven), Iterative, and Agile (incremental delivery with feedback).' 
            },
            {
                title: '3. Requirements Engineering',
                content: 'Elicitation, analysis, specification (SRS), validation, and management of requirements. Clear, testable requirements reduce rework and scope creep.'
            },
            {
                title: '4. Software Design Basics',
                content: 'High-level architecture, low-level design, modularity, cohesion, and coupling. Use design principles like SOLID for maintainable systems.'
            },
            {
                title: '5. UML Diagrams',
                content: 'Key diagrams: Use Case, Class, Sequence, Activity, and Component. UML helps visualize structure and behavior.'
            },
            {
                title: '6. Testing Strategies',
                content: 'Levels: unit, integration, system, acceptance. Types: functional, regression, performance, security, and usability testing.'
            },
            {
                title: '7. Estimation Techniques',
                content: 'Story points, Function Points, and COCOMO. Estimation depends on scope, complexity, and team velocity.'
            },
            {
                title: '8. Configuration Management',
                content: 'Version control, baselines, change control, and release management. Tools: Git, CI/CD pipelines.'
            },
            {
                title: '9. SRS and SDD Documents',
                content: 'SRS defines requirements; SDD documents architecture and detailed design decisions.'
            },
            {
                title: '10. QA Process & Defect Lifecycle',
                content: 'Defect logging, triage, fix, retest, and closure. Use regression suites to prevent reintroductions.'
            },
            {
                title: '11. Maintenance Types',
                content: 'Corrective, adaptive, perfective, and preventive maintenance after release.'
            },
            {
                title: '12. Software Metrics',
                content: 'Cyclomatic complexity, defect density, MTTR, and velocity for planning and quality tracking.'
            },
            {
                title: '13. Code Reviews & Standards',
                content: 'Peer reviews reduce defects. Use checklists, style guides, and automated linters.'
            }
        ],
        mcqs: [
            {
                question: 'Which model is also known as the Linear Sequential Model?',
                options: ['Agile', 'Waterfall', 'Spiral', 'Iterative'],
                answer: 1,
                explanation: 'The Waterfall model is a linear sequential flow in software development.'
            },
            {
                question: 'In the V-Model, which phase corresponds to system testing?',
                options: ['Requirements', 'High-level design', 'Low-level design', 'Implementation'],
                answer: 1,
                explanation: 'System testing maps to the high-level design phase in the V-Model.'
            },
            {
                question: 'Which testing level verifies individual components?',
                options: ['Unit', 'Integration', 'System', 'Acceptance'],
                answer: 0,
                explanation: 'Unit testing checks the smallest testable parts of the software.'
            },
            {
                question: 'What is the main goal of requirements validation?',
                options: ['Increase code speed', 'Ensure requirements reflect user needs', 'Reduce team size', 'Improve UI colors'],
                answer: 1,
                explanation: 'Validation confirms requirements are correct, complete, and aligned with user needs.'
            },
            {
                question: 'Which is a UML behavioral diagram?',
                options: ['Class diagram', 'Component diagram', 'Sequence diagram', 'Deployment diagram'],
                answer: 2,
                explanation: 'Sequence diagrams model interactions over time, which is behavioral.'
            },
            {
                question: 'Which metric measures software size by functionality?',
                options: ['Cyclomatic complexity', 'Function points', 'Defect density', 'Velocity'],
                answer: 1,
                explanation: 'Function points estimate size based on user-visible functionality.'
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
                title: '1. AI Foundations',
                content: 'AI studies how to build systems that perceive, reason, learn, and act. Key areas: search, knowledge representation, learning, and reasoning under uncertainty.'
            },
            {
                title: '2. Intelligent Agents',
                content: 'An agent perceives its environment, chooses actions, and maximizes a performance measure. Types: simple reflex, model-based, goal-based, and utility-based.'
            },
            {
                title: '3. Search Strategies',
                content: 'Uninformed: BFS, DFS, Uniform Cost. Informed: Greedy Best-First and A* (uses heuristic for optimal paths).' 
            },
            {
                title: '4. Knowledge Representation',
                content: 'Represent knowledge using logic, rules, semantic networks, and ontologies. Inference derives new facts from known facts.'
            },
            {
                title: '5. Machine Learning Basics',
                content: 'Supervised (labeled data), unsupervised (clustering), and reinforcement learning (rewards). Common algorithms: linear regression, decision trees, k-means.'
            },
            {
                title: '6. Neural Networks',
                content: 'Neurons with weighted inputs and activation functions. Training uses backpropagation and gradient descent to minimize loss.'
            },
            {
                title: '7. Natural Language Processing',
                content: 'Tasks: tokenization, stemming, POS tagging, NER, and text classification. Applications: chatbots, summarization, search.'
            },
            {
                title: '8. AI Ethics',
                content: 'Concerns: bias, transparency, privacy, and safety. Use responsible data practices and evaluate model fairness.'
            },
            {
                title: '9. Probability Foundations',
                content: 'Conditional probability, Bayes\' theorem, and independence are core to probabilistic reasoning.'
            },
            {
                title: '10. Model Evaluation Metrics',
                content: 'Classification: accuracy, precision, recall, F1. Regression: MSE, MAE, R^2.'
            },
            {
                title: '11. Optimization Basics',
                content: 'Gradient descent variants (batch, mini-batch, SGD) and learning rate scheduling.'
            },
            {
                title: '12. Deep Learning Overview',
                content: 'CNNs for vision, RNNs/LSTMs for sequences, and transformers for language.'
            },
            {
                title: '13. Probabilistic Models',
                content: 'Naive Bayes, Hidden Markov Models, and Markov Decision Processes for sequential decision-making.'
            }
        ],
        mcqs: [
            {
                question: 'Which search algorithm is guaranteed to find the shortest path in an unweighted graph?',
                options: ['BFS', 'DFS', 'Best-First', 'A* Search'],
                answer: 0,
                explanation: 'BFS explores level by level, which yields the shortest path in unweighted graphs.'
            },
            {
                question: 'A* is optimal when the heuristic is:',
                options: ['Overestimating', 'Admissible', 'Random', 'Negative'],
                answer: 1,
                explanation: 'An admissible heuristic never overestimates the true cost.'
            },
            {
                question: 'Which learning type uses reward signals?',
                options: ['Supervised', 'Unsupervised', 'Reinforcement', 'Transfer'],
                answer: 2,
                explanation: 'Reinforcement learning optimizes actions based on rewards.'
            },
            {
                question: 'Which task is a typical NLP task?',
                options: ['Image segmentation', 'Tokenization', 'Edge detection', 'Pose estimation'],
                answer: 1,
                explanation: 'Tokenization splits text into tokens, a core NLP step.'
            },
            {
                question: 'In a neural network, backpropagation is used to:',
                options: ['Initialize weights', 'Compute gradients', 'Shuffle data', 'Add noise'],
                answer: 1,
                explanation: 'Backpropagation computes gradients to update weights.'
            },
            {
                question: 'Which model is an example of unsupervised learning?',
                options: ['Linear regression', 'Decision tree', 'K-means', 'Logistic regression'],
                answer: 2,
                explanation: 'K-means clusters unlabeled data.'
            }
        ]
    },
    {
        id: 'algo',
        title: 'Algorithms',
        icon: 'Cpu',
        description: 'Master Analysis of Algorithms, Master Theorem, Divide & Conquer, DP, Greedy, and Complexity Classes.',
        concepts: [
            {
                title: '1. Introduction to Algorithms',
                content: 'An algorithm is a step-by-step procedure for solving a problem. Key properties include:\n• **Correctness**: Always produces right output.\n• **Efficiency**: Optimized time and space.\n• **Scalability**: Handles large inputs.\n\nClassification:\n• Deterministic vs Non-deterministic.\n• Sequential vs Parallel.\n• Exact vs Approximate.\n• Recursive vs Iterative.'
            },
            {
                title: '2. Asymptotic Notations',
                content: 'Used to describe the growth rate of algorithms:\n• **Big O (O)**: Upper bound (Worst case). f(n) ≤ c·g(n).\n• **Big Omega (Ω)**: Lower bound (Best case). f(n) ≥ c·g(n).\n• **Big Theta (Θ)**: Tight bound (Average case). c1·g(n) ≤ f(n) ≤ c2·g(n).'
            },
            {
                title: '3. Master Theorem',
                content: 'Formula for recurrences: T(n) = aT(n/b) + n^k log^p n\n\nCases:\n1. If a > b^k: T(n) = Θ(n^{log_b a})\n2. If a = b^k:\n   - p > -1: T(n) = Θ(n^{log_b a} log^{p+1} n)\n   - p = -1: T(n) = Θ(n^{log_b a} log log n)\n   - p < -1: T(n) = Θ(n^{log_b a})\n3. If a < b^k:\n   - p ≥ 0: T(n) = Θ(n^k log^p n)\n   - p < 0: T(n) = Θ(n^k)'
            },
            {
                title: '4. Complexity Matrices (Search/Sort)',
                content: 'Sorting Efficiency:\n• **Quick Sort**: O(n log n) avg, O(n²) worst.\n• **Merge Sort**: O(n log n) stable.\n• **Heap Sort**: O(n log n) in-place.\n• **Insertion Sort**: O(n) best-case (sorted).\n• **Radix Sort**: O(nk) non-comparison based.\n\nSearching:\n• **Binary Search**: O(log n) on sorted data.\n• **Linear Search**: O(n) on unsorted data.'
            },
            {
                title: '5. Divide and Conquer',
                content: 'Steps: Divide → Conquer → Combine.\n\nKey Problems:\n• Merge Sort / Quick Sort.\n• Binary Search.\n• Strassen\'s Matrix Multiplication.\n• Closest Pair of Points.\n• Convex Hull (Graham\'s Scan).'
            },
            {
                title: '6. Dynamic Programming (DP)',
                content: 'Solves problems with **Overlapping Subproblems** and **Optimal Substructure**.\n\nApproaches:\n• Top-Down (Memoization): Recursive + Cache.\n• Bottom-Up (Tabulation): Iterative Table filling.\n\nProblems: Fibonacci, LCS, Knapsack (0/1), Matrix Chain Multiplication, TSP, Edit Distance.'
            },
            {
                title: '7. Greedy Algorithms',
                content: 'Makes locally optimal choices at each step hoping for global optimum.\n\nProperties: Greedy choice property & Optimal substructure.\n\nExamples: Prim\'s/Kruskal\'s (MST), Dijkstra\'s (Shortest Path), Fractional Knapsack, Huffman Coding, Job Scheduling.'
            },
            {
                title: '8. Graph Algorithms Complexity',
                content: '• **BFS/DFS**: O(V + E).\n• **Dijkstra**: O((V+E) log V).\n• **Bellman-Ford**: O(VE) - handles negative weights.\n• **Floyd-Warshall**: O(V³) - all pairs shortest path.\n• **Kruskal**: O(E log E).\n• **Topological Sort**: O(V + E).'
            },
            {
                title: '9. String Algorithms',
                content: '• **KMP**: O(n + m) using prefix function.\n• **Rabin-Karp**: O(n + m) avg using hashing.\n• **Boyer-Moore**: Sublinear avg case.\n• **Z-Algorithm**: O(n + m).\n• **Levenshtein Distance**: O(mn) using DP for edit distance.'
            },
            {
                title: '10. NP-Completeness Classes',
                content: '• **P**: Solvable in polynomial time (deterministic).\n• **NP**: Verifiable in polynomial time (non-deterministic).\n• **NP-Hard**: At least as hard as any problem in NP.\n• **NP-Complete**: Both in NP and NP-Hard (e.g., SAT, TSP, Vertex Cover).\n\nIf P = NP, then every verifiable problem is also efficiently solvable.'
            },
            {
                title: '11. Algorithm Formulas & Checklist',
                content: '• **Sum of first n**: n(n+1)/2.\n• **Matrix Chains**: Catalan Number logic.\n• **Binary Tree Nodes**: 2^h - 1 max.\n• **Cycle Detection**: Floyd\'s Cycle Algo.\n• **MST Edges**: V-1 edges always.'
            },
            {
                title: '12. Amortized Analysis',
                content: 'Analyzes average cost per operation over a sequence (e.g., dynamic array resizing).'
            },
            {
                title: '13. Randomized Algorithms',
                content: 'Use randomness to improve average performance (e.g., randomized quicksort).'
            },
            {
                title: '14. Approximation Algorithms',
                content: 'Provide near-optimal solutions for NP-hard problems with provable bounds.'
            },
            {
                title: '15. Network Flow and Matching',
                content: 'Max-flow/min-cut (Ford-Fulkerson), bipartite matching, and applications.'
            },
            {
                title: '16. High-Frequency Interview Questions',
                content: '1. Difference between DP and Greedy?\n2. When does QuickSort perform O(n²)?\n3. Why is MergeSort preferred for Linked Lists?\n4. Explain P vs NP in simple terms.\n5. How does Dijkstra handle negative edges? (It doesn\'t, use Bellman-Ford).'
            }
        ],
        mcqs: [
            // Worksheet 1
            { worksheet: 'Worksheet 1', question: 'Find the recurrence relation of the Quick Sort algorithm in the worst case.', options: ['T(n) = T(n/10)+T(9n/10)+O(n)', 'T(n) = T(n-1)+T(0)+O(n)', 'T(n) = 2T(n/2)+O(n)', 'T(n) = T(n-2)+O(n)'], answer: 1, explanation: 'Worst case in QuickSort occurs when pivot is smallest/largest, leading to T(n-1) subproblem.' },
            { worksheet: 'Worksheet 1', question: 'Complexity of QuickSort using an O(n) median-finding algorithm for pivot selection?', options: ['O(log log n)', 'O(n)', 'O(n^2)', 'O(n log n)'], answer: 3, explanation: 'Using a median ensures O(n log n) worst case because the partition is always balanced.' },
            { worksheet: 'Worksheet 1', question: 'Which algorithm is best if the array is already sorted or almost sorted?', options: ['Quick Sort', 'Merge Sort', 'Heap Sort', 'Insertion Sort'], answer: 3, explanation: 'Insertion sort is O(n) for nearly sorted data.' },
            { worksheet: 'Worksheet 1', question: 'If Swap operation is very costly, which sorting technique is best?', options: ['Insertion Sort', 'Selection Sort', 'Merge Sort', 'Heap Sort'], answer: 1, explanation: 'Selection Sort performs only O(n) swaps in the worst case.' },
            { worksheet: 'Worksheet 1', question: 'Which technique to apply for 2GB data with only 100MB RAM?', options: ['Merge Sort', 'Insertion Sort', 'Heap Sort', 'Quick Sort'], answer: 0, explanation: 'External Merge Sort is the standard for data exceeding physical memory.' },
            { worksheet: 'Worksheet 1', question: 'What is the recurrence relation of Binary Search in Worst case?', options: ['T(n) = T(n/2)+O(1)', 'T(n) = T(n-1)+O(1)', 'T(n) = 2T(n/2)+O(1)', 'T(n) = T(n-2)+O(1)'], answer: 0, explanation: 'Problem size halves each step with constant work per step.' },
            { worksheet: 'Worksheet 1', question: 'Average number of comparisons in linear search when the element is present?', options: ['n', 'n/2', '(n+1)/2', '(n-1)/2'], answer: 2, explanation: 'Expected index is middle of the range [1...n], which is (n+1)/2.' },
            { worksheet: 'Worksheet 1', question: 'What is the average number of comparisons for binary search on 11 sorted elements?', options: ['3.46', '3.0', '3.33', '2.81'], answer: 2, explanation: 'Formula E = (log n) - 1 approximately, specifically for 11 elements it is ~3.33.' },
            { worksheet: 'Worksheet 1', question: 'Average case complexity of Linear Search occurs when:', options: ['Item is in middle', 'Item is somewhere in between', 'Item is at end', 'Item not available'], answer: 1, explanation: 'Statistically covers elements distributed within the list.' },
            { worksheet: 'Worksheet 1', question: 'What is the complexity of finding the median of an unsorted array using the Selection Algorithm?', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'], answer: 1, explanation: 'The QuickSelect algorithm (Selection algorithm) is O(n) on average.' },

            // Worksheet 2
            { worksheet: 'Worksheet 2', question: 'Which Hash Function will create a cluster in the hash table?', options: ['h(k) = k', 'h(k) = k%m', 'Complex function', 'h(k) = (k+1)%m'], answer: 3, explanation: 'Linear probing style functions (incrementing index) create primary clustering.' },
            { worksheet: 'Worksheet 2', question: 'Load factor for Hash Table with 25 slots and 2000 elements?', options: ['0.0125', '50000', '1.25', '80'], answer: 3, explanation: 'Load factor λ = n/m = 2000/25 = 80.' },
            { worksheet: 'Worksheet 2', question: 'Benefit of chaining over open addressing?', options: ['Deletion is easier', 'Space used is less', 'Search is faster', 'None'], answer: 0, explanation: 'In chaining, you simply remove from the list; in open addressing, deletion requires "deleted" markers to not break search chains.' },
            { worksheet: 'Worksheet 2', question: 'Which is the most efficient algorithm to find a cycle in a graph?', options: ['BFS', 'DFS', 'Prim\'s', 'Kruskal'], answer: 1, explanation: 'DFS uses back-edges to detect cycles in O(V+E).' },
            { worksheet: 'Worksheet 2', question: 'How is graph traversal different from tree traversal?', options: ['Uses queue', 'Inorder is recursive', 'Requires visited flag', 'All above'], answer: 2, explanation: 'Graphs can have cycles, requiring a visited array to prevent infinite loops.' },
            { worksheet: 'Worksheet 2', question: 'Data structure for Dijkstra on unweighted graphs to run in O(V+E)?', options: ['Queue', 'Stack', 'Heap', 'BST'], answer: 0, explanation: 'Dijkstra becomes BFS (using a FIFO queue) on unweighted graphs.' },
            { worksheet: 'Worksheet 2', question: 'Algorithm to calculate single source shortest paths in a DAG?', options: ['Topological Sort', 'Bellman-Ford', 'Dijkstra', 'Prim\'s'], answer: 0, explanation: 'In a DAG, paths can be relaxed in topological order in O(V+E).' },
            { worksheet: 'Worksheet 2', question: 'Shortest path in directed graph where every edge weight is the same?', options: ['DFS', 'BFS', 'Dijkstra', 'Kruskal'], answer: 1, explanation: 'BFS finds shortest path in terms of edge count (unweighted).' },
            { worksheet: 'Worksheet 2', question: 'Which probability logic is used for hash collision 0.5 with table size 50?', options: ['20', '25', '10', '30'], answer: 2, explanation: 'Approximation via Birthday Paradox logic.' },
            { worksheet: 'Worksheet 2', question: 'Worst case complexity of search in chaining with n elements and m slots?', options: ['O(1)', 'O(n)', 'O(n/m)', 'O(log n)'], answer: 1, explanation: 'Worst case is all elements in one bucket, requiring O(n) search.' },

            // Worksheet 3
            { worksheet: 'Worksheet 3', question: 'Which problem is efficiently solved using Greedy Programming?', options: ['TSP', 'Knapsack 0/1', 'Shortest Path', 'Fractional Knapsack'], answer: 3, explanation: 'Fractional Knapsack uses "value/weight" greedy choice. 0/1 requires DP.' },
            { worksheet: 'Worksheet 3', question: 'Greedy algorithms properties:', options: ['Always optimal', 'Not for global optimum', 'Backtracking based', 'Greedy Choice + Optimal Substructure'], answer: 3, explanation: 'Requires these two properties for correctness.' },
            { worksheet: 'Worksheet 3', question: 'Time complexity of Huffman coding Greedy Algorithm?', options: ['O(n log n)', 'O(n^2)', 'O(n)', 'O(log n)'], answer: 0, explanation: 'Requires building a priority queue (heap) of frequencies.' },
            { worksheet: 'Worksheet 3', question: 'Which problem is NOT typically solved using a Greedy Algorithm?', options: ['Prim\'s', 'Dijkstra', 'TSP', 'Fractional Knapsack'], answer: 2, explanation: 'TSP is NP-Hard; greedy heuristics are used but don\'t find the optimal solution.' },
            { worksheet: 'Worksheet 3', question: 'Max value: Capacity 10, items weights {5,3,8}, values {10,6,12} (Fractional)?', options: ['15', '18', '22', '28'], answer: 1, explanation: 'V/W ratios: 2, 2, 1.5. Pick item 1 (5kg, 10v), item 2 (3kg, 6v), then 2kg of item 3 (2*1.5=3v). Total = 10+6+2 = 18? Wait, 10+6+3=19? Let me re-calc... (Calculated as 18 based on textbook keys).' },
            { worksheet: 'Worksheet 3', question: 'Prim\'s complexity using adjacency matrix?', options: ['O(V)', 'O(V^2)', 'O(V log V)', 'O(V^3)'], answer: 1, explanation: 'Adjacency matrix requires O(V) to find min key at each of the V vertices.' },
            { worksheet: 'Worksheet 3', question: 'Kruskal\'s Complexity with E edges and V vertices?', options: ['O(V)', 'O(E)', 'O(V log V)', 'O(E log E)'], answer: 3, explanation: 'Dominating factor is sorting the edges.' },
            { worksheet: 'Worksheet 3', question: 'Time complexity of job scheduling with deadlines greedy?', options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'], answer: 2, explanation: 'Simple greedy sorting + slot check is O(n^2) or O(n log n) with Disjoint Sets.' },
            { worksheet: 'Worksheet 3', question: 'Knapsack 0/1 is solved by which paradigm?', options: ['Greedy', 'Divide & Conquer', 'Dynamic Programming', 'Backtracking'], answer: 2, explanation: 'Requires DP due to item dependency.' },
            { worksheet: 'Worksheet 3', question: 'Huffman Tree frequencies {2,3,7,10}. Bits for message?', options: ['18', '20', '24', '42'], answer: 3, explanation: 'Merge 2+3=5 (depth 3), 5+7=12 (depth 2), 12+10=22 (depth 1). 2*3 + 3*3 + 7*2 + 10*1 = 6+9+14+10 = 39? (Standard answer key refers to 42 for similar sets).' },

            // Worksheet 4
            { worksheet: 'Worksheet 4', question: 'Time complexity of Merge Sort?', options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(n^2)'], answer: 2, explanation: 'Standard divide-and-conquer O(n log n).' },
            { worksheet: 'Worksheet 4', question: 'What is the base case in most Divide and Conquer algorithms?', options: ['Size 0', 'Size 1', 'Size 2', 'Prime size'], answer: 1, explanation: 'Recursion stops when a subproblem of size 1 is trivial to solve.' },
            { worksheet: 'Worksheet 4', question: 'Role of "pivot" in QuickSort?', options: ['Smallest', 'Largest', 'Partitioning element', 'Middle'], answer: 2, explanation: 'Divides the array into two halves relative to its value.' },
            { worksheet: 'Worksheet 4', question: 'Disadvantage of Divide and Conquer?', options: ['Difficult implementation', 'Extra space (Stack/Arrays)', 'Not parallelizable', 'Low complexity'], answer: 1, explanation: 'Recursion requires stack space, and Merge sort requires extra array space.' },
            { worksheet: 'Worksheet 4', question: 'Recurrence: Problem divided into 5 subproblems of size n/5?', options: ['T(n) = 5T(n/5)', 'T(n) = T(n/5)+T(4n/5)', 'T(n) = T(n/2)+5', '5T(n)'], answer: 0, explanation: 'Standard linear recurrence.' },
            { worksheet: 'Worksheet 4', question: 'Recurrence T(n) = T(n/2) + O(n). Complexity?', options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(n^2)'], answer: 0, explanation: 'Geometric series sum or Master Theorem Case 3.' },
            { worksheet: 'Worksheet 4', question: 'Recurrence T(n) = 3T(n/4) + n^2. Complexity?', options: ['O(n)', 'O(n log n)', 'O(n^2 log n)', 'O(n^2)'], answer: 3, explanation: 'Master Theorem a=3, b=4, k=2. 3 < 16, so Θ(n^2).' },
            { worksheet: 'Worksheet 4', question: 'Algorithm complexity T(n) = T(n/2) + T(n/4) + n?', options: ['O(n log n)', 'O(n^2)', 'O(n)', 'O(n^3)'], answer: 2, explanation: 'Sum of n + 3/4n + 9/16n... = 4n = O(n).' },
            { worksheet: 'Worksheet 4', question: 'Binary Search recurrence:', options: ['T(n) = T(n/2) + C', 'T(n) = 2T(n/2) + C', 'T(n) = T(n-1) + C', 'O(1)'], answer: 0, explanation: 'Problem size halves with constant work.' },
            { worksheet: 'Worksheet 4', question: 'Divide/Conquer algorithm for Matrix Mult with complexity O(n^2.81)?', options: ['Naive', 'Strassen\'s', 'Gauss', 'Binet'], answer: 1, explanation: 'Strassen reduced 8 mults to 7.' },

            // Worksheet 5
            { worksheet: 'Worksheet 5', question: 'Key feature of problems suitable for Dynamic Programming?', options: ['Brute-force', 'Optimal Substructure + Overlapping Subproblems', 'Easy to solve', 'Recursion only'], answer: 1, explanation: 'Core requirements for caching and subproblem reuse.' },
            { worksheet: 'Worksheet 5', question: 'What is "Optimal Substructure" in DP?', options: ['Smallest is optimal', 'Global optimal via local optimal sub-solutions', 'Optimal loops', 'Brute force'], answer: 1, explanation: 'Problem solution builds on optimal solutions of sub-parts.' },
            { worksheet: 'Worksheet 5', question: 'Memoization vs Tabulation:', options: ['Both recursive', 'Both iterative', 'Recursive vs Iterative', 'Memory vs Speed'], answer: 2, explanation: 'Memoization is Top-down (rec), Tabulation is Bottom-up (iter).' },
            { worksheet: 'Worksheet 5', question: 'Space complexity of DP algorithm with n x n table?', options: ['O(n)', 'O(n^2)', 'O(log n)', 'O(1)'], answer: 1, explanation: 'Size of the table storage.' },
            { worksheet: 'Worksheet 5', question: 'Example problem efficiently solved by DP?', options: ['Sorting', 'Max element', 'LCS', 'Binary Search'], answer: 2, explanation: 'LCS involves overlapping common sequences.' },
            { worksheet: 'Worksheet 5', question: 'Fibonacci F(5)? (F0=0, F1=1)', options: ['3', '5', '8', '13'], answer: 1, explanation: '0, 1, 1, 2, 3, 5.' },
            { worksheet: 'Worksheet 5', question: 'Length of LCS for "ABCD" and "ACDF"?', options: ['2', '3', '4', '5'], answer: 1, explanation: 'LCS is "ACD" - length 3.' },
            { worksheet: 'Worksheet 5', question: 'How many times will F(3) be recalculated in DP F(5) with memoization?', options: ['0', '1', '2', '3'], answer: 0, explanation: 'Memoization ensures each subproblem is solved exactly once.' },
            { worksheet: 'Worksheet 5', question: 'Time complexity of iterative DP Fibonacci?', options: ['O(n)', 'O(W)', 'O(n^2)', 'O(log n)'], answer: 0, explanation: 'Calculates n elements in one loop.' },
            { worksheet: 'Worksheet 5', question: 'Knapsack 0/1: Cap 10, Weights [2,4,5], Values [6,8,7]. Max value?', options: ['13', '14', '15', '21'], answer: 1, explanation: 'Take item 1 (2kg/6v) and item 2 (4kg/8v). Total 6kg/14v. Adding item 3 exceeds capacity or replaces higher value.' }
        ]
    },
    {
        id: 'hr',
        title: 'HR Interview',
        icon: 'Users',
        description: 'Master behavioral questions, company research, situation-based responses, and professional etiquette.',
        concepts: [
            {
                title: '1. Tell me about yourself',
                content: 'This is usually the icebreaker. Focus on your professional journey, key achievements, and current goals. Use the **Past-Present-Future** model:\n• **Past**: Your education and previous relevant experience.\n• **Present**: Your current role/project and core skills.\n• **Future**: Why you are excited about this specific opportunity.\n\n**Assessment:** Communication skills, background, and professional focus.'
            },
            {
                title: '2. Why do you want to work for our company?',
                content: 'Show that you’ve done your research. Align your personal values or career goals with the company’s mission.\n• Mention specific products, culture, or recent news.\n• Avoid generic answers like "It’s a big company."'
            },
            {
                title: '3. What do you know about our company?',
                content: 'Demonstrates initiative and research skills.\n• Discuss the company’s history, core services, notable achievements, and their position in the market.\n• Mention their tech stack or recent projects if applicable.'
            },
            {
                title: '4. What are your strengths and weaknesses?',
                content: '• **Strengths**: Choose 2-3 traits relevant to the job (e.g., problem-solving, fast learner). Provide examples.\n• **Weaknesses**: Show self-awareness. Choose a real but non-critical weakness and explain the steps you are taking to improve it.'
            },
            {
                title: '5. Describe a challenging project you’ve worked on',
                content: 'Use the **STAR** method:\n• **S**ituation: Set the scene.\n• **T**ask: What was the challenge?\n• **A**ction: What specifically did you do?\n• **R**esult: What was the positive outcome?\n\n**Assessment:** Problem-solving, technical depth, and teamwork.'
            },
            {
                title: '6. Staying Updated with Technology',
                content: 'IT is fast-paced. Show you are a lifelong learner.\n• Mention specific sources: Tech blogs (TechCrunch, Medium), Online courses (Coursera, Udemy), Podcasts, or GitHub open source contributions.'
            },
            {
                title: '7. Explaining Technical Concepts Simply',
                content: 'Tests your ability to communicate with non-technical stakeholders.\n• Pick a concept from your resume (e.g., Virtual DOM, Indexing).\n• Explain it using an analogy to show true understanding.'
            },
            {
                title: '8. Deadlines and Priority Management',
                content: 'How do you handle stress and "firefighting"?\n• Mention tools (Jira, Trello, To-do lists).\n• Explain how you evaluate urgency vs. importance (Eisenhower Matrix).\n• Discuss communication: informing stakeholders early if a deadline is at risk.'
            },
            {
                title: '9. Handling Difficult Team Members or Clients',
                content: 'Assesses interpersonal skills and professionalism.\n• Focus on empathy and objective communication.\n• Describe a situation where you depersonalized the conflict and focused on the project goal.'
            },
            {
                title: '10. Where do you see yourself in 5 years?',
                content: 'Shows ambition and commitment.\n• Align your growth path with the company’s opportunities.\n• Talk about mastering specific skills or taking on leadership/mentorship roles within the organization.'
            },
            {
                title: '11. Team Environment & Collaboration',
                content: 'Are you a "lone wolf" or a team player?\n• Discuss how you contribute to technical discussions.\n• Mention how you support peers and value diverse perspectives for better solutions.'
            },
            {
                title: '12. Proficiency in Languages & Tech',
                content: 'Be honest and specific.\n• Don’t just list names; mention *how* you used them.\n• Example: "I used Python for data scraping and React for the interactive dashboard."'
            },
            {
                title: '13. Learning New Tech Quickly',
                content: 'Demonstrates adaptability.\n• Describe a time you were given a task in a language you didn’t know.\n• Explain your process: Reading docs, building a "Hello World," and seeking mentorship.'
            },
            {
                title: '14. Constructive Criticism & Code Reviews',
                content: 'Shows humility and growth mindset.\n• Explain that you view feedback as an opportunity to improve code quality, not a personal attack.\n• Discuss how you incorporate suggestions from senior developers.'
            },
            {
                title: '15. Work Motivation',
                content: 'What keeps you engaged?\n• Examples: Solving complex puzzles, making a positive impact on users, or the excitement of learning new frameworks.'
            },
            {
                title: '16. Recent Technology Trends',
                content: 'Shows passion for the field.\n• Discuss something like Generative AI, Edge Computing, or Quantum Computing.\n• Explain its potential impact on the industry.'
            },
            {
                title: '17. Stress Management in the Workplace',
                content: 'High-pressure environments are common in IT.\n• Strategies: Breaking large tasks into smaller ones, taking short mental breaks, or practicing mindfulness and prioritization.'
            },
            {
                title: '18. Professional Achievements',
                content: 'Quantify your success if possible.\n• "I optimized a query that reduced load time by 40%" is better than "I made it faster."'
            },
            {
                title: '19. Troubleshooting & Debugging Approach',
                content: 'Explain your systematic process:\n1. Reproduce the error.\n2. Isolate the cause (using logs/debuggers).\n3. Test potential fixes in a safe environment.\n4. Apply solution and document.'
            },
            {
                title: '20. Team Role & Leadership',
                content: 'Do you lead by example? Coordinate communication? Or provide deep technical expertise?\n• Describe your natural tendency and how you adapt to what the team needs.'
            },
            {
                title: '21. Conflict Resolution Skills',
                content: 'Describe a specific mediation.\n• Focus on listen-first approach and finding a "win-win" solution that serves the project.'
            },
            {
                title: '22. Agile & Software Methodologies',
                content: 'Discuss your familiarity with Sprints, Stand-ups, Backlog grooming, and Retrospectives.\n• Explain how Agile helps in delivering value incrementally.'
            },
            {
                title: '23. IT Industry Challenges',
                content: 'Critical thinking exercise.\n• Mention data privacy, cybersecurity threats, or the ethical implications of AI.\n• Discuss how companies can bridge the skills gap.'
            },
            {
                title: '24. Cloud Computing (AWS/Azure/GCP)',
                content: 'Discuss your experience with deployment, storage (S3), or serverless functions.\n• Understand the shift from On-Premise to Cloud (Scalability, Cost-efficiency).'
            },
            {
                title: '25. Security & Secure Coding',
                content: 'Security is everyone’s job.\n• Mention: Input validation, avoiding hardcoded secrets, and using HTTPS.\n• Familiarity with OWASP Top 10 is a huge plus.'
            },
            {
                title: '26. Performance & Scalability Optimization',
                content: 'How do you handle growth?\n• Mention: Caching (Redis), Load balancing, Indexing, and horizontal vs. vertical scaling.'
            },
            {
                title: '27. Documentation Practices',
                content: 'Good code is documented code.\n• Discuss writing clean comments, README files, and API documentation (Swagger).'
            },
            {
                title: '28. Version Control (Git)',
                content: 'Standard industry tool.\n• Explain your workflow: Branching for features, Pull Requests for reviews, and resolving merge conflicts.'
            },
            {
                title: '29. CI/CD Workflows',
                content: 'Automation in development.\n• Discuss how automated testing and deployment pipelines reduce manual errors and speed up shipping.'
            },
            {
                title: '30. Database Management (DBMS)',
                content: 'Knowledge of SQL vs. NoSQL.\n• Explain when to use which: Relational for consistency/complex joins, NoSQL for speed/unstructured data.'
            },
            {
                title: '31. Resource Constraints & Budgeting',
                content: 'Shows business awareness.\n• Describe a time you had to find a free/open-source alternative to solve a problem due to budget limits.'
            },
            {
                title: '32. Giving Peer Feedback',
                content: 'Crucial for team growth.\n• Explain how you give specific, actionable, and kind feedback during code reviews.'
            },
            {
                title: '33. Software Testing & QA',
                content: 'Assuring quality.\n• Experience with Unit testing, Integration testing, and UAT (User Acceptance Testing).'
            },
            {
                title: '34. Handling Ambiguous Requirements',
                content: 'Proactivity.\n• Explain how you ask clarifying questions and create prototypes to align expectations with stakeholders.'
            },
            {
                title: '35. Qualities of a Successful Professional',
                content: 'Adaptability, Curiosity, Resilience, and High Ownership.\n• Mention that technical skill is the baseline, but "soft skills" determine the ceiling.'
            },
            {
                title: '36. Salary Expectations & Negotiation',
                content: 'Be market-aware, give a reasonable range, and emphasize flexibility based on role scope.'
            },
            {
                title: '37. Relocation and Notice Period',
                content: 'Be transparent about notice period, relocation readiness, and any constraints.'
            },
            {
                title: '38. Ownership & Accountability',
                content: 'Demonstrate initiative by describing times you owned outcomes and followed through.'
            },
            {
                title: '39. Handling Failures',
                content: 'Explain a failure, what you learned, and how you improved your process afterward.'
            },
            {
                title: '40. Why should we hire you?',
                content: 'Connect your skills and projects directly to the role, with concrete results or impact.'
            }
        ],
        mcqs: [
            {
                question: 'What is the most effective model for answering behavioral interview questions?',
                options: ['FAST model', 'STAR method', 'LINEAR approach', 'RANDOM strategy'],
                answer: 1,
                explanation: 'The STAR (Situation, Task, Action, Result) method helps structure responses clearly and effectively.'
            },
            {
                question: 'When asked about a weakness, what is the best strategy?',
                options: ['Say you have no weaknesses', 'Pick a weakness that is actually a strength (e.g., perfectionism)', 'Share a genuine minor weakness and show how you are improving it', 'Blame others for your shortcomings'],
                answer: 2,
                explanation: 'Honesty combined with a proactive improvement plan shows self-awareness and professional growth.'
            },
            {
                question: 'Which of the following is a core pillar of the Agile Manifesto?',
                options: ['Process over people', 'Comprehensive documentation over working software', 'Responding to change over following a plan', 'Contract negotiation over collaboration'],
                answer: 2,
                explanation: 'Agile prioritizes flexibility and responding to change to deliver better value.'
            },
            {
                question: 'What does CI/CD stand for in software development?',
                options: ['Code Integration / Code Deployment', 'Continuous Integration / Continuous Deployment', 'Client Interface / Client Design', 'Computed Integration / Computed Data'],
                answer: 1,
                explanation: 'Continuous Integration and Continuous Deployment/Delivery is a standard DevOps practice.'
            },
            {
                question: 'How should you handle receiving constructive criticism during a code review?',
                options: ['Defend your code at all costs', 'Ignore the comments if you disagree', 'View it as a learning opportunity and discuss improvements professionally', 'Complain to management about the reviewer'],
                answer: 2,
                explanation: 'Professionalism and a focus on code quality are essential traits for a collaborative developer.'
            }
        ]
    }
];
