<script setup lang="ts">
import { ref } from 'vue'
import { useStaggerReveal } from '../../composables/useScrollReveal'

const { containerRef, visibleItems } = useStaggerReveal(3, 120)

const projects = [
  {
    title: "Lexaro",
    subtitle: "Web3 Wallet Chrome Extension",
    description: "A browser extension focused on making wallet and dApp interactions more seamless across supported web applications.",
    tech: ["Vue 3", "TypeScript", "Chrome Extension APIs", "Manifest V3", "Tailwind CSS"],
    url: null,
    visibility: 'private' as const,
    year: "2025"
  },
  {
    title: "Stacck",
    subtitle: "Developer SaaS Platform",
    description: "SaaS platform for developers. Full-stack build from concept to deployment — product design, component architecture, Node.js backend, and Vercel deployment.",
    tech: ["Vue 3", "TypeScript", "Node.js", "Vite", "Vercel"],
    url: null,
    visibility: 'private' as const,
    year: "2025"
  },
  {
    title: "Lexaro Dapp",
    subtitle: "Web3 Decentralized Application",
    description: "Decentralized frontend for Lexaro ecosystem — connects wallets, handles on-chain transactions, and provides a seamless dApp experience for users.",
    tech: ["Vue 3", "TypeScript", "Web3.js", "Tailwind CSS"],
    url: null,
    visibility: 'private' as const,
    year: "2025"
  }
]

const selectedProject = ref<typeof projects[0] | null>(null)
const isModalOpen = ref(false)

function openProject(project: typeof projects[0]) {
  if (project.visibility === 'private') {
    selectedProject.value = project
    isModalOpen.value = true
  }
}

function closeModal() {
  isModalOpen.value = false
  setTimeout(() => {
    selectedProject.value = null
  }, 300)
}
</script>

<template>
  <section class="lx-section">
    <div class="lx-container">
      <header class="scroll-reveal section-header">
        <h2 class="lx-h2">Selected Work</h2>
        <p class="lx-body-base" style="max-width: 640px; margin: 0 auto; color: var(--color-cool-gray);">
          Products I've built end-to-end — from concept and Figma design to deployed applications.
        </p>
      </header>

      <div ref="containerRef" class="projects-list">
        <article 
          v-for="(project, index) in projects" 
          :key="project.title" 
          class="project-card"
          :class="{ 
            'is-visible': visibleItems[index],
            'is-private': project.visibility === 'private'
          }"
          :style="{ transitionDelay: `${index * 120}ms` }"
          @click="openProject(project)"
        >
          <div class="project-header">
            <div class="project-info">
              <span class="project-year">{{ project.year }}</span>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-subtitle">{{ project.subtitle }}</p>
            </div>
            <span v-if="project.visibility === 'private'" class="private-badge">
              Private
            </span>
          </div>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tech">
            <span v-for="tech in project.tech" :key="tech" class="tech-item">
              {{ tech }}
            </span>
          </div>
        </article>
      </div>
    </div>

    <!-- Private Project Modal -->
    <Teleport to="body">
      <Transition name="backdrop">
        <div 
          v-if="isModalOpen" 
          class="modal-backdrop"
          @click="closeModal"
        />
      </Transition>
      
      <Transition name="modal">
        <div 
          v-if="isModalOpen && selectedProject"
          class="modal-container"
          role="dialog"
          :aria-label="`${selectedProject.title} details`"
          aria-modal="true"
        >
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title-group">
                <h3 class="modal-title">{{ selectedProject.title }}</h3>
                <span class="modal-badge">Private Project</span>
              </div>
              <button 
                class="modal-close" 
                @click="closeModal"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            <div class="modal-body">
              <div class="modal-section">
                <h4 class="section-label">What it is</h4>
                <p class="section-text">{{ selectedProject.subtitle }}</p>
              </div>

              <div class="modal-section">
                <h4 class="section-label">Overview</h4>
                <p class="section-text">{{ selectedProject.description }}</p>
              </div>

              <div class="modal-section">
                <h4 class="section-label">My role</h4>
                <p class="section-text">Software architecture, frontend engineering, browser-extension development, and product design.</p>
              </div>

              <div class="modal-section">
                <h4 class="section-label">Stack</h4>
                <div class="modal-tech">
                  <span v-for="tech in selectedProject.tech" :key="tech" class="tech-item">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button 
                class="modal-done" 
                @click="closeModal"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
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

.projects-list {
  display: grid;
  gap: 24px;
  max-width: 960px;
  margin: 0 auto;
}

.project-card {
  padding: 40px 32px;
  background: var(--color-white);
  border: 1px solid var(--color-very-light-gray);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s var(--ease-reveal),
              transform 0.7s var(--ease-reveal),
              box-shadow 0.4s ease,
              border-color 0.4s ease;
}

.project-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.project-card.is-private {
  cursor: pointer;
}

.project-card.is-private:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
  border-color: var(--color-light-gray);
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-ink);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s var(--ease-expand);
}

.project-card.is-private:hover::before {
  transform: scaleX(1);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 20px;
}

.project-info {
  flex: 1;
}

.project-year {
  font-family: var(--font-accent);
  font-size: 12px;
  font-weight: 500;
  color: var(--color-light-gray);
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 8px;
}

.project-title {
  font-size: 32px;
  letter-spacing: -0.03em;
  line-height: 1.1em;
  margin: 0 0 8px 0;
  color: var(--color-ink);
  transition: color 0.3s ease;
}

.project-card.is-private:hover .project-title {
  color: var(--color-pressed);
}

.project-subtitle {
  font-size: 16px;
  color: var(--color-cool-gray);
  margin: 0;
  letter-spacing: -0.02em;
}

.private-badge {
  font-size: 11px;
  font-weight: 500;
  color: var(--color-cool-gray);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 4px 10px;
  border: 1px solid var(--color-very-light-gray);
  flex-shrink: 0;
}

.project-description {
  font-size: 15px;
  line-height: 1.6;
  color: var(--color-cool-gray);
  margin: 0 0 24px 0;
  max-width: 720px;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-item {
  font-size: 12px;
  font-weight: 500;
  color: var(--color-ink);
  padding: 4px 12px;
  background: var(--color-soft-gray);
  letter-spacing: -0.01em;
}

/* Modal Styles */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(25, 25, 25, 0.4);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 1000;
}

.modal-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  z-index: 1001;
  width: calc(100% - 48px);
  max-width: 480px;
  max-height: calc(100vh - 80px);
  outline: none;
}

.modal-content {
  background: var(--color-white);
  border: 1px solid var(--color-very-light-gray);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 80px);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 28px 28px 0 28px;
  gap: 16px;
}

.modal-title-group {
  flex: 1;
}

.modal-title {
  font-size: 24px;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 0 0 6px 0;
  color: var(--color-ink);
}

.modal-badge {
  font-size: 11px;
  font-weight: 500;
  color: var(--color-cool-gray);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.modal-close {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid var(--color-very-light-gray);
  color: var(--color-cool-gray);
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
  line-height: 1;
  padding: 0;
}

.modal-close:hover {
  background: var(--color-soft-gray);
  color: var(--color-ink);
  border-color: var(--color-light-gray);
}

.modal-body {
  padding: 24px 28px;
  overflow-y: auto;
  flex: 1;
}

.modal-section {
  margin-bottom: 24px;
}

.modal-section:last-child {
  margin-bottom: 0;
}

.section-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--color-neutral-gray);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin: 0 0 8px 0;
}

.section-text {
  font-size: 15px;
  line-height: 1.6;
  color: var(--color-ink);
  margin: 0;
}

.modal-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.modal-footer {
  padding: 0 28px 24px 28px;
  display: flex;
  justify-content: flex-end;
}

.modal-done {
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-ink);
  background: none;
  border: 1px solid var(--color-very-light-gray);
  padding: 8px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-done:hover {
  background: var(--color-soft-gray);
  border-color: var(--color-light-gray);
}

/* Transitions */
.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.3s ease;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

.modal-enter-active {
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.35, 0.64, 1);
}

.modal-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.modal-enter-from {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.96);
}

.modal-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.98);
}

/* Mobile */
@media (max-width: 600px) {
  .project-card {
    padding: 28px 20px;
  }

  .project-title {
    font-size: 26px;
  }

  .project-header {
    flex-direction: column;
    gap: 12px;
  }

  .modal-container {
    width: calc(100% - 32px);
    max-height: calc(100vh - 48px);
  }

  .modal-header {
    padding: 24px 24px 0 24px;
  }

  .modal-body {
    padding: 20px 24px;
  }

  .modal-footer {
    padding: 0 24px 20px 24px;
  }

  .modal-title {
    font-size: 20px;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .section-header,
  .project-card {
    opacity: 1;
    transform: none;
  }

  .project-card.is-private:hover {
    transform: none;
  }

  .project-card::before {
    display: none;
  }

  .modal-backdrop,
  .modal-container {
    transition: opacity 0.01ms ease;
  }

  .modal-enter-from,
  .modal-leave-to {
    transform: translate(-50%, -50%);
  }
}
</style>