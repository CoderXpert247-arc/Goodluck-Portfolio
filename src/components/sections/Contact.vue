<script setup lang="ts">
import { useScrollReveal } from '../../composables/useScrollReveal'

const { elementRef: headerRef, isVisible: headerVisible } = useScrollReveal()
const { elementRef: actionsRef, isVisible: actionsVisible } = useScrollReveal()
const { elementRef: emailRef, isVisible: emailVisible } = useScrollReveal()
</script>

<template>
  <section id="contact" class="lx-section">
    <div class="lx-container">
      <header 
        ref="headerRef"
        class="section-header scroll-reveal"
        :class="{ 'is-visible': headerVisible }"
      >
        <h2 class="lx-h2">Get in Touch</h2>
        <p class="lx-body-base" style="max-width: 640px; margin: 0 auto; color: var(--color-cool-gray);">
          Interested in working together? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </header>

      <div 
        ref="actionsRef"
        class="contact-actions scroll-reveal"
        :class="{ 'is-visible': actionsVisible }"
      >
        <a href="mailto:uchendugoodluck067@gmail.com" class="contact-link primary">
          <span class="contact-link-text">Email Me</span>
          <span class="contact-link-arrow">→</span>
        </a>
        <a 
          href="https://github.com/CoderXpert247-arc" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="contact-link secondary"
        >
          <span class="contact-link-text">GitHub</span>
          <span class="contact-link-arrow">↗</span>
        </a>
      </div>

      <div 
        ref="emailRef"
        class="contact-email scroll-reveal"
        :class="{ 'is-visible': emailVisible }"
        style="transition-delay: 0.1s;"
      >
        <a href="mailto:uchendugoodluck067@gmail.com" class="email-display">
          uchendugoodluck067@gmail.com
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: 48px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s var(--ease-reveal), transform 0.8s var(--ease-reveal);
}

.section-header.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.contact-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s var(--ease-reveal) 0.1s, transform 0.8s var(--ease-reveal) 0.1s;
}

.contact-actions.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  padding: 12px 28px;
  transition: all 0.3s var(--ease-button);
  position: relative;
  overflow: hidden;
}

.contact-link::before {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  transition: transform 0.4s var(--ease-expand);
}

.contact-link:hover::before {
  transform: translateX(0);
}

.contact-link.primary {
  background: var(--color-ink);
  color: var(--color-white);
}

.contact-link.primary::before {
  background: var(--color-pressed);
}

.contact-link.secondary {
  background: var(--color-bg);
  color: var(--color-ink);
  border: 1px solid var(--color-very-light-gray);
}

.contact-link.secondary::before {
  background: var(--color-off-white);
}

.contact-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.contact-link:active {
  transform: translateY(0) scale(0.98);
}

.contact-link-text,
.contact-link-arrow {
  position: relative;
  z-index: 1;
}

.contact-link:hover .contact-link-arrow {
  transform: translateX(3px);
}

.contact-link-arrow {
  transition: transform 0.3s var(--ease-button);
  font-size: 14px;
}

.contact-email {
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s var(--ease-reveal) 0.2s, transform 0.8s var(--ease-reveal) 0.2s;
}

.contact-email.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.email-display {
  font-size: 14px;
  color: var(--color-cool-gray);
  text-decoration: none;
  letter-spacing: -0.02em;
  transition: color 0.3s ease;
  border-bottom: 1px solid transparent;
}

.email-display:hover {
  color: var(--color-ink);
  border-bottom-color: var(--color-ink);
}

@media (prefers-reduced-motion: reduce) {
  .section-header,
  .contact-actions,
  .contact-email {
    opacity: 1;
    transform: none;
  }

  .contact-link::before {
    display: none;
  }

  .contact-link:hover {
    transform: none;
  }

  .contact-link:hover .contact-link-arrow {
    transform: none;
  }
}
</style>