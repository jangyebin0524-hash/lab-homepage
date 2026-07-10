import type { Collaboration, FundingInfo, Project, TimelineItem } from "@/types/content";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Shared Space Assistants",
    summary: "A conversational interface that helps visitors navigate exhibitions and public facilities using multimodal prompts.",
    status: "active",
    period: "2024–Present",
    sponsor: "National Science Foundation",
    links: [{ label: "Project Page", href: "https://example.edu" }],
  },
  {
    id: "project-2",
    title: "Personalized Learning Interfaces",
    summary: "Adaptive tutoring tools that combine speech, sketching, and gaze data to support inclusive education.",
    status: "completed",
    period: "2022–2024",
    sponsor: "Google Research",
  },
];

export const collaborations: Collaboration[] = [
  {
    id: "collab-1",
    title: "Museum Experience Design Studio",
    description: "Co-designing intelligent guides for cultural institutions and public engagement programs.",
  },
];

export const projectOutputs: Collaboration[] = [
  {
    id: "output-1",
    title: "Open source evaluation toolkit",
    description: "A lightweight toolkit for comparing multimodal interfaces across accessibility and trust metrics.",
  },
];

export const fundingInformation: FundingInfo[] = [
  {
    id: "fund-1",
    title: "NSF CAREER Award",
    description: "Supporting foundational work on adaptive multimodal interfaces for public environments.",
    period: "2024–2029",
  },
  {
    id: "fund-2",
    title: "Industry Seed Grant",
    description: "Supporting prototype deployment studies with partner organizations in the education sector.",
    period: "2023–2024",
  },
];

export const projectTimeline: TimelineItem[] = [
  {
    id: "timeline-1",
    title: "Lab launch",
    date: "2021",
    description: "The lab was founded around an interdisciplinary program in AI, HCI, and design.",
  },
  {
    id: "timeline-2",
    title: "First public deployment",
    date: "2023",
    description: "The team deployed a multimodal guide in an interactive museum exhibit.",
  },
  {
    id: "timeline-3",
    title: "Expanded open-source work",
    date: "2025",
    description: "The lab released a new toolkit and community workshop series for responsible multimodal systems.",
  },
];

