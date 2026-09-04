<script setup lang="ts">
import { useScrollReveal } from '../../composables/useScrollReveal'

const { elementRef, isVisible } = useScrollReveal()
</script>

<template>
  <footer 
    ref="elementRef"
    class="footer scroll-reveal"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="footer-content">
      <p class="footer-text">
        &copy; {{ new Date().getFullYear() }} Uchendu Goodluck
      </p>
      <p class="footer-credit">
        Built with Vue 3 + Typescript
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 40px var(--space-gutter);
  border-top: 1px solid var(--color-very-light-gray);
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.6s var(--ease-reveal), transform 0.6s var(--ease-reveal);
}

.footer.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
}

.footer-text {
  font-size: 14px;
  color: var(--color-cool-gray);
  margin: 0;
  letter-spacing: -0.02em;
}

.footer-credit {
  font-size: 13px;
  color: var(--color-neutral-gray);
  margin: 0;
}

@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .footer {
    opacity: 1;
    transform: none;
  }
}
</style>
