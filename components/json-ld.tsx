export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Maestrale Luxury Experience',
    url: 'https://maestralelux.com',
    logo: 'https://maestralelux.com/logo.png',
    sameAs: [
      'https://www.instagram.com/maestralelux',
      'https://www.facebook.com/maestralelux'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+381611234567',
      contactType: 'customer service',
      areaServed: ['RS', 'IT', 'US'],
      availableLanguage: ['English', 'Serbian']
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
