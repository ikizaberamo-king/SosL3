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
            <RouterLink to="/"class="hover:text-blue-400">Home</RouterLink><br>
               </li>
                  <li>
            <RouterLink to="/about"class="hover:text-blue-400">about</RouterLink><br>   </li>
                <li>
            <RouterLink to="/contact"class="hover:text-blue-400">contact</RouterLink><br>
               </li>
                  <li>
            <RouterLink to="/services"class="hover:text-blue-400">services</RouterLink><br>   </li>
                  
           
       
    </ul>
    </div>
    <div>
        <h5 class="text-yellow-300 font-bold text-lg mb-3">Destination</h5>
        <ul class="space-y-2 text-sm ">
            <li>
            <Routerlink to="/"class="hover:text-blue-400">Northern province</Routerlink><br>
            <Routerlink to="/"class="hover:text-blue-400">Eastern province</Routerlink><br>
            <Routerlink to="/"class="hover:text-blue-400">Kigali city</Routerlink><br>
            <Routerlink to="/"class="hover:text-blue-400">Western province</Routerlink><br>
            <Routerlink to="/"class="hover:text-blue-400">Southern province</Routerlink>
            </li>
        </ul>
     </div>
        <div>
        <h5 class="text-yellow-300 font-bold text-lg mb-3">contact us</h5>
        <ul class="space-y-2 text-sm ">  
             <li>
            <Routerlink to="/"class="hover:text-blue-400">email@</Routerlink><br>
            <Routerlink to="/"class="hover:text-blue-400">phone+250</Routerlink><br>
            <Routerlink to="/"class="hover:text-blue-400">address</Routerlink><br>
            <Routerlink to="/"class="hover:text-blue-400">kagugu,kigali,Rwanda</Routerlink><br>
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