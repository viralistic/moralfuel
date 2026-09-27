import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(90),
      description: z.string().max(200),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('MoralFuel'),
      format: z.enum(['microfuel', 'superfuel']).default('microfuel'),
      tags: z.array(z.string()).default([]),
      scripture: z
        .object({
          text: z.string(),
          reference: z.string(),
          translation: z.string().default('KJV'),
        })
        .optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
