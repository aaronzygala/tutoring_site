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
          <SheetContent side={"right"} className="w-[200px] bg-foreground text-white border-none">
            <div className="flex flex-col mt-36 gap-8">
              <SheetButton name={"About Us"} path={"/about-us"} currentPath={currentPath} onClickFunction={() => setSheetOpen(false)}/>
              <SheetButton name={"Exams"} path={"/exams"} currentPath={currentPath} onClickFunction={() => setSheetOpen(false)}/>
              <SheetButton name={"Tutoring"} path={"/tutoring"} currentPath={currentPath} onClickFunction={() => setSheetOpen(false)}/>
              <SheetButton name={"Contact Us"} path={"/contact-us"} currentPath={currentPath} onClickFunction={() => setSheetOpen(false)}/>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

function SheetButton ({name, path, currentPath, onClickFunction} : {name: string, path: string, currentPath: string}){
  return (
          <Link href={path} legacyBehavior passHref>
            <Button
              variant="ghost"
              className={`text-2xl ml-auto mr-auto font-thin
                ${currentPath === path
                  ? "text-accent/30 mr-auto"
                  : "bg-transparent mr-auto"}`
              }
              onClick={onClickFunction}
            >
              {name}
            </Button>
          </Link>
    );
}
