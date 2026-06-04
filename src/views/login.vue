<template>
  <section class="min-h-screen bg-slate-50 flex items-center justify-center p-6">
    <div class="w-full max-w-lg rounded-[2rem] bg-white p-8 shadow-2xl border border-slate-200">
      <div class="space-y-4 text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-green-700">Member Login</p>
        <h1 class="text-4xl font-bold text-slate-900">Sign in to your account</h1>
        <p class="text-slate-600">Access your travel dashboard, bookings, and support options.</p>
      </div>

      <form class="mt-8 space-y-6">
        <div>
          <label class="block text-sm font-medium text-slate-700">Email</label>
          <input type="email" required class="mt-3 w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-3 text-slate-900 focus:border-green-700 focus:outline-none" placeholder="you@example.com" />
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700">Password</label>
          <input type="password" required class="mt-3 w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-3 text-slate-900 focus:border-green-700 focus:outline-none" placeholder="Enter your password" />
        </div>

        <button type="submit" class="w-full rounded-full bg-green-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-green-800">Sign In</button>
      </form>

      <p class="mt-6 text-center text-sm text-slate-600">
        New here?
        <router-link to="/register" class="font-semibold text-green-900 hover:underline">Create an account</router-link>
      </p>
    </div>
  </section>
</template>
