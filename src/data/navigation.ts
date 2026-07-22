import type { SectionId } from '../types/content'

export interface NavigationItem {
  index: string
  label: string
  id: SectionId
}

export const navigation: NavigationItem[] = [
  { index: '01', label: 'Home', id: 'home' },
  { index: '02', label: 'About', id: 'about' },
  { index: '03', label: 'Research', id: 'research' },
  { index: '04', label: 'People', id: 'people' },
  { index: '05', label: 'Publications', id: 'publications' },
  { index: '06', label: 'Projects', id: 'projects' },
  { index: '07', label: 'News', id: 'news' },
  { index: '08', label: 'Gallery', id: 'gallery' },
  { index: '09', label: 'Join Us', id: 'join-us' },
  { index: '10', label: 'Contact', id: 'contact' },
  { index: '11', label: 'Resources', id: 'resources' },
]

export const sectionIds = navigation.map((item) => item.id)
