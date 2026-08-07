export type SectionId =
  | 'home'
  | 'about'
  | 'research'
  | 'people'
  | 'publications'
  | 'projects'
  | 'news'
  | 'gallery'
  | 'join-us'
  | 'contact'
  | 'resources'

export interface Person {
  id: string
  group: 'undergraduate-researchers'
  nameKo: string
  nameEn?: string
  role: 'Undergraduate Researcher'
  departmentKo?: string
  departmentEn?: string
  email?: string
  photo?: string
}

export interface ProfessorProfile {
  name: {
    ko: string
    en: string
  }
  role: {
    ko: string
    en: string
  }
  email: string
  phone: string
  office: string
}

export interface Publication {
  id: string
  title: string
  authors: string[]
  venue: string
  year: number
  researchArea: string
  links: string[]
  koreanSummary: string
  englishSummary: string
}

export interface Project {
  id: string
  title: string
  status: 'ongoing' | 'completed'
  description: string
  technology: string
  result: string
  links: string[]
}

export interface NewsItem {
  id: string
  title: string
  category: string
  date: string
  description: string
  seminarPresentations?: {
    id: string
    presenter: string
    title: string
    summary: string
    image: string
  }[]
}

export interface GalleryItem {
  id: string
  title: string
  description: string
}

export interface Resource {
  id: string
  title: string
  category: string
  description: string
  url: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  mapUrl: string
}

export interface JoinInfo {
  target: string
  field: string
  applicationMethod: string
  faq: string
}
