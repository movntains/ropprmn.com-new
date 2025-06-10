export default function useNavigation() {
  const navLinks = ref([
    {
      label: 'About',
      to: 'about',
    },
    {
      label: 'Work',
      to: 'work',
    },
    {
      label: 'Writing',
      to: 'writing',
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
