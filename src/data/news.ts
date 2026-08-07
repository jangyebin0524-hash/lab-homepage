import type { NewsItem } from '../types/content'

export const newsItems: NewsItem[] = [
  {
    id: 'lab-seminar-2026-07-30',
    title: '2026/07/30 LAB Seminar',
    category: 'Seminar',
    date: '2026-07-30',
    description:
      'Four presentations on AI safety, computer-use benchmarks, medical AI evaluation, and the SOCFAI joint R&D project.',
    seminarPresentations: [
      {
        id: 'soohyun-lee-ai-safety',
        presenter: '이수현',
        title: 'AI 안전성 연구 진행 현황',
        summary:
          '한국어 AI 공격 탐지 실험에서 RAG 기반 공격과 방어 기법을 비교하고, TCCR·PLR 기준을 이용한 사람 판정 파일럿과 판정자 간 일치도 검증 과정을 정리했습니다.',
        image: 'seminars/2026-07-30-lab-seminar/soohyun-lee.png',
      },
      {
        id: 'seowan-kim-computer-use-benchmarks',
        presenter: '김서완',
        title: 'WAA에서 OSWorld로',
        summary:
          'Windows Agent Arena 기반 실험 구조와 안전한 도구 시스템을 설명하고, WAA에서 구축한 실행·평가 환경을 OSWorld로 확장해 일반화 성능을 검증하는 다음 단계를 다뤘습니다.',
        image: 'seminars/2026-07-30-lab-seminar/seowan-kim.png',
      },
      {
        id: 'seungmin-kim-medical-ai-survey',
        presenter: '김승민',
        title: '의료 특화 AI 모델의 발전과 평가 방법론',
        summary:
          '2023–2026년 의료 AI 모델과 평가 연구를 조사해 모델 구조·학습 방식의 변화와 정적 벤치마크, Arena, Agent 평가로 이어지는 평가 생태계의 발전 및 검증 과제를 정리했습니다.',
        image: 'seminars/2026-07-30-lab-seminar/seungmin-kim.png',
      },
      {
        id: 'sungmoon-park-socfai',
        presenter: '박성문',
        title: 'SOCFAI 한·EU 공동 R&D',
        summary:
          '부산신항 CFS/CY 물류 운영을 위한 SOCFAI 프로젝트에서 Hyperledger Fabric 기반 데이터 증빙 계층, API Gateway와 Web Portal 구현, 검증 현황과 후속 연구 계획을 소개했습니다.',
        image: 'seminars/2026-07-30-lab-seminar/sungmoon-park.png',
      },
    ],
  },
  {
    id: 'aann-2026-paper-accepted',
    title: 'Paper accepted at AANN 2026',
    category: 'Paper Accepted',
    date: '2026-08-07',
    description:
      '“Privacy-Preserving Anomaly Detection in Hyperledger Fabric Chaincode Using Compact Local Transformer Models” was accepted for AANN 2026.',
  },
  {
    id: 'iait-2026-paper-published',
    title: 'Paper published in the IAIT 2026 proceedings',
    category: 'Publication',
    date: '2026-06-17',
    description:
      '“Source-Level Detection of Private Data Collection Misuse and Build-Preserving Mitigation of Write-Transaction Return Leakage in LLM-Generated Hyperledger Fabric Chaincode” was published in the ACM ICPS proceedings.',
  },
  {
    id: 'kiiect-2026-excellent-paper-award',
    title: '2026 KIIECT Excellent Paper Award',
    category: 'Award',
    date: '2026',
    description:
      'Soohyun Lee participated in joint research recognized with an Excellent Paper Award by the Korea Institute of Information and Electronic Communication Technology.',
  },
  {
    id: 'icaiic-2026-paper-published',
    title: 'Paper published at ICAIIC 2026',
    category: 'Publication',
    date: '2026-02-24',
    description:
      '“Asynchronous Blockchain Recording for Chain-of-Thought Tracing in Small Language Models” was published through IEEE Xplore.',
  },
  {
    id: 'kiiect-2025-excellent-paper-award',
    title: '2025 KIIECT Excellent Paper Award',
    category: 'Award',
    date: '2025-05-31',
    description:
      '“수직적 전문성과 LoRA 기반 프롬프트 개선: Gemma3 모델을 활용한 교육용 AI 시스템 연구” received an Excellent Paper Award.',
  },
]
