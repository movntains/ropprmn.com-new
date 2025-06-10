<template>
  <footer class="mt-16 bg-black-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between md:px-12">
      <p class="text-base text-brand-slate-lightest text-center">
        &copy; {{ new Date().getFullYear() }}. All rights reserved.
      </p>
      <div class="flex justify-center items-center gap-8 mt-8 md:mt-0">
        <NuxtLink
          :to="profileLinks.GITHUB"
          target="_blank"
          rel="noopener noreferrer"
          class="custom-focus rounded-md"
        >
          <span class="sr-only">View GitHub Profile</span>
          <SvgGitHub />
        </NuxtLink>
        <NuxtLink
          :to="profileLinks.LINKED_IN"
          target="_blank"
          rel="noopener noreferrer"
          class="custom-focus rounded-md"
        >
          <span class="sr-only">View LinkedIn Profile</span>
          <SvgLinkedIn />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { profileLinks } = useNavigation()
</script>
