import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import NavbarCercaPro from '@/components/NavbarCercaPro'
import FooterCercaPro from '@/components/FooterCercaPro'

export const metadata: Metadata = {
  title: 'CercaPro - Profesionales de confianza en Ciudad Real',
  description: 'Encuentra fontaneros, electricistas, cerrajeros y manitas verificados en Ciudad Real. Contacta directamente, sin intermediarios.',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/cercapro-icon.png" type="image/png" />
      </head>
      <body>
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { page_path: window.location.pathname });
            `}</Script>
          </>
        )}
        <NavbarCercaPro />
        <main>{children}</main>
        <FooterCercaPro />
      </body>
    </html>
  )
}
