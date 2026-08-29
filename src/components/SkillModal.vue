<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import type { Skill } from '../data/skills'

const props = defineProps<{
  skill: Skill | null
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const modalRef = ref<HTMLElement | null>(null)
const previousFocus = ref<HTMLElement | null>(null)
const isAnimating = ref(false)
const isVisible = ref(false)

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

function handleBackdropClick(e: MouseEvent) {
  if (e.target === e.currentTarget) {
    emit('close')
  }
}

function focusModal() {
  nextTick(() => {
    modalRef.value?.focus()
  })
}

watch(() => props.isOpen, (open) => {
  if (open) {
    previousFocus.value = document.activeElement as HTMLElement
    document.body.style.overflow = 'hidden'
    isAnimating.value = true
    requestAnimationFrame(() => {
      isVisible.value = true
      focusModal()
    })
  } else {
    isVisible.value = false
    setTimeout(() => {
      document.body.style.overflow = ''
      previousFocus.value?.focus()
      isAnimating.value = false
    }, 300)
  }
})

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

function getDepthLabel(depth: string): string {
  switch (depth) {
    case 'primary': return 'Core Technology'
    case 'strong': return 'Strong Experience'
    case 'supporting': return 'Supporting Tool'
    default: return ''
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="backdrop">
      <div 
        v-if="isOpen" 
        class="modal-backdrop"
        :class="{ 'is-visible': isVisible }"
        @click="handleBackdropClick"
        aria-hidden="true"
      />
    </Transition>
    
    <Transition name="modal">
      <div 
        v-if="isOpen && skill"
        ref="modalRef"
        class="modal-container"
        :class="{ 'is-visible': isVisible }"
        role="dialog"
        :aria-label="`${skill.name} details`"
        aria-modal="true"
        tabindex="-1"
      >
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title-group">
              <h3 class="modal-title">{{ skill.name }}</h3>
              <span class="modal-depth">{{ getDepthLabel(skill.depth) }}</span>
            </div>
            <button 
              class="modal-close" 
              @click="emit('close')"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>

          <div class="modal-body">
            <div class="modal-section">
              <h4 class="section-label">What it is</h4>
              <p class="section-text">{{ skill.whatItIs }}</p>
            </div>

            <div class="modal-section">
              <h4 class="section-label">How I use it</h4>
              <p class="section-text">{{ skill.howIUseIt }}</p>
            </div>

            <div class="modal-section">
              <h4 class="section-label">In my work</h4>
              <p class="section-text">{{ skill.inMyWork }}</p>
            </div>
          </div>

          <div class="modal-footer">
            <button 
              class="modal-done" 
              @click="emit('close')"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(25, 25, 25, 0.4);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.modal-backdrop.is-visible {
  opacity: 1;
}

.modal-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -48%) scale(0.96);
  z-index: 1001;
  width: calc(100% - 48px);
  max-width: 480px;
  max-height: calc(100vh - 80px);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.35, 0.64, 1);
  outline: none;
}

.modal-container.is-visible {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
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

.modal-depth {
  font-size: 12px;
  font-weight: 500;
  color: var(--color-cool-gray);
  letter-spacing: 0.02em;
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
  transform: translate(-50%, -48%) scale(0.96);
}

.modal-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.98);
}

/* Mobile */
@media (max-width: 600px) {
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