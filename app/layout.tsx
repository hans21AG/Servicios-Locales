import './globals.css'
import Script from 'next/script'
import NavbarCercaPro from '@/components/NavbarCercaPro'

export const metadata = {
  metadataBase: new URL('https://servicios-locales.vercel.app/'),
  title: {
    default: 'CercaPro - Tu profesional de confianza, a la vuelta de la esquina',
    template: '%s | CercaPro'
  },
  description: 'Encuentra fontaneros, electricistas, cerrajeros y manitas en Ciudad Real. Contacto directo, sin comisiones. 28 profesionales verificados.',
  icons: {
    icon: '/cercapro-icon.png',
    shortcut: '/cercapro-icon.png',
    apple: '/cercapro-icon.png',
  },
  openGraph: {
    title: 'CercaPro - Profesionales Ciudad Real',
    description: 'Fontaneros 24h, electricistas urgentes, cerrajeros y manitas. Sin comisiones.',
    url: 'https://servicios-locales.vercel.app/',
    siteName: 'CercaPro',
    images: [
      {
        url: 'https://servicios-locales.vercel.app/cercapro-icon.png',
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
    images: ['https://servicios-locales.vercel.app/cercapro-icon.png']
  }
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
