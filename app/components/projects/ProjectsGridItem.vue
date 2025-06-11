<template>
  <li class="custom-border--hover col-span-2 relative backdrop-blur-[10px] md:col-span-1 before:custom-border focus-within:before:opacity-100 focus-within:before:bg-[position:-50%_0]">
    <div
      class="flex justify-center items-center h-48 rounded-t-lg"
      :style="{ backgroundColor: project.bgColor }"
    >
      <img
        :src="project.logo"
        :alt="`${project.title} Logo`"
        aria-hidden="true"
        class="size-28 object-contain"
      />
    </div>
    <div class="p-4 space-y-2">
      <a
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="focus:outline-none focus-visible:outline-none"
      >
        <h2 class="flex items-center gap-2 font-bold text-lg text-brand-slate-100">
          {{ project.title }}
          <ArrowTopRightOnSquareIcon
            class="size-4 text-brand-slate-300"
            aria-hidden="true"
          />
        </h2>
      </a>
      <div>
        <h3 class="sr-only">Primary Role</h3>
        <p class="text-brand-slate-200! font-medium!">
          {{ project.role }}
        </p>
      </div>
      <div>
        <h3 class="inline font-normal text-brand-slate-300">Highlights: </h3>
        <p class="inline">
          {{ project.highlights }}
        </p>
      </div>
      <div v-if="project.techStack">
        <h3 class="inline font-normal text-brand-slate-300">Tech stack: </h3>
        <p class="inline">
          {{ project.techStack.join(', ') }}.
        </p>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'

import type { Project } from '@/types/projects/Project'

defineProps<{
  project: Project
}>()
</script>
