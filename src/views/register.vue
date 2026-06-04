<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSettings } from '@/composables/useSettings.js'

const router = useRouter()
const { t } = useSettings()
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')
const success = ref('')

const submitRegister = () => {
  error.value = ''
  success.value = ''

  if (!name.value || !email.value || !password.value || !confirmPassword.value) {
    error.value = t('register.fillAllFields')
    return
  }

  if (password.value !== confirmPassword.value) {
    error.value = t('register.passwordMismatch')
    return
  }

  success.value = `${t('register.createdMessage').replace('{name}', name.value)}`
  setTimeout(() => router.push('/dashboard'), 1600)
}
</script>

<template>
  <div class="min-h-screen bg-slate-950 flex items-center justify-center p-4 dark:bg-slate-950">
    <div class="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden dark:bg-slate-900">
      <div class="px-8 py-10">
        <h1 class="text-3xl font-bold text-green-800 mb-4 dark:text-emerald-300">{{ t('register.title') }}</h1>
        <p class="text-slate-600 mb-8 dark:text-slate-300">{{ t('register.heroText') }}</p>

        <div v-if="error" class="mb-4 rounded-2xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-600 dark:bg-red-900/20 dark:text-red-200">
          {{ error }}
        </div>
        <div v-if="success" class="mb-4 rounded-2xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-500 dark:bg-emerald-900/20 dark:text-emerald-200">
          {{ success }}
        </div>

        <form @submit.prevent="submitRegister" class="space-y-5">
          <div>
            <label class="block text-slate-700 mb-2 dark:text-slate-200" for="name">{{ t('register.fullName') }}</label>
            <input
              id="name"
              v-model="name"
              type="text"
              required
              class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:border-green-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label class="block text-slate-700 mb-2 dark:text-slate-200" for="email">{{ t('register.email') }}</label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:border-green-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label class="block text-slate-700 mb-2 dark:text-slate-200" for="password">{{ t('register.password') }}</label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:border-green-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label class="block text-slate-700 mb-2 dark:text-slate-200" for="confirm-password">{{ t('register.confirmPassword') }}</label>
            <input
              id="confirm-password"
              v-model="confirmPassword"
              type="password"
              required
              class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:border-green-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-green-700 text-white rounded-xl py-3 font-semibold hover:bg-green-800 transition"
          >
            {{ t('register.submit') }}
          </button>
        </form>

        <p class="mt-6 text-center text-sm text-slate-500 dark:text-slate-300">
          {{ t('register.already') }}
          <router-link to="/login" class="text-green-700 font-semibold hover:underline dark:text-emerald-300">{{ t('register.signIn') }}</router-link>
        </p>
        <div class="mt-4 text-center">
          <router-link to="/login" class="inline-flex items-center justify-center rounded-full border border-green-700 px-5 py-2 text-sm font-semibold text-green-700 hover:bg-green-700 hover:text-white transition dark:border-emerald-300 dark:text-emerald-300 dark:hover:bg-emerald-300 dark:hover:text-slate-950">
            {{ t('register.signIn') }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
