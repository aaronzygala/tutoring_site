"use client";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import museumImage from "@/assets/museum.jpg";
import React, { useState, useEffect } from "react";
import { IncentiveSection } from "@/components/landing-page-sections/company-incentives";
import { HowItWorks } from "@/components/landing-page-sections/how-it-works";
import { Testimonials } from "@/components/landing-page-sections/testimonials";
import { CTASection } from "@/components/landing-page-sections/cta-section";
import { PricingSection } from "@/components/landing-page-sections/pricing-section";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyle = {
    backgroundImage: `url(${museumImage.src})`,
    backgroundPosition: `center ${scrollY * 0.4}px`,
  };

  return (
    <main className="relative min-h-screen">
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={parallaxStyle}
      >
        <div className="backdrop-blur-0 bg-gradient-to-b from-background to-transparent min-h-screen overflow-hidden">
          <div className="flex flex-col items-left lg:px-44 pt-4">
            <div className="mt-[30%]">
              <Card className="border-none bg-transparent shadow-none">
                <div className="flex flex-col items-left">
                  <CardHeader>
                    <CardTitle className="text-4xl lg:text-7xl">
                      <span className="text-primary hover:italic">SAT</span>, 
                      <span className="text-primary hover:italic"> ACT </span>
                      & <span className="text-primary hover:italic"> CLT</span> Prep
                    </CardTitle>
                    <CardDescription className="text-xl lg:text-4xl text-white">
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
      </div>
      <IncentiveSection />
      <Separator className="bg-primary h-1 w-[80%] ml-auto mr-auto" />
      <HowItWorks />
      <Separator className="bg-primary h-1 w-[80%] ml-auto mr-auto" />
      {!isMobile ? 
          <>
            <Testimonials />
            <Separator className="bg-primary h-1 w-[80%] ml-auto mr-auto" />
          </>
          : <></>
      }
      <PricingSection />
      <Separator className="bg-primary h-1 w-[80%] ml-auto mr-auto" />
      <CTASection />
    </main>
  );
}
