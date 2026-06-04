<script setup>
import heroImage from '@/assets/image/Rwanda.jpg'
import { useSettings } from '@/composables/useSettings.js'

const { t } = useSettings()
</script>

<template>
  <section class="space-y-10 p-6 md:p-10">
    <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">{{ t('home.heroTag') }}</p>
        <h1 class="mt-4 text-5xl font-bold text-slate-900 dark:text-slate-100">{{ t('home.heroTitle') }}</h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{{ t('home.heroText') }}</p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="/services" class="rounded-full bg-green-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-green-800">{{ t('home.viewServices') }}</a>
          <a href="/gallery/photos" class="rounded-full border border-green-900 px-6 py-3 text-sm font-semibold text-green-900 hover:bg-green-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800">{{ t('home.browseGallery') }}</a>
        </div>
      </div>

      <div class="overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg">
        <img :src="heroImage" alt="Rwanda landscape" class="h-full w-full object-cover" />
      </div>
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-xl font-semibold text-green-900">Wildlife Adventures</h2>
        <p class="mt-3 text-slate-600">Track mountain gorillas and explore national parks for unforgettable wildlife moments.</p>
      </div>
      <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-xl font-semibold text-green-900">Cultural Discovery</h2>
        <p class="mt-3 text-slate-600">Enjoy local crafts, music, and traditions across Rwanda’s provinces.</p>
      </div>
      <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-xl font-semibold text-green-900">Scenic Destinations</h2>
        <p class="mt-3 text-slate-600">Visit Kigali, Lake Kivu, Volcanoes, and more with guided tour options.</p>
      </div>
    </div>
  </section>
</template>
