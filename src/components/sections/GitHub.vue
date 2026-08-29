<script setup lang="ts">
import { useScrollReveal } from '../../composables/useScrollReveal'

const { elementRef, isVisible } = useScrollReveal()
</script>

<template>
  <section class="lx-section github-section">
    <div class="lx-container">
      <div 
        ref="elementRef"
        class="github-content scroll-reveal-scale"
        :class="{ 'is-visible': isVisible }"
      >
        <div class="github-text">
          <h2 class="lx-h2" style="margin-bottom: 16px;">GitHub</h2>
          <p class="lx-body-base" style="max-width: 480px; color: var(--color-cool-gray);">
            Check out my recent projects and contributions on GitHub.
          </p>
        </div>
        <a 
          href="https://github.com/CoderXpert247-arc" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="github-link"
        >
          <span class="github-link-text">View Profile</span>
          <span class="github-link-arrow">→</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.github-section {
  background: var(--color-ink);
  color: var(--color-white);
  position: relative;
  overflow: hidden;
}

.github-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 60%;
  height: 200%;
  background: radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 70%);
  pointer-events: none;
}

.github-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  opacity: 0;
  transform: scale(0.96);
  transition: opacity 0.8s var(--ease-reveal), transform 0.8s var(--ease-reveal);
}

.github-content.is-visible {
  opacity: 1;
  transform: scale(1);
}

.github-text {
  flex: 1;
  min-width: 300px;
}

.github-text .lx-h2 {
  color: var(--color-white);
}

.github-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
  color: var(--color-ink);
  background: var(--color-white);
  text-decoration: none;
  padding: 14px 32px;
  transition: all 0.3s var(--ease-button);
  position: relative;
  overflow: hidden;
}

.github-link::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--color-soft-gray);
  transform: translateX(-100%);
  transition: transform 0.4s var(--ease-expand);
}

.github-link:hover::before {
  transform: translateX(0);
}

.github-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.github-link:active {
  transform: translateY(0) scale(0.98);
}

.github-link-text,
.github-link-arrow {
  position: relative;
  z-index: 1;
}

.github-link:hover .github-link-arrow {
  transform: translateX(4px);
}

.github-link-arrow {
  transition: transform 0.3s var(--ease-button);
}

@media (max-width: 600px) {
  .github-content {
    flex-direction: column;
    text-align: center;
  }

  .github-text {
    min-width: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .github-content {
    opacity: 1;
    transform: none;
  }

  .github-link::before {
    display: none;
  }

  .github-link:hover {
    transform: none;
  }

  .github-link:hover .github-link-arrow {
    transform: none;
  }
}
</style>