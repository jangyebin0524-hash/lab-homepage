import type { ReactNode } from 'react'
import type { SectionId } from '../types/content'
import { Header } from './Header'

interface LayoutProps {
  children: ReactNode
  onNavigate: (id: SectionId) => void
}

export function Layout({ children, onNavigate }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#222222]">
      <Header onNavigate={onNavigate} />
      <main className="min-w-0">{children}</main>
    </div>
  )
}
