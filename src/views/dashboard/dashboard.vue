<script setup>
import { useSettings } from '@/composables/useSettings.js'

const { t } = useSettings()
</script>

<template>
  <section class="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl space-y-8">
      <div class="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/90 shadow-2xl backdrop-blur-xl">
        <div class="grid gap-8 px-6 py-8 lg:grid-cols-[1.8fr_1fr] lg:px-10 lg:py-10">
          <div class="space-y-6">
            <span class="inline-flex items-center rounded-full bg-emerald-500/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">
              {{ t('dashboard.welcomeTag') }}
            </span>
            <h1 class="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {{ t('dashboard.title') }}
            </h1>
            <p class="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {{ t('dashboard.subtitle') }}
            </p>
            <div class="grid gap-3 sm:max-w-md sm:grid-cols-2">
              <div class="rounded-3xl bg-slate-800/75 p-5 ring-1 ring-white/10">
                <p class="text-xs uppercase tracking-[0.3em] text-slate-400">{{ t('dashboard.status') }}</p>
                <p class="mt-3 text-2xl font-semibold text-emerald-300">{{ t('dashboard.active') }}</p>
              </div>
              <div class="rounded-3xl bg-slate-800/75 p-5 ring-1 ring-white/10">
                <p class="text-xs uppercase tracking-[0.3em] text-slate-400">Quick action</p>
                <p class="mt-3 text-base leading-6 text-slate-200">Manage bookings, itinerary, and profile with one tap.</p>
              </div>
            </div>
          </div>
          <div class="rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl ring-1 ring-white/10">
            <div class="flex items-center justify-between gap-4">
              <div>
                <p class="text-sm uppercase tracking-[0.28em] text-slate-400">Insights</p>
                <h2 class="mt-3 text-2xl font-semibold text-white">Travel snapshot</h2>
              </div>
              <span class="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">VIP</span>
            </div>
            <div class="mt-8 space-y-5">
              <div class="rounded-[1.75rem] bg-slate-950/90 p-5 ring-1 ring-white/5">
                <div class="flex items-center justify-between gap-4">
                  <div>
                    <p class="text-sm text-slate-400">Upcoming trip</p>
                    <p class="mt-2 text-lg font-semibold text-white">Kigali city break</p>
                    <p class="mt-1 text-sm text-slate-500">Jun 14 - Jun 18 · 3 nights</p>
                  </div>
                  <div class="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-300">Confirmed</div>
                </div>
              </div>
              <div class="rounded-[1.75rem] bg-slate-950/90 p-5 ring-1 ring-white/5">
                <div class="flex items-center justify-between gap-4">
                  <div>
                    <p class="text-sm text-slate-400">Booking progress</p>
                    <p class="mt-2 text-lg font-semibold text-white">72%</p>
                  </div>
                  <div class="h-2 w-24 overflow-hidden rounded-full bg-slate-800">
                    <div class="h-full w-3/4 rounded-full bg-emerald-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid gap-6 xl:grid-cols-[1.8fr_1fr]">
        <div class="space-y-6">
          <div class="grid gap-6 md:grid-cols-3">
            <div class="rounded-[2rem] bg-slate-900/90 p-6 ring-1 ring-white/10 shadow-xl">
              <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                <span>👁️</span>
              </div>
              <h3 class="mt-6 text-lg font-semibold text-white">{{ t('dashboard.stats.visits') }}</h3>
              <p class="mt-4 text-4xl font-semibold text-emerald-300">1.2K</p>
              <p class="mt-2 text-sm text-slate-400">{{ t('dashboard.stats.visitsLabel') }}</p>
            </div>
            <div class="rounded-[2rem] bg-slate-900/90 p-6 ring-1 ring-white/10 shadow-xl">
              <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-300">
                <span>🧾</span>
              </div>
              <h3 class="mt-6 text-lg font-semibold text-white">{{ t('dashboard.stats.bookings') }}</h3>
              <p class="mt-4 text-4xl font-semibold text-sky-300">24</p>
              <p class="mt-2 text-sm text-slate-400">{{ t('dashboard.stats.bookingsLabel') }}</p>
            </div>
            <div class="rounded-[2rem] bg-slate-900/90 p-6 ring-1 ring-white/10 shadow-xl">
              <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
                <span>⭐</span>
              </div>
              <h3 class="mt-6 text-lg font-semibold text-white">{{ t('dashboard.stats.reviews') }}</h3>
              <p class="mt-4 text-4xl font-semibold text-violet-300">92%</p>
              <p class="mt-2 text-sm text-slate-400">{{ t('dashboard.stats.reviewsLabel') }}</p>
            </div>
          </div>

          <div class="rounded-[2rem] bg-slate-900/90 p-8 ring-1 ring-white/10 shadow-2xl">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 class="text-2xl font-semibold text-white">{{ t('dashboard.recentTitle') }}</h2>
                <p class="mt-3 text-slate-400">{{ t('dashboard.recentSubtitle') }}</p>
              </div>
              <div class="flex flex-wrap gap-3">
                <button class="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
                  Book new tour
                </button>
                <button class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
                  View itinerary
                </button>
              </div>
            </div>
            <div class="mt-8 grid gap-4 md:grid-cols-2">
              <div class="rounded-[1.75rem] bg-slate-950/90 p-6 ring-1 ring-white/5">
                <h3 class="text-lg font-semibold text-white">{{ t('dashboard.recentCard1.title') }}</h3>
                <p class="mt-3 text-slate-400">{{ t('dashboard.recentCard1.text') }}</p>
              </div>
              <div class="rounded-[1.75rem] bg-slate-950/90 p-6 ring-1 ring-white/5">
                <h3 class="text-lg font-semibold text-white">{{ t('dashboard.recentCard2.title') }}</h3>
                <p class="mt-3 text-slate-400">{{ t('dashboard.recentCard2.text') }}</p>
              </div>
            </div>
          </div>
        </div>

        <aside class="space-y-6">
          <div class="rounded-[2rem] bg-slate-900/90 p-8 ring-1 ring-white/10 shadow-2xl">
            <div class="flex items-center justify-between gap-4">
              <div>
                <p class="text-sm uppercase tracking-[0.28em] text-slate-400">Focus</p>
                <h3 class="mt-2 text-xl font-semibold text-white">Today’s plan</h3>
              </div>
              <div class="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Live</div>
            </div>
            <div class="mt-6 space-y-5">
              <div class="rounded-3xl bg-slate-950/90 p-5 ring-1 ring-white/5">
                <p class="text-sm text-slate-400">Recommended next step</p>
                <p class="mt-2 text-lg font-semibold text-white">Review your itinerary</p>
                <p class="mt-1 text-sm text-slate-500">Check travel details before your next adventure.</p>
              </div>
              <div class="rounded-3xl bg-slate-950/90 p-5 ring-1 ring-white/5">
                <div class="flex items-center justify-between gap-4">
                  <p class="text-sm text-slate-400">Support rating</p>
                  <p class="text-sm font-semibold text-white">High</p>
                </div>
                <div class="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div class="h-full w-4/5 rounded-full bg-emerald-400"></div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
