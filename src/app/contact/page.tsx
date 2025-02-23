import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Icons } from "@/components/icons";
import museumImage from "@/assets/museum2.jpg";
import Image from "next/image"
import { ContactUsForm } from '@/components/forms/contact-us-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - Axiom Test Prep",
  description:
    "Have any questions about the private tutoring programs that Axiom Test Prep offers? Please contact us using our contact form, or directly with our phone number and email.",
  keywords: ["SAT", "ACT", "CLT", "prep", "contact", "Axiom", "contact information", "email", "private tutoring", "Axiom contact", "phone number"],
  openGraph: {
    url: "https://www.axiomtestprep.com/contact",
    type: "website",
    title: "Contact Us - Axiom Test Prep",
    description:
      "Have any questions about the private tutoring programs that Axiom Test Prep offers? Please contact us using our contact form, or directly with our phone number and email.",
    images: [
      {
        url: "https://www.axiomtestprep.com/thumbnails/contact.png",
        width: 1200,
        height: 630,
        alt: "Axiom Test Page Tutoring Page"
      }
    ]
  },
  alternates: {
    canonical: "https://www.axiomtestprep.com/contact"
  }
};

export default async function ContactUs() {
  return (
    <main>
      <div className="relative min-h-screen bg-cover bg-center bg-black">
        <Image 
          src={museumImage} 
          alt="Header image for landing page, depicting a lavish museum" 
          className="absolute top-0 z-0 h-screen object-none"
        />
        <div className="relative backdrop-blur-0 bg-gradient-to-b from-black overflow-hidden z-10 flex flex-col items-left lg:px-44 pt-4">
          <div className="mt-24">
            <Card className="border-none bg-transparent shadow-none">
              <div className="flex flex-col items-left">
                <h1 className='px-8 mb-4'>
                  <div className="text-4xl xl:text-7xl font-extrabold font-sans">
                    <span className="text-primary">
                      Get In Touch
                    </span>
                  </div>
                  <span className="text-md xl:text-lg text-foreground">
                    Feel free to leave any inquiries below, or give us a call directly.
                  </span>
                </h1>
                <CardContent className="flex flex-col xl:flex-row gap-12">
                <Card className="w-full bg-black border-none text-white">
                    <CardHeader className="text-2xl">
                      <CardTitle>Send us a Message</CardTitle>
                      <CardDescription>
                        We&apos;ll get back to you as soon as we can.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ContactUsForm/>
                    </CardContent>
                  </Card>
                  <Card className="bg-black border-none text-white">
                    <CardHeader>
                      <CardTitle>Contact Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul>
                        <li className="flex my-4">
                          <span className="bg-yellow-400 p-3 rounded-full">
                            <Icons.phone className="text-black" />
                          </span>
                          <span className="mt-auto mb-auto ml-4">
                            +1 (786)-474-6936
                          </span>
                        </li>
                        <li className="flex my-4">
                          <span className="bg-yellow-400 p-3 rounded-full">
                            <Icons.mail className="text-black" />
                          </span>
                          <span className="mt-auto mb-auto ml-4">
                            info@axiomtestprep.com
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}