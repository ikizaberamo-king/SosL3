
<template> 
    <nav class="bg-green-900 flex justify-between items-center p-4">
        <img src="../src/assets/image/palace.jpg" alt="Rwanda Flag" class="w-10 h-10 rounded-full">
        <span class="text-white text-lg font-bold ">Tembera Urwanda</span>

    <ul class="text-white flex space-x-4 font medium w-full justify-end text-bold">
      <li><a href="/" class="hover:text-yellow-300">Home</a></li>
      <li><a href="/about" class="hover:text-yellow-300">About</a></li>
      <li><a href="/services" class="hover:text-yellow-300">Services</a></li>
   <li class="relative group"><a href="/gallery" class="hover:text-yellow-300">Gallery<span>▼</span></a>
  <ul 
  class="hidden group-hover:block absolute bg-white text-green-900 rounded shadow w-48 mt-2 z-50">
    <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-900">Photos</a></li>
    <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-900">Videos</a></li>
  </ul>
  </li>
  <li class="relative group"><a href="#" class="hover:text-yellow-300">Destination<span>▼</span></a>
  <ul class="hidden group-hover:block absolute bg-white text-green-900 rounded shadow w-48 mt-2 z-50">
    <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-900">Northen province</a></li>
    <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-900">Eastern province</a></li>
    <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-900">Kigali City</a></li>
    <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-900">Western province</a></li>
    <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-900">Southern province</a></li>
  </ul>
  </li>
      <li><a href="contact" class="hover:text-yellow-300">Contact</a></li>
    </ul>
  </nav>
</template>
