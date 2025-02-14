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
    <div className="fixed top-0 px-4 lg:px-44 pt-4 z-50 w-full bg-background">
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
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    currentPath === "/about"
                      ? "bg-accent mr-auto"
                      : "bg-transparent mr-auto",
                    navigationMenuTriggerStyle(),
                  )}
                >
                  <span className="text-white">About Us</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <Separator orientation="vertical" className="h-6 bg-muted-foreground" />
            {/* <NavigationMenuItem>
                <NavigationMenuTrigger                  
                  className={cn(
                    currentPath === "/exams"
                      ? "bg-accent mr-auto"
                      : "bg-transparent mr-auto text-white",
                    navigationMenuTriggerStyle(),
                  )}>
                    <Link href="/exams" className="text-white">Exams</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[100px] gap-3 p-4 bg-black text-white text-center">
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
            <Separator orientation="vertical" className="h-6 bg-muted-foreground" /> */}
            {/* <NavigationMenuItem>
              <Link href="/tutoring" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    currentPath === "/tutoring"
                      ? "bg-accent mr-auto"
                      : "bg-transparent mr-auto",
                    navigationMenuTriggerStyle(),
                  )}
                >
                  <span className="text-white">Tutoring Programs</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <Separator orientation="vertical" className="h-6 bg-muted-foreground" /> */}
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior>
                <NavigationMenuLink
                  className={cn(
                    currentPath === "/contact"
                      ? "bg-accent mr-auto cursor-pointer"
                      : "bg-transparent mr-auto cursor-pointer",
                    navigationMenuTriggerStyle(),
                  )}
                >
                  <span className="text-white">Contact Us</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* <Separator className="" /> */}
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-900 hover:text-white",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"