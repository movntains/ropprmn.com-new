<template>
  <BasePageWrapper>
    <section class="pt-16">
      <BasePageHeading>About</BasePageHeading>
      <div class="space-y-7 font-light text-base text-brand-slate leading-7">
        <p>
          I'm a full-stack web developer with a passion for building fully accessible user interfaces
          and performant, secure APIs. I work primarily with Inertia.js and Vue or React on the frontend and Laravel on the backend. Thorough test coverage is also a must-have in my book; I use Vitest and Pest, along with GitHub Actions, to build well-tested applications.
        </p>
        <p>
          When I'm not coding, I can usually be found reading, gaming, watching The Big Bang Theory, listening to a history podcast, or learning a new language.
        </p>
      </div>
    </section>
  </BasePageWrapper>
</template>

<script setup lang="ts">
useHead({
  title: 'About | Rachel Opperman | Software Engineer',
  meta: [
    {
      name: 'description',
      content: 'Full-stack web developer with a passion for building fully accessible user interfaces and performant, secure APIs.',
    },
  ],
})
</script>
