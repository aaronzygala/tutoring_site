"use client";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import booksImage from "@/assets/books.jpg";
import { IncentiveSection } from "@/components/landing-page-sections/company-incentives";
import { HowItWorks } from "@/components/landing-page-sections/how-it-works";
import { Testimonials } from "@/components/landing-page-sections/testimonials";
import { CTASection } from "@/components/landing-page-sections/cta-section";
import { PricingSection } from "@/components/landing-page-sections/pricing-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Image
        src={booksImage}
        alt="Bookcase Image"
        className="absolute top-0 w-full h-full object-cover z-0"
        priority
        quality={50}
      />
      <div className="relative backdrop-blur-0 bg-gradient-to-b from-background to-transparent min-h-screen overflow-hidden z-10">
        <div className="flex flex-col items-left lg:px-44 pt-4">
          <div className="mt-80">
            <Card className="border-none bg-transparent shadow-none">
              <div className="flex flex-col items-left">
                <CardHeader>
                  <CardTitle className="text-3xl lg:text-7xl">
                    <span className="text-primary hover:italic">SAT</span>, 
                    <span className="text-primary hover:italic"> ACT </span>
                    & <span className="text-primary hover:italic"> CLT</span> Prep
                  </CardTitle>
                  <CardDescription className="text-xl lg:text-4xl">
                    Prepare for your future.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="bg-primary text-md py-4 animate-button-pulse">
                    Get started today
                  </Button>
                  <Button className="text-foreground hover:text-foreground hover:bg-transparent hover:underline" variant="ghost">
                    See more details
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <IncentiveSection />
      <Separator className="bg-primary h-1 w-[80%] ml-auto mr-auto" />
      <HowItWorks />
      <Separator className="bg-primary h-1 w-[80%] ml-auto mr-auto" />
      <Testimonials />
      <Separator className="bg-primary h-1 w-[80%] ml-auto mr-auto" />
      <PricingSection />
      <Separator className="bg-primary h-1 w-[80%] ml-auto mr-auto" />
      <CTASection />
    </main>
  );
}
