import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/request'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['en', 'sr']
const defaultLocale = 'sr'

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  return matchLocale(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Provera da li pathname već ima locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Preusmeri ako nema locale, ali preskoči fajlove u public i api
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // Izuzeci za statičke fajlove i API
    if (
      pathname.includes('.') || 
      pathname.startsWith('/api/') ||
      pathname.startsWith('/_next/')
    ) {
      return
    }

    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }
}

export const config = {
  // Matcher za sve rute osim statičkih fajlova i API-ja
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
