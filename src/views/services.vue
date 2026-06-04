<script setup>
import tourImage from '@/assets/image/kivu.jpg'
import gorillaImage from '@/assets/image/Gorilla.jpg'
import cityImage from '@/assets/image/kigali.jpg'

const services = [
  {
    title: 'Guided Tours',
    description: 'Expert-led tours across Rwanda, from gorilla treks to city highlights.',
    icon: '🗺️',
  },
  {
    title: 'Wildlife Safaris',
    description: 'Visit national parks and discover Rwanda’s unique wildlife habitats.',
    icon: '🐾',
  },
  {
    title: 'Cultural Experiences',
    description: 'Enjoy village visits, craft markets, and cultural shows.',
    icon: '🎭',
  },
  {
    title: 'Transportation',
    description: 'Comfortable transfers, private cars, and airport pickups.',
    icon: '🚗',
  },
  {
    title: 'Accommodation',
    description: 'Book hotels, lodges, or eco-friendly stays suited to your trip.',
    icon: '🏨',
  },
  {
    title: 'Custom Itineraries',
    description: 'Tailored planning for families, honeymooners, and adventure seekers.',
    icon: '✈️',
  },
]
</script>

<template>
  <section class="bg-slate-50 min-h-screen p-6 md:p-10">
    <div class="mx-auto max-w-6xl space-y-12">
      <div class="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] items-center rounded-[2rem] bg-white p-8 shadow-lg border border-slate-200">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.35em] text-green-700">Our Services</p>
          <h1 class="mt-4 text-5xl font-bold text-slate-900">Travel support designed for every Rwanda journey.</h1>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">From guided excursions to custom itineraries, Tembera Urwanda makes it easy to explore Rwanda with comfort, safety, and unforgettable memories.</p>
          <div class="mt-8 flex flex-wrap gap-4">
            <router-link to="/gallery/photos" class="rounded-full bg-green-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-green-800">Explore Gallery</router-link>
            <router-link to="/contact" class="rounded-full border border-green-900 px-6 py-3 text-sm font-semibold text-green-900 hover:bg-green-50">Contact Us</router-link>
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
        <article v-for="(service, index) in services" :key="index" class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div class="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
            {{ service.icon }}
          </div>
          <h2 class="mt-6 text-2xl font-semibold text-slate-900">{{ service.title }}</h2>
          <p class="mt-3 text-slate-600 leading-7">{{ service.description }}</p>
        </article>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <div class="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h3 class="text-xl font-semibold text-green-900">Book with Confidence</h3>
          <p class="mt-3 text-slate-600">Flexible booking policies, local support, and trusted guides ensure a smooth trip.</p>
        </div>
        <div class="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h3 class="text-xl font-semibold text-green-900">Expert Local Guides</h3>
          <p class="mt-3 text-slate-600">Our guides are experienced and knowledgeable about Rwanda’s nature and culture.</p>
        </div>
        <div class="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h3 class="text-xl font-semibold text-green-900">Tailored Planning</h3>
          <p class="mt-3 text-slate-600">We customize each itinerary to match your travel pace, interests, and budget.</p>
        </div>
      </div>
    </div>
  </section>
</template>
