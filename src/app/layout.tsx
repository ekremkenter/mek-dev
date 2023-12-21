import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { cn } from "@/util/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Banner from "@/components/banner";
import config from "@/util/config";
import { GoogleAnalytics } from "@/components/analytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const { title, description, url } = config;
export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(url),
  twitter: {
    site: "@ekremkenter",
    card: "summary",
    creator: "@ekremkenter",
    title,
    description,
  },
  openGraph: {
    type: "website",
    title,
    description,
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth focus:scroll-auto"
    >
      <head>
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
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-gradient-to-b from-neutral-100 to-indigo-100 dark:from-neutral-900 dark:to-indigo-950 dark:bg-neutral-900",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Banner />
          <Navbar />
          <main className="container mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            {children}
          </main>
        </ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
