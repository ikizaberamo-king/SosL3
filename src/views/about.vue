<script setup>
import aboutImage from '@/assets/image/kigali.jpg'
</script>

<template>
  <section class="space-y-10 p-6 md:p-10">
    <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-center">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">About Tembera Urwanda</p>
        <h1 class="mt-4 text-4xl font-bold text-slate-900">Our mission is to share Rwanda’s beauty with the world.</h1>
        <p class="mt-6 text-lg leading-8 text-slate-600">Tembera Urwanda is a travel platform built to connect visitors with Rwanda’s most inspiring landscapes, wildlife adventures, and cultural experiences. We aim to make travel planning simple, safe, and memorable.</p>
      </div>

      <div class="rounded-[2rem] overflow-hidden border border-slate-200 shadow-lg">
        <img :src="aboutImage" alt="Kigali skyline" class="h-full w-full object-cover" />
      </div>
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-xl font-semibold text-green-900">Local Expertise</h2>
        <p class="mt-3 text-slate-600">Our team knows Rwanda and builds authentic tours with trusted local guides.</p>
      </div>
      <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-xl font-semibold text-green-900">Personalized Trips</h2>
        <p class="mt-3 text-slate-600">Choose from flexible itineraries for family travel, nature lovers, and adventure seekers.</p>
      </div>
      <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-xl font-semibold text-green-900">Responsible Travel</h2>
        <p class="mt-3 text-slate-600">We support community tourism and protect Rwanda’s natural heritage.</p>
      </div>
    </div>
  </section>
</template>
