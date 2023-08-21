import '../scss/styles.scss';
import ThemeProvider from '@/context/theme-provider';
import ThemeScript from '@/context/theme-script';
import PreloadLinks from '@/components/SEO/preload-links';
import SeoMetadata from '@/components/SEO/seo-metadata';
import Header from '@/components/organism/header/header';

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="es" data-theme="light" suppressHydrationWarning>
      <head>
        <PreloadLinks />
        <SeoMetadata />
        <ThemeScript />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
