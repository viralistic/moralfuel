export const SITE = {
  name: 'MoralFuel',
  url: 'https://moralfuel.com',
  title: 'MoralFuel: ancient wisdom for modern life',
  description:
    'MoralFuel strips the frills from spiritual teaching and makes the wisdom of the Bible practical for everyday life. Short lessons, deep dives and honest answers.',
  tagline: 'Ancient wisdom, made for today',
  locale: 'en',
  author: 'MoralFuel',
  // TODO: confirm the public contact address
  email: 'hello@moralfuel.com',
};

export const NAV = [
  { href: '/blog', label: 'Journal' },
  { href: '/about', label: 'About' },
];

export const FORMATS = {
  microfuel: {
    label: 'Microfuel',
    short: 'Short lesson',
    description: 'A five minute lesson you can carry into your day.',
  },
  superfuel: {
    label: 'Superfuel',
    short: 'Deep dive',
    description: 'A longer study for when you want to go deeper.',
  },
} as const;

export type Format = keyof typeof FORMATS;
