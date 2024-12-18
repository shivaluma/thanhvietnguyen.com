// @ts-check
import mdx from '@astrojs/mdx'
import node from '@astrojs/node'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'
import { defineConfig, envField } from 'astro/config'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

// https://astro.build/config
export default defineConfig({
  adapter: node({ mode: 'standalone' }),

  site: 'https://thanhvietnguyen.com',

  markdown: {
    shikiConfig: {
      theme: 'poimandres'
    }
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'load'
  },

  env: {
    schema: {
      MAPTILER_API_KEY: envField.string({
        context: 'server',
        access: 'secret'
      }),
      GITHUB_ACCESS_TOKEN: envField.string({
        context: 'server',
        access: 'secret'
      }),
      SPOTIFY_CLIENT_ID: envField.string({
        context: 'server',
        access: 'secret'
      }),
      SPOTIFY_CLIENT_SECRET: envField.string({
        context: 'server',
        access: 'secret'
      }),
      SPOTIFY_REFRESH_TOKEN: envField.string({
        context: 'server',
        access: 'secret'
      }),
      MONKEYTYPE_API_KEY: envField.string({
        context: 'server',
        access: 'secret'
      })
    }
  },

  vite: {
    ssr: {
      noExternal: ['path-to-regexp', 'react-tweet']
    }
  },

  integrations: [
    mdx({
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
            headingProperties: {
              class: 'article-heading'
            }
          }
        ]
      ]
    }),
    (await import('@playform/compress')).default({
      HTML: {
        'html-minifier-terser': {
          collapseWhitespace: false
        }
      }
    }),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false
    }),
    partytown()
  ]
})