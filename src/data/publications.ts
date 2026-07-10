import type { Publication } from "@/types/content";

export const publications: Publication[] = [
  {
    id: "publication-1",
    title: "Designing Trustworthy Multimodal Interfaces for Shared Spaces",
    authors: ["M. Chen", "S. Park", "J. Li"],
    venue: "ACM CHI",
    year: "2025",
    category: "conference",
    featured: true,
    links: [{ label: "PDF", href: "https://example.edu" }],
  },
  {
    id: "publication-2",
    title: "Evaluating Transparency and Confidence in Human-AI Collaboration",
    authors: ["J. Li", "M. Chen"],
    venue: "IEEE Transactions on Human-Machine Systems",
    year: "2024",
    category: "journal",
    links: [{ label: "Publisher", href: "https://example.edu" }],
  },
  {
    id: "publication-3",
    title: "From Prototype to Practice: Deploying Interactive Assistants in Museums",
    authors: ["A. Soto", "M. Chen"],
    venue: "UIST",
    year: "2023",
    category: "conference",
  },
];

