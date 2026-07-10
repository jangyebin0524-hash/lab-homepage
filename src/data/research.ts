import type { Publication, ResearchTopic, VisualPlaceholder } from "@/types/content";

export const researchTopics: ResearchTopic[] = [
  {
    id: "adaptive-interfaces",
    title: "Adaptive Interfaces",
    summary: "Designing systems that respond to context, attention, and task load in real time.",
    keywords: ["Context Awareness", "Interaction Design", "Personalization"],
    links: [{ label: "Project Brief", href: "https://example.edu" }],
  },
  {
    id: "multimodal-sensing",
    title: "Multimodal Sensing",
    summary: "Combining vision, speech, and inertial cues for robust perception in dynamic environments.",
    keywords: ["Computer Vision", "Speech", "Sensor Fusion"],
  },
  {
    id: "responsible-ai",
    title: "Responsible AI",
    summary: "Building transparent evaluation tools that make AI behavior easier to inspect and trust.",
    keywords: ["Fairness", "Transparency", "Human Studies"],
  },
];

export const researchKeywords: string[] = [
  "Embodied AI",
  "Human-Centered Computing",
  "Accessible Interaction",
  "Interactive Robotics",
  "Collaborative Systems",
];

export const researchDiagram: VisualPlaceholder = {
  imageUrl: "",
  altText: "A diagram of the lab's multimodal research pipeline",
  description:
    "Our research pipeline connects sensing, modeling, interaction design, and deployment studies into a single feedback loop.",
};

export const relatedPublications: Publication[] = [
  {
    id: "pub-1",
    title: "Context-Aware Multimodal Interfaces for Shared Physical Spaces",
    authors: ["M. Chen", "S. Park", "J. Li"],
    venue: "CHI 2025",
    year: "2025",
    category: "conference",
    featured: true,
  },
  {
    id: "pub-2",
    title: "Evaluating Trust Calibration in Human-AI Collaboration",
    authors: ["J. Li", "M. Chen"],
    venue: "Transactions on Human-Machine Systems",
    year: "2024",
    category: "journal",
  },
];

