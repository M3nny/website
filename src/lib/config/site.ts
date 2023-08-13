import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'm3nny.me',
  title: "M3nny's website",
  subtitle: "Home",
  lang: 'en-US',
  description: 'Here i post projects made in my free/non-free time',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'M3nny',
    status: '☕',
    bio: 'I love to try new things for the sake of curiosity.',
    metadata: [
      {
        icon: 'i-simple-icons-github',
        link: 'https://github.com/M3nny'
      }
    ]
  }
}
