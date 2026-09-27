# MoralFuel

Website and journal for [moralfuel.com](https://moralfuel.com), built with [Astro](https://astro.build).

## Commands

| Command        | Action                              |
| :------------- | :---------------------------------- |
| `pnpm install` | Install dependencies                |
| `pnpm dev`     | Dev server at `localhost:4321`      |
| `pnpm build`   | Type-check and build to `./dist/`   |
| `pnpm preview` | Preview the production build        |

## Structure

```text
src/
  consts.ts            site name, nav, contact email, formats
  content.config.ts    blog schema
  content/blog/        posts (.md or .mdx)
  components/          Header, Footer, PostCard, Toc, Scripture, Subscribe
  layouts/Base.astro   HTML shell, SEO and Open Graph tags, theme
  lib/posts.ts         helpers: published posts, tags, reading time, related
  pages/               home, about, journal, post, tag pages, RSS, robots
  styles/global.css    design tokens (light and dark) and prose styles
```

## Writing a post

Add a file to `src/content/blog/`. The filename becomes the URL (`/blog/<filename>/`).

```md
---
title: 'Title (max 90 chars)'
description: 'One or two sentences, used in cards and search results.'
pubDate: 2026-10-01
format: microfuel          # microfuel = short lesson, superfuel = deep dive
tags: ['habits', 'prayer']
scripture:                 # optional key verse shown above the post
  text: 'Iron sharpeneth iron...'
  reference: 'Proverbs 27:17'
  translation: 'KJV'       # defaults to KJV
cover: ./images/cover.jpg  # optional, relative to the post, auto-optimised
coverAlt: 'Describe the image'
featured: true             # optional, pins it at the top of the journal
draft: true                # optional, only visible in `pnpm dev`
---
```

Every post automatically gets reading time, a table of contents, tag pages, related posts, previous/next links, RSS, sitemap and structured data.
