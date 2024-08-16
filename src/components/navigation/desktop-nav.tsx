"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import Image from "next/image";
import AxiomLogo from "@/assets/axiom_header_logo.png";

const exams: { title: string; href: string; description: string }[] = [
  {
    title: "DSAT",
    href: "/exams#DSAT",
    description:
      "",
  },
  {
    title: "ACT",
    href: "/exams#ACT",
    description:
      "",
  },
  {
    title: "CLT",
    href: "/exams#CLT",
    description:
      "",
  },
]


export function DesktopNavbar() {
  const currentPath = usePathname();
  return (
    <div className="fixed top-0 px-4 lg:px-44 pt-4 bg-background z-50 w-full">
      <div className="max-w-8xl pb-3 items-center justify-between text-sm lg:flex">
        <Link
          className="text-white flex place-items-center text-2xl lg:pointer-events-auto lg:p-0"
          href="/"
        >
          <Image src={AxiomLogo} alt="Axiom Test Prep Logo" width={200}/>
        </Link>
        <NavigationMenu className="lg:ml-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/about-us" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    currentPath === "/about-us"
                      ? "bg-accent mr-auto"
                      : "bg-transparent mr-auto",
                    navigationMenuTriggerStyle(),
                  )}
                >
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <Separator orientation="vertical" className="h-6 bg-accent" />
            <NavigationMenuItem>
                <NavigationMenuTrigger                  
                  className={cn(
                    currentPath === "/exams"
                      ? "bg-accent mr-auto"
                      : "bg-transparent mr-auto",
                    navigationMenuTriggerStyle(),
                  )}><Link href="/exams">Exams</Link></NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[100px] gap-3 p-4">
                    {exams.map((exam) => (
                      <ListItem
                        key={exam.title}
                        title={exam.title}
                        href={exam.href}
                      >
                        {exam.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <Separator orientation="vertical" className="h-6 bg-accent" />
            <NavigationMenuItem>
              <Link href="/tutoring" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    currentPath === "/tutoring"
                      ? "bg-accent mr-auto"
                      : "bg-transparent mr-auto",
                    navigationMenuTriggerStyle(),
                  )}
                >
                  Tutoring Programs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <Separator orientation="vertical" className="h-6 bg-accent" />
            <NavigationMenuItem>
              <Link href="/contact-us" legacyBehavior>
                <NavigationMenuLink
                  className={cn(
                    currentPath === "/contact-us"
                      ? "bg-accent mr-auto cursor-pointer"
                      : "bg-transparent mr-auto cursor-pointer",
                    navigationMenuTriggerStyle(),
                  )}
                >
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Separator className="" />
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"