import { useEffect, useRef, useState } from 'react'

export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const elementHeight = element.getBoundingClientRect().height
    const threshold = elementHeight > 0 ? Math.min(0.15, 64 / elementHeight) : 0.15

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, isInView }
}
