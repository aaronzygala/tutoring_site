"use client"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import museumImage from "@/assets/museum.jpg";
import React, { useState, useEffect } from "react";

export default function ContactUs() {
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

  const parallaxStyle = {
    backgroundImage: `url(${museumImage.src})`,
    backgroundPosition: `center ${scrollY * 0.4}px`,
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
                    <span className="text-primary hover:italic">Our Tutoring Programs</span>
                  </div>
                  <span className="text-lg text-foreground">Feel free to leave any inquiries below, or give us a call to speak with our helpful sales team.</span>                   
                </CardHeader>
              <CardContent className="flex flex-col lg:flex-row gap-12">  
                  </CardContent>
              </div>
            </Card>
          </div>
        </div>
        </div>
    </main>
  );
}
