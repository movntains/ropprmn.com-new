<template>
  <nav
    class="hidden md:flex md:justify-between md:items-center"
    aria-label="Main"
  >
    <ul class="flex items-center gap-12">
      <li
        v-for="link in navLinks"
        :key="link.label"
        class="relative"
      >
        <NuxtLink
          :to="{ name: link.to, params: link.params }"
          class="custom-underline custom-focus py-2 px-1 rounded-sm text-brand-slate-300"
        >
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const { navLinks } = useNavigation()
</script>
