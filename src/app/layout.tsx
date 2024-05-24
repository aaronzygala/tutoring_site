"use client"
import "@/app/globals.css"
import { Poppins as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Home from './page'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import AOSProvider from "@/components/aos-provider"
import React, { useState, useEffect } from "react";
import { DesktopNavbar } from "@/components/navigation/desktop-nav"
import { MobileNavbar } from "@/components/navigation/mobile-nav"
import { Footer } from "@/components/landing-page-sections/footer"

const fontSans = FontSans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
})

export default function RootLayout({children } :{ children:React.ReactNode}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <AOSProvider>
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable
            )}
          >
          <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
            
            {isMobile ? <MobileNavbar/> : <DesktopNavbar/>}
            {children}
            <Footer/>

            {/* <Toaster /> */}
            </ThemeProvider>
        </body>
      </AOSProvider>
    </html>
  )
}
