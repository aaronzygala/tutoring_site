import Image from "next/image";
import { NavigationMenuDemo } from "@/components/top-nav";
import {Separator} from "@/components/ui/separator"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Label} from "@/components/ui/label"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import booksImage from "@/assets/books.jpg"
import { CookieToast } from "@/components/cookie-toast";
import { Facebook, Twitter, Instagram } from 'lucide-react';


export function Footer() {
  return (
    <main>
      <div className="min-w-screen">

      <div className="flex flex-row gap-12 items-left px-12 py-6">
        <div>
            <Button className="hover:bg-transparent hover:text-muted-foreground" variant="ghost">Privacy Policy</Button>
            <Button className="hover:bg-transparent hover:text-muted-foreground" variant="ghost">Terms of Service</Button>
            <Button className="hover:bg-transparent hover:text-muted-foreground" variant="ghost">Responsible Disclosure</Button>
        </div>
        <div className="text-xs text-muted-foreground mt-auto mb-auto">
            &copy;2024 COMPANY NAME. All rights reserved.
        </div>
        <div className="ml-auto flex flex-row">
          <div className="mr-12 text-center">
            <div className="text-xs text-muted-foreground">
                +1 (555)-555-5555
            </div>
            <div className="text-xs text-muted-foreground">
                COMPANY@EMAIL.COM
            </div>
          </div>

          <div>
              <Button className="hover:bg-transparent hover:text-muted-foreground" variant="ghost"><Facebook size={18} /></Button>
              <Button className="hover:bg-transparent hover:text-muted-foreground" variant="ghost"><Twitter size={18} /></Button>
              <Button className="hover:bg-transparent hover:text-muted-foreground" variant="ghost"><Instagram size={18} /></Button>
          </div>
        </div>

      </div>
      </div>

    </main>
  );
}
