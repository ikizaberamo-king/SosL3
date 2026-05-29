<script setup>
const services = [
  {
    title: 'Tour Guide',
    description:
      'Explore Rwanda with experienced tour guides who help visitors discover beautiful places and culture.',
    icon: '🧭',
  },
  {
    title: 'Hotel Booking',
    description:
      'Find comfortable hotels and lodges near tourist attractions across Rwanda.',
    icon: '🏨',
  },
  {
    title: 'Transport Services',
    description:
      'Travel safely with transport services available for tourists and travelers.',
    icon: '🚗',
  },
  {
    title: 'Wildlife Tours',
    description:
      'Visit national parks and enjoy seeing gorillas, lions, and many other animals.',
    icon: '🦍',
  },
  {
    title: 'Cultural Experience',
    description:
      'Learn traditional dances, food, music, and the rich culture of Rwanda.',
    icon: '🎭',
  },
  {
    title: 'Photography Trips',
    description:
      'Capture amazing views of hills, lakes, and tourist attractions in Rwanda.',
    icon: '📸',
  },
]
</script>

<template>
  <section class="bg-gray-100 min-h-screen py-14 px-6">
    <!-- Heading -->
    <div class="text-center max-w-3xl mx-auto">
      <h1 class="text-5xl font-extrabold text-green-700 mb-4">
        Our Services
      </h1>

      <p class="text-lg text-gray-700 leading-relaxed">
        Welcome to our Rwanda Tourism website. We provide different services
        that help visitors enjoy the beauty, culture, and nature of Rwanda.
      </p>
    </div>

    <!-- Services Cards -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 max-w-7xl mx-auto"
    >
      <div
        v-for="service in services"
        :key="service.title"
        class="bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition duration-300"
      >
        <div class="text-6xl mb-5">
          {{ service.icon }}
        </div>

        <h2 class="text-2xl font-bold text-green-700 mb-4">
          {{ service.title }}
        </h2>

        <p class="text-gray-600 leading-relaxed">
          {{ service.description }}
        </p>

        <button
          class="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Learn More
        </button>
      </div>
    </div>

    <!-- Bottom Section -->
    <div
      class="mt-20 bg-green-700 text-white rounded-3xl max-w-6xl mx-auto p-10 text-center shadow-xl"
    >
      <h2 class="text-4xl font-bold mb-4">
        Discover the Beauty of Rwanda
      </h2>

      <p class="text-lg leading-relaxed max-w-3xl mx-auto">
        Rwanda is known as the Land of a Thousand Hills. Our services are made
        to help tourists enjoy unforgettable adventures, beautiful landscapes,
        wildlife, and cultural experiences.
      </p>

      <button
        class="mt-8 bg-white text-green-700 font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition"
      >
        Contact Us
      </button>
    </div>
  </section>
</template>

<style scoped>
</style>
