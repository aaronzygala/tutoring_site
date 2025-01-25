"use client"

import { DesktopNavbar } from "@/components/navigation/desktop-nav";
import { MobileNavbar } from "@/components/navigation/mobile-nav";
import { useMediaQuery } from "@/lib/useMediaQuery";


export function Navbar() {
  const isMobile: boolean = useMediaQuery("(max-width: 1024px)");
  return (
    <div>
        {isMobile ? <MobileNavbar/> : <DesktopNavbar/>}
    </div>
  );
}
