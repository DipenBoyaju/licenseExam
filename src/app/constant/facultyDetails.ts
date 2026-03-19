export interface FacultyDetail {
  title: string;
  subtitle: string;
  syllabus: string[];
  pdfPath: string;
  hasMockTest: boolean;
}

export type FacultyDetailsMap = Record<string, FacultyDetail>;

export const facultyDetails: FacultyDetailsMap = {
  "computer-engineering": {
    title: "Computer Engineering",
    subtitle: "Get an overview of the core syllabus and key topics for the NEC License Exam in Computer Engineering.",
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
  },
  "civil-engineering": {
    title: "Civil Engineering",
    subtitle: "Get an overview of the core syllabus and key topics for the NEC License Exam in Civil Engineering.",
    syllabus: [
      "Basic Civil Engineering",
      "Soil Mechanics and Foundation Engineering",
      "Basic Water Resources Engineering",
      "Structural Mechanics",
      "Design of Structures",
      "Water Supply, Sanitation and Environment",
      "Irrigation and Drainage",
      "Hydropower",
      "Transportation",
      "Project Planning, Design and Implementation",
    ],
    pdfPath: "/syllabus/NEC_Civil_Engineering_Syllabus.pdf",
    hasMockTest: false, // This will trigger the "Coming Soon" state for the button
  },
};