<script setup>
import { useSettings } from '@/composables/useSettings.js'

const { t } = useSettings()
</script>

<template>
  <section class="bg-slate-50 min-h-screen p-6 md:p-10 dark:bg-slate-950">
    <div class="mx-auto max-w-5xl space-y-10">
      <div class="grid gap-6 md:grid-cols-3">
        <div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">{{ t('contact.emailTitle') }}</h2>
          <p class="mt-4 text-slate-600 dark:text-slate-300">info@tembera-urwanda.com</p>
        </div>
        <div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">{{ t('contact.phoneTitle') }}</h2>
          <p class="mt-4 text-slate-600 dark:text-slate-300">+250 793 211 549</p>
        </div>
        <div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">{{ t('contact.addressTitle') }}</h2>
          <p class="mt-4 text-slate-600 dark:text-slate-300">Kagugu, Kigali, Rwanda</p>
        </div>
      </div>
      <div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">{{ t('contact.supportHeading') }}</h2>
        <p class="mt-4 text-slate-600 dark:text-slate-300">{{ t('contact.supportText') }}</p>
      </div>
    </div>
  </section>
</template>
