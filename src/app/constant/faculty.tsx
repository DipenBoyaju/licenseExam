import { Laptop, HardHat, Cpu, PencilRuler, Code2 } from "lucide-react";
import React from "react";

export interface Faculty {
  id: number;
  title: string;
  slug: string;
  icon: React.ReactNode;
  desc: string;
}

export const faculty: Faculty[] = [
  {
    id: 1,
    title: "Computer Engineering",
    slug: "computer-engineering",
    icon: <Laptop className="w-6 h-6" />,
    desc: "Includes Data Structures, Operating Systems, Computer Networks, DBMS, Computer Architecture, and Artificial Intelligence.",
  },
  {
    id: 2,
    title: "Civil Engineering",
    slug: "civil-engineering",
    icon: <HardHat className="w-6 h-6" />,
    desc: "Includes Structural Mechanics, Geotechnical Engineering, Water Resources, Hydropower Systems, Transportation, and Surveying.",
  },
  {
    id: 3,
    title: "Electronics & Communication",
    slug: "electronics-engineering",
    icon: <Cpu className="w-6 h-6" />,
    desc: "Includes Circuit Analysis, Digital Signal Processing, Communication Systems, Embedded Electronics, and Telecommunications.",
  },
  {
    id: 4,
    title: "Architecture",
    slug: "architecture",
    icon: <PencilRuler className="w-6 h-6" />,
    desc: "Includes Building Technology, Architectural History of Nepal, Settlement Planning, Building Codes, and Environmental Services.",
  },
  {
    id: 5,
    title: "Software Engineering",
    slug: "software-engineering",
    icon: <Code2 className="w-6 h-6" />,
    desc: "Includes Software Architecture, Agile Methodologies, Object-Oriented Analysis & Design, Cloud Computing, Testing, and DevOps.",
  },
];
