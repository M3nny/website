import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'localhost:5173',
  title: 'Urara',
  subtitle: 'Sweet & Powerful SvelteKit Blog Template',
  lang: 'en-US',
  description: 'descrizione',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'M3nny',
    status: '🍵',
    bio: 'prova prova'
  },
  themeColor: '#3D4451'
}
