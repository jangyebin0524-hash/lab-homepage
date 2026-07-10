export type LinkItem = {
  label: string;
  href: string;
};

export type SiteInfo = {
  labName: string;
  shortDescription: string;
  affiliation: string;
  email: string;
  address: string;
  summary: string;
  keywords: string[];
  quickLinks: LinkItem[];
  heroImageUrl?: string;
};

export type AboutContent = {
  labOverview: string;
  researchVision: string;
  professorIntroduction: string;
  affiliationPlaceholder: string;
};

export type HomeHighlight = {
  id: string;
  title: string;
  description: string;
};

export type ResearchTopic = {
  id: string;
  title: string;
  summary: string;
  keywords: string[];
  imageUrl?: string;
  links?: LinkItem[];
};

export type VisualPlaceholder = {
  imageUrl: string;
  altText: string;
  description: string;
};

export type PersonGroup = "professor" | "graduate" | "undergraduate" | "alumni";

export type Person = {
  id: string;
  name: string;
  role: string;
  group: PersonGroup;
  bio?: string;
  email?: string;
  imageUrl?: string;
  interests?: string[];
  links?: LinkItem[];
};

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  category?: "journal" | "conference";
  featured?: boolean;
  links?: LinkItem[];
};

export type ProjectStatus = "planned" | "active" | "completed";

export type Project = {
  id: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  period?: string;
  sponsor?: string;
  links?: LinkItem[];
};

export type Collaboration = {
  id: string;
  title: string;
  description: string;
  links?: LinkItem[];
};

export type FundingInfo = {
  id: string;
  title: string;
  description: string;
  period?: string;
};

export type TimelineItem = {
  id: string;
  title: string;
  date: string;
  description: string;
};

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  summary: string;
  links?: LinkItem[];
};

export type MediaItem = {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
};

export type JoinOpening = {
  id: string;
  title: string;
  description: string;
  requirements?: string[];
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type ContactItem = {
  id: string;
  label: string;
  value: string;
  href?: string;
};

export type LocationInfo = {
  address: string;
  mapEmbedUrl?: string;
};

export type ResourceItem = {
  id: string;
  title: string;
  description: string;
  category: "dataset" | "code" | "demo" | "document" | "link";
  links?: LinkItem[];
};

