import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

const title = 'Mustafa Ekrem KENTER';
const description =
  "Software Craftsman - Mustafa Ekrem KENTER's personal web site";
const trackingID = 'UA-37973458-7';

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://mek.dev'),
  twitter: {
    site: '@ekremkenter',
    card: 'summary',
    creator: '@ekremkenter',
    title,
    description,
  },
  openGraph: {
    type: 'website',
    title,
    description,
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.className} antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900`}
      >
        <div className="container mx-auto">{children}</div>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', '${trackingID}', 'auto');
          ga('send', 'pageview');
        `}
        </Script>
      </body>
    </html>
  );
}
