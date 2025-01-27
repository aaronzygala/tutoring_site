import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import libraryImage from "@/assets/library.jpg";
import aaronImage from "@/assets/aaron.jpg";
import tempImage from "@/assets/axiom_logo.png";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Axiom Test Prep",
  description:
    "Axiom Test Prep is comprised of a small team of dedicated educators. Our mission is to help our students achieve their academic goals. Learn more about our tutors here.",
  keywords: ["SAT", "ACT", "CLT", "prep", "about", "Axiom", "about us", "tutors", "private tutoring", "Axiom tutors", "team members"],
  openGraph: {
    url: "https://www.axiomtestprep.com/about",
    type: "website",
    title: "About Us - Axiom Test Prep",
    description:
      "Axiom Test Prep is comprised of a small team of dedicated educators. Our mission is to help our students achieve their academic goals. Learn more about our tutors here.",
    images: [
      {
        url: "https://www.axiomtestprep.com/thumbnails/about.png",
        width: 1200,
        height: 630,
        alt: "Axiom Test Page Tutoring Page"
      }
    ]
  },
  alternates: {
    canonical: "https://www.axiomtestprep.com/about"
  }
};

export default function ContactUs() {

  return (
    <main className="">
      <div className="relative min-h-screen bg-black">
      <Image src={libraryImage} alt={"Header image for About Us page, depicting a lavish museum"} 
      className="absolute h-screen object-none"/>
        <div className="relative backdrop-blur-0 bg-gradient-to-b from-black z-10 flex flex-col items-left lg:px-44 pt-4">
          <div className="mt-24">
            <Card className="border-none bg-transparent shadow-none">
              <div className="flex flex-col items-left">
                <h1 className='px-8 mb-4'>
                  <div className="text-4xl xl:text-7xl font-extrabold font-sans">
                    <span className="text-primary">
                      Meet the Team
                    </span>
                  </div>
                  <span className="text-lg text-foreground">
                    We are a small team of dedicated academic enthusiasts.
                  </span>
                </h1>
                <CardContent className="flex flex-col lg:flex-row gap-12 w-full mt-6 justify-evenly">
                  <InstructorCard
                    imageSrc={tempImage}
                    imageAlt={"A headshot of the instructor"}
                    instructorName={"Natalia Mercado"}
                    instructorRole={
                      "Reading & Writing Tutor, Math Tutor"
                    }
                    instructorDescription={
                      ["B.A. Anthropology from the University of Florida"]
                    }
                  />
                  <InstructorCard
                    imageSrc={aaronImage}
                    imageAlt={"A headshot of the instructor"}
                    instructorName={"Aaron Zygala"}
                    instructorRole={
                      "Math Tutor"
                    }
                    instructorDescription={
                      ["M.S. Computer Science from the University of Florida", 
                      "B.S. Computer Science from the University of Florida"]
                    }
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

function InstructorCard({
  imageSrc,
  imageAlt,
  instructorName,
  instructorRole,
  instructorDescription,
}: {
  imageSrc: StaticImageData;
  imageAlt: string;
  instructorName: string;
  instructorRole: string;
  instructorDescription: string[];
}) {
  return (
    <Card className="w-full lg:w-[50%] bg-black border-none text-white">
      <CardHeader className="">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="h-96 object-contain ml-auto mr-auto py-6"
        />
        <CardTitle>{instructorName}</CardTitle>
        <CardDescription className="text-lg">{instructorRole}</CardDescription>
      </CardHeader>
      <CardContent className="justify-left">{instructorDescription.map((description, index) => (
        <div key={index}>
          {description}
        </div>
      ))}</CardContent>
    </Card>
  );
}
