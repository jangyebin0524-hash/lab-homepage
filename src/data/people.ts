import type { Person } from "@/types/content";

export const people: Person[] = [
  {
    id: "maya-chen",
    name: "Prof. Maya Chen",
    role: "Principal Investigator",
    group: "professor",
    bio: "Maya studies multimodal interaction and deployable AI systems for educational and public-facing environments.",
    email: "maya.chen@example.edu",
    interests: ["Multimodal AI", "Human-Centered Design", "Accessible Interfaces"],
    links: [{ label: "Google Scholar", href: "https://scholar.google.com" }],
  },
  {
    id: "sofia-park",
    name: "Sofia Park",
    role: "PhD Student",
    group: "graduate",
    bio: "Sofia builds real-time systems that combine vision and language for collaborative decision support.",
    email: "sofia.park@example.edu",
    interests: ["Vision-Language Models", "Embodied AI"],
  },
  {
    id: "jun-li",
    name: "Jun Li",
    role: "PhD Student",
    group: "graduate",
    bio: "Jun explores evaluation frameworks for responsible AI and human trust calibration.",
    email: "jun.li@example.edu",
    interests: ["Responsible AI", "User Studies"],
  },
  {
    id: "amira-soto",
    name: "Amira Soto",
    role: "Undergraduate Researcher",
    group: "undergraduate",
    bio: "Amira contributes to interface prototyping and participatory design workshops.",
    email: "amira.soto@example.edu",
    interests: ["Interaction Design", "Prototyping"],
  },
  {
    id: "david-cho",
    name: "David Cho",
    role: "Alumni Research Scientist",
    group: "alumni",
    bio: "David now works on multimodal product experiences in industry after helping launch the lab's first deployment study.",
    email: "david.cho@example.edu",
    interests: ["Deployment Studies", "Product Design"],
  },
];

