import { Role } from '~/types/enums/Role'
import type { Project } from '~/types/projects/Project'

export const projects: Project[] = [
  {
    title: 'Garbanzo',
    bgColor: '#516DDD',
    role: Role.FULLSTACK,
    link: 'https://garbanzo.io',
    logo: '/projects/garbanzo.svg',
    highlights:
      'Fully custom and accessible learning interface; real-time notifications; Google Classroom, Stripe, and Algolia integrations.',
    techStack: [
      'Laravel',
      'Vue',
      'Inertia.js',
      'Tailwind CSS',
      'Laravel Nova',
      'Laravel Vapor',
      'PostgreSQL',
      'Stripe',
      'Algolia',
      'WebSockets',
    ],
  },
  {
    title: 'Comprehensible Classroom',
    bgColor: '#C9E2FC',
    role: Role.FULLSTACK,
    link: 'https://comprehensibleclassroom.com',
    logo: '/projects/cc.svg',
    highlights:
      'Stripe integration, e-commerce functionality, license management for purchased content, API routes for a Craft CMS marketing site, subdomain management for the web app.',
    techStack: ['Laravel', 'Vue', 'Inertia.js', 'Tailwind CSS', 'Laravel Nova', 'PostgreSQL', 'Stripe'],
  },
  {
    bgColor: '#215380',
    role: Role.FULLSTACK,
    logo: '/projects/hafa.svg',
    link: 'https://heritageaction.com',
    title: 'Heritage Action for America',
    highlights:
      'Vue integration with Craft CMS on the public-facing site and a Laravel Nova admin app for importing and organizing data retrieved from third-party APIs.',
    techStack: ['Laravel', 'Vue', 'Tailwind CSS', 'MySQL', 'Laravel Nova'],
  },
  {
    title: 'HireRight',
    bgColor: '#FAFCFF',
    role: Role.FULLSTACK,
    logo: '/projects/hire-right.svg',
    link: 'https://www.hireright.com',
    highlights:
      'Content retrieval from Contentful, Netlify serverless functions, Algolia integration, and custom CLI commands.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Algolia', 'Contentful', 'Netlify'],
  },
  {
    bgColor: '#FAFCFF',
    role: Role.FRONTEND,
    title: 'Relias Media',
    logo: '/projects/relias.png',
    link: 'https://www.reliasmedia.com',
    highlights: `Vue integration with Craft CMS and e-commerce functionality provided via Magento's GraphQL API.`,
    techStack: ['Vue', 'Magento', 'Sass', 'GraphQL'],
  },
  {
    bgColor: '#DECDE8',
    role: Role.ACCESSIBILITY,
    logo: '/projects/brady.svg',
    link: 'https://www.bradyunited.org',
    title: 'Brady United',
    highlights:
      'Performed manual and automated accessibility audits and implemented enhancements to ensure a fully accessible experience and WCAG compliance.',
  },
  {
    bgColor: '#F9F2ED',
    role: Role.FRONTEND,
    title: 'Wound Care Education Institute',
    logo: '/projects/wcei.svg',
    link: 'https://www.wcei.net/',
    highlights: `Vue integration with Craft CMS, e-commerce functionality provided via Magento's GraphQL API, Elasticsearch integration with Vue components and Craft CMS data.`,
    techStack: ['Vue', 'Magento', 'Tailwind CSS', 'GraphQL', 'Elasticsearch', 'Affirm', 'Authorize.net'],
  },
  {
    bgColor: '#CEECEC',
    role: Role.FRONTEND,
    title: 'Nurse.com',
    logo: '/projects/nurse.svg',
    link: 'https://www.nurse.com',
    highlights: `Vue integration with Craft CMS, e-commerce functionality provided via Magento's GraphQL API, YAML parsing tool for custom Sass style helpers.`,
    techStack: ['Vue', 'Magento', 'Sass', 'GraphQL'],
  },
  {
    bgColor: '#0f1014',
    role: Role.ACCESSIBILITY,
    logo: '/projects/srnmj.webp',
    link: 'https://scottishritenmj.org',
    title: 'Scottish Rite NMJ',
    highlights:
      'Performed manual and automated accessibility audits and implemented enhancements to ensure a fully accessible experience and WCAG compliance.',
  },
  {
    bgColor: '#e1ded9',
    role: Role.ACCESSIBILITY,
    logo: '/projects/osi.svg',
    link: 'https://www.openspaceinstitute.org',
    title: 'Open Space Institute',
    highlights:
      'Performed manual and automated accessibility audits and implemented enhancements to ensure a fully accessible experience and WCAG compliance.',
  },
  {
    bgColor: '#FAFCFF',
    role: Role.FRONTEND,
    title: 'Via TRM',
    logo: '/projects/via-trm.png',
    link: 'https://www.viatrm.com/via-global',
    highlights: `React single-page applications for managing user data, study abroad brochures, and study abroad applications; multi-step forms with dynamic fields.`,
    techStack: ['React', 'React Router', 'Styled Components'],
  },
]
