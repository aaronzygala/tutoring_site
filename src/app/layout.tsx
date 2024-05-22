import "@/app/globals.css"
import { Poppins as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Home from './page'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import AOSProvider from "@/components/aos-provider"

const fontSans = FontSans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
})

export default function RootLayout({ }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
            <div>
              <Home/>
            </div>
            <Toaster />
            </ThemeProvider>
        </body>
      </AOSProvider>
    </html>
  )
}
