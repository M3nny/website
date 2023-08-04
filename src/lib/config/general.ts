import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'mocha',
    text: '🍵 Mocha'
  },
  {
    name: 'cupcake',
    text: '🧁 cupcake'
  },
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      text: 'Get Started',
      link: '/content'
    },
    {
      text: 'Elements',
      link: '/content/elements'
    },
    {
      text: 'About',
      link: '/about'
    }
  ]
}

export const footer: FooterConfig = {}

export const date: DateConfig = {
  locales: 'en-GB',
  options: {
    year: 'numeric',
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }
}

export const feed: FeedConfig = {}
