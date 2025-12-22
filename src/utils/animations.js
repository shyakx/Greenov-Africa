// Intersection Observer for scroll animations
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all elements with animate-on-scroll class
  const elements = document.querySelectorAll('.animate-on-scroll')
  elements.forEach((el) => observer.observe(el))

  return observer
}

// Counter animation for numbers
export const animateCounter = (element, target, duration = 2000) => {
  const start = 0
  const increment = target / (duration / 16)
  let current = start

  const updateCounter = () => {
    current += increment
    if (current < target) {
      const displayValue = Math.floor(current)
      element.textContent = formatNumber(displayValue)
      requestAnimationFrame(updateCounter)
    } else {
      element.textContent = formatNumber(target)
    }
  }

  updateCounter()
}

// Format numbers with + or M suffix
const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M+'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'K+'
  }
  return num + '+'
}

// Stagger animation for cards
export const staggerCards = (containerSelector, delay = 100) => {
  const container = document.querySelector(containerSelector)
  if (!container) return

  const cards = container.querySelectorAll('.card')
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * delay}ms`
    card.classList.add('animate-on-scroll')
  })
}

// Parallax effect
export const initParallax = () => {
  const parallaxElements = document.querySelectorAll('.parallax')
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset
    
    parallaxElements.forEach((element) => {
      const speed = element.dataset.speed || 0.5
      const yPos = -(scrolled * speed)
      element.style.transform = `translateY(${yPos}px)`
    })
  })
}

