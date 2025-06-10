<template>
  <div class="max-w-7xl mt-16 mx-auto px-4 sm:mt-24">
    <div class="text-center">
      <h1 class="font-bold text-4xl text-brand-slate-100 sm:text-5xl md:text-6xl">
        <span class="block">Hello, my name is</span>
        <span class="block text-brand-teal">Rachel Opperman.</span>
      </h1>
      <p class="max-w-md mt-3 mx-auto sm:text-lg md:max-w-3xl md:mt-5 md:text-xl">
        I'm a software engineer who builds full-stack web applications. I'm passionate about accessibility, performance, and security.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Rachel Opperman | Software Engineer',
  meta: [
    {
      name: 'description',
      content: 'Software engineer who builds full-stack web applications with a focus on accessibility, performance, and security.',
    },
  ],
})
</script>
