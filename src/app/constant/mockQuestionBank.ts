import { computerEngineeringData } from "./computer";

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
  chapter?: string;
}

export const civilEngineeringMockQuestions: QuizQuestion[] = [
  {
    question: "According to Nepal Road Standards, what is the maximum permissible superelevation in plain and rolling terrain?",
    options: ["4%", "7%", "10%", "12%"],
    answer: "7%",
    chapter: "9",
  },
  {
    question: "What is the primary purpose of adding gypsum during the manufacturing of Portland cement?",
    options: [
      "To accelerate the initial setting time",
      "To retard the initial setting time and prevent flash setting",
      "To impart gray color to the cement",
      "To increase early strength",
    ],
    answer: "To retard the initial setting time and prevent flash setting",
    chapter: "1",
  },
  {
    question: "In Terzaghi's one-dimensional consolidation theory, the coefficient of consolidation (Cv) is directly proportional to:",
    options: [
      "Coefficient of permeability (k)",
      "Coefficient of volume compressibility (mv)",
      "Unit weight of water",
      "Void ratio",
    ],
    answer: "Coefficient of permeability (k)",
    chapter: "2",
  },
  {
    question: "For a simply supported beam of span L carrying a central point load W, the maximum deflection at midspan is:",
    options: ["WL³ / (48EI)", "5WL⁴ / (384EI)", "WL³ / (3EI)", "WL² / (8EI)"],
    answer: "WL³ / (48EI)",
    chapter: "4",
  },
  {
    question: "Which of the following hydraulic turbines is an impulse turbine best suited for very high heads and low discharge?",
    options: ["Francis turbine", "Kaplan turbine", "Pelton turbine", "Propeller turbine"],
    answer: "Pelton turbine",
    chapter: "8",
  },
  {
    question: "Under the Nepal Engineering Council Act 2055, an engineer registered under Category 'A' must hold which qualification?",
    options: [
      "Diploma in Engineering",
      "Bachelor's Degree in Engineering or equivalent recognized by the Council",
      "Master's Degree with 10 years experience",
      "PhD in Engineering",
    ],
    answer: "Bachelor's Degree in Engineering or equivalent recognized by the Council",
    chapter: "10",
  },
  {
    question: "What is the critical depth (yc) in a rectangular open channel carrying discharge per unit width 'q'?",
    options: ["(q / g)^(1/2)", "(q² / g)^(1/3)", "(q³ / g)^(1/2)", "(g / q²)^(1/3)"],
    answer: "(q² / g)^(1/3)",
    chapter: "3",
  },
  {
    question: "In the limit state method of RCC design (IS 456 / NBC), what is the partial safety factor for concrete in flexure?",
    options: ["1.15", "1.50", "1.25", "2.00"],
    answer: "1.50",
    chapter: "5",
  },
  {
    question: "In water supply treatment, what chemical is most widely deployed as a coagulant in municipal rapid mixing units?",
    options: ["Sodium chloride", "Aluminum sulfate (Alum)", "Calcium hypochlorite", "Potassium permanganate"],
    answer: "Aluminum sulfate (Alum)",
    chapter: "6",
  },
  {
    question: "In CPM network analysis, an activity having zero total float is designated as a:",
    options: ["Dummy activity", "Critical activity", "Independent activity", "Lag activity"],
    answer: "Critical activity",
    chapter: "10",
  },
  {
    question: "The slump test for fresh concrete primarily evaluates which operational property?",
    options: ["Tensile strength", "Compressive strength", "Workability and consistency", "Modulus of elasticity"],
    answer: "Workability and consistency",
    chapter: "1",
  },
  {
    question: "In soil classification under the Unified Soil Classification System (USCS), soil passing through a 75-micron sieve is categorized as:",
    options: ["Gravel", "Sand", "Fine-grained soil (Silt and Clay)", "Cobble"],
    answer: "Fine-grained soil (Silt and Clay)",
    chapter: "2",
  },
];

export const electricalEngineeringMockQuestions: QuizQuestion[] = [
  {
    question: "According to Kirchhoff's Current Law (KCL), what is the algebraic sum of electric currents entering any circuit node?",
    options: ["Equal to total voltage", "Zero", "Equal to branch impedance", "Infinity"],
    answer: "Zero",
    chapter: "1",
  },
  {
    question: "In a 50 Hz, 4-pole synchronous generator, what is the synchronous speed in revolutions per minute (rpm)?",
    options: ["1000 rpm", "1200 rpm", "1500 rpm", "3000 rpm"],
    answer: "1500 rpm",
    chapter: "6",
  },
  {
    question: "Which of the following devices transforms low-level analog input signals into proportional electrical voltages for instrumentation?",
    options: ["Transducer", "Inverter", "Oscillator", "Rectifier"],
    answer: "Transducer",
    chapter: "5",
  },
  {
    question: "What protective relay is specifically installed to detect internal winding faults and gas accumulation in oil-immersed power transformers?",
    options: ["Buchholz relay", "Mho relay", "Thermal relay", "Directional overcurrent relay"],
    answer: "Buchholz relay",
    chapter: "9",
  },
  {
    question: "The condition for maximum power transfer from a source network to a load impedance ZL is:",
    options: ["ZL = Zth", "ZL = Zth* (complex conjugate of Thevenin impedance)", "ZL = 0", "ZL = Infinity"],
    answer: "ZL = Zth* (complex conjugate of Thevenin impedance)",
    chapter: "1",
  },
];

export const architectureMockQuestions: QuizQuestion[] = [
  {
    question: "In vernacular Newari architecture of Kathmandu Valley, what is the name of the traditional burnt brick with a glazed, smooth exterior face?",
    options: ["Dachhi Appa", "Maa Appa", "Kachi Appa", "Bata Appa"],
    answer: "Dachhi Appa",
    chapter: "1",
  },
  {
    question: "What architectural term defines the ratio of total gross floor area across all building stories to the total plot area?",
    options: ["Ground Coverage", "Floor Area Ratio (FAR)", "Setback Ratio", "Plinth Area Index"],
    answer: "Floor Area Ratio (FAR)",
    chapter: "7",
  },
  {
    question: "Which building service system uses a single vertical stack pipe for both soil waste and wastewater drainage discharge?",
    options: ["Two-pipe system", "One-pipe single stack system", "Partially ventilated two-pipe system", "Dry well system"],
    answer: "One-pipe single stack system",
    chapter: "2",
  },
  {
    question: "In urban design, what is the minimum clear sightline distance required along street intersections designated as?",
    options: ["Sight Triangle", "Setback Angle", "Right of Way", "Sky Clearance Angle"],
    answer: "Sight Triangle",
    chapter: "7",
  },
];

export function getMockQuestionsByFaculty(slug: string): QuizQuestion[] {
  const normalized = slug.toLowerCase().replace(/^(faculty-)/, "");

  if (normalized.includes("computer") || normalized.includes("software")) {
    // Select 100 randomized questions from the 3300+ dataset for full exam simulation
    const shuffled = [...computerEngineeringData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 100).map((q) => ({
      question: q.question,
      options: q.options,
      answer: q.answer,
      chapter: q.chapter,
    }));
  }

  if (normalized.includes("civil")) {
    return civilEngineeringMockQuestions;
  }

  if (normalized.includes("electrical")) {
    return electricalEngineeringMockQuestions;
  }

  if (normalized.includes("architect")) {
    return architectureMockQuestions;
  }

  // Fallback to computer slice
  return computerEngineeringData.slice(0, 30).map((q) => ({
    question: q.question,
    options: q.options,
    answer: q.answer,
    chapter: q.chapter,
  }));
}

