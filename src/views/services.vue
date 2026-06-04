<script setup>
import tourImage from '@/assets/image/kivu.jpg'
import gorillaImage from '@/assets/image/Gorilla.jpg'
import cityImage from '@/assets/image/kigali.jpg'
import { useSettings } from '@/composables/useSettings.js'

const { t } = useSettings()

const services = [
  {
    titleKey: 'services.guidedToursTitle',
    descriptionKey: 'services.guidedToursText',
    icon: '🗺️',
  },
  {
    titleKey: 'services.wildlifeSafarisTitle',
    descriptionKey: 'services.wildlifeSafarisText',
    icon: '🐾',
  },
  {
    titleKey: 'services.culturalExperiencesTitle',
    descriptionKey: 'services.culturalExperiencesText',
    icon: '🎭',
  },
  {
    titleKey: 'services.transportationTitle',
    descriptionKey: 'services.transportationText',
    icon: '🚗',
  },
  {
    titleKey: 'services.accommodationTitle',
    descriptionKey: 'services.accommodationText',
    icon: '🏨',
  },
  {
    titleKey: 'services.customItinerariesTitle',
    descriptionKey: 'services.customItinerariesText',
    icon: '✈️',
  },
]
</script>

<template>
  <section class="bg-slate-50 min-h-screen p-6 md:p-10 dark:bg-slate-950">
    <div class="mx-auto max-w-6xl space-y-12">
      <div class="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] items-center rounded-[2.5rem] bg-white p-8 shadow-2xl border border-slate-200 dark:bg-slate-900 dark:border-slate-700">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.35em] text-green-700">{{ t('services.heroTag') }}</p>
          <h1 class="mt-4 text-5xl font-bold text-slate-900 dark:text-slate-100">{{ t('services.heroTitle') }}</h1>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{{ t('services.heroText') }}</p>
          <div class="mt-8 flex flex-wrap gap-4">
            <router-link to="/gallery/photos" class="rounded-full bg-green-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-green-800">{{ t('services.exploreGallery') }}</router-link>
            <router-link to="/contact" class="rounded-full border border-green-900 px-6 py-3 text-sm font-semibold text-green-900 hover:bg-green-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800">{{ t('services.contactUs') }}</router-link>
          </div>
        </div>

        <div class="grid gap-4">
          <div class="overflow-hidden rounded-[1.75rem] bg-slate-100">
            <img :src="tourImage" alt="Lake Kivu" class="h-72 w-full object-cover" />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="overflow-hidden rounded-[1.5rem] bg-slate-100">
              <img :src="gorillaImage" alt="Gorilla trek" class="h-36 w-full object-cover" />
            </div>
            <div class="overflow-hidden rounded-[1.5rem] bg-slate-100">
              <img :src="cityImage" alt="Kigali city" class="h-36 w-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article v-for="(service, index) in services" :key="index" class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">
          <div class="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl dark:bg-emerald-900">
            {{ service.icon }}
          </div>
          <h2 class="mt-6 text-2xl font-semibold text-slate-900 dark:text-slate-100">{{ t(service.titleKey) }}</h2>
          <p class="mt-3 text-slate-600 leading-7 dark:text-slate-300">{{ t(service.descriptionKey) }}</p>
        </article>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <div class="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h3 class="text-xl font-semibold text-green-900 dark:text-emerald-300">{{ t('services.highlight1Title') }}</h3>
          <p class="mt-3 text-slate-600 dark:text-slate-300">{{ t('services.highlight1Text') }}</p>
        </div>
        <div class="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h3 class="text-xl font-semibold text-green-900 dark:text-emerald-300">{{ t('services.highlight2Title') }}</h3>
          <p class="mt-3 text-slate-600 dark:text-slate-300">{{ t('services.highlight2Text') }}</p>
        </div>
        <div class="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h3 class="text-xl font-semibold text-green-900 dark:text-emerald-300">{{ t('services.highlight3Title') }}</h3>
          <p class="mt-3 text-slate-600 dark:text-slate-300">{{ t('services.highlight3Text') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
