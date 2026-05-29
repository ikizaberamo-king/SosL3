<script setup></script>

<template>
  <!-- HOME PAGE -->
  <div>
    
    <!-- NAVBAR -->
    

    <!-- HERO SECTION -->
    <section
      class="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style="background-image: url('/src/assets/image/mountain.jpg');"
    >
      
      <!-- DARK OVERLAY -->
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>

      <!-- HERO CONTENT -->
      <div class="relative text-center px-6">
        
        <h1 class="text-5xl md:text-7xl font-extrabold mb-6">
          Welcome to Rwanda
        </h1>

        <p class="text-xl md:text-2xl text-green-300 mb-8">
          Discover the beauty of the Land of a Thousand Hills
        </p>

        <!-- BUTTONS -->
        <div class="flex flex-col md:flex-row gap-4 justify-center">
          
          <button
            class="bg-green-500 hover:bg-green-700 px-8 py-3 rounded-lg font-bold text-lg transition duration-300"
          >
            Explore Now
          </button>

          <button
            class="border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-bold text-lg transition duration-300"
          >
            Learn More
          </button>

        </div>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section class="bg-white py-20 px-6">
      <div class="max-w-6xl mx-auto text-center">
        
        <h2 class="text-4xl font-bold text-gray-800 mb-6">
          Why Visit Rwanda?
        </h2>

        <p class="text-gray-600 text-lg leading-8">
          Rwanda is one of the most beautiful and clean countries in Africa.
          It is known for its breathtaking mountains, wildlife, culture,
          peaceful people, and amazing tourist attractions like Volcanoes
          National Park, Lake Kivu, and Kigali City.
        </p>
      </div>
    </section>

    <!-- TOURIST CARDS -->
    <section class="bg-gray-100 py-20 px-6">
      <div class="max-w-7xl mx-auto">

        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">
          Top Tourist Attractions
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- CARD 1 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
            <img
              src="/src/assets/image/gorilla.jpg"
              alt="Gorilla"
              class="w-full h-64 object-cover"
            />

            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3">
                Mountain Gorillas
              </h3>

              <p class="text-gray-600 mb-4">
                Experience the rare mountain gorillas in Volcanoes National Park.
              </p>

              <button class="bg-green-500 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
                View More
              </button>
            </div>
          </div>

          <!-- CARD 2 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
            <img
              src="/src/assets/image/lake.jpg"
              alt="Lake Kivu"
              class="w-full h-64 object-cover"
            />

            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3">
                Lake Kivu
              </h3>

              <p class="text-gray-600 mb-4">
                Relax and enjoy beautiful beaches and fresh air at Lake Kivu.
              </p>

              <button class="bg-green-500 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
                View More
              </button>
            </div>
          </div>

          <!-- CARD 3 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
            <img
              src="/src/assets/image/kigali.jpg"
              alt="Kigali"
              class="w-full h-64 object-cover"
            />

            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3">
                Kigali City
              </h3>

              <p class="text-gray-600 mb-4">
                Explore the clean and modern capital city of Rwanda.
              </p>

              <button class="bg-green-500 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
                View More
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>

   
  </div>
</template>

<style scoped>
</style>