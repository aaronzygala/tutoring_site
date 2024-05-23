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
    Separator
} from "@/components/ui/separator"

export function DesktopNavbar() {
  return (
    <div className="fixed top-0 px-4 lg:px-44 pt-4 bg-background z-50 w-full">
      <div className="max-w-8xl pb-3 items-center justify-between text-sm lg:flex">
        <Link
          className="text-white flex place-items-center text-2xl lg:pointer-events-auto lg:p-0"
          href="/"
        >
          Axiom Test Prep
        </Link>
        <NavigationMenu className="lg:ml-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
                <Link href="/about-us" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        About Us
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <Separator orientation="vertical" className="h-6 bg-accent"/>
            <NavigationMenuItem>
              
             <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
             <NavigationMenuContent>
                <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[200px] justify-center">
                  <ListItem href="/programs/groupSAT" title="Group SAT"/>
                  <ListItem href="/programs/groupCLT" title="Group CLT"/>
                  <ListItem href="/programs/privateTutor" title="Private Tutoring"/>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <Separator orientation="vertical" className="h-6 bg-accent"/>
            <NavigationMenuItem>
                <Link href="/scheduling" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Schedule a Consultation
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <Separator orientation="vertical" className="h-6 bg-accent"/>
            <NavigationMenuItem>
                <Link href="/contact-us" legacyBehavior>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact Us
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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