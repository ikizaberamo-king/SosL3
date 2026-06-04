<template>
  <nav class="bg-green-900 flex flex-col md:flex-row md:items-center p-4 gap-4">
    <div class="flex items-center gap-4">
      <img src="../../assets/image/conv.jpg" alt="Rwanda Flag" class="w-10 h-10 rounded-full" />
      <span class="text-white text-lg font-bold">Tembera Urwanda</span>
    </div>

    <div class="flex flex-1 flex-col md:flex-row md:items-center md:justify-between gap-4">
      <ul class="text-white flex flex-wrap gap-4 font-medium justify-center md:justify-start">
        <li><router-link to="/" class="hover:text-yellow-300">Home</router-link></li>
        <li><router-link to="/about" class="hover:text-yellow-300">About</router-link></li>
        <li><router-link to="/services" class="hover:text-yellow-300">Services</router-link></li>
        <li class="relative group">
          <router-link to="/gallery" class="hover:text-yellow-300">Gallery<span>▼</span></router-link>
          <ul class="hidden group-hover:block absolute bg-white text-green-900 rounded shadow w-48 mt-2 z-50">
            <li><router-link to="/gallery/photos" class="block px-4 py-2 hover:bg-green-200 text-green-900">Photos</router-link></li>
            <li><router-link to="/gallery/videos" class="block px-4 py-2 hover:bg-green-200 text-green-900">Videos</router-link></li>
          </ul>
        </li>
        <li class="relative group">
          <a href="#" class="hover:text-yellow-300">Destination ▼</a>
          <ul class="hidden group-hover:block absolute bg-white text-green-900 rounded shadow w-52 mt-2 z-50">
            <li><router-link to="/northern" class="block px-4 py-2 hover:bg-green-200">Northern Province</router-link></li>
            <li><router-link to="/eastern" class="block px-4 py-2 hover:bg-green-200">Eastern Province</router-link></li>
            <li><router-link to="/kigali" class="block px-4 py-2 hover:bg-green-200">Kigali City</router-link></li>
            <li><router-link to="/western" class="block px-4 py-2 hover:bg-green-200">Western Province</router-link></li>
            <li><router-link to="/southern" class="block px-4 py-2 hover:bg-green-200">Southern Province</router-link></li>
          </ul>
        </li>
        <li><router-link to="/contact" class="hover:text-yellow-300">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>
