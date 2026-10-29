import { onMounted, onBeforeUnmount } from 'vue'

export function useReveal() {
  let observer: IntersectionObserver | undefined
  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-pending')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 },
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.classList.add('reveal-pending')
      observer?.observe(el)
    })
  })
  onBeforeUnmount(() => observer?.disconnect())
}
