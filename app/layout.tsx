import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Servicios Locales - Encuentra Profesionales en Ciudad Real',
  description: 'Directorio de fontaneros, electricistas, cerrajeros y manitas en Ciudad Real',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="mwD5_jF9_myjX5T3q9n7xxeGQmPdAvaCFXiRXjyg_OU" />
        
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ELRB65F9RP"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ELRB65F9RP', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}