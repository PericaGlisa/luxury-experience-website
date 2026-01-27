import { MetadataRoute } from 'next'
import { destinations, experiences, yachts, journalArticles, hotels } from '@/lib/data'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://maestralelux.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = ['en', 'sr']

  // Static routes
  const staticRoutes = [
    '',
    '/booking',
    '/cancellation',
    '/contact',
    '/faq',
    '/gallery',
    '/insurance',
    '/privacy',
    '/terms',
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Add static routes
  staticRoutes.forEach(route => {
    languages.forEach(lang => {
      sitemap.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })

  // Add dynamic routes
  // Destinations
  destinations.forEach(item => {
    languages.forEach(lang => {
      const slug = item.slug[lang as 'en' | 'sr']
      sitemap.push({
        url: `${baseUrl}/${lang}/destinations/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      })
    })
  })

  // Experiences
  experiences.forEach(item => {
    languages.forEach(lang => {
      const slug = item.slug[lang as 'en' | 'sr']
      sitemap.push({
        url: `${baseUrl}/${lang}/experiences/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      })
    })
  })

  // Yachts
  yachts.forEach(item => {
    languages.forEach(lang => {
      const slug = item.slug[lang as 'en' | 'sr']
      sitemap.push({
        url: `${baseUrl}/${lang}/yachts/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      })
    })
  })
  
  // Journal
  journalArticles.forEach(item => {
    languages.forEach(lang => {
      const slug = item.slug[lang as 'en' | 'sr']
      sitemap.push({
        url: `${baseUrl}/${lang}/journal/${slug}`,
        lastModified: new Date(item.date),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  })

  // Hotels
  hotels.forEach(item => {
    languages.forEach(lang => {
      const slug = item.slug[lang as 'en' | 'sr']
      sitemap.push({
        url: `${baseUrl}/${lang}/hotels/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    })
  })

  return sitemap
}
