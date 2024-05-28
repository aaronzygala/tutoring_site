"use client"
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
import { Icons } from "@/components/icons";
import { Textarea } from "@/components/ui/textarea"
import museumImage from "@/assets/museum2.jpg";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@/lib/utils"

export default function ContactUs() {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyle = !isMobile ? {
    backgroundImage: `url(${museumImage.src})`,
    backgroundPosition: `center ${scrollY * 0.5}px`,
  } : {
    backgroundImage: `url(${museumImage.src})`,
    backgroundPosition: 'center center', // Static background position for mobile
  };

  return (
    <main>
        <div
          className="relative min-h-screen bg-cover bg-center"
          style={parallaxStyle}
        >

        <div className="relative backdrop-blur-0 bg-gradient-to-b from-background to-transparent overflow-hidden z-10 flex flex-col items-left lg:px-44 pt-4">
          <div className="mt-24">
            <Card className="border-none bg-transparent shadow-none">
              <div className="flex flex-col items-left">
              <CardHeader>
                  <div className="text-7xl text-white font-extrabold font-sans">
                    <span className="text-primary lg:hover:italic">Get In Touch</span>
                  </div>
                  <span className="text-lg text-foreground">Feel free to leave any inquiries below, or give us a call to speak with our helpful sales team.</span>                   
                </CardHeader>
              <CardContent className="flex flex-col lg:flex-row gap-12">
                    <Card className="lg:w-[900px]">
                      <CardHeader >
                        <CardTitle>
                          Contact Details
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul>
                          <li className="flex my-4">
                            <span className="bg-yellow-400 p-3 rounded-full"><Icons.phone className="text-black"/></span>
                            <span className="w-96 mt-auto mb-auto ml-4">
                              +1 (555)-555-5555
                            </span>
                          </li>
                        <li className="flex my-4">
                          <span className="bg-yellow-400 p-3 rounded-full"><Icons.mail className="text-black"/></span>
                            <span className="w-96 mt-auto mb-auto ml-4">
                              contact@axiom.com
                            </span>                          
                        </li>
                          <li className="flex my-4">
                          <span className="bg-yellow-400 p-3 rounded-full"><Icons.mapPin className="text-black"/></span>
                            <span className="w-96 mt-auto mb-auto ml-4">
                              1234, Address Lane, City, State United States, Zip Code
                            </span>                          
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="w-full">
                      <CardHeader className="text-2xl">
                        <CardTitle>Send us a Message</CardTitle>
                        <CardDescription>We&apos;ll get back to you as soon as we can.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form>
                          <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="name">Enter your Name</Label>
                              <Input id="name" placeholder="Full Name" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="name">Enter your Email</Label>
                              <Input id="name" placeholder="email@address.com" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="framework">Enter your Message</Label>
                              <Textarea/>
                            </div>
                          </div>
                        </form>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Button>Send</Button>
                      </CardFooter>
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
