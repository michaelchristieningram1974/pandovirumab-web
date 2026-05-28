import { client } from '../sanity.client'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://pandozab.com'

  // Fetch dynamic slugs from Sanity
  const caseStudies = await client.fetch(`*[_type == "caseStudy"]{ "slug": slug.current }`)
  const vocabularyLessons = await client.fetch(`*[_type == "vocabularyLesson"]{ "slug": slug.current }`)

  // Static pages
  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/product`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/how-it-works`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/side-effects`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/case-studies`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/faq`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/contact`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/voice-assistant`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/hcp`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/hcp/home`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/hcp/clinical-trials`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/hcp/dosing`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/hcp/drug-interactions`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/hcp/case-studies`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/hcp/prescribing-info`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/hcp/real-world-evidence`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/privacy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/cookies`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/hcp/hypertension-treatment`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/hcp/resistant-hypertension`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/hcp/pandovirumab-efficacy`, priority: 0.9, changeFrequency: 'monthly' as const },  

  ]

  // Dynamic case study pages
  const caseStudyPages = caseStudies
    .filter((cs: any) => cs.slug)
    .map((cs: any) => ({
      url: `${baseUrl}/case-studies/${cs.slug}`,
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    }))

  // Dynamic vocabulary pages
  const vocabularyPages = vocabularyLessons
    .filter((vl: any) => vl.slug)
    .map((vl: any) => ({
      url: `${baseUrl}/vocabulary/${vl.slug}`,
      priority: 0.6,
      changeFrequency: 'weekly' as const,
    }))

  return [...staticPages, ...caseStudyPages, ...vocabularyPages]
}