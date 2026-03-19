import { Laptop, HardHat, Zap, PencilRuler } from "lucide-react";

interface Faculty {
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
    icon: <Laptop />,
    desc: "Includes topics like DSA, OS, CN, DBMS, and Software Engineering.",
  },
  {
    id: 2,
    title: "Civil Engineering",
    slug: "civil-engineering",
    icon: <HardHat />,
    desc: "Includes topics like Structural Analysis, Surveying, Geotechnical Engineering, and Hydrology.",
  },
  {
    id: 3,
    title: "Electrical Engineering",
    slug: "electrical-engineering",
    icon: <Zap />,
    desc: "Includes topics like Circuit Theory, Power Systems, Control Systems, and Electrical Machines.",
  },
  {
    id: 4,
    title: "Architectural Engineering",
    slug: "architectural-engineering",
    icon: <PencilRuler />,
    desc: "Includes topics like Building Design, Urban Planning, Construction Materials, and CAD.",
  },
];