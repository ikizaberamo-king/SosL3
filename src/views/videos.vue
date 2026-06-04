<script setup>
import rwandaBanner from '@/assets/image/Rwanda.jpg'
</script>

<template>
  <section class="p-6 md:p-10">
    <div class="grid gap-8 lg:grid-cols-[1.5fr_1fr] items-start">
      <div>
        <h1 class="text-4xl font-bold text-green-900">Video Gallery</h1>
        <p class="mt-3 text-lg text-slate-600">Watch travel videos and discover Rwanda’s destinations, wildlife, and culture.</p>
        <div class="mt-6 rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
          <img :src="rwandaBanner" alt="Rwanda banner" class="h-72 w-full object-cover" />
        </div>
      </div>

      <div class="space-y-6">
        <div class="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 class="text-2xl font-semibold text-green-900">Rwanda Travel Highlights</h2>
          <div class="mt-4 aspect-video overflow-hidden rounded-2xl bg-slate-900">
            <iframe class="h-full w-full" src="https://www.youtube.com/embed/4y8QX3R7kLo" title="Rwanda Travel" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
          <p class="mt-3 text-sm leading-6 text-slate-600">A quick tour of Rwanda’s stunning natural beauty and cultural landmarks.</p>
        </div>

        <div class="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 class="text-2xl font-semibold text-green-900">Wildlife & Nature</h2>
          <div class="mt-4 aspect-video overflow-hidden rounded-2xl bg-slate-900">
            <iframe class="h-full w-full" src="https://www.youtube.com/embed/s8Tw7cBTRDQ" title="Rwanda Wildlife" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
          <p class="mt-3 text-sm leading-6 text-slate-600">Explore Rwanda’s wildlife parks and iconic gorilla treks.</p>
        </div>
      </div>
    </div>
  </section>
</template>
