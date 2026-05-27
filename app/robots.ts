import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/hcp/'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/hcp/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/hcp/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/hcp/'],
      },
    ],
    sitemap: 'https://pandozab.com/sitemap.xml',
  }
}