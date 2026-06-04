<template>
    <footer class="bg-green-800 text-white px-8 py-10 mt-10">
    <div class="flex flex-wrap justify-between gap-8">
  <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERA URWANDA</h3>
    <p class="text-sm text-white-400">Discover the beauty of the land of thousand hills</p>
  </div>
  <div>
    <h4 class="text-yellow-300 font-bold text-lg mb-3">Quick links</h4>
    <ul class="space-y-2 text-sm">
        <li>
            <router-link to="/" class="hover:text-blue-400">Home</router-link><br>
        </li>
        <li>
            <router-link to="/about" class="hover:text-blue-400">About</router-link><br>
        </li>
        <li>
            <router-link to="/contact" class="hover:text-blue-400">Contact</router-link><br>
        </li>
        <li>
            <router-link to="/services" class="hover:text-blue-400">Services</router-link><br>
        </li>
       
    </ul>
    </div>
    <div>
        <h5 class="text-yellow-300 font-bold text-lg mb-3">Destination</h5>
        <ul class="space-y-2 text-sm ">
            <li>
            <router-link to="/northern" class="hover:text-blue-400">Northern Province</router-link><br>
            <router-link to="/eastern" class="hover:text-blue-400">Eastern Province</router-link><br>
            <router-link to="/kigali" class="hover:text-blue-400">Kigali City</router-link><br>
            <router-link to="/western" class="hover:text-blue-400">Western Province</router-link><br>
            <router-link to="/southern" class="hover:text-blue-400">Southern Province</router-link>
            </li>
        </ul>
     </div>
        <div>
        <h5 class="text-yellow-300 font-bold text-lg mb-3">Contact us</h5>
        <ul class="space-y-3 text-sm ">  
            <li>
              <router-link to="/contact" class="hover:text-blue-300">Go to contact page</router-link>
            </li>
            <li>
              <span class="text-white">Email: ikizaberamo@email</span><br>
              <span class="text-white">Phone: +250 793 211 549</span><br>
              <span class="text-white">Address: Kagugu, Kigali, Rwanda</span><br>
            </li>
        </ul>   
       </div>
    </div>
    <!--Add copyright-->
    <div class="border-t border-green-600 mt-8 pt-4 text-sm text-green">
        <p class="text-center text-white">&copy; 2026 Tembera U Rwanda. All rights reserved </p>
    </div>

   </footer>
    
</template>