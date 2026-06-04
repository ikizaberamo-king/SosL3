<script setup>
import { useSettings } from '@/composables/useSettings.js'

const { t } = useSettings()
</script>

<template>
    <footer class="bg-green-800 text-white px-8 py-10 mt-10 dark:bg-slate-950 dark:text-slate-200">
    <div class="flex flex-wrap justify-between gap-8">
  <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.title') }}</h3>
    <p class="text-sm text-white-400 dark:text-slate-300">{{ t('footer.description') }}</p>
  </div>
  <div>
    <h4 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.quickLinks') }}</h4>
    <ul class="space-y-2 text-sm">
        <li>
            <router-link to="/" class="hover:text-blue-400">{{ t('navbar.home') }}</router-link><br>
        </li>
        <li>
            <router-link to="/about" class="hover:text-blue-400">{{ t('navbar.about') }}</router-link><br>
        </li>
        <li>
            <router-link to="/contact" class="hover:text-blue-400">{{ t('navbar.contact') }}</router-link><br>
        </li>
        <li>
            <router-link to="/services" class="hover:text-blue-400">{{ t('navbar.services') }}</router-link><br>
        </li>
       
    </ul>
    </div>
    <div>
        <h5 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.destination') }}</h5>
        <ul class="space-y-2 text-sm ">
            <li>
            <router-link to="/northern" class="hover:text-blue-400">{{ t('navbar.northern') }}</router-link><br>
            <router-link to="/eastern" class="hover:text-blue-400">{{ t('navbar.eastern') }}</router-link><br>
            <router-link to="/kigali" class="hover:text-blue-400">{{ t('navbar.kigali') }}</router-link><br>
            <router-link to="/western" class="hover:text-blue-400">{{ t('navbar.western') }}</router-link><br>
            <router-link to="/southern" class="hover:text-blue-400">{{ t('navbar.southern') }}</router-link>
            </li>
        </ul>
     </div>
        <div>
        <h5 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.contactUs') }}</h5>
        <ul class="space-y-3 text-sm ">  
            <li>
              <router-link to="/contact" class="hover:text-blue-300">{{ t('footer.goToContact') }}</router-link>
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
    <div class="border-t border-green-600 mt-8 pt-4 text-sm text-green dark:border-slate-700">
        <p class="text-center text-white dark:text-slate-200">&copy; 2026 Tembera U Rwanda. {{ t('footer.copyright') }}</p>
    </div>

   </footer>
    
</template>