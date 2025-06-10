export default function useNavigation() {
  const navLinks = ref([
    {
      label: 'About',
      to: 'slug',
      params: { slug: ['about'] },
    },
    {
      label: 'Work',
      to: 'slug',
      params: { slug: ['work'] },
    },
    {
      label: 'Writing',
      to: 'slug',
      params: { slug: ['writing'] },
    },
  ])

  const profileLinks = ref({
    GITHUB: 'https://github.com/movntains',
    LINKED_IN: 'https://www.linkedin.com/in/rachel-opperman-3a16731a2',
  })

  return {
    navLinks,
    profileLinks,
  }
}
