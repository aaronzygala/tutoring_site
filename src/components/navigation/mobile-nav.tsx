"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose,
  } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Separator
} from "@/components/ui/separator"

export function MobileNavbar() {
  return (
    <div className="fixed top-0 px-4 lg:px-44 pt-4 bg-background z-50 min-w-full">
      <div className="lg:max-w-8xl pb-3 items-center justify-between text-sm lg:flex">
        <Link
          className="text-white flex place-items-center text-2xl lg:pointer-events-auto lg:p-0"
          href="/"
        >
          Axiom Test Prep
        </Link>
        <Sheet>
            <SheetTrigger asChild >
                <Button variant="outline" className="absolute right-0">Open</Button>
            </SheetTrigger>
            <SheetContent side={"left"} className="w-[250px]">
                <SheetHeader>
                    <SheetTitle>Directory</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-12">
                        <Button className="bg-accent">
                            <Link href="/scheduling" legacyBehavior passHref>
                                About Us
                            </Link>
                        </Button>
                        <Button>
                            <Link href="/programs" legacyBehavior passHref>
                                Programs
                            </Link>
                        </Button>                    
                        <Button>
                            <Link href="/scheduling" legacyBehavior passHref>
                                Schedule a Consultation
                            </Link>
                        </Button>
                        <Button>
                            <Link href="/contact-us" legacyBehavior passHref>
                                Contact Us
                            </Link>
                        </Button>
                </div>
            </SheetContent>
        </Sheet>
      </div>
    <Separator className=""/>
  </div>

  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"