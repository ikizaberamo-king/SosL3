<script setup>
import { useSettings } from '@/composables/useSettings.js'
import { computed } from 'vue'

const { settings, t, toggleTheme, setLocale } = useSettings()
const themeLabel = computed(() => (settings.theme === 'dark' ? t('theme.light') : t('theme.dark')))
</script>

<template>
  <nav class="bg-green-900 text-white flex flex-col md:flex-row md:items-center p-4 gap-4 shadow-lg dark:bg-slate-950 dark:text-slate-100">
    <div class="flex items-center gap-4">
      <img src="../../assets/image/conv.jpg" alt="Rwanda Flag" class="w-10 h-10 rounded-full" />
      <span class="text-white text-lg font-bold dark:text-slate-100">Tembera Urwanda</span>
    </div>

    <div class="flex flex-1 flex-col md:flex-row md:items-center md:justify-between gap-4">
      <ul class="text-white dark:text-slate-100 flex flex-wrap gap-4 font-medium justify-center md:justify-start">
        <li><router-link to="/" class="hover:text-yellow-300">{{ t('navbar.home') }}</router-link></li>
        <li><router-link to="/about" class="hover:text-yellow-300">{{ t('navbar.about') }}</router-link></li>
        <li><router-link to="/services" class="hover:text-yellow-300">{{ t('navbar.services') }}</router-link></li>
        <li class="relative group">
          <router-link to="/gallery" class="hover:text-yellow-300">{{ t('navbar.gallery') }}<span>▼</span></router-link>
          <ul class="hidden group-hover:block absolute bg-white text-green-900 rounded shadow w-48 mt-2 z-50 dark:bg-slate-900 dark:text-slate-100">
            <li><router-link to="/gallery/photos" class="block px-4 py-2 hover:bg-green-200 dark:hover:bg-slate-700 dark:text-slate-100">{{ t('navbar.photos') }}</router-link></li>
            <li><router-link to="/gallery/videos" class="block px-4 py-2 hover:bg-green-200 dark:hover:bg-slate-700 dark:text-slate-100">{{ t('navbar.videos') }}</router-link></li>
          </ul>
        </li>
        <li class="relative group">
          <a href="#" class="hover:text-yellow-300">{{ t('navbar.destination') }} ▼</a>
          <ul class="hidden group-hover:block absolute bg-white text-green-900 rounded shadow w-52 mt-2 z-50 dark:bg-slate-900 dark:text-slate-100">
            <li><router-link to="/northern" class="block px-4 py-2 hover:bg-green-200 dark:hover:bg-slate-700 dark:text-slate-100">{{ t('navbar.northern') }}</router-link></li>
            <li><router-link to="/eastern" class="block px-4 py-2 hover:bg-green-200 dark:hover:bg-slate-700 dark:text-slate-100">{{ t('navbar.eastern') }}</router-link></li>
            <li><router-link to="/kigali" class="block px-4 py-2 hover:bg-green-200 dark:hover:bg-slate-700 dark:text-slate-100">{{ t('navbar.kigali') }}</router-link></li>
            <li><router-link to="/western" class="block px-4 py-2 hover:bg-green-200 dark:hover:bg-slate-700 dark:text-slate-100">{{ t('navbar.western') }}</router-link></li>
            <li><router-link to="/southern" class="block px-4 py-2 hover:bg-green-200 dark:hover:bg-slate-700 dark:text-slate-100">{{ t('navbar.southern') }}</router-link></li>
          </ul>
        </li>
        <li><router-link to="/contact" class="hover:text-yellow-300">{{ t('navbar.contact') }}</router-link></li>
        <li><router-link to="/login" class="hover:text-yellow-300">{{ t('navbar.login') }}</router-link></li>
      </ul>

      <div class="flex flex-wrap items-center gap-3 justify-center md:justify-end">
        <button
          type="button"
          @click="toggleTheme"
          class="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-slate-900 transition hover:border-white hover:bg-white dark:border-slate-500 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
        >
          {{ themeLabel }}
        </button>

        <label class="flex items-center gap-2 text-sm text-white dark:text-slate-200">
          <span>{{ t('language.label') }}:</span>
          <select
            v-model="settings.locale"
            @change="setLocale(settings.locale)"
            class="rounded-lg border border-white/25 bg-white/10 px-2 py-1 text-sm text-slate-900 outline-none dark:border-slate-500 dark:bg-slate-800 dark:text-slate-100"
          >
            <option value="en">{{ t('language.en') }}</option>
            <option value="fr">{{ t('language.fr') }}</option>
            <option value="rw">{{ t('language.rw') }}</option>
          </select>
        </label>
      </div>
    </div>
  </nav>
</template>
