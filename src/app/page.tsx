import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import museumImage from "@/assets/museum copy.jpg";
import React from "react";
import { IncentiveSection } from "@/components/landing-page-sections/company-incentives";
import { HowItWorks } from "@/components/landing-page-sections/how-it-works";
import { CTASection } from "@/components/landing-page-sections/cta-section";
import { PricingSection } from "@/components/landing-page-sections/pricing-section";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

 
export const metadata: Metadata = {
  title: "Axiom Test Prep - Private Tutoring for SAT, ACT, and CLT",
  description:
    "Achieve your academic goals with Axiom Test Prep. Expert tutoring services for standardized tests, \
    with personalized strategies to maximize your scores.",
  keywords: ["SAT", "ACT", "CLT", "prep", "standardized tests", "tutor", "tutoring", "study", "Axiom", "test prep", "private tutor", "private tutoring"],
  openGraph: {
    url: "https://www.axiomtestprep.com",
    type: "website",
    title: "Axiom Test Prep - Private Tutoring for SAT, ACT, and CLT",
    description:
      "Achieve your academic goals with Axiom Test Prep. Expert tutoring services for standardized tests, \
      with personalized strategies to maximize your scores.",
    images: [
      {
        url: "https://www.axiomtestprep.com/thumbnails/landing.png",
        width: 1200,
        height: 630,
        alt: "Axiom Test Page Landing Page"
      }
    ]
  },
  alternates: {
    canonical: "https://www.axiomtestprep.com"
  }
};

export default function Home() {
  return (
    <div className="relative ">
      <div className="relative bg-black h-screen">
        <Image src={museumImage} alt={"Header image for landing page, depicting a lavish museum"} className="absolute top-0 z-0 h-screen object-none"/>
        <div className="relative backdrop-blur-0 bg-gradient-to-b from-black z-10 h-screen">
          <div className="flex flex-col items-left lg:px-44 pt-4">
            <div className="relative top-96">
              <Card className="border-none bg-transparent shadow-none">
                <div className="flex flex-col items-left">
                  <CardHeader>
                    <h1 className="text-4xl lg:text-7xl text-white font-bold">
                          <Link href={"/exams#DSAT"}><span className="text-primary lg:hover:italic lg:hover:underline">SAT</span></Link>,
                          {" "}<Link href={"/exams#ACT"}><span className="text-primary lg:hover:italic lg:hover:underline">ACT</span></Link>{" "}
                          &{"  "}<Link href={"/exams#CLT"}><span className="text-primary lg:hover:italic lg:hover:underline">CLT</span></Link>{" "}Prep
                    </h1>
                    <CardDescription className="text-xl lg:text-4xl text-white">
                      Prepare for your future.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  <Link href="/tutoring">
                    <Button className="bg-primary text-md py-4 animate-button-pulse">
                        Get started today
                    </Button>
                  </Link>
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
      {/* {!isMobile ? (
        <>
          <Testimonials />
          <Separator className="bg-primary h-1 w-[80%] ml-auto mr-auto" />
        </>
      ) : (
        <></>
      )} */}
      <PricingSection />
      <Separator className="bg-primary h-1 w-[80%] ml-auto mr-auto" />
      <CTASection />
    </div>
  );
}
