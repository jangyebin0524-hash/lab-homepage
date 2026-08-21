import type { NewsItem } from '../types/content'

export const newsItems: NewsItem[] = [
  {
    id: 'lab-seminar-2026-08-13',
    title: '2026/08/13 LAB Seminar',
    category: 'Seminar',
    date: '2026-08-13',
    description:
      'Three presentations on medical AI research progress, a physics-aware simulation environment, and an OSWorld and VLAA-GUI benchmark review.',
    seminarPresentations: [
      {
        id: 'seungmin-kim-research-progress',
        presenter: '김승민',
        title: '연구 진행 현황',
        summary:
          'Research Design의 공통·후보별 트랙을 정리하고, 피부 병변 데이터셋과 외부 검증, 모델·프롬프트 설계, 지도교수 피드백 반영 및 다음 실험 단계를 공유했습니다.',
        image: 'seminars/2026-08-13-lab-seminar/seungmin-kim.png',
      },
      {
        id: 'osworld-vlaa-gui-analysis',
        presenter: '김서완',
        title: 'OSWorld와 VLAA-GUI',
        summary:
          '실제 데스크톱 업무를 대상으로 하는 OSWorld 벤치마크와 VLAA-GUI의 역할 분담 구조를 검토하고, 작업 완료 여부 검증과 주요 구성요소의 기여를 살펴봤습니다.',
        image: 'seminars/2026-08-13-lab-seminar/osworld-vlaa-gui.png',
      },
      {
        id: 'soohyun-lee-vlm-physics-aware',
        presenter: '이수현',
        title: 'VLM & Physics-aware 생성형 시뮬레이션 환경 구축',
        summary:
          'VLM 기반 설비 인식·물성 추론과 Physics-aware 데이터셋·시뮬레이션 환경 구축을 중심으로, 관련 데이터셋·표준·도구 검토와 8–12월 실행 계획을 공유했습니다.',
        previewPage: 'seminars/2026-08-13-lab-seminar/soohyun-lee.html',
      },
    ],
  },
  {
    id: 'lab-seminar-2026-08-04',
    title: '2026/08/04 LAB Seminar',
    category: 'Seminar',
    date: '2026-08-04',
    description:
      'Two presentations covering research feasibility and DadaDoc healthcare R&BD preparation after the first lab seminar.',
    seminarPresentations: [
      {
        id: 'seungmin-kim-feasibility-study',
        presenter: '김승민',
        title: 'Feasibility Study, 그리고 다음 단계',
        summary:
          '연구 주제의 실현 가능성을 데이터셋, 라이선스, 컴퓨팅 자원, GPU·SFT 요구사항, 실행 계획의 여섯 축으로 검토하고 후보별 비교와 다음 연구 설계 단계를 정리했습니다.',
        image: 'seminars/2026-08-04-lab-seminar/seungmin-kim.png',
      },
      {
        id: 'sungmoon-park-dadadoc-healthcare',
        presenter: '박성문',
        title: 'DadaDoc 헬스케어 R&BD',
        summary:
          '소아 중이염 고막 이미지 기반 AI 분석·검증 체계 구축을 주제로, 공개 데이터 리허설과 AIHub 안심존 실행 준비 현황을 공유했습니다.',
        image: 'seminars/2026-08-04-lab-seminar/sungmoon-park.png',
      },
    ],
  },
  {
    id: 'aann-2026-qadc-paper-accepted',
    title: 'Paper accepted at AANN 2026',
    category: 'Paper Accepted',
    date: '2026-08-07',
    description:
      '“Query-Aware Adaptive Document Compression for Efficient RAG Context Allocation” was accepted for AANN 2026 and invited for an oral report.',
  },
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
    id: 'iait-2026-evidence-retention-published',
    title: 'Paper published in the IAIT 2026 proceedings',
    category: 'Publication',
    date: '2026-06-17',
    description:
      '“Evidence Retention Is Not Sufficient for Answerability: A Diagnostic Study of Context Budgeting for Small Language Model RAG” was published in the ACM International Conference Proceedings.',
  },
  {
    id: 'kiiect-2026-prompt-compression-published',
    title: 'Paper published in the KIIECT 2026 Spring proceedings',
    category: 'Publication',
    date: '2026-05-22',
    description:
      '“Effects of Prompt Compression on Long-Context Question Answering in Small Language Models” was published in the KIIECT 2026 Spring Conference Proceedings and presented orally.',
  },
  {
    id: 'iciit-2026-ltm-presented',
    title: 'Paper presented at ICIIT 2026',
    category: 'Conference Presentation',
    date: '2026-03-05',
    description:
      '“Context-Enhanced Long-Term Memory System for Personalized Conversational AI: SALSA Filtering and Hybrid Retrieval Mechanism” was accepted, registered, and listed in the ICIIT 2026 program.',
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
    id: 'icaiic-2026-external-memory-published',
    title: 'Paper published at ICAIIC 2026',
    category: 'Publication',
    date: '2026-02-24',
    description:
      '“Design and Verification of a Query-Aware External Memory Pipeline for Small Language Models” was published in the IEEE conference proceedings.',
  },
  {
    id: 'aicomps-2025-web-search-presented',
    title: 'Paper presented at AICompS 2025',
    category: 'Conference Presentation',
    date: '2025-11-26',
    description:
      '“Web-Search-Integrated RAG for Resource-Constrained Environments: A Small-Model Approach” was listed in the official AICompS 2025 program and presented in the Applied AI for Civic & Public Safety session.',
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
