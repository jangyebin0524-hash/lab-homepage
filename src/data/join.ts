import type { FaqItem, JoinOpening } from "@/types/content";

export const joinOpenings: JoinOpening[] = [
  {
    id: "opening-1",
    title: "PhD Student Positions",
    description: "We are recruiting students interested in multimodal interaction, responsible AI, and field deployment studies.",
    requirements: ["Strong ML or HCI background", "Programming experience in Python or TypeScript", "Research motivation"],
  },
  {
    id: "opening-2",
    title: "Undergraduate Research Assistants",
    description: "We welcome undergraduates who enjoy prototyping, design, and user research.",
    requirements: ["Basic familiarity with React or Python", "Curiosity and reliability", "Willingness to contribute to weekly meetings"],
  },
];

export const joinFaqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "Do I need prior experience in AI?",
    answer: "Not necessarily. We value strong curiosity, a solid technical foundation, and a willingness to learn.",
  },
  {
    id: "faq-2",
    question: "What does the application process look like?",
    answer: "Please send a short statement of interest, your CV, and one example of relevant work or coursework.",
  },
];

