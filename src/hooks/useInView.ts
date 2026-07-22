import { useEffect, useRef, useState } from 'react'

export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, isInView }
}
