<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSettings } from '@/composables/useSettings.js'

const router = useRouter()
const { t } = useSettings()
const email = ref('')
const password = ref('')
const error = ref('')

const submitLogin = () => {
  error.value = ''

  if (!email.value || !password.value) {
    error.value = t('login.fillAllFields')
    return
  }

  router.push('/dashboard')
}
</script>

<template>
  <section class="min-h-screen bg-slate-50 flex items-center justify-center p-6 dark:bg-slate-950">
    <div class="w-full max-w-lg rounded-[2rem] bg-white p-8 shadow-2xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900">
      <div class="space-y-4 text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-green-700">{{ t('login.heroTag') }}</p>
        <h1 class="text-4xl font-bold text-slate-900 dark:text-slate-100">{{ t('login.heroTitle') }}</h1>
        <p class="text-slate-600 dark:text-slate-300">{{ t('login.heroText') }}</p>
      </div>

      <div v-if="error" class="mb-4 rounded-2xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-600 dark:bg-red-900/20 dark:text-red-200">
        {{ error }}
      </div>

      <form @submit.prevent="submitLogin" class="mt-8 space-y-6">
        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-200">{{ t('login.emailLabel') }}</label>
          <input v-model="email" type="email" required class="mt-3 w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-3 text-slate-900 focus:border-green-700 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" placeholder="you@example.com" />
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-200">{{ t('login.passwordLabel') }}</label>
          <input v-model="password" type="password" required class="mt-3 w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-3 text-slate-900 focus:border-green-700 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100" placeholder="Enter your password" />
        </div>

        <button type="submit" class="w-full rounded-full bg-green-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-green-800">{{ t('login.signIn') }}</button>
      </form>

      <p class="mt-6 text-center text-sm text-slate-600 dark:text-slate-300">
        {{ t('login.newHere') }}
        <router-link to="/register" class="font-semibold text-green-900 hover:underline dark:text-emerald-300">{{ t('login.createAccount') }}</router-link>
      </p>
    </div>
  </section>
</template>
