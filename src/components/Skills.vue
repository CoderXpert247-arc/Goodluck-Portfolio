<script setup lang="ts">
import { ref } from 'vue'
import { useStaggerReveal } from '../composables/useScrollReveal'
import { skillData, type Skill } from '../data/skills'
import SkillModal from './SkillModal.vue'

const { containerRef, visibleItems } = useStaggerReveal(skillData.length, 80)

const selectedSkill = ref<Skill | null>(null)
const isModalOpen = ref(false)

function openSkill(skill: Skill) {
  selectedSkill.value = skill
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
  setTimeout(() => {
    selectedSkill.value = null
  }, 300)
}

function getDepthIcon(depth: string): string {
  switch (depth) {
    case 'primary': return '→'
    case 'strong': return '·'
    case 'supporting': return '·'
    default: return '·'
  }
}
</script>

<template>
  <section class="lx-section skills-section">
    <div class="lx-container">
      <header class="scroll-reveal section-header">
        <h2 class="lx-h2">Skills</h2>
        <p class="lx-body-base" style="max-width: 640px; margin: 0 auto; color: var(--color-cool-gray);">
          The technologies I use to turn ideas into working products. Click to explore.
        </p>
      </header>
      
      <div ref="containerRef" class="skills-grid">
        <article 
          v-for="(category, index) in skillData" 
          :key="category.title" 
          class="lx-card skill-card"
          :class="{ 'is-visible': visibleItems[index] }"
          :style="{ transitionDelay: `${index * 80}ms` }"
        >
          <h3 class="category-title">{{ category.title }}</h3>
          <div class="skill-tags">
            <button 
              v-for="skill in category.skills" 
              :key="skill.name" 
              class="skill-tag"
              :class="[`depth-${skill.depth}`]"
              @click="openSkill(skill)"
            >
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-arrow">{{ getDepthIcon(skill.depth) }}</span>
            </button>
          </div>
        </article>
      </div>
    </div>

    <SkillModal 
      :skill="selectedSkill" 
      :is-open="isModalOpen" 
      @close="closeModal" 
    />
  </section>
</template>

<style scoped>
.skills-section {
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

.skills-grid {
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 20px;
}

.skill-card {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s var(--ease-reveal),
              transform 0.7s var(--ease-reveal),
              box-shadow 0.4s ease,
              border-color 0.4s ease;
}

.skill-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.category-title {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--color-ink);
  margin: 0 0 20px 0;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--color-very-light-gray);
}

.skill-tags {
  display: flex; 
  flex-wrap: wrap; 
  gap: 8px;
}

.skill-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--color-very-light-gray); 
  padding: 8px 16px; 
  font-family: var(--font-primary);
  font-size: 14px; 
  font-weight: 500; 
  color: var(--color-ink);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.34, 1.35, 0.64, 1);
}

.skill-tag:hover {
  background: var(--color-white);
  border-color: var(--color-ink);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.skill-tag:active {
  transform: translateY(0) scale(0.98);
}

.skill-tag.depth-primary {
  background: var(--color-ink);
  color: var(--color-white);
}

.skill-tag.depth-primary:hover {
  background: var(--color-pressed);
  border-color: var(--color-pressed);
  box-shadow: 0 4px 16px rgba(25, 25, 25, 0.2);
}

.skill-name {
  letter-spacing: -0.01em;
}

.skill-arrow {
  font-size: 12px;
  opacity: 0.5;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.skill-tag:hover .skill-arrow {
  opacity: 1;
  transform: translateX(2px);
}

.skill-tag.depth-primary .skill-arrow {
  opacity: 0.7;
}

@media (prefers-reduced-motion: reduce) {
  .section-header,
  .skill-card {
    opacity: 1;
    transform: none;
  }

  .skill-tag:hover {
    transform: none;
  }

  .skill-tag:active {
    transform: none;
  }

  .skill-tag:hover .skill-arrow {
    transform: none;
  }
}
</style>