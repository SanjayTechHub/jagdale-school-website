import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nodes = document.querySelectorAll('.reveal, .reveal-fade, .reveal-image')

    if (reduceMotion) {
      nodes.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    )

    nodes.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
