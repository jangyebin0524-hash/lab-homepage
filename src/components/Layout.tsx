import type { ReactNode } from 'react'
import type { SectionId } from '../types/content'
import { Header } from './Header'

interface LayoutProps {
  children: ReactNode
  activeSection: SectionId
  onNavigate: (id: SectionId) => void
}

export function Layout({ children, activeSection, onNavigate }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#F4F7FA] text-[#1F2937]">
      <Header activeSection={activeSection} onNavigate={onNavigate} />
      <main className="min-w-0">{children}</main>
    </div>
  )
}
