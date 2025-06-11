<template>
  <BasePageWrapper>
    <section class="pt-16">
      <BasePageHeading>Work</BasePageHeading>
      <p>
        This is a collection of some of the applications and sites I've worked on in the past few
        years. They include full-stack web apps, CMS sites, and projects on which I performed accessibility audits and implemented enhancements in order to ensure that the sites would be fully accessible and meet WCAG standards.
      </p>
      <ProjectsGrid />
    </section>
  </BasePageWrapper>
</template>

<script setup lang="ts">
useHead({
  title: 'Work | Rachel Opperman | Software Engineer',
  meta: [
    {
      name: 'description',
      content: `A collection of some of the applications and sites I've worked on in the past few years.`,
    },
  ],
})
</script>
