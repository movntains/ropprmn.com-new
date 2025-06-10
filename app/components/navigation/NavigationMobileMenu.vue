<template>
  <div class="flex justify-between items-center md:hidden">
    <button
      ref="openMenuButtonRef"
      type="button"
      class="custom-focus rounded-sm transition-colors text-brand-slate-400 hover:text-brand-orange"
      @click="isOpen = true"
    >
      <span class="sr-only">Open Navigation</span>
      <Bars3Icon
        aria-hidden="true"
        class="size-8 stroke-current focus:outline-none"
      />
    </button>
    <TransitionRoot :show="isOpen">
      <Dialog
        :initial-focus="mobileMenuTitleRef"
        class="fixed inset-0 flex z-[1000] lg:hidden"
        :class="isOpen ? 'pointer-events-auto' : 'pointer-events-none'"
        @close="isOpen = false"
      >
        <TransitionChild
          enter="motion-safe:transition-opacity motion-safe:ease-linear motion-safe:duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="motion-safe:transition-opacity motion-safe:ease-linear motion-safe:duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/75" />
        </TransitionChild>
        <TransitionChild
          enter="motion-safe:transform motion-safe:transition motion-safe:ease-in-out motion-safe:duration-300"
          enter-from="-translate-x-full"
          enter-to="opacity-100"
          leave="motion-safe:transform motion-safe:transition motion-safe:ease-in-out motion-safe:duration-300"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
          class="relative flex flex-col flex-1 w-full max-w-xs pb-4 bg-black-50"
        >
          <TransitionChild
            enter="motion-safe:transition-opacity motion-safe:ease-linear motion-safe:duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="motion-safe:transition-opacity motion-safe:ease-linear motion-safe:duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
            class="absolute top-0 right-0 -mr-14 p-1"
          >
            <button
              type="button"
              class="flex justify-center items-center size-12 rounded-full text-white transition hover:text-brand-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
              @click="isOpen = false"
            >
              <span class="sr-only">Close Navigation</span>
              <XMarkIcon
                class="size-6 stroke-current"
                aria-hidden="true"
              />
            </button>
          </TransitionChild>
          <DialogPanel class="flex-1 h-0 overflow-y-auto">
            <DialogTitle
              ref="mobileMenuTitleRef"
              class="sr-only"
              tabindex="-1"
            >
              Site Navigation
            </DialogTitle>
            <nav aria-label="Main">
              <div class="flex items-center flex-shrink-0 py-5 pl-8 pr-4">
                <NuxtLink
                  :to="{ name: 'index' }"
                  class="custom-focus group rounded-sm text-brand-teal transition hover:text-brand-orange!"
                >
                  <span class="sr-only">Home</span>
                  <SvgLogo class="motion-safe:group-hover:scale-110" />
                </NuxtLink>
              </div>
              <ul class="mt-5 px-8 space-y-10">
                <li
                  v-for="navLink in navLinks"
                  :key="navLink.label"
                  :class="{ 'pb-2 last-of-type:pb-0': $route.name === navLink.to }"
                >
                  <NuxtLink
                    :to="{ name: navLink.to }"
                    class="custom-underline custom-focus rounded-sm font-body text-slate-200"
                  >
                    {{ navLink.label }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { Dialog, DialogPanel, DialogTitle, TransitionRoot, TransitionChild } from '@headlessui/vue'

const route = useRoute()
const { navLinks } = useNavigation()

const isOpen = ref(false)
const openMenuButtonRef = ref<HTMLButtonElement | null>(null)
const mobileMenuTitleRef = ref<HTMLHeadingElement | null>(null)


watch(route, () => {
  isOpen.value = false
})

watch(isOpen, async (newValue) => {
  if (!newValue) {
    await nextTick()

    // Wait for the transition to finish before focusing the open menu button
    setTimeout(() => {
      openMenuButtonRef.value?.focus()
    }, 310)
  }
})
</script>
