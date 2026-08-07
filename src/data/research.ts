export interface ResearchArea {
  number: string
  title: string
  description: string
  topics: string[]
}

export const researchAreas: ResearchArea[] = [
  {
    number: '01',
    title: 'Medical AI & Biomedical Data',
    description:
      'We study data-driven methods for interpreting medical information and supporting reliable clinical research.',
    topics: [
      'Heart disease prediction and phenotype analysis',
      'Medical vision-language models and chest X-ray analysis',
      'Explainable brain abnormality detection',
      'Medical named entity recognition',
    ],
  },
  {
    number: '02',
    title: 'Language Models & Document Intelligence',
    description:
      'We investigate language-model systems for document understanding, retrieval, evaluation, and knowledge-intensive tasks.',
    topics: [
      'Patent document classification',
      'RAG evaluation and traceability',
      'Query-aware external memory',
      'Vision-language models and OCR',
    ],
  },
  {
    number: '03',
    title: 'Industrial AI & Digital Manufacturing',
    description:
      'We develop intelligent methods that connect manufacturing data, autonomous agents, and digital production systems.',
    topics: [
      'Manufacturing multi-agent systems',
      'Digital twins and MCP-based integration',
      'Multimodal industrial defect inspection',
      'Manufacturing software and SBOM management',
    ],
  },
  {
    number: '04',
    title: 'Trustworthy AI & Blockchain Systems',
    description:
      'We explore accountable AI and data systems through security analysis, traceability, and tamper-resistant records.',
    topics: [
      'Healthcare AI agent security and governance',
      'Blockchain-based reasoning traceability',
      'Hyperledger Fabric chaincode analysis',
      'Data trust and evidence layers',
    ],
  },
  {
    number: '05',
    title: 'Vision-Language & Generative AI',
    description:
      'We examine multimodal and generative models for visual understanding, image editing, and industrial perception.',
    topics: [
      'Reference-driven semantic image editing',
      'Identity-aware face synthesis',
      'Human–AI comparison in visual understanding',
      'Resource-efficient vision-language models',
      'Autonomous construction perception',
    ],
  },
]
