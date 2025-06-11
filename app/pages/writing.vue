<template>
  <BasePageWrapper>
    <section class="pt-16">
      <BasePageHeading>Writing</BasePageHeading>
      <p>
        This is a collection of posts I've written about a variety of software engineering topics, such as accessibility, web app development, and cybersecurity.
      </p>
      <WritingList />
    </section>
  </BasePageWrapper>
</template>

<script setup lang="ts">
useHead({
  title: 'Writing | Rachel Opperman | Software Engineer',
  meta: [
    {
      name: 'description',
      content: `A collection of blog posts that I've written about software engineering.`,
    },
  ],
})
</script>
