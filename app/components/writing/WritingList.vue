<template>
  <div class="mt-20 sm:mt-16">
    <div class="md:pl-6 md:border-l md:border-brand-slate-400/70">
      <ul class="flex flex-col space-y-16 max-w-3xl">
        <WritingListItem
          v-for="(post, index) in blogPosts"
          :key="`blog-post-${index}`"
          :post="post"
        />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { blogPosts } from '~/utils/blogPosts'
</script>
