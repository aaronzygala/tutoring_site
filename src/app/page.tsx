"use client"
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
import {Footer} from "@/components/footer";
import { IncentiveSection } from "@/components/company-incentives";
import  {HowItWorks}  from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { PricingSection } from "@/components/pricing-section";

export default function Home() {
  return (
    <main className="overflow-clip">
        <Image
          src={booksImage}
          alt="Bookcase Image"
          className="z-0 absolute w-full h-full inset-0 object-cover"
        />
        <div className="backdrop-blur-0 bg-gradient-to-b from-gray-950 to-transparent min-h-screen">

        <div className="flex flex-col items-left z-10 px-44 pt-4">
          <div className="flex-row p-6">
            <div className="max-w-8xl pb-3 items-center justify-between text-sm lg:flex">
                <Link
                  className="text-white pointer-events-none flex place-items-center text-2xl lg:pointer-events-auto lg:p-0"
                  href="#"
                >
                  Axiom Test Prep
                </Link>
                <NavigationMenuDemo/>
            </div>
            <Separator className=""/>
          </div>
          <div className="mt-80">
            <Card className="border-none bg-transparent shadow-none">
              <div className="flex flex-col items-left">
              <CardHeader>
                  <div className="text-7xl text-white font-extrabold font-sans mb-12">
                    <span className="text-primary hover:italic">SAT</span>, 
                    <span className="text-primary hover:italic"> ACT </span>& <span className="text-primary hover:italic"> CLT</span> Prep
                    
                  </div>
                  <div className="text-4xl text-white font-thin font-sans">Prepare for your future.</div>
              </CardHeader>
              <CardContent>
                    <Button className="bg-primary text-md py-4 animate-button-pulse">Get started today</Button>
                    <Button className="text-foreground hover:text-foreground hover:bg-transparent hover:underline" variant="ghost">See more details</Button>
              </CardContent>
              <CardFooter>
              </CardFooter>
              </div>
            </Card>
          </div>
        </div>
        </div>
        <IncentiveSection/>
        <Separator className="bg-primary h-1 w-[80%] ml-auto mr-auto"/>
        <HowItWorks/>
        <Separator className="bg-primary h-1 w-[80%] ml-auto mr-auto"/>
        <Testimonials/>
        <Separator className="bg-primary h-1 w-[80%] ml-auto mr-auto"/>
        <PricingSection/>
        <Separator className="bg-primary h-1 w-[80%] ml-auto mr-auto"/>
        <CTASection/>
        <Footer/>
    </main>
  );
}
