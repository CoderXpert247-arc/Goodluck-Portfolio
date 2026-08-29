<script setup lang="ts">
import { onMounted } from 'vue'
import Hero from './components/sections/Hero.vue'
import About from './components/sections/About.vue'
import Skills from './components/Skills.vue'
import SelectedWork from './components/sections/SelectedWork.vue'
import Experience from './components/sections/Experience.vue'
import GitHub from './components/sections/GitHub.vue'
import Contact from './components/sections/Contact.vue'
import Footer from './components/sections/Footer.vue'

onMounted(() => {
  // Add scroll reveal observer for any remaining elements
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  )

  document.querySelectorAll('.scroll-reveal').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<template>
  <div id="app">
    <main>
      <Hero />
      <About />
      <Skills />
      <SelectedWork />
      <Experience />
      <GitHub />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
main {
  min-height: 100vh;
}
</style>