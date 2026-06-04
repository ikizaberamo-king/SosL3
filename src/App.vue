<script setup>
import { RouterView, useRoute } from 'vue-router'
import Navbar from './components/ui/navbar.vue'
import Footer from './components/footer.vue'
import { computed, onMounted, watch } from 'vue'
import { useSettings } from './composables/useSettings.js'

const route = useRoute()
const hideLayout = computed(() => ['Dashboard'].includes(route.name))
const { settings } = useSettings()
const themeClass = computed(() => (settings.theme === 'dark' ? 'dark' : ''))

const applyTheme = (theme) => {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

watch(
  () => settings.theme,
  (value) => {
    applyTheme(value)
  },
  { immediate: true },
)

onMounted(() => {
  applyTheme(settings.theme)
})
</script>
<template>
  <div :class="[themeClass, 'min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100']">
    <Navbar v-if="!hideLayout" />

    <main class="flex-grow">
      <RouterView />
    </main>

    <Footer v-if="!hideLayout" />
  </div>
</template>