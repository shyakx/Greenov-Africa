import { useEffect, useRef } from 'react'

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated')
          if (options.onIntersect) {
            options.onIntersect(entry.target)
          }
          if (!options.repeat) {
            observer.unobserve(entry.target)
          }
        } else if (options.repeat) {
          entry.target.classList.remove('animated')
        }
      })
    }, observerOptions)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options.threshold, options.rootMargin, options.repeat, options.onIntersect])

  return ref
}

