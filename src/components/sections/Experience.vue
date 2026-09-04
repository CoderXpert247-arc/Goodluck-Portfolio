<script setup lang="ts">
import { useScrollReveal } from '../../composables/useScrollReveal'

const { elementRef: headerRef, isVisible: headerVisible } = useScrollReveal()
const { elementRef: contentRef, isVisible: contentVisible } = useScrollReveal()

const experiences = [
  {
    role: "Independent Technology Builder",
    period: "01/2025 - Present",
    company: "Personal Ventures & Freelance",
    location: "Remote",
    highlights: [
      "Design and build digital products end-to-end: browser extensions (Chrome / Edge), SaaS tools, and web applications",
      "Own the full stack: product design in Figma, Vue 3 / TypeScript frontends, Node.js backends, MongoDB data layers, and deployment",
      "Found and ship Stacck (developer SaaS) and Lexaro (Web3 browser extension) — from concept to production",
      "Integrate AI-assisted development workflows into daily build cycles (Claude, ChatGPT, Cursor)",
      "Prototype and ship fast without handoff friction"
    ]
  }
]
</script>

<template>
  <section class="lx-section experience-section">
    <div class="lx-container">
      <header 
        ref="headerRef" 
        class="section-header scroll-reveal"
        :class="{ 'is-visible': headerVisible }"
      >
        <h2 class="lx-h2">Experience</h2>
        <p class="lx-body-base" style="max-width: 640px; margin: 0 auto; color: var(--color-cool-gray);">
          Where I've worked and what I've been building.
        </p>
      </header>

      <div 
        ref="contentRef"
        class="experience-content scroll-reveal"
        :class="{ 'is-visible': contentVisible }"
      >
        <article v-for="exp in experiences" :key="exp.role" class="experience-card">
          <div class="experience-header">
            <div>
              <h3 class="experience-role">{{ exp.role }}</h3>
              <p class="experience-company">{{ exp.company }}</p>
            </div>
            <div class="experience-meta">
              <p class="experience-period">{{ exp.period }}</p>
              <p class="experience-location">{{ exp.location }}</p>
            </div>
          </div>
          <ul class="experience-list">
            <li v-for="(highlight, i) in exp.highlights" :key="i" class="experience-item">
              <span class="item-bullet">—</span>
              <span>{{ highlight }}</span>
            </li>
          </ul>
        </article>

        <article class="education-card">
          <h3 class="education-title">Education</h3>
          <div class="education-content">
            <div>
              <p class="education-degree">Computer Science</p>
              <p class="education-institution">De-vessels College, Lagos</p>
            </div>
            <p class="education-year">2024 - 2026</p>
          </div>
          <p class="education-extra">
            Software Engineering
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  background: var(--color-soft-gray);
}

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

.experience-content {
  max-width: 720px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s var(--ease-reveal) 0.1s, transform 0.8s var(--ease-reveal) 0.1s;
}

.experience-content.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.experience-card {
  background: var(--color-white);
  border: 1px solid var(--color-very-light-gray);
  padding: 32px;
  margin-bottom: 24px;
  position: relative;
}

.experience-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background: var(--color-ink);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
}

.experience-role {
  font-size: 22px;
  letter-spacing: -0.03em;
  margin: 0 0 4px 0;
  color: var(--color-ink);
}

.experience-company {
  font-size: 15px;
  color: var(--color-cool-gray);
  margin: 0;
}

.experience-meta {
  text-align: right;
}

.experience-period {
  font-size: 14px;
  color: var(--color-cool-gray);
  margin: 0 0 4px 0;
}

.experience-location {
  font-size: 13px;
  color: var(--color-neutral-gray);
  margin: 0;
}

.experience-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.experience-item {
  display: flex;
  gap: 12px;
  font-size: 15px;
  line-height: 1.5;
  color: var(--color-cool-gray);
  margin-bottom: 12px;
}

.item-bullet {
  color: var(--color-light-gray);
  flex-shrink: 0;
}

.education-card {
  background: var(--color-white);
  border: 1px solid var(--color-very-light-gray);
  padding: 32px;
}

.education-title {
  font-size: 22px;
  letter-spacing: -0.03em;
  margin: 0 0 16px 0;
  color: var(--color-ink);
}

.education-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.education-degree {
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 4px 0;
  color: var(--color-ink);
}

.education-institution {
  font-size: 15px;
  color: var(--color-cool-gray);
  margin: 0;
}

.education-year {
  font-size: 14px;
  color: var(--color-cool-gray);
  margin: 0;
}

.education-extra {
  font-size: 14px;
  color: var(--color-neutral-gray);
  margin: 16px 0 0 0;
}

@media (max-width: 600px) {
  .experience-header {
    flex-direction: column;
    gap: 8px;
  }

  .experience-meta {
    text-align: left;
  }

  .education-content {
    flex-direction: column;
    gap: 8px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .section-header,
  .experience-content {
    opacity: 1;
    transform: none;
  }
}
</style>
