import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal(options: IntersectionObserverInit = {}) {
  const elementRef = ref<HTMLElement | null>(null)
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!elementRef.value) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      isVisible.value = true
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer?.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px', ...options }
    )

    observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { elementRef, isVisible }
}

export function useStaggerReveal(count: number, delay: number = 60) {
  const containerRef = ref<HTMLElement | null>(null)
  const isVisible = ref(false)
  const visibleItems = ref<boolean[]>(new Array(count).fill(false))
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!containerRef.value) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      isVisible.value = true
      visibleItems.value = new Array(count).fill(true)
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          for (let i = 0; i < count; i++) {
            setTimeout(() => {
              visibleItems.value[i] = true
            }, i * delay)
          }
          observer?.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(containerRef.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { containerRef, isVisible, visibleItems }
}
