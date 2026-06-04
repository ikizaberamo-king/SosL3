<script setup>
import gorilla from '@/assets/image/Gorilla.jpg'
import kigali from '@/assets/image/kigali.jpg'
import lake from '@/assets/image/lake.jpg'
import mountain from '@/assets/image/mountain.jpg'
import palace from '@/assets/image/palace.jpg'
import rwanda from '@/assets/image/Rwanda.jpg'
import kivu from '@/assets/image/kivu.jpg'
import conv from '@/assets/image/conv.jpg'

const gallery = [
  { src: gorilla, title: 'Gorilla Trekking', description: 'Explore Volcanoes National Park and see mountain gorillas in their natural habitat.' },
  { src: kigali, title: 'Kigali City', description: 'Discover Rwanda’s modern capital, filled with culture, markets, and city views.' },
  { src: lake, title: 'Lake Kivu', description: 'Relax by the lakeshore and enjoy boat trips on the beautiful Lake Kivu.' },
  { src: mountain, title: 'Hilly Landscapes', description: 'Experience Rwanda’s rolling hills and scenic mountain vistas.' },
  { src: palace, title: 'Historical Sites', description: 'Visit cultural landmarks and traditional sites across the country.' },
  { src: rwanda, title: 'Rwanda Panorama', description: 'Capture stunning landscapes and the beauty of the land of a thousand hills.' },
  { src: kivu, title: 'National Reserves', description: 'See the rich wildlife and scenic forests of Rwanda’s reserves.' },
  { src: conv, title: 'Cultural Journey', description: 'Immerse in local culture with unforgettable experiences and photo moments.' },
]
</script>

<template>
  <section class="p-6 md:p-10">
    <div class="mb-8 text-center">
      <h1 class="text-4xl font-bold text-green-900">Photo Gallery</h1>
      <p class="mt-3 text-lg text-slate-600">Browse beautiful images from Rwanda’s landscapes, wildlife, and culture.</p>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <article v-for="(item, index) in gallery" :key="index" class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <img :src="item.src" :alt="item.title" class="h-64 w-full object-cover" />
        <div class="p-5">
          <h2 class="text-xl font-semibold text-green-900">{{ item.title }}</h2>
          <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
