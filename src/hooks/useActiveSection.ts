import { useCallback, useEffect, useState } from 'react'
import { sectionIds } from '../data/navigation'
import type { SectionId } from '../types/content'

const isSectionId = (value: string): value is SectionId =>
  sectionIds.includes(value as SectionId)

const reducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>(() => {
    const hash = window.location.hash.slice(1)
    return isSectionId(hash) ? hash : 'home'
  })

  const selectSection = useCallback((id: SectionId, updateHistory = true) => {
    setActiveSection(id)
    if (updateHistory && window.location.hash !== `#${id}`) {
      window.history.pushState(null, '', `#${id}`)
    }
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'smooth' })
    })
  }, [])

  useEffect(() => {
    const followHash = () => {
      const hash = window.location.hash.slice(1)
      const id = isSectionId(hash) ? hash : 'home'
      if (!isSectionId(hash)) window.history.replaceState(null, '', '#home')
      setActiveSection(id)
      window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'auto' }))
    }

    followHash()
    window.addEventListener('hashchange', followHash)
    window.addEventListener('popstate', followHash)
    return () => {
      window.removeEventListener('hashchange', followHash)
      window.removeEventListener('popstate', followHash)
    }
  }, [])

  return { activeSection, selectSection }
}
