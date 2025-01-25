"use client";

import * as React from "react";
import { useState } from "react";
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";
import { usePathname } from "next/navigation";
import AxiomLogo from "@/assets/axiom_header_logo.png";
import Image from "next/image";

export function MobileNavbar() {
  const currentPath = usePathname();
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="fixed top-0 px-4 lg:px-44 pt-4 z-50 w-screen bg-black">
      <div className="pb-3 items-center text-sm flex lg:flex-row">
      <Link
          className="text-white flex place-items-center text-2xl lg:pointer-events-auto lg:p-0"
          href="/"
        >
          <Image src={AxiomLogo} alt="Axiom Test Prep Logo" width={200}/>
        </Link>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="ml-auto text-white">
              <Icons.alignJustify size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side={"right"} className="w-[200px] bg-foreground text-white">
            <SheetHeader>
              <SheetTitle className="font-bold text-center text-white">Directory</SheetTitle>
              <Separator />
            </SheetHeader>
            <div className="flex flex-col mt-2 ">
              <Link href="/about-us" legacyBehavior passHref>
                <Button
                  variant="ghost"
                  className={
                    currentPath === "/about-us"
                      ? "bg-primary/30 mr-auto"
                      : "bg-transparent mr-auto"
                  }
                  onClick={() => setSheetOpen(false)}
                >
                  <Icons.usersRound
                    strokeWidth={0.8}
                    size={16}
                    className="mr-2"
                  />
                  About Us
                </Button>
              </Link>
              <Link href="/exams" legacyBehavior passHref>
                <Button
                  variant="ghost"
                  className={
                    currentPath === "/exams"
                      ? "bg-primary/30 mr-auto"
                      : "bg-transparent mr-auto"
                  }
                  onClick={() => setSheetOpen(false)}
                >
                  <Icons.notebook
                    strokeWidth={0.8}
                    size={16}
                    className="mr-2"
                  />
                  Exams
                </Button>
              </Link>
              <Link href="/tutoring" legacyBehavior passHref>
                <Button
                  variant="ghost"
                  className={
                    currentPath === "/tutoring"
                      ? "bg-primary/30 mr-auto"
                      : "bg-transparent mr-auto"
                  }
                  onClick={() => setSheetOpen(false)}
                >
                  <Icons.calendarDays
                    strokeWidth={0.8}
                    size={16}
                    className="mr-2"
                  />
                  Tutoring
                </Button>
              </Link>
              <Link href="/contact-us" legacyBehavior passHref>
                <Button
                  variant="ghost"
                  className={
                    currentPath === "/contact-us"
                      ? "bg-primary/30 mr-auto"
                      : "bg-transparent mr-auto"
                  }
                  onClick={() => setSheetOpen(false)}
                >
                  <Icons.send strokeWidth={0.8} size={16} className="mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
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
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
