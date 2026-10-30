import { Laptop, HardHat, Zap, PencilRuler } from "lucide-react";
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
    desc: "Includes topics like Data Structures, Operating Systems, Computer Networks, DBMS, Software Engineering, and AI.",
  },
  {
    id: 2,
    title: "Civil Engineering",
    slug: "civil-engineering",
    icon: <HardHat className="w-6 h-6" />,
    desc: "Includes Structural Mechanics, Geotechnical Engineering, Water Resources, Hydropower, Transportation, and Surveying.",
  },
  {
    id: 3,
    title: "Electrical Engineering",
    slug: "electrical-engineering",
    icon: <Zap className="w-6 h-6" />,
    desc: "Includes Circuit Analysis, Power Systems, Electrical Machines, Control Systems, and Transmission Grid Operations.",
  },
  {
    id: 4,
    title: "Architecture",
    slug: "architecture",
    icon: <PencilRuler className="w-6 h-6" />,
    desc: "Includes Building Technology, Architectural History of Nepal, Settlement Planning, Building Codes, and Services.",
  },
];
