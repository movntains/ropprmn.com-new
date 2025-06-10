<template>
  <header
    class="fixed top-0 z-50 w-full py-8 px-8 transition-colors md:px-12"
    :class="{ 'bg-black-50 shadow': scrollPosition > 50 }"
  >
    <div class="flex justify-between items-baseline md:items-center">
      <NuxtLink
        class="custom-focus group rounded-sm text-brand-teal transition hover:text-brand-orange"
        :to="{ name: 'slug', params: { slug: [] } }"
      >
        <span class="sr-only">Home</span>
        <SvgLogo class="motion-safe:group-hover:scale-110" />
      </NuxtLink>
      <NavigationDesktopMenu />
    </div>
  </header>
</template>

<script setup lang="ts">
import throttle from 'lodash.throttle'

const route = useRoute()

const scrollCookie = useCookie('lastScrollTop')
const scrollPosition = ref(Number(scrollCookie.value) || 0)

const updateScroll = (): void => {
  scrollPosition.value = window.scrollY
  scrollCookie.value = scrollPosition.value.toString()
}

watch(route, () => {
  scrollPosition.value = 0
})

onMounted(() => {
  window.addEventListener('scroll', throttle(updateScroll, 200, { leading: true }))
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>
