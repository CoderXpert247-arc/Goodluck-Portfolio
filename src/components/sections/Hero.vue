<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isReady = ref(false)

onMounted(() => {
  // Small delay to ensure fonts are loaded
  requestAnimationFrame(() => {
    isReady.value = true
  })
})
</script>

<template>
  <section class="lx-section lx-hero">
    <div class="ambient-bg"></div>
    <div class="lx-container hero-grid" :class="{ 'is-ready': isReady }">
      <div class="hero-content">
        <div class="hero-line hero-line-reveal"></div>
        <h1 class="lx-h1 hero-name hero-slide-up">
          Uchendu<br/>Goodluck
        </h1>
        <p class="lx-body-md hero-subtitle hero-slide-up-delay-1">
          Frontend developer & product builder who ships complete digital products end to end — from Figma concepts to deployed full-stack applications.
        </p>
        <div class="hero-cta hero-slide-up-delay-2">
          <a href="https://github.com/CoderXpert247-arc" target="_blank" rel="noopener noreferrer" class="lx-btn lx-btn-primary">
            View GitHub
            <span class="btn-arrow">→</span>
          </a>
          <a href="#contact" class="lx-btn lx-btn-secondary">
            Get in Touch
          </a>
        </div>
        <div class="hero-meta hero-slide-up-delay-3">
          <span class="meta-tag">Vue 3</span>
          <span class="meta-tag">TypeScript</span>
          <span class="meta-tag">Node.js</span>
          <span class="meta-divider">·</span>
          <span class="meta-location">Nigeria</span>
        </div>
      </div>
      <div class="hero-portrait hero-photo-reveal">
        <div class="portrait-frame">
          <picture>
            <source srcset="/images/photo.webp" type="image/webp" />
            <source srcset="/images/photo.jpg" type="image/jpeg" />
            <img 
              src="/photo.png" 
              alt="Uchendu Goodluck" 
              class="portrait-image"
              loading="eager"
              width="800"
              height="1067"
            />
          </picture>
          <div class="portrait-overlay"></div>
        </div>
        <div class="portrait-accent"></div>
      </div>
    </div>
    <div class="hero-scroll-indicator hero-slide-up-delay-4">
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<style scoped>
.lx-hero {
  padding-top: 60px;
  padding-bottom: 40px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
}

@media (min-width: 810px) {
  .hero-grid {
    grid-template-columns: 1fr auto;
    gap: 60px;
  }
}

@media (min-width: 1200px) {
  .hero-grid {
    grid-template-columns: 1fr auto;
    gap: 80px;
  }
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-line {
  height: 2px;
  background: var(--color-ink);
  margin-bottom: 32px;
}

.hero-name {
  text-align: left;
  margin-bottom: 24px;
}

@media (max-width: 809px) {
  .hero-name {
    text-align: center;
  }
}

.hero-subtitle {
  text-align: left;
  max-width: 520px;
  margin-bottom: 32px;
}

@media (max-width: 809px) {
  .hero-subtitle {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
}

.hero-cta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

@media (max-width: 809px) {
  .hero-cta {
    justify-content: center;
  }
}

.hero-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 32px;
  flex-wrap: wrap;
}

@media (max-width: 809px) {
  .hero-meta {
    justify-content: center;
  }
}

.meta-tag {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-cool-gray);
  letter-spacing: -0.02em;
  padding: 4px 10px;
  border: 1px solid var(--color-very-light-gray);
  transition: border-color 0.3s ease, color 0.3s ease;
}

.meta-tag:hover {
  border-color: var(--color-ink);
  color: var(--color-ink);
}

.meta-divider {
  color: var(--color-light-gray);
}

.meta-location {
  font-size: 13px;
  color: var(--color-cool-gray);
  letter-spacing: -0.02em;
}

.hero-portrait {
  position: relative;
  display: flex;
  justify-content: center;
}

@media (min-width: 810px) {
  .hero-portrait {
    justify-content: flex-end;
  }
}

.portrait-frame {
  position: relative;
  width: 280px;
  height: 370px;
  overflow: hidden;
}

@media (min-width: 810px) {
  .portrait-frame {
    width: 320px;
    height: 420px;
  }
}

@media (min-width: 1200px) {
  .portrait-frame {
    width: 380px;
    height: 500px;
  }
}

.portrait-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  filter: grayscale(100%) contrast(1.05);
  transition: filter 0.6s var(--ease-reveal);
}

.portrait-frame:hover .portrait-image {
  filter: grayscale(30%) contrast(1.02);
}

.portrait-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 60%, rgba(252, 252, 252, 0.4) 100%);
  pointer-events: none;
}

.portrait-accent {
  position: absolute;
  bottom: -8px;
  right: -8px;
  width: 120px;
  height: 120px;
  border: 1px solid var(--color-very-light-gray);
  z-index: -1;
}

@media (max-width: 809px) {
  .portrait-accent {
    display: none;
  }
}

.hero-scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(180deg, var(--color-ink), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% {
    opacity: 0.4;
    transform: scaleY(0.6);
    transform-origin: top;
  }
  50% {
    opacity: 1;
    transform: scaleY(1);
    transform-origin: top;
  }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-line {
    animation: none;
    opacity: 0.5;
    transform: scaleY(1);
  }
}
</style>
