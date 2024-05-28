"use client"
import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import tempImage from "@/app/favicon.ico";
import libraryImage from "@/assets/library.jpg";
import aaronImage from "@/assets/aaron.jpg";
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
    backgroundImage: `url(${libraryImage.src})`,
    backgroundPosition: `center ${scrollY * 0.4}px`,
  };
  return (
    <main className="overflow-clip">
        <div
          className="relative min-h-screen bg-cover bg-center"
          style={parallaxStyle}
        >
        <div className="relative backdrop-blur-0 bg-gradient-to-b from-background to-transparent min-h-screen overflow-hidden z-10 flex flex-col items-left lg:px-44 pt-4">
          <div className="mt-24">
            <Card className="border-none bg-transparent shadow-none">
              <div className="flex flex-col items-left">
              <CardHeader>
                  <div className="text-7xl text-white font-extrabold font-sans">
                    <span className="text-primary hover:italic">Meet the Team</span>
                  </div>
                  <span className="text-lg text-foreground">We are a small team of dedicated math-enthusiasts.</span>                   
                </CardHeader>
              <CardContent className="flex flex-col lg:flex-row gap-12 w-full mt-6 justify-evenly">
                  <InstructorCard
                    imageSrc={tempImage}
                    imageAlt={"A headshot of the instructor"}
                    instructorName={"Natalia Mercado"}
                    instructorBlurb={"Short blurb on the instructor's qualifications, etc."}
                    instructorDescription={"Longer explanation of why the instructor tutors, any fun facts, etc. Maybe LinkedIn link?"}
                    />
                <InstructorCard
                    imageSrc={aaronImage}
                    imageAlt={"A headshot of the instructor"}
                    instructorName={"Aaron Zygala"}
                    instructorBlurb={"Short blurb on the instructor's qualifications, etc."}
                    instructorDescription={"Longer explanation of why the instructor tutors, any fun facts, etc. Maybe LinkedIn link?"}
                    />
       
                  </CardContent>
              </div>
            </Card>
          </div>
          </div>
          </div>
    </main>
  );
}


function InstructorCard ({imageSrc, imageAlt, instructorName, instructorBlurb, instructorDescription} : {imageSrc:StaticImageData, imageAlt: string, instructorName:string, instructorBlurb: string, instructorDescription: string}) {
    return(
        <Card className="w-full lg:w-[50%]">
            <CardHeader>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-[60%] object-fit ml-auto mr-auto py-6"
                />
            <CardTitle>
                {instructorName}
            </CardTitle>
            <CardDescription>
                {instructorBlurb}
            </CardDescription>
            </CardHeader>
            <CardContent>

            {instructorDescription}
            </CardContent>
        </Card>  

    )
}
