import './globals.css'
import Script from 'next/script'
import NavbarCercaPro from '@/components/NavbarCercaPro'

export const metadata = {
  metadataBase: new URL('https://cercapro.es/'), // ✅ Cambiado a tu dominio real
  title: {
    default: 'CercaPro - Tu profesional de confianza, a la vuelta de la esquina',
    template: '%s | CercaPro'
  },
  description: 'Encuentra fontaneros, electricistas, cerrajeros y manitas en Ciudad Real. Contacto directo, sin comisiones. 28 profesionales verificados.',
  icons: {
    // ✅ FAVICON COMPLETO - reemplaza cercapro-icon.png por el set completo
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'CercaPro - Profesionales Ciudad Real',
    description: 'Fontaneros 24h, electricistas urgentes, cerrajeros y manitas. Sin comisiones.',
    url: 'https://cercapro.es/', // ✅ Cambiado a tu dominio real
    siteName: 'CercaPro',
    images: [
      {
        url: 'https://cercapro.es/cercapro-icon.png', // ✅ Cambiado a tu dominio real
        width: 800,
        height: 800,
        alt: 'CercaPro Logo'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://cercapro.es/cercapro-icon.png'] // ✅ Cambiado a tu dominio real
  },
  // ✅ PWA Manifest (Android homescreen)
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="es">
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="mwD5_jF9_myjX5T3q9n7xxeGQmPdAvaCFXiRXjyg_OU" />
        
        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        <NavbarCercaPro />
        {children}
      </body>
    </html>
  )
}
