import type { MediaItem, NewsItem } from "@/types/content";

export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    title: "New paper accepted at CHI",
    date: "May 2025",
    summary: "Our latest study on collaborative multimodal interfaces was accepted to the ACM CHI conference.",
    links: [{ label: "Read more", href: "https://example.edu" }],
  },
  {
    id: "news-2",
    title: "Student team wins design sprint",
    date: "April 2025",
    summary: "The lab’s undergraduate team won a campus design sprint for an accessible assistive interface prototype.",
  },
];

export const announcements: NewsItem[] = [
  {
    id: "announcement-1",
    title: "Call for collaborators",
    date: "June 2025",
    summary: "We are seeking partners for new field studies in public and educational spaces.",
  },
];

export const recentUpdates: NewsItem[] = [
  {
    id: "update-1",
    title: "Tooling release",
    date: "March 2025",
    summary: "We released a new toolkit for auditing multimodal interaction systems across accessibility and fairness metrics.",
  },
];

export const mediaItems: MediaItem[] = [
  {
    id: "media-1",
    title: "Lab Demo Reel",
    description: "A short walkthrough of our latest interactive prototypes and deployment studies.",
  },
  {
    id: "media-2",
    title: "Community Workshop",
    description: "Highlights from our workshop on responsible AI in everyday products.",
  },
];

