import "@/app/globals.css";
import { Montserrat as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import AOSProvider from "@/components/aos-provider";
import React from "react";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/landing-page-sections/footer";
import Head from "next/head";
import type { Metadata, Viewport } from 'next'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "@/components/ui/sonner"

const fontSans = FontSans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
});
 
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff"
};
 
export const metadata: Metadata = {
  metadataBase: new URL("https://www.axiomtestprep.com"),
  description: "Achieve your academic goals with Axiom Test Prep. Expert tutoring services for standardized tests, \
  with personalized strategies to maximize your scores.",
  openGraph: {
    siteName: "Axiom Test Prep - Private Tutoring for SAT, ACT, and CLT",
    type: "website",
    locale: "en_US"
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  alternates: {
    types: {
      "application/rss+xml": "https://www.axiomtestprep.com/rss.xml"
    }
  },
  applicationName: "Axiom Test Prep",
  appleWebApp: {
    title: "Axiom Test Prep - Private Tutoring for SAT, ACT, and CLT",
    statusBarStyle: "default",
    capable: true
  },
  verification: {
    google: "YOUR_DATA",
    yandex: ["YOUR_DATA"],
    other: {
      "msvalidate.01": ["YOUR_DATA"],
      "facebook-domain-verification": ["YOUR_DATA"]
    }
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      }
      // add favicon-32x32.png, favicon-96x96.png, android-chrome-192x192.png
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      }
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      },
      // add apple-icon-72x72.png, apple-icon-76x76.png, apple-icon-114x114.png, apple-icon-120x120.png, apple-icon-144x144.png, apple-icon-152x152.png, apple-icon-180x180.png
    ]
  }
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const isMobile = useMediaQuery("(max-width: 1024px)");
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <AOSProvider>
        <Head>
          <title>Axiom Test Prep</title>
          <link rel="preload" href="/assets/museum.jpg" as="image" />
          <link rel="preload" href="/assets/museum2.jpg" as="image" />
          <link rel="preload" href="/assets/library.jpg" as="image" />
          <link rel="preload" href="/assets/aaron.jpg" as="image" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        </Head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
            fontSans.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            {children}
            <Footer />
          </ThemeProvider>
          <Analytics/>
          <SpeedInsights/>
          <Toaster/>
        </body>
      </AOSProvider>
    </html>
  );
}
