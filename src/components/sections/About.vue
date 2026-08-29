<script setup lang="ts">
import { useStaggerReveal } from '../../composables/useScrollReveal'

const { containerRef, visibleItems } = useStaggerReveal(4, 100)

const cards = [
  {
    title: "Product Mindset",
    description: "I don't just write code — I build products. Every feature starts with understanding the user problem, designing the right solution in Figma, then engineering it with Vue 3, TypeScript, and Node.js."
  },
  {
    title: "AI-Assisted Development",
    description: "I integrate AI deeply into my workflow — agentic coding tools, LLM APIs, and automation scripts compress build cycles without sacrificing quality."
  },
  {
    title: "Design Engineering",
    description: "I bridge design and engineering. I create design systems in Figma, implement them as reusable Vue components with Tailwind CSS, and care about micro-interactions."
  },
  {
    title: "Full-Stack Ownership",
    description: "From Vue 3 / Vite frontends to Node.js / Express backends, MongoDB data layers, Chrome Extension APIs, and deployment on Vercel/Render — I own the entire stack."
  }
]
</script>

<template>
  <section class="lx-section">
    <div class="lx-container">
      <header class="scroll-reveal section-header">
        <h2 class="lx-h2">About</h2>
        <p class="lx-body-base" style="max-width: 640px; margin: 0 auto; color: var(--color-cool-gray);">
          I'm a self-taught frontend developer and product builder who ships complete digital products end to end — from Figma concepts to deployed full-stack applications.
        </p>
      </header>
      
      <div ref="containerRef" class="about-grid">
        <article 
          v-for="(card, index) in cards" 
          :key="card.title" 
          class="lx-card about-card"
          :class="{ 'is-visible': visibleItems[index] }"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div class="card-index">{{ String(index + 1).padStart(2, '0') }}</div>
          <h3 class="lx-h4" style="margin-bottom: 16px;">{{ card.title }}</h3>
          <p class="lx-body-base">{{ card.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: 64px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s var(--ease-reveal), transform 0.8s var(--ease-reveal);
}

.section-header.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.about-grid {
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
  gap: 24px; 
  max-width: 1100px; 
  margin: 0 auto;
}

.about-card {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s var(--ease-reveal),
              transform 0.7s var(--ease-reveal),
              box-shadow 0.4s ease,
              border-color 0.4s ease;
}

.about-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.card-index {
  font-family: var(--font-accent);
  font-size: 12px;
  font-weight: 500;
  color: var(--color-light-gray);
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

@media (prefers-reduced-motion: reduce) {
  .section-header,
  .about-card {
    opacity: 1;
    transform: none;
  }
}
</style>