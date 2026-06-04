<script setup>
 // import Home from './views/home.vue'
import { RouterView,useRoute } from 'vue-router'
import Navbar from './components/ui/navbar.vue'
import Footer from './components/footer.vue'
import { computed } from 'vue';


const route=useRoute()
const hideLayout=computed(()=>['Dashboard'].includes(route.name))
</script>
<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-900">
    <Navbar v-if="!hideLayout" />

    <main class="flex-grow">
      <RouterView />
    </main>

    <Footer v-if="!hideLayout" />
  </div>
</template>