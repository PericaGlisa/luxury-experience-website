import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/request'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['en', 'sr']
const defaultLocale = 'sr'

const pathTranslations: Record<string, Record<string, string>> = {
  sr: {
    'experiences': 'iskustva',
    'destinations': 'destinacije',
    'yachts': 'jahte',
    'journal': 'zurnal',
    'hotels': 'hoteli',
    'booking': 'rezervacija',
    'contact': 'kontakt',
    'faq': 'pitanja',
    'insurance': 'osiguranje',
    'privacy': 'privatnost',
    'terms': 'uslovi',
    'cancellation': 'otkazivanje',
  }
}

// Reverse mapping for internal routing
const reverseTranslations: Record<string, Record<string, string>> = {
  sr: Object.fromEntries(
    Object.entries(pathTranslations.sr).map(([en, sr]) => [sr, en])
  )
}

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  return matchLocale(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if pathname has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (!pathnameHasLocale) {
    const locale = getLocale(request)

    // Exceptions for static files and API
    if (
      pathname.includes('.') || 
      pathname.startsWith('/api/') ||
      pathname.startsWith('/_next/')
    ) {
      return
    }

    return NextResponse.redirect(
      new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
    )
  }

  // Handle translated path segments for both locales
  const segments = pathname.split('/').filter(Boolean)
  const locale = segments[0]
  
  if (locales.includes(locale) && segments.length > 1) {
    const segment = segments[1]
    
    // If it's SR locale, check if we need to rewrite from translated to original
    if (locale === 'sr') {
      const originalSegment = reverseTranslations.sr[segment]
      if (originalSegment) {
        const newPathname = `/${locale}/${originalSegment}${segments.length > 2 ? '/' + segments.slice(2).join('/') : ''}`
        return NextResponse.rewrite(new URL(newPathname, request.url))
      }
    }
    
    // Check for "wrong language" segments and redirect
    // e.g., /en/iskustva -> /en/experiences
    // e.g., /sr/experiences -> /sr/iskustva
    
    if (locale === 'en') {
      // If user uses Serbian segment in English locale, redirect to English segment
      const originalSegment = reverseTranslations.sr[segment]
      if (originalSegment) {
        const newPathname = `/en/${originalSegment}${segments.length > 2 ? '/' + segments.slice(2).join('/') : ''}`
        return NextResponse.redirect(new URL(newPathname, request.url))
      }
    } else if (locale === 'sr') {
      // If user uses English segment in Serbian locale, redirect to Serbian segment
      // (This only happens if it wasn't already handled by the rewrite above)
      const translatedSegment = pathTranslations.sr[segment]
      if (translatedSegment && segment !== translatedSegment) {
        const newPathname = `/sr/${translatedSegment}${segments.length > 2 ? '/' + segments.slice(2).join('/') : ''}`
        return NextResponse.redirect(new URL(newPathname, request.url))
      }
    }
  }
}

export const config = {
  // Matcher za sve rute osim statičkih fajlova i API-ja
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
