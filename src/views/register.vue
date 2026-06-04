<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
      <div class="px-8 py-10">
        <h1 class="text-3xl font-bold text-green-800 mb-4">Register</h1>
        <p class="text-gray-600 mb-8">Create an account to start planning your Rwanda travel experience.</p>

        <form @submit.prevent="submitRegister" class="space-y-5">
          <div>
            <label class="block text-gray-700 mb-2" for="name">Full Name</label>
            <input
              id="name"
              v-model="name"
              type="text"
              required
              class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:border-green-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label class="block text-gray-700 mb-2" for="email">Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:border-green-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label class="block text-gray-700 mb-2" for="password">Password</label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:border-green-500"
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-green-700 text-white rounded-xl py-3 font-semibold hover:bg-green-800 transition"
          >
            Create Account
          </button>
        </form>

        <p class="mt-6 text-center text-sm text-gray-500">
          Already have an account?
          <router-link to="/login" class="text-green-700 font-semibold hover:underline">Sign in</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')

const submitRegister = () => {
  if (!name.value || !email.value || !password.value) {
    return
  }
  alert(`Account created for ${name.value}`)
}
</script>
