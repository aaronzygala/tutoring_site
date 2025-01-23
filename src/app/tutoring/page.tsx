import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import museumImage from "@/assets/museum.jpg";
import Image from "next/image";

export default function ContactUs() {
  return (
    <main>
      <div className="relative min-h-screen bg-cover bg-center">
        <Image src={museumImage} alt={"Background image for tutoring page, depicting a lavishcxxcx museum"} className="absolute top-0 z-0 h-screen"/>
        <div className="relative backdrop-blur-0 bg-gradient-to-b from-foreground to-transparent overflow-hidden z-10 flex flex-col items-left lg:px-44 pt-4">
          <div className="mt-24">
            <Card className="border-none bg-transparent shadow-none">
              <div className="flex flex-col items-left">
                <CardHeader>
                  <div className="text-7xl text-white font-extrabold font-sans">
                    <span className="text-primary">
                      Our Tutoring Programs
                    </span>
                  </div>
                  <span className="text-lg text-foreground">
                    Feel free to leave any inquiries below, or give us a call to
                    speak with our helpful sales team.
                  </span>
                </CardHeader>
                <CardContent className="flex flex-col lg:flex-row gap-12"></CardContent>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
