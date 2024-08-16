import "@/app/globals.css";
import { Poppins as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import AOSProvider from "@/components/aos-provider";
import React from "react";
import { DesktopNavbar } from "@/components/navigation/desktop-nav";
// import { MobileNavbar } from "@/components/navigation/mobile-nav";
import { Footer } from "@/components/landing-page-sections/footer";
import Head from "next/head";
import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"

const fontSans = FontSans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
});
 
export const metadata: Metadata = {
  title: 'Axiom Test Prep',
  description: 'Achieve your academic goals with Axiom Test Prep. Expert tutoring services for standardized tests, including SAT, ACT, and CLT. Personalized strategies to maximize your scores and succeed.',
}
 
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
          <link rel="preload" href="/assets/museum.jpg" as="image" />
          <link rel="preload" href="/assets/museum2.jpg" as="image" />
          <link rel="preload" href="/assets/library.jpg" as="image" />
          <link rel="preload" href="/assets/aaron.jpg" as="image" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        </Head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {<DesktopNavbar />}
            {children}
            <Footer />
          </ThemeProvider>
          <Analytics/>
        </body>
      </AOSProvider>
    </html>
  );
}
