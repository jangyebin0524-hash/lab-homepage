import type { ResourceItem } from "@/types/content";

export const resources: ResourceItem[] = [
  {
    id: "resource-1",
    title: "Lab Methods Handbook",
    description: "A concise guide to our experimental and evaluation workflow for multimodal studies.",
    category: "document",
    links: [{ label: "Download", href: "https://example.edu" }],
  },
  {
    id: "resource-2",
    title: "Open-source evaluation toolkit",
    description: "Code and templates for assessing interface performance and fairness across user groups.",
    category: "code",
    links: [{ label: "View repository", href: "https://github.com" }],
  },
  {
    id: "resource-3",
    title: "Interaction design examples",
    description: "A curated collection of design patterns for multimodal systems and assistive interfaces.",
    category: "demo",
  },
  {
    id: "resource-4",
    title: "Community resources",
    description: "Links to workshops, datasets, and teaching materials from related labs and partners.",
    category: "link",
    links: [{ label: "Explore", href: "https://example.edu" }],
  },
];

