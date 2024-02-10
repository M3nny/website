import type {
  ThemeConfig,
  HeadConfig,
  HeaderConfig,
  FooterConfig,
  DateConfig,
  FeedConfig,
} from "$lib/types/general";

export const theme: ThemeConfig = [
  {
    name: "latte",
    text: "🥛 Latte",
  },
  {
    name: "mocha",
    text: "🍵 Mocha",
  },
];

export const head: HeadConfig = {};

export const header: HeaderConfig = {
  nav: [
    {
      text: "About",
      link: "/about",
    },
  ],
};

export const footer: FooterConfig = {};

export const date: DateConfig = {
  locales: "en-GB",
  options: {
    year: "numeric",
    weekday: "long",
    month: "short",
    day: "numeric",
  },
};

export const feed: FeedConfig = {};
