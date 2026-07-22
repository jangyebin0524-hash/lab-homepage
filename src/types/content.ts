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
  group: 'current-members' | 'graduate-students' | 'undergraduate-researchers' | 'alumni'
  name: string
  title: string
  affiliation: string
  email: string
  location: string
  research: string[]
  links: string[]
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
  links: string[]
}

export interface NewsItem {
  id: string
  title: string
  category: string
  date: string
  description: string
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
