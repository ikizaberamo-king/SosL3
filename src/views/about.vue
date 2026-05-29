<!-- Home.vue -->

<template>
  <!-- HERO SECTION -->
  <section
    class="relative h-screen bg-cover bg-center flex items-center justify-center"
    style="background-image: url('/src/assets/image/Rwanda.jpg')"
  >
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- Content -->
    <div class="relative z-10 text-center px-6 max-w-4xl">
      <h1
        class="text-6xl md:text-7xl font-extrabold text-green-400 drop-shadow-lg"
      >
        VISIT RWANDA
      </h1>

      <p
        class="mt-6 text-xl md:text-2xl text-white leading-relaxed"
      >
        Rwanda is known as the “Land of a Thousand Hills”.
        It is famous for its beautiful nature, peaceful people,
        rich culture, and clean environment.
      </p>

      <button
        class="mt-8 px-8 py-4 bg-green-500 hover:bg-green-700 text-white text-lg font-bold rounded-full transition duration-300 shadow-xl"
      >
        Explore Rwanda
      </button>
    </div>
  </section>

  <!-- ABOUT RWANDA -->
  <section class="py-20 bg-gray-100 px-6">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      
      <!-- Image -->
      <img
        src="/src/assets/image/palace.jpg"
        alt="Rwanda Palace"
        class="rounded-3xl shadow-2xl w-full h-[500px] object-cover hover:scale-105 transition duration-500"
      />

      <!-- Text -->
      <div>
        <h2 class="text-5xl font-bold text-green-700 mb-6">
          Discover Rwanda
        </h2>

        <p class="text-gray-700 text-lg leading-relaxed mb-6">
          Rwanda is a beautiful country located in East Africa.
          It is one of the cleanest and safest countries in Africa.
          Rwanda is known for its mountains, wildlife, lakes,
          culture, and fast development.
        </p>

        <p class="text-gray-700 text-lg leading-relaxed">
          Visitors enjoy mountain gorillas, traditional dances,
          national parks, and the modern city of Kigali.
        </p>
      </div>
    </div>
  </section>

  <!-- TOURIST SECTIONS -->
  <section class="bg-white py-20 px-6">
    <h2 class="text-5xl font-bold text-center text-green-700 mb-16">
      Top Attractions
    </h2>

    <div class="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      <!-- CARD 1 -->
      <div
        class="bg-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-3 transition duration-500"
      >
        <img
          src="/src/assets/image/mountain.jpg"
          alt="Mountain"
          class="w-full h-72 object-cover"
        />

        <div class="p-6">
          <h3 class="text-3xl font-bold text-blue-600 mb-4">
            Mountains & Nature
          </h3>

          <p class="text-gray-600 leading-relaxed">
            Rwanda has beautiful mountains, forests, and lakes.
            The country is home to mountain gorillas and amazing wildlife.
          </p>
        </div>
      </div>

      <!-- CARD 2 -->
      <div
        class="bg-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-3 transition duration-500"
      >
        <img
          src="/src/assets/image/Rwanda.jpg"
          alt="Tourism"
          class="w-full h-72 object-cover"
        />

        <div class="p-6">
          <h3 class="text-3xl font-bold text-red-500 mb-4">
            Tourism
          </h3>

          <p class="text-gray-600 leading-relaxed">
            Rwanda attracts many tourists every year because of
            its wildlife parks, culture, and peaceful environment.
          </p>
        </div>
      </div>

      <!-- CARD 3 -->
      <div
        class="bg-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-3 transition duration-500"
      >
        <img
          src="/src/assets/image/conv.jpg"
          alt="Modern Rwanda"
          class="w-full h-72 object-cover"
        />

        <div class="p-6">
          <h3 class="text-3xl font-bold text-purple-600 mb-4">
            Modern Rwanda
          </h3>

          <p class="text-gray-600 leading-relaxed">
            Rwanda is developing rapidly with modern buildings,
            technology growth, clean cities, and innovation.
          </p>
        </div>
      </div>

    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-green-800 text-white py-10 text-center">
    <h2 class="text-3xl font-bold mb-4">
      Welcome to Rwanda
    </h2>

    <p class="text-lg">
      Explore the beauty, culture, and nature of the Land of a Thousand Hills.
    </p>
  </footer>
</template>

<script setup>
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>