export interface ChapterInfo {
  chapterNumber: number;
  title: string;
  weight: string;
  description: string;
  subtopics: string[];
}

export interface ModelQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FacultyDetail {
  title: string;
  subtitle: string;
  syllabus: string[];
  pdfPath: string;
  hasMockTest: boolean;
  examOverview: string;
  chapters: ChapterInfo[];
  modelQuestions: ModelQuestion[];
  faqs: FaqItem[];
}

export type FacultyDetailsMap = Record<string, FacultyDetail>;

export const facultyDetails: FacultyDetailsMap = {
  "computer-engineering": {
    title: "Computer Engineering",
    subtitle:
      "Comprehensive chapter breakdown, official curriculum topics, and high-yield practice questions for the Nepal Engineering Council (NEC) Computer Engineering license exam.",
    syllabus: [
      "Concept of Basic Electrical and Electronics Engineering",
      "Digital Logic and Microprocessor",
      "Programming Language and Its Applications",
      "Computer Organization and Embedded System",
      "Concept of Computer Network and Network Security System",
      "Theory of Computation and Computer Graphics",
      "Data Structures and Algorithm, Database System and Operating System",
      "Software Engineering and Object-Oriented Analysis & Design",
      "Artificial Intelligence and Neural Networks",
      "Project Planning, Design and Implementation",
    ],
    pdfPath: "/syllabus/NEC_Computer_Engineering_Syllabus.pdf",
    hasMockTest: true,
    examOverview:
      "The NEC Computer Engineering licensure examination evaluates candidates on foundational computing sciences, hardware architecture, software lifecycle development, networks, systems, and professional ethics under the Nepal Engineering Council Act 2055. The test contains 80 objective multiple-choice questions totaling 100 marks.",
    chapters: [
      {
        chapterNumber: 1,
        title: "Basic Electrical and Electronics Engineering",
        weight: "10 Marks",
        description:
          "Fundamental DC and AC circuit laws, semiconductor physics, diodes, bipolar junction transistors, and operational amplifiers.",
        subtopics: [
          "Ohm's Law, Kirchhoff's Laws (KCL & KVL), Thevenin's and Norton's Theorems",
          "AC Fundamentals: Peak, RMS, Average values, and Three-Phase systems",
          "Semiconductor diodes, Zener diodes, Rectifiers and Voltage regulators",
          "Bipolar Junction Transistors (BJT) biasing and Amplifiers",
          "Operational Amplifiers (Op-Amps) and basic signal conditioning circuits",
        ],
      },
      {
        chapterNumber: 2,
        title: "Digital Logic and Microprocessor",
        weight: "10 Marks",
        description:
          "Boolean algebra, combinational and sequential circuit design, 8085/8086 microprocessor architectures, and instruction sets.",
        subtopics: [
          "Number systems, Boolean algebra, Karnaugh Maps (K-maps)",
          "Combinational circuits: Multiplexers, Decoders, Adders, Subtractors",
          "Sequential circuits: Flip-Flops (SR, JK, D, T), Counters, and Shift Registers",
          "8085 Microprocessor architecture, bus organization, and pin configuration",
          "Instruction sets, addressing modes, interrupts, and timing diagrams",
        ],
      },
      {
        chapterNumber: 3,
        title: "Programming Language and Applications",
        weight: "10 Marks",
        description:
          "Structured programming principles in C, Object-Oriented paradigms in C++, memory management, pointers, and file operations.",
        subtopics: [
          "Data types, control structures, loops, and conditional branching",
          "Functions, recursion, parameter passing (by value vs by reference)",
          "Pointers, dynamic memory allocation (malloc, calloc, free)",
          "OOP principles: Classes, Objects, Inheritance, Polymorphism, and Encapsulation",
          "Templates, exception handling, and file stream input/output",
        ],
      },
      {
        chapterNumber: 4,
        title: "Computer Organization and Embedded Systems",
        weight: "10 Marks",
        description:
          "CPU architecture, pipelining, memory hierarchy, cache mapping, embedded microcontrollers, and interface protocols.",
        subtopics: [
          "Von Neumann vs Harvard architectures, register transfer logic",
          "Instruction pipeline hazards (data, structural, control hazards)",
          "Memory hierarchy: Cache memory, direct vs associative mapping, virtual memory",
          "Microcontrollers (8051, AVR, ARM), GPIO, timers, and interrupts",
          "Serial communication protocols: UART, SPI, and I2C",
        ],
      },
      {
        chapterNumber: 5,
        title: "Computer Networks and Network Security",
        weight: "10 Marks",
        description:
          "OSI and TCP/IP protocol stacks, subnetting, routing algorithms, transport layer protocols, and cryptography principles.",
        subtopics: [
          "OSI 7-layer reference model and TCP/IP protocol suite comparison",
          "IPv4 and IPv6 addressing, CIDR, VLSM subnetting calculations",
          "Routing algorithms: Distance Vector (RIP), Link State (OSPF), BGP",
          "TCP three-way handshake, flow control, congestion control vs UDP",
          "Symmetric vs Asymmetric cryptography (AES, RSA), Firewalls, and SSL/TLS",
        ],
      },
      {
        chapterNumber: 6,
        title: "Theory of Computation and Computer Graphics",
        weight: "10 Marks",
        description:
          "Automata theory, regular expressions, context-free grammars, Turing machines, 2D/3D transformations, and rendering algorithms.",
        subtopics: [
          "DFA, NFA, Regular expressions, and Pumping Lemma",
          "Context-Free Grammars (CFG) and Pushdown Automata (PDA)",
          "Turing Machines and decidability",
          "Line drawing algorithms: DDA and Bresenham's algorithm",
          "2D/3D geometric transformations: Translation, Rotation, Scaling, and Shearing",
        ],
      },
      {
        chapterNumber: 7,
        title: "Data Structures, Database, and Operating Systems",
        weight: "10 Marks",
        description:
          "Linear and non-linear data structures, relational database normalization, indexing, CPU scheduling, and process synchronization.",
        subtopics: [
          "Arrays, Linked Lists, Stacks, Queues, Binary Trees, and Graphs",
          "Searching and sorting algorithms (QuickSort, MergeSort, Binary Search)",
          "Relational Algebra, SQL queries, and Normalization (1NF, 2NF, 3NF, BCNF)",
          "Process scheduling algorithms: FCFS, SJF, Round Robin, Priority Scheduling",
          "Deadlock conditions, prevention, avoidance (Banker's Algorithm), and detection",
        ],
      },
      {
        chapterNumber: 8,
        title: "Software Engineering and OOAD",
        weight: "10 Marks",
        description:
          "Software development life cycle models, Agile methodologies, UML diagramming, design patterns, and software testing.",
        subtopics: [
          "SDLC Models: Waterfall, Spiral, V-Model, and Agile Scrum framework",
          "Requirement engineering: Functional vs Non-functional requirements",
          "Unified Modeling Language (UML): Class diagrams, Use Case diagrams, Sequence diagrams",
          "Design Patterns: Creational, Structural, and Behavioral patterns",
          "Software testing methodologies: White-box, Black-box, Unit, and Integration testing",
        ],
      },
      {
        chapterNumber: 9,
        title: "Artificial Intelligence and Neural Networks",
        weight: "10 Marks",
        description:
          "Heuristic search strategies, knowledge representation, propositional logic, supervised machine learning, and artificial neural networks.",
        subtopics: [
          "Search algorithms: BFS, DFS, A* search, and Heuristic functions",
          "Adversarial search: Minimax algorithm and Alpha-Beta pruning",
          "Propositional logic, First-Order Predicate Logic (FOPL), and resolution",
          "Supervised vs Unsupervised learning, linear regression, classification",
          "Perceptron model, Multi-Layer Perceptron (MLP), Backpropagation algorithm",
        ],
      },
      {
        chapterNumber: 10,
        title: "Project Planning, Design, and Ethics",
        weight: "10 Marks",
        description:
          "Project management techniques (CPM/PERT), procurement bylaws, engineering liability, and the Nepal Engineering Council Act 2055.",
        subtopics: [
          "Project lifecycle, feasibility analysis, and cost-benefit analysis",
          "Network scheduling: Critical Path Method (CPM) and PERT analysis",
          "Public Procurement Act of Nepal and tendering procedures",
          "Nepal Engineering Council Act 2055 and code of professional ethics",
          "Professional liability, occupational health, safety, and dispute resolution",
        ],
      },
    ],
    modelQuestions: [
      {
        question:
          "In the 8085 microprocessor, how many machine cycles are executed for the 'MVI A, 32H' instruction?",
        options: ["1 Machine Cycle", "2 Machine Cycles", "3 Machine Cycles", "4 Machine Cycles"],
        answer: "2 Machine Cycles",
        explanation:
          "The instruction 'MVI A, 32H' takes 2 machine cycles (7 T-states total): 1 Opcode Fetch machine cycle (4 T-states) to decode the instruction, and 1 Memory Read machine cycle (3 T-states) to read the immediate operand 32H from memory.",
      },
      {
        question:
          "Which normal form eliminates partial functional dependency on the primary key in relational database design?",
        options: ["First Normal Form (1NF)", "Second Normal Form (2NF)", "Third Normal Form (3NF)", "Boyce-Codd Normal Form (BCNF)"],
        answer: "Second Normal Form (2NF)",
        explanation:
          "A relation is in 2NF if it is already in 1NF and every non-prime attribute is fully functionally dependent on the primary key, meaning partial dependencies on any candidate key are completely eliminated.",
      },
      {
        question:
          "What is the time complexity of the Dijkstra shortest path algorithm when implemented with a min-priority queue (binary heap)?",
        options: ["O(V²)", "O(V + E)", "O((V + E) log V)", "O(E log V)"],
        answer: "O((V + E) log V)",
        explanation:
          "Using a binary heap, extracting the minimum takes O(log V) per vertex (O(V log V) total), and edge relaxation updates take O(log V) per edge (O(E log V) total), yielding O((V + E) log V).",
      },
      {
        question:
          "Under the Nepal Engineering Council Act 2055, which of the following is considered a primary violation of the professional code of ethics?",
        options: [
          "Charging consultation fees approved by standard norms",
          "Signing off on designs without thorough technical verification",
          "Applying for patents on novel inventions",
          "Attending continuing professional development seminars",
        ],
        answer: "Signing off on designs without thorough technical verification",
        explanation:
          "The NEC Code of Ethics strictly mandates that registered engineers only endorse, stamp, or sign engineering documents that they have personally supervised, thoroughly audited, or verified for safety and regulatory compliance.",
      },
    ],
    faqs: [
      {
        question: "What is the examination pattern for Computer Engineering in the NEC license exam?",
        answer:
          "The exam is a 2-hour Computer-Based Test (CBT) consisting of 80 multiple-choice questions (60 1-mark questions and 20 2-mark questions) totaling 100 marks. The passing threshold is 50 marks (50%), and there is no negative marking.",
      },
      {
        question: "Are questions in the NEC exam purely theoretical or numerical?",
        answer:
          "The 1-mark questions are predominantly conceptual and theoretical (definitions, architectural pinouts, protocol layers). The 2-mark questions test analytical problems, such as subnetting calculations, K-map simplifications, pipeline cycle computations, and algorithm complexities.",
      },
      {
        question: "How important is Chapter 10 (Ethics and Project Planning)?",
        answer:
          "Chapter 10 carries 10 marks and appears in every discipline. It covers CPM/PERT network diagrams, contract management, and Nepal Engineering Council bylaws. Mastering these concepts is essential for reaching the 50-mark pass threshold.",
      },
    ],
  },

  "civil-engineering": {
    title: "Civil Engineering",
    subtitle:
      "Full curriculum blueprint, chapter weightages, model solutions, and analytical tips for the Nepal Engineering Council (NEC) Civil Engineering license examination.",
    syllabus: [
      "Basic Civil Engineering and Engineering Surveying",
      "Soil Mechanics and Foundation Engineering",
      "Basic Water Resources Engineering and Fluid Mechanics",
      "Structural Mechanics and Strength of Materials",
      "Design of RCC and Steel Structures",
      "Water Supply, Sanitation, and Environmental Engineering",
      "Irrigation and Drainage Engineering",
      "Hydropower Engineering and Powerplants",
      "Transportation Engineering and Highway Design",
      "Project Planning, Design, Valuation, and NEC Ethics",
    ],
    pdfPath: "/syllabus/NEC_Civil_Engineering_Syllabus.pdf",
    hasMockTest: true,
    examOverview:
      "The Civil Engineering NEC licensure examination covers materials, surveying, geotechnics, hydraulics, structural design, public health engineering, highways, hydropower systems, and public procurement rules. Candidates must demonstrate competence across both fundamental engineering sciences and real-world construction practices.",
    chapters: [
      {
        chapterNumber: 1,
        title: "Basic Civil Engineering and Surveying",
        weight: "10 Marks",
        description:
          "Properties of building materials (cement, aggregates, bricks, concrete), chain surveying, leveling, theodolite traverse, and Total Station fundamentals.",
        subtopics: [
          "Manufacture and testing of cement, standard consistency, setting times",
          "Concrete mix design, water-cement ratio, slump test, curing principles",
          "Direct and indirect leveling, curvature and refraction corrections",
          "Theodolite traversing, closing error adjustments (Bowditch vs Transit rule)",
          "Contour characteristics, interpolation methods, and Total Station coordinates",
        ],
      },
      {
        chapterNumber: 2,
        title: "Soil Mechanics and Foundation Engineering",
        weight: "10 Marks",
        description:
          "Three-phase soil systems, permeability, consolidation, shear strength, lateral earth pressure, and shallow/deep foundation bearing capacity.",
        subtopics: [
          "Phase relationships: Void ratio, porosity, degree of saturation, water content",
          "Atterberg limits (Liquid limit, Plastic limit) and soil classification (USCS)",
          "Terzaghi's 1D consolidation theory, compression index, settlement calculation",
          "Mohr-Coulomb failure criterion, direct shear test, triaxial shear test",
          "Terzaghi's bearing capacity equation for strip, square, and circular footings",
        ],
      },
      {
        chapterNumber: 3,
        title: "Fluid Mechanics and Water Resources",
        weight: "10 Marks",
        description:
          "Fluid properties, hydrostatics, continuity and Bernoulli's equation, pipe flow losses, open channel flow, and hydrograph analysis.",
        subtopics: [
          "Pressure measurement, Pascal's law, hydrostatic thrust on submerged surfaces",
          "Equation of continuity, Bernoulli's theorem and energy grade lines (EGL/HGL)",
          "Laminar and turbulent flow, Darcy-Weisbach equation for friction loss",
          "Open channel flow: Manning's and Chezy's formulas, critical depth, hydraulic jump",
          "Unit hydrograph theory, S-curve derivation, flood frequency analysis (Gumbel)",
        ],
      },
      {
        chapterNumber: 4,
        title: "Structural Mechanics",
        weight: "10 Marks",
        description:
          "Stresses and strains, shear force and bending moment diagrams, deflection of beams, buckling of columns, and energy methods.",
        subtopics: [
          "Stress-strain curve of mild steel, Hooke's Law, Poisson's ratio, modulus of elasticity",
          "SFD and BMD for simply supported, cantilever, and overhanging beams",
          "Theory of pure bending, section modulus, flexural formula (M/I = sigma/y)",
          "Beam deflection: Double integration, Moment-Area, and Conjugate Beam methods",
          "Euler's column theory, effective length factors, slenderness ratio",
        ],
      },
      {
        chapterNumber: 5,
        title: "Design of Structures (RCC & Steel)",
        weight: "10 Marks",
        description:
          "Limit state design of reinforced concrete beams, slabs, columns, footings per IS 456 / NBC, and bolted/welded steel connections.",
        subtopics: [
          "Working Stress Method vs Limit State Method philosophy",
          "Singly and doubly reinforced rectangular beams (moment of resistance)",
          "Design of one-way and two-way slabs, shear reinforcement and bond length",
          "Axially loaded short columns, minimum eccentricity, footing dimensions",
          "Steel connections: Welded joints, high-strength friction grip (HSFG) bolts",
        ],
      },
      {
        chapterNumber: 6,
        title: "Water Supply and Environmental Engineering",
        weight: "10 Marks",
        description:
          "Water demand forecasting, water treatment units (sedimentation, coagulation, filtration, chlorination), sewage disposal, and BOD/COD kinetics.",
        subtopics: [
          "Population forecasting techniques (arithmetic, geometric, incremental increase)",
          "Sedimentation tank design, Stokes' law, alum coagulation mechanics",
          "Rapid sand filters vs slow sand filters (filtration rates, backwashing)",
          "Break-point chlorination and residual chlorine measurement",
          "Biochemical Oxygen Demand (BOD) curve, COD, septic tank and soak pit design",
        ],
      },
      {
        chapterNumber: 7,
        title: "Irrigation and Drainage Engineering",
        weight: "10 Marks",
        description:
          "Soil-water-crop relationships, duty and delta calculations, canal design using Lacey's and Kennedy's regime theories, and weir design.",
        subtopics: [
          "Crop seasons in Nepal, base period, delta, duty, and Kor period",
          "Irrigation efficiencies (conveyance, application, storage, distribution)",
          "Kennedy's silt theory vs Lacey's regime theory for alluvial canals",
          "Seepage analysis beneath hydraulic structures, Bligh's and Lane's creep theories",
          "Cross-drainage works: Aqueduct, Syphon Aqueduct, Superpassage, Canal Syphon",
        ],
      },
      {
        chapterNumber: 8,
        title: "Hydropower Engineering",
        weight: "10 Marks",
        description:
          "Hydrological assessment, run-of-river vs storage plants, intake design, settling basins, penstock sizing, and hydraulic turbine selection.",
        subtopics: [
          "Flow Duration Curve (FDC), firm power, secondary power, and load factor",
          "Types of hydropower plants: RoR, PRoR, Storage, and Pumped-storage",
          "Desilting basin design, fall velocity of sediment particles",
          "Water hammer phenomenon, surge tank types, penstock economic diameter",
          "Turbine selection: Pelton (high head), Francis (medium head), Kaplan (low head)",
        ],
      },
      {
        chapterNumber: 9,
        title: "Transportation Engineering",
        weight: "10 Marks",
        description:
          "Highway geometric design, sight distances (SSD and OSD), superelevation, pavement layers (flexible vs rigid), and traffic control devices.",
        subtopics: [
          "Nepal Road Standards (NRS) highway classifications and design speeds",
          "Stopping Sight Distance (SSD) and Overtaking Sight Distance (OSD) equations",
          "Superelevation design, equilibrium superelevation, radius of horizontal curve",
          "Flexible pavement layers: Subgrade, subbase, base, and bituminous surface course",
          "California Bearing Ratio (CBR) test, Marshall stability test for asphalt mixes",
        ],
      },
      {
        chapterNumber: 10,
        title: "Project Planning, Valuation, and NEC Ethics",
        weight: "10 Marks",
        description:
          "Network techniques (CPM/PERT), rate analysis, depreciation methods, tendering under the Public Procurement Act, and NEC regulations.",
        subtopics: [
          "Critical Path Method (CPM), forward/backward pass, float calculations",
          "Program Evaluation and Review Technique (PERT) three-time estimates",
          "Methods of valuation: Capitalized value, sinking fund, depreciation methods",
          "Types of contracts: Item rate, lumpsum, percentage rate, turnkey contracts",
          "Nepal Engineering Council Act 2055, bylaws, and ethical professional conduct",
        ],
      },
    ],
    modelQuestions: [
      {
        question:
          "For a highway designed for 80 km/h with a coefficient of lateral friction f = 0.15, what is the design superelevation for a circular curve with radius R = 250 m (ignoring friction for full superelevation)?",
        options: ["e = 0.07", "e = 0.10", "e = 0.20", "e = 0.05"],
        answer: "e = 0.07",
        explanation:
          "Per standard highway design codes (IRC/NRS), design superelevation for 75% speed (V_design) is calculated as e = V² / (225 * R) = (80)² / (225 * 250) = 6400 / 56250 = 0.113. However, maximum permissible superelevation in plain terrain is capped at 7% (0.07).",
      },
      {
        question:
          "According to Terzaghi's bearing capacity formula, what is the value of the shape factor sc for an isolated square footing?",
        options: ["1.0", "1.2", "1.3", "0.8"],
        answer: "1.3",
        explanation:
          "Terzaghi's ultimate bearing capacity for a square footing modifies cohesion by a shape factor of 1.3: q_ult = 1.3 * c * Nc + q * Nq + 0.4 * gamma * B * Ngamma.",
      },
      {
        question:
          "In a rapid sand filter, which mechanism is primarily responsible for clearing clogged sand beds during backwashing?",
        options: [
          "Surface skimming",
          "Upward flow of treated water with compressed air agitation",
          "Chemical oxidation with chlorine gas",
          "Downward gravitational suction",
        ],
        answer: "Upward flow of treated water with compressed air agitation",
        explanation:
          "Rapid sand filters are cleaned by reversing the flow: clean water is forced upward through the gravel and sand beds while compressed air agitates the sand particles to dislodge trapped floc and suspended impurities.",
      },
      {
        question:
          "Under the Public Procurement Act of Nepal, what is the validity period of a bid security from the deadline of bid submission?",
        options: [
          "Minimum 30 days beyond bid validity",
          "Exactly 15 days",
          "Minimum 60 days beyond bid validity",
          "90 days total regardless of bid period",
        ],
        answer: "Minimum 30 days beyond bid validity",
        explanation:
          "Under the Public Procurement Act 2063 of Nepal, bid security must remain valid for at least 30 days beyond the original bid validity period stipulated in the bidding document.",
      },
    ],
    faqs: [
      {
        question: "How should civil engineers prepare for the 2-mark questions in the NEC exam?",
        answer:
          "Focus on standard civil calculations: sight distance (SSD/OSD), superelevation, critical depth in open channels, Mohr-Coulomb shear parameters, bending stress equations, and float calculations in CPM network charts.",
      },
      {
        question: "Does the NEC Civil Engineering exam follow IS codes or Nepal National Building Codes (NBC)?",
        answer:
          "Both NBC and Indian Standard (IS) codes are relevant. Most RCC and structural questions reference standard limit state design principles identical across IS 456:2000 and NBC 105:2020.",
      },
      {
        question: "Is there negative marking in the Civil Engineering licensure exam?",
        answer:
          "No, there is currently no negative marking for incorrect answers. Candidates are advised to answer all 80 questions within the 120-minute examination duration.",
      },
    ],
  },

  "electrical-engineering": {
    title: "Electrical & Electronics Engineering",
    subtitle:
      "Curriculum overview, chapter syllabus guidelines, and verified model questions for the Nepal Engineering Council Electrical and Electronic Engineering license examination.",
    syllabus: [
      "Fundamentals of Electrical Components and Circuits",
      "Fundamentals of Electronic Devices and Circuits",
      "Digital Logic and Microprocessor",
      "Computer Programming",
      "Measurement, Instrumentation, and Control",
      "Electrical Machines (Transformers, Motors, Generators)",
      "Signals, Systems, and Frequency Domain Analysis",
      "Communication Systems",
      "Power Systems and Transmission Devices",
      "Project Planning, Design, and NEC Professional Ethics",
    ],
    pdfPath: "/syllabus/NEC_Electrical&Electronics_Engineering_Syllabus.pdf",
    hasMockTest: true,
    examOverview:
      "The Electrical & Electronics licensure syllabus balances circuit analysis, electromagnetic fields, machinery, power generation/transmission, digital electronics, instrumentation, and professional bylaws. The test verifies competence in domestic and industrial power system management in Nepal.",
    chapters: [
      {
        chapterNumber: 1,
        title: "Electrical Components and Circuits",
        weight: "10 Marks",
        description: "DC and AC network theorems, transients in RL/RC/RLC circuits, two-port networks, and three-phase balanced/unbalanced loads.",
        subtopics: ["Superposition, Thevenin, Norton, and Maximum Power Transfer theorems", "Transient response of RL, RC, and RLC circuits", "Two-port network parameters (Z, Y, ABCD, and h-parameters)"],
      },
      {
        chapterNumber: 2,
        title: "Electronic Devices and Circuits",
        weight: "10 Marks",
        description: "Diodes, BJTs, FETs, MOSFETs, operational amplifier circuits, active filters, and power supplies.",
        subtopics: ["BJT and MOSFET biasing, small-signal models", "Op-amp non-inverting, inverting, integrator, and differentiator configurations", "Switching power supplies and voltage regulation"],
      },
      {
        chapterNumber: 3,
        title: "Electrical Machines",
        weight: "10 Marks",
        description: "Single-phase and three-phase transformers, synchronous machines, DC motors/generators, and three-phase induction motors.",
        subtopics: ["Transformer equivalent circuits, efficiency, regulation, auto-transformers", "DC machine torque-speed characteristics and speed control methods", "Synchronous generator V-curves, power angle characteristics, and parallel operation"],
      },
      {
        chapterNumber: 4,
        title: "Power Systems and Grid Operations",
        weight: "10 Marks",
        description: "Transmission line parameters, corona effect, fault analysis (symmetrical and unsymmetrical), power flow, and protective relays.",
        subtopics: ["Line models: Short, medium, and long line ABCD parameters", "Symmetrical components and fault calculations (LG, LL, LLG, LLL)", "Circuit breakers, distance relays, differential protection, and NEA grid guidelines"],
      },
      {
        chapterNumber: 5,
        title: "Control Systems & Instrumentation",
        weight: "10 Marks",
        description: "Transfer functions, block diagram reduction, Routh-Hurwitz stability criterion, Bode plots, Root Locus, and PID controllers.",
        subtopics: ["State-space representation of dynamic systems", "Time-domain specifications (rise time, peak overshoot, settling time)", "Bode plot gain margin, phase margin, and lead-lag compensation"],
      },
    ],
    modelQuestions: [
      {
        question:
          "In a 3-phase induction motor, if the synchronous speed is 1500 rpm and the rotor operates at 1440 rpm, what is the slip?",
        options: ["2%", "4%", "5%", "6%"],
        answer: "4%",
        explanation:
          "Slip is defined as s = (N_sync - N_rotor) / N_sync = (1500 - 1440) / 1500 = 60 / 1500 = 0.04 or 4%.",
      },
      {
        question:
          "Which type of relay is best suited for the protection of long high-voltage electrical transmission lines against distance faults?",
        options: ["Mho relay", "Definite time overcurrent relay", "Thermal overload relay", "Buchholz relay"],
        answer: "Mho relay",
        explanation:
          "Mho relays (admittance relays) are inherently directional and operate efficiently for long transmission lines where reach is less affected by power swings.",
      },
    ],
    faqs: [
      {
        question: "What is the weightage of Power Systems in the NEC Electrical exam?",
        answer:
          "Power systems, electrical machinery, and circuit theory together comprise roughly 35-40% of the entire examination.",
      },
    ],
  },

  "architecture": {
    title: "Architecture",
    subtitle:
      "Official curriculum blueprint, architectural theories, building codes, and exam preparation resources for the Nepal Engineering Council Architecture licensing examination.",
    syllabus: [
      "Architectural Context in Nepal and Vernacular Traditions",
      "Building Materials, Construction Technology, and Services",
      "Architectural History, Heritage, and Design Theories",
      "Architectural Design Principles (Basic Studio Fundamentals)",
      "Advanced Architectural Design (Complex Public Structures)",
      "Structural Systems, Surveying, Cost Estimation, and Specifications",
      "Settlement Planning, Urban Design, and Housing",
      "Landscape Architecture and Site Planning",
      "Professional Practice, Society, and Building Bylaws of Nepal",
      "Project Planning, Contract Management, and NEC Ethics",
    ],
    pdfPath: "/syllabus/NEC_Architecture_Engineering_Syllabus.pdf",
    hasMockTest: true,
    examOverview:
      "The Architecture licensure examination evaluates architectural theory, Newari and traditional Nepalese architectural heritage, construction technologies, sanitation/HVAC/fire systems, urban planning, municipal building bylaws, and professional ethics under the NEC Act.",
    chapters: [
      {
        chapterNumber: 1,
        title: "Architectural Context in Nepal",
        weight: "10 Marks",
        description: "Traditional Newari architecture, pagoda construction, Malla era urban spaces, and vernacular building typologies of the Terai, Hills, and Himalayas.",
        subtopics: ["Elements of traditional Newari architecture (Dachhi Appa, Jhyal, Torana)", "Temple styles: Pagoda, Shikhara, and Stupa typologies", "Climatic adaptation in vernacular Nepalese houses"],
      },
      {
        chapterNumber: 2,
        title: "Building Materials and Building Services",
        weight: "10 Marks",
        description: "Modern and sustainable construction materials, acoustics, illumination, HVAC design, plumbing networks, and vertical transportation.",
        subtopics: ["Daylighting and natural ventilation design principles", "Sanitary plumbing: Single stack vs two pipe systems", "Fire escape norms and accessibility guidelines for public buildings"],
      },
      {
        chapterNumber: 3,
        title: "Settlement Planning and Building Bylaws",
        weight: "10 Marks",
        description: "Master planning, zoning regulations, Floor Area Ratio (FAR), Ground Coverage, Right of Way (RoW), and municipal bylaws in Nepal.",
        subtopics: ["National Building Code (NBC) safety provisions", "FAR and setback requirements across residential and commercial zones", "Conservation guidelines for UNESCO World Heritage zones in Kathmandu Valley"],
      },
    ],
    modelQuestions: [
      {
        question:
          "In traditional Newari architecture of Nepal, what is the name of the intricately carved, five-opening window traditionally situated on the third floor of historic residences?",
        options: ["Gajur", "San Jhyal", "Tikijhyal", "Pikha Lakhi"],
        answer: "San Jhyal",
        explanation:
          "The 'San Jhyal' is the elaborate projecting bay window with five openings commonly placed on the third floor (the main living and gathering quarter) of historic Newari homes.",
      },
      {
        question:
          "What does Floor Area Ratio (FAR) signify in municipal urban planning regulations?",
        options: [
          "Total plinth area divided by open site area",
          "Total gross built-up floor area of all floors divided by the total plot area",
          "Total carpet area divided by plinth area",
          "Ground floor footprint divided by road width",
        ],
        answer: "Total gross built-up floor area of all floors divided by the total plot area",
        explanation:
          "FAR is defined as the ratio of the total combined gross floor area of all building stories to the total surface area of the zoning plot.",
      },
    ],
    faqs: [
      {
        question: "Does the Architecture license exam include practical drafting?",
        answer:
          "No, the examination is completely computer-based (CBT) with objective multiple-choice questions. It tests design theory, history, building services, codes, and construction technologies.",
      },
    ],
  },
};
