import type { AboutContent, HomeHighlight, SiteInfo } from "@/types/content";

export const siteInfo: SiteInfo = {
  labName: "Media Intelligence Lab",
  shortDescription:
    "We design multimodal systems that help people interact with intelligent technology in natural, trustworthy ways.",
  affiliation: "School of Computing and Media Design",
  email: "media-lab@example.edu",
  address: "Room 417, Engineering Hall, 123 Innovation Drive, Cambridge, MA 02139",
  summary:
    "Our lab studies human-centered AI, embodied interfaces, and responsible multimodal systems that combine sensing, language, and interaction design.",
  keywords: ["Multimodal AI", "Human-Computer Interaction", "Embodied Interfaces", "Responsible AI"],
  quickLinks: [
    { label: "Open Positions", href: "#join-us" },
    { label: "Recent Publications", href: "#publications" },
    { label: "Lab GitHub", href: "https://github.com" },
    { label: "Contact", href: "#contact" },
  ],
  heroImageUrl: "",
};

export const aboutContent: AboutContent = {
  labOverview:
    "The Media Intelligence Lab brings together researchers in machine learning, design, and human-computer interaction to build systems people can understand and trust.",
  researchVision:
    "We aim to create intelligent interfaces that sense context, adapt in real time, and respect user privacy, accessibility, and agency.",
  professorIntroduction:
    "Professor Maya Chen leads the lab with a focus on multimodal perception, interactive robotics, and collaborative AI for everyday settings.",
  affiliationPlaceholder: "School of Computing and Media Design, Example University",
};

export const homeHighlights: HomeHighlight[] = [
  {
    id: "highlight-1",
    title: "New spatial interaction prototype",
    description: "The team released a wearable prototype that turns gestures and voice into low-friction control signals for public spaces.",
  },
  {
    id: "highlight-2",
    title: "Responsible AI workshop",
    description: "We hosted a hands-on workshop on evaluation methods for fairness and transparency in multimodal assistants.",
  },
];

